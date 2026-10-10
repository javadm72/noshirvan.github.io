/* =========================================================
   ADMIN PANEL — نسخه کامل با پشتیبانی از همه فیلدها
   ========================================================= */
(function(){
  "use strict";

  /* ---------- تنظیمات ---------- */
  const ADMIN_PASSWORD = "admin1234";   // ⭐ رمز خودت اینجا
  const SESSION_KEY = "shajareh_admin_session";
  const SESSION_TTL = 1000 * 60 * 60 * 6;

  let isLoggedIn = false;
  let currentTab = "persons";
  let editingId = null;
  let editingMode = null;
  let parentForRelation = null;
  let galleryBuffer = [];

  const $ = id => document.getElementById(id);

  function getApp(){ return window.TreeApp || null; }
  function getPeople(){ const a = getApp(); return a ? a.people : {}; }
  function getMarriages(){ const a = getApp(); return a ? a.marriages : []; }
  function getRootIds(){ const a = getApp(); return a ? a.rootPersonIds : []; }
  function getPersonKey(id){
    const a = getApp();
    if (a && a.personKey) return a.personKey[id] || "";
    return "";
  }

  function newId(prefix){
    return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }
  function escapeHtml(s){
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[c]));
  }

  /* ---------- Toast ---------- */
  function toast(msg, type = "info"){
    let el = document.getElementById("adminToast");
    if (!el){
      el = document.createElement("div");
      el.id = "adminToast";
      el.className = "admin-toast";
      document.body.appendChild(el);
    }
    el.className = "admin-toast " + type;
    el.textContent = msg;
    void el.offsetWidth;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 3000);
  }

  /* ---------- Session ---------- */
  function saveSession(){ try { localStorage.setItem(SESSION_KEY, JSON.stringify({ts: Date.now()})); } catch(_){} }
  function loadSession(){
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      if (Date.now() - data.ts > SESSION_TTL){ localStorage.removeItem(SESSION_KEY); return false; }
      return true;
    } catch(_){ return false; }
  }
  function clearSession(){ try { localStorage.removeItem(SESSION_KEY); } catch(_){} }

  /* ---------- Open/Close ---------- */
  function openAdmin(){
    if (isLoggedIn) showPanel(); else showLogin();
  }
  function closeAdmin(){
    const login = $("adminLogin"); const panel = $("adminPanel");
    if (login) login.hidden = true;
    if (panel) panel.hidden = true;
  }
  function showLogin(){
    const modal = $("adminLogin");
    if (!modal) return;
    const input = $("adminPasswordInput");
    const errEl = $("adminLoginError");
    if (input) input.value = "";
    if (errEl) errEl.textContent = "";
    modal.hidden = false;
    setTimeout(() => input && input.focus(), 100);
  }
  function attemptLogin(){
    const input = $("adminPasswordInput");
    const errEl = $("adminLoginError");
    if (!input) return;
    const pwd = input.value;
    if (!pwd){ errEl.textContent = "رمز را وارد کنید"; return; }
    if (pwd === ADMIN_PASSWORD){
      isLoggedIn = true;
      saveSession();
      updateAdminBtn();
      closeAdmin();
      setTimeout(() => showPanel(), 150);
      toast("خوش آمدید 👋", "success");
    } else {
      errEl.textContent = "❌ رمز اشتباه است";
      input.value = "";
      input.focus();
    }
  }

  /* ---------- Panel ---------- */
  function showPanel(){
    const modal = $("adminPanel");
    if (!modal) return;
    modal.hidden = false;
    buildPersonsTab();
    switchTab("persons");
  }
  function switchTab(tab){
    currentTab = tab;
    document.querySelectorAll(".admin-tab").forEach(t =>
      t.classList.toggle("active", t.dataset.tab === tab));
    document.querySelectorAll(".admin-tab-content").forEach(c =>
      c.hidden = c.dataset.tab !== tab);
    if (tab === "persons"){ buildPersonsTab(); renderPersonList(); }
    if (tab === "export") renderExportTab();
  }

  /* ---------- Persons Tab ---------- */
  function buildPersonsTab(){
    const parent = $("adminPersonListBody");
    if (!parent) return;
    if ($("adminSearchInput")) return;
    parent.innerHTML = `
      <div class="admin-toolbar">
        <input type="text" id="adminSearchInput" class="admin-search"
               placeholder="🔍 جستجوی نام..." autocomplete="off">
        <button class="admin-btn-sm" id="adminAddRootBtn">＋ فرد جدید</button>
      </div>
      <div id="adminPersonListInner" class="admin-person-list"></div>
    `;
    const s = $("adminSearchInput");
    if (s) s.addEventListener("input", renderPersonList);
    const b = $("adminAddRootBtn");
    if (b) b.onclick = () => openEditForm(null, "add-root");
  }

  function renderPersonList(){
    const listEl = $("adminPersonListInner");
    if (!listEl) return;
    const search = $("adminSearchInput");
    const q = (search ? search.value : "").trim().toLowerCase();

    const people = getPeople();
    let ids = Object.keys(people);
    if (q){
      ids = ids.filter(id => {
        const p = people[id];
        return ((p.name || "") + " " + (p.family || "")).toLowerCase().includes(q);
      });
    }
    ids.sort((a,b) => {
      const pa = people[a], pb = people[b];
      if (pa.hiat !== pb.hiat) return pa.hiat === "z" ? -1 : 1;
      return (pa.name || "").localeCompare(pb.name || "", "fa");
    });

    if (!ids.length){
      listEl.innerHTML = '<div class="admin-info-box">هیچ فردی پیدا نشد.</div>';
      return;
    }

    const html = ids.slice(0, 300).map(id => {
      const p = people[id];
      const initial = (p.name || "?").trim().charAt(0);
      const photoHtml = p.photo
        ? `<img src="${escapeHtml(p.photo)}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span style="display:none;width:100%;height:100%;align-items:center;justify-content:center">${escapeHtml(initial)}</span>`
        : escapeHtml(initial);
      const keyVal = p._key || getPersonKey(id);
      const keyBadge = keyVal ? `<span class="admin-key-badge">${escapeHtml(keyVal)}</span>` : "";
      const years = [p.birthYear, p.deathYear].filter(Boolean).join(" — ");
      const statusText = p.hiat === "f" ? "متوفی" : "زنده";
      const genderText = p.gender === "female" ? "زن" : "مرد";
      return `
        <div class="admin-person-row" data-id="${escapeHtml(id)}">
          <div class="admin-person-row-avatar ${p.gender}">${photoHtml}</div>
          <div class="admin-person-row-info">
            <div class="admin-person-row-name">${escapeHtml(p.name)} ${keyBadge}</div>
            <div class="admin-person-row-meta">
              ${escapeHtml(p.family || "")} • ${genderText} • ${statusText}${years ? " • " + escapeHtml(years) : ""}
            </div>
          </div>
          <div class="admin-person-row-actions">
            <button class="admin-row-btn" data-action="edit" title="ویرایش">✎</button>
            <button class="admin-row-btn" data-action="spouse" title="افزودن همسر">💑</button>
            <button class="admin-row-btn" data-action="child" title="افزودن فرزند">👶</button>
            <button class="admin-row-btn danger" data-action="delete" title="حذف">🗑</button>
          </div>
        </div>`;
    }).join("");

    listEl.innerHTML = html;
    listEl.querySelectorAll(".admin-person-row").forEach(row => {
      const id = row.dataset.id;
      row.querySelectorAll(".admin-row-btn").forEach(btn => {
        btn.addEventListener("click", e => {
          e.stopPropagation();
          const a = btn.dataset.action;
          if (a === "edit")   openEditForm(id, "edit");
          if (a === "spouse") openEditForm(id, "add-spouse");
          if (a === "child")  openEditForm(id, "add-child");
          if (a === "delete") deletePerson(id);
        });
      });
    });
  }

  /* ---------- Edit / Add ---------- */
  function openEditForm(id, mode){
    editingId = id;
    editingMode = mode;
    parentForRelation = (mode === "add-spouse" || mode === "add-child") ? id : null;

    const modal = $("adminEditModal");
    const title = $("adminEditTitle");
    const form  = $("adminEditForm");

    if (mode === "edit"){
      const p = getPeople()[id];
      if (!p) return;
      title.textContent = "ویرایش «" + p.name + "»";
      fillForm(form, {
        name: p.name || "",
        family: p.family || "",
        gender: p.gender || "male",
        hiat: p.hiat || "z",
        birthYear: p.birthYear || "",
        deathYear: p.deathYear || "",
        place: p.place || "",
        photo: p.photo || "",
        note: p.note || "",
        key: p._key || getPersonKey(id)
      });
      galleryBuffer = Array.isArray(p.gallery) ? [...p.gallery] : [];
    }
    else if (mode === "add-spouse"){
      const p = getPeople()[id]; if (!p) return;
      title.textContent = "افزودن همسر برای «" + p.name + "»";
      fillForm(form, {
        name: "", family: p.family || "", gender: p.gender === "male" ? "female" : "male",
        hiat: "z", birthYear: "", deathYear: "", place: p.place || "",
        photo: "", note: "", key: ""
      });
      galleryBuffer = [];
    }
    else if (mode === "add-child"){
      const p = getPeople()[id]; if (!p) return;
      title.textContent = "افزودن فرزند برای «" + p.name + "»";
      fillForm(form, {
        name: "", family: p.family || "", gender: "male",
        hiat: "z", birthYear: "", deathYear: "", place: p.place || "",
        photo: "", note: "", key: ""
      });
      galleryBuffer = [];
    }
    else if (mode === "add-root"){
      title.textContent = "افزودن فرد جدید";
      fillForm(form, {
        name: "", family: "براهویی", gender: "male", hiat: "z",
        birthYear: "", deathYear: "", place: "", photo: "", note: "", key: ""
      });
      galleryBuffer = [];
    }

    updateAvatarPreview();
    renderGalleryEditor();
    modal.hidden = false;
    setTimeout(() => form.elements.name && form.elements.name.focus(), 100);
  }

  function fillForm(form, data){
    ["name","family","gender","hiat","birthYear","deathYear",
     "place","photo","note","key"].forEach(k => {
      const el = form.elements[k];
      if (el) el.value = data[k] != null ? data[k] : "";
    });
  }
  function readForm(form){
    const d = {};
    ["name","family","gender","hiat","birthYear","deathYear",
     "place","photo","note","key"].forEach(k => {
      const el = form.elements[k];
      if (el) d[k] = el.value.trim();
    });
    return d;
  }

  /* ---------- Avatar Preview ---------- */
  function updateAvatarPreview(){
    const img = $("adminAvatarImg");
    const placeholder = $("adminAvatarPlaceholder");
    const photoInput = $("adminEditForm").elements.photo;
    const url = photoInput ? photoInput.value.trim() : "";
    if (!img || !placeholder) return;
    if (url){
      img.src = url;
      img.style.display = "block";
      placeholder.style.display = "none";
      img.onerror = () => { img.style.display = "none"; placeholder.style.display = "flex"; };
    } else {
      img.style.display = "none";
      placeholder.style.display = "flex";
    }
  }

  /* ---------- Gallery Editor ---------- */
  function renderGalleryEditor(){
    const grid = $("adminGalleryGrid");
    if (!grid) return;
    if (!galleryBuffer.length){
      grid.innerHTML = '<div class="admin-gallery-empty">هیچ عکسی در گالری نیست</div>';
      return;
    }
    grid.innerHTML = galleryBuffer.map((url, i) => `
      <div class="admin-gallery-item">
        <img src="${escapeHtml(url)}" alt="" onerror="this.style.opacity='.3'">
        <button type="button" class="admin-gallery-remove" data-index="${i}" title="حذف">×</button>
      </div>
    `).join("");
    grid.querySelectorAll(".admin-gallery-remove").forEach(btn => {
      btn.onclick = () => {
        galleryBuffer.splice(parseInt(btn.dataset.index, 10), 1);
        renderGalleryEditor();
      };
    });
  }
  function addGalleryImage(){
    const input = $("adminGalleryUrlInput");
    if (!input) return;
    const url = input.value.trim();
    if (!url) return;
    galleryBuffer.push(url);
    input.value = "";
    renderGalleryEditor();
  }

  /* ---------- Save ---------- */
  function submitEditForm(e){
    e.preventDefault();
    const form = $("adminEditForm");
    const data = readForm(form);
    if (!data.name){ toast("نام را وارد کنید", "error"); return; }

    const people = getPeople();
    const marriages = getMarriages();
    const rootIds = getRootIds();

    if (editingMode === "edit"){
      const p = people[editingId];
      if (!p) return;
      p.name = data.name;
      p.family = data.family || "براهویی";
      p.gender = data.gender;
      p.hiat = data.hiat;
      p.birthYear = data.birthYear;
      p.deathYear = data.deathYear;
      p.place = data.place || "نامعلوم";
      p.photo = data.photo;
      p.note = data.note || "بدون شرح";
      p.gallery = [...galleryBuffer];
      if (data.key){
        p._key = data.key;
        const app = getApp();
        if (app && app.personKey) app.personKey[editingId] = data.key;
        if (app && app.keyPaths){
          app.keyPaths[data.key] = app.keyPaths[data.key] || [];
          if (!app.keyPaths[data.key].includes(editingId)) app.keyPaths[data.key].push(editingId);
        }
      } else {
        delete p._key;
        const app = getApp();
        if (app && app.personKey) delete app.personKey[editingId];
      }
      toast("✅ اطلاعات ویرایش شد", "success");
    }
    else {
      const newIdStr = newId("p");
      const newPerson = {
        name: data.name,
        family: data.family || "براهویی",
        gender: data.gender === "female" ? "female" : "male",
        hiat: data.hiat === "f" ? "f" : "z",
        birthYear: data.birthYear,
        deathYear: data.deathYear,
        place: data.place || "نامعلوم",
        photo: data.photo,
        note: data.note || "بدون شرح",
        gallery: [...galleryBuffer],
        familyRole: editingMode === "add-spouse" ? "spouse" : "lineage"
      };
      if (data.key) newPerson._key = data.key;
      people[newIdStr] = newPerson;

      const app = getApp();
      if (data.key && app && app.personKey){
        app.personKey[newIdStr] = data.key;
        if (app.keyPaths){
          app.keyPaths[data.key] = app.keyPaths[data.key] || [];
          app.keyPaths[data.key].push(newIdStr);
        }
      }

      if (editingMode === "add-root"){
        rootIds.push(newIdStr);
        toast("✅ فرد جدید اضافه شد", "success");
      }
      else if (editingMode === "add-spouse"){
        const pid = parentForRelation;
        let m = marriages.find(mm => mm.spouses.includes(pid));
        if (!m){ m = { id: newId("m"), spouses: [pid], children: [] }; marriages.push(m); }
        m.spouses.push(newIdStr);
        toast("✅ همسر اضافه شد", "success");
      }
      else if (editingMode === "add-child"){
        const pid = parentForRelation;
        let m = marriages.find(mm => mm.spouses.includes(pid));
        if (!m){ m = { id: newId("m"), spouses: [pid], children: [] }; marriages.push(m); }
        m.children.push(newIdStr);
        toast("✅ فرزند اضافه شد", "success");
      }
    }

    refreshTree();
    closeEditModal();
    renderPersonList();
  }

  function closeEditModal(){
    const modal = $("adminEditModal");
    if (modal) modal.hidden = true;
    editingId = null; editingMode = null; parentForRelation = null; galleryBuffer = [];
  }

  /* ---------- Delete ---------- */
  function deletePerson(id){
    const people = getPeople();
    const p = people[id];
    if (!p) return;
    if (!confirm(`آیا از حذف «${p.name}» مطمئن هستید؟`)) return;
    delete people[id];
    const marriages = getMarriages();
    for (let i = marriages.length - 1; i >= 0; i--){
      const m = marriages[i];
      m.spouses = m.spouses.filter(x => x !== id);
      m.children = m.children.filter(x => x !== id);
      if (m.spouses.length === 0) marriages.splice(i, 1);
    }
    const rootIds = getRootIds();
    const idx = rootIds.indexOf(id);
    if (idx >= 0) rootIds.splice(idx, 1);
    refreshTree(); renderPersonList();
    toast("🗑 حذف شد", "success");
  }

  function refreshTree(){
    const app = getApp();
    if (!app) return;
    try {
      if (app.renderTree) app.renderTree();
      if (app.drawConnectors) requestAnimationFrame(app.drawConnectors);
    } catch(e){ console.error(e); }
  }

  /* ---------- Export Nested familyTree ---------- */
  function buildNestedTree(){
    const people = getPeople();
    const marriages = getMarriages();
    const personKey = (getApp() && getApp().personKey) || {};

    function buildPersonNode(pid){
      const p = people[pid];
      if (!p) return null;
      const node = {};
      node.name = p.name || "نامعلوم";
      if (p.family && p.family !== "براهویی") node.family = p.family;
      if (p.gender === "female") node.gender = "f";
      if (p.hiat === "z") node.hiatZ = true;
      if (p.hiat === "f" || p.deathYear){
        node.deceased = true;
        if (p.deathYear) node.deathYear = p.deathYear;
      }
      if (p.birthYear) node.birthYear = p.birthYear;
      if (p.place && p.place !== "نامعلوم") node.place = p.place;
      if (p.photo) node.photo = p.photo;
      if (p.note && p.note !== "بدون شرح") node.note = p.note;
      if (Array.isArray(p.gallery) && p.gallery.length) node.gallery = [...p.gallery];
      const keyVal = p._key || personKey[pid];
      if (keyVal) node.key = keyVal;

      const m = marriages.find(mm => mm.spouses.includes(pid));
      if (m){
        const sid = m.spouses.find(s => s !== pid);
        if (sid){
          const sp = people[sid];
          if (sp){
            const sn = { name: sp.name || "نامعلوم" };
            if (sp.family && sp.family !== "براهویی") sn.family = sp.family;
            if (sp.gender === "female") sn.gender = "f";
            if (sp.hiat === "z") sn.hiatZ = true;
            if (sp.hiat === "f" || sp.deathYear){
              sn.deceased = true;
              if (sp.deathYear) sn.deathYear = sp.deathYear;
            }
            if (sp.birthYear) sn.birthYear = sp.birthYear;
            if (sp.place && sp.place !== "نامعلوم") sn.place = sp.place;
            if (sp.photo) sn.photo = sp.photo;
            if (sp.note && sp.note !== "بدون شرح") sn.note = sp.note;
            const spKeyVal = sp._key || personKey[sid];
            if (spKeyVal) sn.key = spKeyVal;
            node.spouse = sn;
          }
        }
        const kids = m.children || [];
        if (kids.length){
          node.children = kids.map(cid => buildPersonNode(cid)).filter(Boolean);
        }
      }
      return node;
    }

    const roots = getRootIds();
    if (roots.length === 0) return { name: "شجره‌نامه", children: [] };
    if (roots.length === 1) return buildPersonNode(roots[0]);
    return { name: "شجره‌نامه خانوادگی", children: roots.map(rid => buildPersonNode(rid)).filter(Boolean) };
  }

  function exportData(){
    const tree = buildNestedTree();
    const header =
      "/* =========================================================\n" +
      "   داده‌ی شجره‌نامه — خودکار تولیدشده توسط پنل مدیریت\n" +
      "   " + new Date().toLocaleString("fa-IR") + "\n" +
      "   ========================================================= */\n\n";
    const content = header + "const familyTree = " + JSON.stringify(tree, null, 2) + ";\n";

    const blob = new Blob([content], { type: "text/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.js";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("✅ فایل data.js دانلود شد. روی هاست جایگزین کن.", "success");
  }

  function renderExportTab(){
    const body = $("adminExportBody");
    if (!body) return;
    const people = getPeople();
    const marriages = getMarriages();
    const count = Object.keys(people).length;
    const mcount = marriages.length;
    body.innerHTML = `
      <div class="admin-info-box">
        <b>📌 راهنمای ذخیره‌سازی:</b><br>
        با کلیک روی «دانلود فایل data.js»، فایل جدیدی دریافت می‌کنی که شامل
        <b>${count}</b> فرد و <b>${mcount}</b> ازدواج است. این فایل را روی هاست
        (کنار <code>tree.js</code>) جایگزین کن تا همه‌ی بازدیدکننده‌ها تغییرات را ببینند.
      </div>
      <div class="admin-actions" style="margin-top:0">
        <button class="admin-btn-primary" id="adminExportBtn">⬇ دانلود فایل data.js</button>
      </div>
    `;
    setTimeout(() => {
      const b = $("adminExportBtn");
      if (b) b.onclick = exportData;
    }, 50);
  }

  /* ---------- Build Modals ---------- */
  function buildModals(){
    if (document.getElementById("adminLogin")) return;
    const html = `
      <div id="adminLogin" class="admin-modal" hidden>
        <div class="admin-box">
          <h3 class="admin-login-title">🔐 ورود به پنل مدیریت</h3>
          <p class="admin-login-sub">رمز عبور را وارد کنید.</p>
          <input type="password" id="adminPasswordInput" class="admin-input" placeholder="رمز عبور" autocomplete="off">
          <div class="admin-actions">
            <button class="admin-btn-primary" id="adminLoginBtn">ورود</button>
            <button class="admin-btn-secondary" id="adminLoginCancel">انصراف</button>
          </div>
          <div class="admin-error" id="adminLoginError"></div>
        </div>
      </div>

      <div id="adminPanel" class="admin-modal" hidden>
        <div class="admin-box admin-box-lg">
          <div class="admin-panel-header">
            <h3 class="admin-panel-title">پنل مدیریت شجره‌نامه</h3>
            <button class="admin-panel-close" id="adminPanelClose">×</button>
          </div>
          <div class="admin-tabs">
            <button class="admin-tab active" data-tab="persons">👥 افراد</button>
            <button class="admin-tab" data-tab="export">💾 ذخیره / بازیابی</button>
          </div>
          <div class="admin-tab-content admin-tab-body" data-tab="persons" id="adminPersonListBody"></div>
          <div class="admin-tab-content admin-tab-body" data-tab="export" id="adminExportBody" hidden></div>
        </div>
      </div>

      <div id="adminEditModal" class="admin-modal" hidden>
        <div class="admin-box admin-box-profile">
          <div class="admin-profile-header">
            <div class="admin-avatar-preview">
              <img id="adminAvatarImg" alt="">
              <div id="adminAvatarPlaceholder" class="admin-avatar-placeholder">👤</div>
            </div>
            <div class="admin-profile-head-info">
              <h3 id="adminEditTitle">ویرایش</h3>
              <p>اطلاعات فرد را ویرایش کنید</p>
            </div>
            <button class="admin-panel-close" id="adminEditClose" type="button">×</button>
          </div>

          <form id="adminEditForm" class="admin-edit-form">
            <div class="admin-form-section">
              <h4 class="admin-section-title">📋 اطلاعات پایه</h4>
              <div class="admin-form-grid">
                <div class="admin-field"><label>نام *</label><input name="name" required></div>
                <div class="admin-field"><label>نام خانوادگی</label><input name="family"></div>
                <div class="admin-field"><label>جنسیت *</label>
                  <select name="gender" required>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                  </select>
                </div>
                <div class="admin-field"><label>وضعیت</label>
                  <select name="hiat">
                    <option value="z">زنده</option>
                    <option value="f">متوفی</option>
                  </select>
                </div>
                <div class="admin-field"><label>سال تولد</label><input name="birthYear" placeholder="مثلاً ۱۳۴۰"></div>
                <div class="admin-field"><label>سال وفات</label><input name="deathYear" placeholder="خالی اگر زنده"></div>
                <div class="admin-field full"><label>محل زندگی</label><input name="place" placeholder="مثلاً زاهدان"></div>
              </div>
            </div>

            <div class="admin-form-section">
              <h4 class="admin-section-title">📷 عکس پروفایل</h4>
              <div class="admin-field full">
                <input name="photo" type="url" dir="ltr" placeholder="pic1 (1).jpg">
                <div class="admin-field-hint">💡 عکس را در سایت‌هایی مثل <b>imgbb.com</b> آپلود کن و لینک مستقیم را اینجا بگذار.</div>
              </div>
            </div>

            <div class="admin-form-section">
              <h4 class="admin-section-title">🖼 گالری تصاویر</h4>
              <div id="adminGalleryGrid" class="admin-gallery-grid"></div>
              <div class="admin-gallery-add">
                <input type="url" id="adminGalleryUrlInput" dir="ltr" placeholder="آدرس عکس جدید...">
                <button type="button" id="adminGalleryAddBtn" class="admin-btn-sm">+ افزودن</button>
              </div>
            </div>

            <div class="admin-form-section">
              <h4 class="admin-section-title">🔗 کلید شاخه (اختیاری)</h4>
              <div class="admin-field full">
                <input name="key" type="text" dir="ltr" placeholder="مثلاً ali_001">
                <div class="admin-field-hint">اگر این شخص در چند شاخه ظاهر می‌شود، کلید یکسان وارد کن.</div>
              </div>
            </div>

            <div class="admin-form-section">
              <h4 class="admin-section-title">📝 یادداشت</h4>
              <div class="admin-field full"><textarea name="note" rows="3" placeholder="توضیحات..."></textarea></div>
            </div>

            <div class="admin-form-footer">
              <button type="button" class="admin-btn-secondary" id="adminEditCancel">انصراف</button>
              <button type="submit" class="admin-btn-primary">💾 ذخیره تغییرات</button>
            </div>
          </form>
        </div>
      </div>
    `;
    const wrap = document.createElement("div");
    wrap.innerHTML = html;
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
  }

  /* ---------- Bind ---------- */
  function bindEvents(){
    const loginBtn = $("adminLoginBtn");
    const loginCancel = $("adminLoginCancel");
    const pwdInput = $("adminPasswordInput");
    const panelClose = $("adminPanelClose");
    const editClose = $("adminEditClose");
    const editCancel = $("adminEditCancel");

    if (loginBtn) loginBtn.onclick = attemptLogin;
    if (loginCancel) loginCancel.onclick = closeAdmin;
    if (pwdInput) pwdInput.addEventListener("keydown", e => { if (e.key === "Enter") attemptLogin(); });
    if (panelClose) panelClose.onclick = closeAdmin;
    if (editClose) editClose.onclick = closeEditModal;
    if (editCancel) editCancel.onclick = closeEditModal;

    const form = $("adminEditForm");
    if (form) form.onsubmit = submitEditForm;

    if (form && form.elements.photo){
      form.elements.photo.addEventListener("input", updateAvatarPreview);
    }

    const addGalleryBtn = $("adminGalleryAddBtn");
    if (addGalleryBtn) addGalleryBtn.onclick = addGalleryImage;
    const galleryInput = $("adminGalleryUrlInput");
    if (galleryInput) galleryInput.addEventListener("keydown", e => {
      if (e.key === "Enter"){ e.preventDefault(); addGalleryImage(); }
    });

    document.querySelectorAll(".admin-tab").forEach(t => {
      t.addEventListener("click", () => switchTab(t.dataset.tab));
    });

    document.addEventListener("keydown", e => {
      if (e.key !== "Escape") return;
      const edit = $("adminEditModal");
      const panel = $("adminPanel");
      if (edit && !edit.hidden){ closeEditModal(); return; }
      if (panel && !panel.hidden){ closeAdmin(); return; }
    });

    const adminBtn = $("adminBtn");
    if (adminBtn){
      adminBtn.addEventListener("click", () => {
        if (isLoggedIn && $("adminPanel") && !$("adminPanel").hidden) closeAdmin();
        else openAdmin();
      });
    }
  }

  function updateAdminBtn(){
    const btn = document.getElementById("adminBtn");
    if (!btn) return;
    if (isLoggedIn){
      btn.classList.add("active");
      btn.textContent = "⚙";
      btn.title = "پنل مدیریت";
    } else {
      btn.classList.remove("active");
      btn.textContent = "🔒";
      btn.title = "ورود به پنل مدیریت";
    }
  }

  function init(){
    buildModals();
    bindEvents();
    if (loadSession()) isLoggedIn = true;
    updateAdminBtn();
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }

  window.AdminPanel = {
    open: openAdmin,
    close: closeAdmin,
    isLoggedIn: () => isLoggedIn
  };

})();