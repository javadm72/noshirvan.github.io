/* =========================================================
   داده‌ی شجره‌نامه — ساختار تودرتو
   ========================================================= */
const familyTree = {
  name:"هوتک", deceased:true, deathYear:"1994",
  photo:"pic/pic1 (1).jpg",
  gallery:[
    "pic/pic1 (1).jpg",
    "pic/pic1 (1).png",
    "pic/pic1 (2).png"
  ],
  spouse:{name:"نامعلوم",gender:"f",deceased:true},
  children:[
    {name:"الو",deceased:true,
      spouse:{name:"نامعلوم",gender:"f",deceased:true},
      children:[ 
        {name:"جغردی",deceased:true},
        {name:"رادو",deceased:true,
          spouse:{name:"نامعلوم",gender:"f",deceased:true},
          children:[
            {name:"مستان",deceased:true},
            {name:"مرود",deceased:true},
            {name:"عبدالکریم",deceased:true},
            {name:"نوشیروان",deceased:true,
              spouse:{name:"نامعلوم",gender:"f",deceased:true},
              children:[
                {name:"نخی",deceased:true,
                  spouse:{name:"نامعلوم",gender:"f",deceased:true},
                  children:[
                    {name:"رحیمداد",deceased:true,
                      spouse:{name:"نامعلوم",gender:"f",deceased:true},
                      children:[
                        /* ============ تاج محمد ============ */
                        {name:"تاج محمد",deceased:true,
                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                          children:[
                            {name:"حاجی فقیر",deceased:true},
                            {name:"کرم خان",deceased:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true},
                              children:[
                                {name:"علی",hiatZ:true},
                                {name:"مراد",hiatZ:true}
                              ]},
                            {name:"احمد",deceased:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true,hiatZ:true},
                              children:[
                                {name:"مجید",hiatZ:true},
                                {name:"محمود",hiatZ:true,
                                  spouse:{name:"نامعلوم",gender:"f",hiatZ:true},
                                  children:[
                                    {name:"احمد",hiatZ:true},
                                    {name:"اقبال",hiatZ:true},
                                    {name:"مهناز",gender:"f",hiatZ:true}
                                  ]},
                                {name:"محمد",hiatZ:true,
                                  spouse:{name:"نامعلوم",gender:"f",hiatZ:true},
                                  children:[
                                    {name:"امیر حمزه",hiatZ:true},
                                    {name:"دانیال",hiatZ:true},
                                    {name:"الناز",gender:"f",hiatZ:true}
                                  ]}
                              ]},
                            {name:"علم",deceased:true,hiatZ:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true,hiatZ:true},
                              children:[
                                {name:"ماه بی بی",gender:"f",hiatZ:true},
                                {name:"زهرا",gender:"f",hiatZ:true},
                                {name:"ملکه",gender:"f",hiatZ:true},
                                {name:"صبوره",gender:"f",hiatZ:true}
                              ]},
                            {name:"علی شاه",deceased:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true,hiatZ:true},
                              children:[
                                {name:"محمد",hiatZ:true},
                                {name:"محمد نبی",deceased:true,hiatZ:true,
                                    spouse:{name:"نامعلوم",gender:"f",deceased:true,hiatZ:true},
                                    children:[
                                        {name:"خلیل",hiatZ:true},
                                        {name:"جلیل",hiatZ:true},
                                        {name:"ساجده",gender:"f",hiatZ:true},
                                        {name:"جمیله",gender:"f",deceased:true,hiatZ:true,
                                            spouse:{name:"نامعلوم",deceased:true,hiatZ:true},
                                            children:[
                                                {name:"عزیز",hiatZ:true}
                                            ]},
                                ]},
                                {name:"کادر",hiatZ:true,deceased:true,
                                    spouse:{name:"نامعلوم",gender:"f",hiatZ:true,deceased:true},
                                    children:[
                                        {name:"مائده",gender:"f",hiatZ:true},
                                ]},
                                {name:"مجید",hiatZ:true}
                              ]},
                            {name:"نواب",deceased:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true},
                              children:[
                                {name:"حمید",hiatZ:true},
                                {name:"عزیز",hiatZ:true},
                                {name:"فاطمه",gender:"f",hiatZ:true},
                                {name:"زهرا",gender:"f",hiatZ:true,deceased:true,
                                    spouse:{name:"نامعلوم",deceased:true},
                                    children:[
                                        {name:"سعید",hiatZ:true},
                                        {name:"مسعود",hiatZ:true},
                                ]},
                                {name:"سارا",gender:"f",key:"saraNavab",hiatZ:true,deceased:true,place:"بیرجند",
                                      spouse:{name:"محمد",family:"نعیمی فر",key:"moShahpari",deceased:true,place:"بیرجند"},
                                      children:[
                                        {name:"الیاس",family:"نعیمی فر",hiatZ:true,place:"بیرجند"},
                                        {name:"ادریس",family:"نعیمی فر",hiatZ:true,place:"بیرجند"},
                                        {name:"عطیه",gender:"f",family:"نعیمی فر",hiatZ:true,place:"زابل",
                                          spouse:{name:"حمید",family:"لوطکی",hiatZ:true,deceased:true,place:"زابل"},
                                          children:[

                                          ]},
                                ]},
                                {name:"آمنه",gender:"f",hiatZ:true,deceased:true,
                                    spouse:{name:"نامعلوم",deceased:true},
                                    children:[
                                        {name:"آیناز",gender:"f"},
                                ]},
                                {name:"مهناز",gender:"f",hiatZ:true},
                                {name:"زلیخا",gender:"f",hiatZ:true},
                                {name:"آسیه",gender:"f",hiatZ:true}
                              ]},
                            {name:"مزار",deceased:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true},
                              children:[
                                {name:"نظر",hiatZ:true,deceased:true,
                                    spouse:{name:"نامعلوم",gender:"f",deceased:true,hiatZ:true},
                                    children:[
                                        {name:"عبدالله",hiatZ:true},
                                        {name:"حبیب الله",hiatZ:true},
                                        {name:"ناصر",hiatZ:true},
                                ]},
                                {name:"پریاتون",gender:"f",hiatZ:true,deceased:true,
                                    spouse:{name:"نامعلوم",deceased:true,hiatZ:true},
                                    children:[
                                        {name:"زینب",hiatZ:true,deceased:true,
                                            spouse:{name:"نامعلوم",deceased:true,hiatZ:true},
                                            children:[
                                                {name:"دانیال",hiatZ:true},
                                        ]},
                                        {name:"مراد بی بی",hiatZ:true,deceased:true,
                                        spouse:{name:"حسن",family:"براهویی عرب",deceased:true,hiatZ:true},
                                            children:[
                                                {name:"مژگان",gender:"f",hiatZ:true},
                                                {name:"الهام",gender:"f",hiatZ:true},
                                                {name:"سارینا",gender:"f",hiatZ:true},
                                        ]},
                                    ]},
                                ]},
                            {name:"فردین",deceased:true},
                            {name:"شاه پری",gender:"f",deceased:true,
                              spouse:{name:"نامعلوم",gender:"m",deceased:true},
                              children:[
                                {name:"حاجی جلال",hiatZ:true},
                                {name:"ناصر",hiatZ:true}
                              ]},
                            {name:"گل بی بی",gender:"f",deceased:true}
                          ]},

                        /* ============ حاجی ============ */
                        {name:"حاجی",deceased:true,
                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                          children:[
                            {name:"محمد رسول",hiatZ:true},
                            {name:"بلور",deceased:true},
                            {name:"سید محمد",hiatZ:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true},
                              children:[
                                {name:"ابراهیم",hiatZ:true},
                                {name:"محمود",hiatZ:true},
                                {name:"عبدالله",hiatZ:true},
                                {name:"حسین",hiatZ:true},
                                {name:"آمنه",gender:"f",hiatZ:true},
                                {name:"مریم",gender:"f",hiatZ:true},
                                {name:"زری",gender:"f",hiatZ:true},
                                {name:"نظر",hiatZ:true,
                                  spouse:{name:"نامعلوم",gender:"f",hiatZ:true},
                                  children:[
                                    {name:"پرویز",hiatZ:true},
                                    {name:"محمد یاسین",hiatZ:true}
                                  ]}
                              ]}
                          ]},

                        /* ============ لاداد ============ */
                        {name:"لاداد",deceased:true,
                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                          children:[
                            /* --- جیل --- */
                            {name:"جیل",deceased:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true},
                              children:[
                                {name:"صمد",deceased:true,deathYear:"1405/6",
                                  spouse:{name:"مدینه",gender:"f",hiatZ:true},
                                  children:[
                                    {name:"محمود",hiatZ:true},
                                    {name:"محمد",hiatZ:true},
                                    {name:"علی",hiatZ:true},
                                    {name:"پری",gender:"f",hiatZ:true},
                                    {name:"حلیمه",gender:"f",hiatZ:true},
                                    {name:"مرضیه",gender:"f",hiatZ:true},
                                    {name:"زهرا",gender:"f",hiatZ:true}
                                  ]},
                                {name:"امیر",deceased:true,
                                  spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                  children:[
                                    {name:"رضا",deceased:true,
                                      spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                      children:[
                                        {name:"محمد",hiatZ:true},
                                        {name:"نرگس",gender:"f",hiatZ:true}
                                      ]},
                                    {name:"یوسف",deceased:true,
                                      spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                      children:[
                                        {name:"حمید",hiatZ:true},
                                        {name:"الیاس",hiatZ:true},
                                        {name:"بنیامین",hiatZ:true},
                                        {name:"حمیده",gender:"f",hiatZ:true}
                                      ]},
                                    {name:"زهرا",gender:"f",deceased:true}
                                  ]},
                                {name:"آغاسی",deceased:true,
                                  spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                  children:[
                                    {name:"رحمت",hiatZ:true},
                                    {name:"اسماء",gender:"f",hiatZ:true}
                                  ]},
                                {name:"حمیرا",gender:"f",deceased:true,
                                  spouse:{name:"نامعلوم",gender:"m",deceased:true},
                                  children:[
                                    {name:"حسن",hiatZ:true}
                                  ]}
                              ]},

                            /* --- کریم --- */
                            {name:"کریم",hiatZ:true,
                              spouse:{name:"نامعلوم",gender:"f",hiatZ:true},
                              children:[
                                {name:"حاجی",hiatZ:true},
                                {name:"رحیم",deceased:true},
                                {name:"مدینه",gender:"f",hiatZ:true,
                                  spouse:{name:"نامعلوم",gender:"m",hiatZ:true},
                                  children:[
                                    {name:"محمود",hiatZ:true},
                                    {name:"محمد",hiatZ:true},
                                    {name:"علی",hiatZ:true},
                                    {name:"پری",gender:"f",hiatZ:true},
                                    {name:"حلیمه",gender:"f",hiatZ:true},
                                    {name:"مرضیه",gender:"f",hiatZ:true},
                                    {name:"زهرا",gender:"f",hiatZ:true}
                                ]},
                                {name:"فاطمه",gender:"f",hiatZ:true,
                                  spouse:{name:"نامعلوم",gender:"m",hiatZ:true},
                                  children:[
                                    {name:"رضا",hiatZ:true},
                                    {name:"یوسف",hiatZ:true}
                                ]},
                                {name:"حلیمه",gender:"f",hiatZ:true},
                                {name:"بی بی",gender:"f",hiatZ:true},
                                {name:"بزرگ",gender:"f",hiatZ:true}
                              ]},

                            /* --- اسماعیل خان --- */
                            {name:"اسماعیل خان",deceased:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true},
                              children:[
                                {name:"نظر",deceased:true},
                                {name:"رحیم",family:"چمن پییرا",deceased:true,
                                  spouse:{name:"نامعلوم",gender:"f",hiatZ:true},
                                  children:[
                                    {name:"حسن",family:"چمن پییرا",key:"hasanRahim1",deceased:true,place:"بیرجند",
                                        spouse:{name:"رضوان",gender:"f",family:"رضایی",key:"rihanHaji",hiatZ:true,place:"بیرجند"},
                                        children:[
                                            {}
                                    ]},
                                    {name:"حلیم",family:"چمن پییرا",hiatZ:true,place:"کرت آباد"}
                                  ]},
                                {name:"شاه پری",key:"shahEsma",gender:"f",hiatZ:true,
                                  spouse:{name:"حمزه",key:"hamzeYahgh",deceased:true},
                                  children:[
                                    {name:"محمد",family:"نعیمی فر",key:"moShahpari",deceased:true,place:"بیرجند",
                                      spouse:{name:"سارا",gender:"f",key:"saraNavab",hiatZ:true,deceased:true,place:"بیرجند"},
                                      children:[
                                        {name:"الیاس",family:"نعیمی فر",hiatZ:true,place:"بیرجند"},
                                        {name:"ادریس",family:"نعیمی فر",hiatZ:true,place:"بیرجند"},
                                        {name:"عطیه",gender:"f",family:"نعیمی فر",hiatZ:true,place:"زابل",
                                          spouse:{name:"حمید",family:"لوطکی",deceased:true,hiatZ:true,place:"زابل"}}
                                      ]},
                                    {name:"حمید",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"},
                                    {name:"مهناز",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"},
                                    {name:"زهرا",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"},
                                    {name:"فرحناز",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"},
                                    {name:"خورشید",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"}
                                  ]},
                                {name:"بسی",key:"basiEsmaeil",gender:"f",hiatZ:true,place:"کرت آباد",
                                  spouse:{name:"عیسی",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                  children:[
                                    {name:"ناصر",family:"لوطکی",deceased:true,place:"کرت آباد"},
                                    {name:"علی",key:"aliBasi",family:"لوطکی",hiatZ:true,place:"بیرجند",
                                      spouse:{name:"منیره",key:"monNor",gender:"f",hiatZ:true,place:"بیرجند"},
                                      children:[
                                        {name:"عدنان",family:"لوطکی",hiatZ:true,place:"بیرجند"},
                                        {name:"حلما",gender:"f",family:"لوطکی",hiatZ:true,place:"بیرجند"}
                                      ]},
                                    {name:"حسین",family:"لوطکی",hiatZ:true,place:"بیرجند",
                                      spouse:{name:"نامشخص",gender:"f",hiatZ:true,place:"بیرجند"},
                                      children:[
                                        {name:"آیناز",gender:"f",family:"لوطکی",hiatZ:true,place:"بیرجند"}
                                      ]},
                                    {name:"یاسر",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                    {name:"جان بی بی",key:"janBasii",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                      spouse:{name:"عبدالله",key:"habdolZaman",family:"پارسافر",hiatZ:true,place:"کرت آباد"},
                                      children:[
                                        {name:"محمد یاسین",family:"براهویی",hiatZ:true,place:"بیرجند"},
                                        {name:"آسیه",gender:"f",family:"براهویی",hiatZ:true,place:"بیرجند"}
                                      ]},
                                    /* ↓ طاهره از شاخه لوطکی، متصل به ظاهر از شاخه براهویی */
                                    {name:"طاهره",gender:"f",family:"لوطکی",hiatZ:true,place:"زاهدان",key:"taher",
                                      spouse:{name:"ظاهر",family:"براهویی",hiatZ:true,place:"زاهدان",key:"zaher"},
                                      children:[
                                        {name:"اسماء",gender:"f",family:"براهویی",hiatZ:true,place:"زاهدان"},
                                        {name:"ساینا",gender:"f",family:"براهویی",hiatZ:true,place:"زاهدان"}
                                      ]},
                                    {name:"شهناز",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"}
                                  ]}
                              ]},

                            /* --- محمد علی --- */
                            {name:"محمد علی",deceased:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true},
                              children:[
                                {name:"ابراهیم",deceased:true},
                                {name:"حبیب الله",deceased:true,
                                  spouse:{name:"نامشخص",gender:"f",deceased:true},
                                  children:[
                                    {name:"محمود",hiatZ:true},
                                    {name:"حسین",hiatZ:true,
                                      spouse:{name:"نامشخص",gender:"f",hiatZ:true},
                                      children:[
                                        {name:"محمد اسحاق",hiatZ:true},
                                        {name:"اسماعیل",hiatZ:true}
                                      ]},
                                    {name:"عثمان",hiatZ:true},
                                    {name:"زهرا",gender:"f",hiatZ:true},
                                    {name:"آمنه",gender:"f",hiatZ:true},
                                    {name:"نسرین",gender:"f",hiatZ:true},
                                    {name:"مرضیه",gender:"f",hiatZ:true}
                                  ]},
                                {name:"جمعه",deceased:true,place:"زاهدان",
                                  spouse:{name:"نامشخص | خاتون",gender:"f",hiatZ:true},
                                  children:[
                                    {name:"سعید",hiatZ:true},
                                    {name:"مسعود",hiatZ:true},
                                    {name:"امید",hiatZ:true}
                                  ]},
                                {name:"عیسی",deceased:true,place:"زاهدان",
                                  spouse:{name:"نامشخص",gender:"f",deceased:true},
                                  children:[
                                    {name:"امین",hiatZ:true},
                                    {name:"یاسر",hiatZ:true},
                                    {name:"ناصر",hiatZ:true},
                                    {name:"طیبه",gender:"f",hiatZ:true},
                                    {name:"سعیده",gender:"f",hiatZ:true}
                                  ]},
                                {name:"علی",deceased:true,
                                  spouse:{name:"نامشخص",gender:"f",deceased:true},
                                  children:[
                                    {name:"مجید",hiatZ:true,place:"زاهدان"},
                                    {name:"رسول",key:"rasulbibi1",hiatZ:true,place:"زاهدان",
                                      spouse:{name:"مهصومه",gender:"f",hiatZ:true,place:"زاهدان"},
                                      children:[
                                        {name:"محمد فاضل",hiatZ:true,place:"زاهدان"},
                                        {name:"فائزه",gender:"f",hiatZ:true,place:"زاهدان"}
                                      ]},
                                    {name:"عزیز",hiatZ:true,place:"زاهدان"},
                                    {name:"محمد",hiatZ:true,place:"زاهدان"},
                                    {name:"هاجر",gender:"f",hiatZ:true,place:"زاهدان"},
                                    {name:"حوا",gender:"f",hiatZ:true,place:"زاهدان"},
                                    {name:"فاطمه",gender:"f",hiatZ:true,place:"زاهدان"}
                                  ]},
                                {name:"بی بی",gender:"f",key:"bibiMohammadAli",deceased:true,place:"زاهدان",
                                  spouse:{name:"رسول",key:"rasolKamKhan",deceased:true,place:"ارزنچه علیا"},
                                  children:[
                                    {name:"منصور",family:"براهویی",key:"mansurRasol",hiatZ:true,deceased:true,place:"سنگان",
                                      spouse:{name:"عصمت",gender:"f",family:"مرادی",key:"esmatBozorg",hiatZ:true,deceased:true},
                                      children:[
                                        {name:"محمد",family:"براهویی",hiatZ:true,deceased:true},
                                        {name:"معید",family:"براهویی",hiatZ:true,deceased:true},
                                        {name:"میعاد",family:"براهویی",hiatZ:true,deceased:true},
                                        {name:"اسراء",family:"براهویی",gender:"f",hiatZ:true,deceased:true}
                                      ]
                                    },
                                    {name:"معصومه",gender:"f",hiatZ:true,place:"زاهدان",deceased:true,
                                      spouse:{name:"رسول",key:"rasulbibi1",hiatZ:true,place:"زاهدان",deceased:true},
                                      children:[
                                        {name:"محمد فاضل",hiatZ:true,place:"زاهدان",deceased:true},
                                        {name:"فائزه",gender:"f",hiatZ:true,place:"زاهدان",deceased:true}
                                      ]}
                                  ]},
                                {name:"زینب",key:"zinabMohammadAli",gender:"f",hiatZ:true,deceased:true,
                                  spouse:{name:"احمد",key:"ahmadRostam",hiatZ:true},
                                  children:[
                                    {name:"مجید",hiatZ:true,deceased:true},
                                    /* ↓ ظاهر از شاخه براهویی، متصل به طاهره از لوطکی */
                                    {name:"ظاهر",family:"براهویی",hiatZ:true,place:"زاهدان",key:"zaher",deceased:true,
                                      spouse:{name:"طاهره",gender:"f",family:"لوطکی",hiatZ:true,place:"زاهدان",key:"taher",deceased:true},
                                      children:[
                                        {name:"اسماء",gender:"f",family:"براهویی",hiatZ:true,place:"زاهدان",deceased:true},
                                        {name:"ساینا",gender:"f",family:"براهویی",hiatZ:true,place:"زاهدان",deceased:true}
                                      ]},
                                    {name:"نازی",gender:"f",key:"naziAhmad",hiatZ:true,place:"ارزنچه علیا",
                                      spouse:{name:"رحمان",key:"rahmanKhanoom",hiatZ:true,place:"ارزنچه علیا"},
                                      children:[
                                        {name:"معین",hiatZ:true,place:"ارزنچه علیا"},
                                        {name:"داوود",hiatZ:true,place:"ارزنچه علیا"},
                                        {name:"سوده",gender:"f",hiatZ:true,place:"ارزنچه علیا"}
                                      ]},
                                    {name:"مدینه",gender:"f",hiatZ:true,deceased:true,}
                                  ]},
                                {name:"خاتون",gender:"f",hiatZ:true,deceased:true,place:"کرت آباد",
                                  spouse:{name:"اسلم",hiatZ:true,place:"کرت آباد"},
                                  children:[
                                    {name:"حبیب الله",hiatZ:true,place:"کرت آباد"},
                                    {name:"بیدالله",hiatZ:true,place:"کرت آباد"},
                                    {name:"رضا",hiatZ:true,place:"کرت آباد"}
                                  ]},
                                {name:"گلبهار",gender:"f",deceased:true,hiatZ:true,
                                  spouse:{name:"نامشخص",gender:"m",hiatZ:true},
                                  children:[
                                    {name:"عارف",hiatZ:true,deceased:true},
                                    {name:"یاسین",hiatZ:true,deceased:true},
                                    {name:"فاطمه",gender:"f",hiatZ:true,deceased:true},
                                    {name:"پروین",gender:"f",hiatZ:true,deceased:true,}
                                  ]}
                              ]},

                            /* --- ماه بی بی --- */
                            {name:"ماه بی بی",gender:"f",deceased:true,
                              spouse:{name:"نامعلوم",gender:"m",deceased:true},
                              children:[
                                {name:"ملک محمد",deceased:true,
                                  spouse:{name:"نامعلوم",gender:"f",hiatZ:true},
                                  children:[
                                    {name:"حسن",deceased:true},
                                    {name:"حمید",deceased:true},
                                    {name:"نعیم",deceased:true}
                                  ]},
                                {name:"سیاه خان",deceased:true},
                                {name:"بسی",gender:"f",deceased:true}
                              ]},

                            /* --- در بی بی --- */
                            {name:"در بی بی",key:"dorLadad",gender:"f",deceased:true,
                              spouse:{name:"در محمد",key:"dormYah",deceased:true},
                              children:[
                                {name:"سمندر",family:"رضایی",deceased:true},
                                {name:"نوروز",family:"رضایی",deceased:true},
                                {name:"رسول",family:"رضایی",deceased:true},
                                {name:"حاجی",key:"hajiDorb",family:"رضایی",hiatZ:true,place:"کرت آباد",
                                  spouse:{name:"نامعلوم",gender:"f",family:"براهویی",hiatZ:true,place:"کرت آباد"},
                                  children:[
                                    {name:"محمد",family:"رضایی",hiatZ:true,place:"کرت آباد"},
                                    {name:"ناصر",family:"رضایی",key:"NaserHaji",hiatZ:true,place:"کرت آباد",
                                      spouse:{name:"مریم",gender:"f",family:"رضایی",key:"maryamRahim",hiatZ:true,place:"کرت آباد"},
                                      children:[
                                          {name:"امیر",family:"رضایی",hiatZ:true,place:"کرت آباد"}
                                      ]
                                    },
                                    {name:"محمود",family:"رضایی",hiatZ:true,place:"کرت آباد"},
                                    {name:"مهناز",gender:"f",family:"رضایی",key:"mahnazHaji",hiatZ:true,place:"کرت آباد",
                                      spouse:{name:"موسی",family:"رضایی",key:"moosaRahim",hiatZ:true,place:"کرت آباد"},
                                      children:[
                                          {name:"ستاره",gender:"f",family:"رضایی",hiatZ:true,place:"کرت آباد"}
                                      ]
                                    },
                                    {name:"رضوان",gender:"f",key:"rihanHaji",family:"رضایی",hiatZ:true,place:"کرت آباد",
                                      spouse:{name:"حسن",family:"چمن پیرا",key:"hasanRahim1",hiatZ:true,place:"کرت آباد"},
                                      children:[
                                        {}
                                      ]
                                    },
                                  ]
                                },
                                {name:"ناز بی بی",gender:"f",deceased:true}
                              ]},
                            {name:"گل بی بی",gender:"f",deceased:true}
                          ]},

                        /* ============ یار محمد ============ */
                        {name:"یار محمد",deceased:true,
                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                          children:[
                            {name:"عبدالله",deceased:true,
                              spouse:{name:"نامعلوم",gender:"f",deceased:true},
                              children:[
                                {name:"کادر",hiatZ:true},
                                {name:"حسن",hiatZ:true},
                                {name:"محمد",hiatZ:true}
                              ]},
                            {name:"محمد",deceased:true}
                          ]},
                        {name:"شاه پری",gender:"f",deceased:true}
                      ]},
                    {name:"مراد خان",deceased:true,
                        spouse:{name:"نامعلوم",gender:"f",deceased:true},
                        children:[
                            {name:"جمال الدین",deceased:true},
                            {name:"گمی",deceased:true,
                                spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                children:[
                                    {name:"ولی داد",deceased:true},
                                    {name:"شیر محمد",family:"براهویی عرب",deceased:true,
                                        spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                        children:[
                                            {name:"صفر",family:"براهویی عرب",deceased:true},
                                            {name:"رحمت",family:"براهویی عرب",deceased:true},
                                            {name:"نادر",family:"براهویی عرب",deceased:true},
                                            {name:"تاج محمد",family:"براهویی عرب",deceased:true},
                                            {name:"مندوست",family:"براهویی عرب",deceased:true,
                                                spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                children:[
                                                    {name:"علی",deceased:true,hiatZ:true,
                                                        spouse:{name:"پری",hiatZ:true,gender:"f",deceased:true},
                                                        children:[
                                                            {name:"",deceased:true,hiatZ:true},
                                                        ]

                                                    },
                                                    {name:"بهروز",deceased:true},
                                                    {name:"فاطمه",gender:"f",deceased:true},
                                                    {name:"بی بی",gender:"f",deceased:true},
                                                ]
                                            },
                                            {name:"شریف",family:"براهویی عرب",key:"sharifShir",deceased:true,
                                                spouse:{name:"زهرا",key:"zahraKhanom",gender:"f",deceased:true,hiatZ:true},
                                                children:[
                                                    {name:"مصطفی",family:"براهویی عرب",deceased:true,
                                                        spouse:{name:"نامعلوم",gender:"f",deceased:true,hiatZ:true},
                                                        children:[
                                                            {name:"نامعلوم",family:"براهویی عرب",deceased:true,gender:"f",hiatZ:true}
                                                        ]
                                                    },
                                                    {name:"محمد صادق",family:"براهویی عرب",deceased:true,hiatZ:true},
                                                    {name:"سارا",family:"براهویی عرب",deceased:true,gender:"f",hiatZ:true},
                                                    {name:"سعیده",family:"براهویی عرب",key:"saeideSharif",deceased:true,gender:"f",hiatZ:true,
                                                        spouse:{name:"حامد",family:"براهویی",key:"hamedMohammad",deceased:true,hiatZ:true},
                                                        children:[
                                                            {name:"نامعلوم",family:"براهویی",deceased:true,gender:"f",hiatZ:true}
                                                        ]
                                                    },
                                                ]
                                            },
                                            {name:"حلیم",key:"halimShir",family:"براهویی عرب",deceased:true,
                                                spouse:{name:"فاطمه",key:"fatemeAta",gender:"f",deceased:true},
                                                children:[
                                                    {name:"امیر",family:"براهویی عرب",deceased:true,hiatZ:true},
                                                    {name:"حسین",family:"براهویی عرب",deceased:true},
                                                    {name:"شیر محمد",family:"براهویی عرب",deceased:true},
                                                    {name:"محمد",family:"براهویی عرب",key:"mohHalim",deceased:true,hiatZ:true,
                                                        spouse:{name:"فاطمه",key:"fatNor",gender:"f",deceased:true,hiatZ:true},
                                                        children:[
                                                            {name:"سامان",deceased:true,hiatZ:true},
                                                            {name:"ادریس",deceased:true,hiatZ:true},
                                                            {name:"سمانه",key:"samanMoha",gender:"f",deceased:true,hiatZ:true,
                                                                spouse:{name:"حامد",key:"hamedGhafor",deceased:true},
                                                                children:[

                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {name:"رسول",family:"براهویی عرب",key:"rasoHalim",deceased:true,hiatZ:true,
                                                        spouse:{name:"زبیده",key:"zobidNor",gender:"f",deceased:true,hiatZ:true},
                                                        children:[
                                                            {name:"احسان",deceased:true,hiatZ:true},
                                                            {name:"وحید",deceased:true,hiatZ:true},
                                                            {name:"نازنین",gender:"f",deceased:true,hiatZ:true},
                                                            {name:"زهرا",gender:"f",deceased:true,hiatZ:true},
                                                        ]
                                                    },
                                                    {name:"حسن",family:"براهویی عرب",deceased:true,hiatZ:true,
                                                        spouse:{name:"ماه گل | مراد بی بی",gender:"f",deceased:true},
                                                        children:[
                                                            {name:"ستار",deceased:true,hiatZ:true},
                                                            {name:"الهام",gender:"f",deceased:true,hiatZ:true},
                                                            {name:"سارینا",gender:"f",deceased:true,hiatZ:true},
                                                            {name:"مژگان",gender:"f",deceased:true,hiatZ:true},
                                                            {name:"ستاره",gender:"f",deceased:true,hiatZ:true},
                                                            
                                                        ]
                                                    },
                                                    {name:"عمر",key:"omarHalim",deceased:true,hiatZ:true,
                                                        spouse:{name:"آمنه",hiatZ:true,key:"ameneMola",gender:"f",deceased:true},
                                                        children:[
                                                            {name:"یاسمن",gender:"f",deceased:true,hiatZ:true,}
                                                        ]
                                                    },
                                                    {name:"ماه رخ",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true,
                                                        spouse:{name:"صفر",deceased:true},
                                                        children:[
                                                            {name:"نادر",key:"naderMajh",deceased:true,hiatZ:true,
                                                                spouse:{name:"افسانه",key:"afsaneGhaf",hiatZ:true,gender:"f",deceased:true},
                                                                children:[
                                                                    {name:"یونس",deceased:true,hiatZ:true}
                                                                ]
                                                            },
                                                            {name:"منصور",deceased:true,hiatZ:true},
                                                            {name:"ناصر",deceased:true},
                                                            {name:"مرضیه",gender:"f",deceased:true,hiatZ:true},
                                                        ]
                                                    },
                                                    {name:"عصمت",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true,
                                                        spouse:{name:"محمد",hiatZ:true,deceased:true},
                                                        children:[

                                                        ]
                                                    },
                                                    {name:"گلبهار",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true,
                                                        spouse:{name:"جمعه",deceased:true,hiatZ:true},
                                                        children:[
                                                            {name:"ایمان",deceased:true,hiatZ:true},
                                                            {name:"یگانه",gender:"f",deceased:true,hiatZ:true},
                                                        ]
                                                    },
                                                    {name:"در بی بی",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true},
                                                ]
                                            },
                                            {name:"ابراهیم",key:"ebrahShir",family:"براهویی",deceased:true,
                                                spouse:{name:"در بی بی",key:"doorbibiMoorad",family:"لوطکی",gender:"f",deceased:true},
                                                children:[
                                                    {name:"محمد",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"عبدالله",key:"abdollEbrah",family:"براهویی",hiatZ:true,deceased:true,
                                                      spouse:{name:"پری",key:"pariMola",family:"لوطکی",hiatZ:true,deceased:true},
                                                      children:[

                                                      ]
                                                    },
                                                    {name:"ماه گنج",family:"براهویی",key:"mahganjDoorBibi",gender:"f",deceased:true,
                                                        spouse:{name:"فقیر محمد",family:"رضایی",key:"faghirMohammadBarfi",hiatZ:true,deceased:true},
                                                        children:[
                                                            {name:"الله داد",family:"رضایی",deceased:true},
                                                            {name:"خداداد",family:"رضایی",hiatZ:true,deceased:true,
                                                                spouse:{name:"راحله",hiatZ:true,gender:"f",deceased:true},
                                                                children:[
                                                                    {name:"ایرج",hiatZ:true,deceased:true},
                                                                    {name:"امیر علی",hiatZ:true,deceased:true},
                                                                    {name:"مایان",hiatZ:true,deceased:true},
                                                                ]
                                                            },
                                                            {name:"بیدالله",family:"رضایی",deceased:true},
                                                            {name:"یدالله",family:"رضایی",hiatZ:true,deceased:true},
                                                            {name:"فاطمه",family:"رضایی",gender:"f",key:"fatemeFaghir",hiatZ:true,deceased:true,
                                                                spouse:{name:"علی",key:"aliKhanoom",hiatZ:true,deceased:true},
                                                                children:[
                                                                    {name:"سجاد",hiatZ:true,deceased:true},
                                                                    {name:"یگانه",gender:"f",hiatZ:true,deceased:true},
                                                                ]
                                                            },
                                                            {name:"زینب",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"خدیجه",family:"رضایی",gender:"f",deceased:true},
                                                        ]
                                                    },

                                                ]
                                            },
                                            {name:"نور محمد",deceased:true,
                                                spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                children:[
                                                    {name:"مهدی",deceased:true},
                                                    {name:"علی",key:"aliNoorM",hiatZ:true,deceased:true,
                                                        spouse:{name:"زهرا",key:"zahraBozerg",family:"مرادی",gender:"f",deceased:true},
                                                        children:[
                                                            {name:"مهدی",hiatZ:true,deceased:true}
                                                        ]
                                                    },
                                                    {name:"محمد",hiatZ:true,deceased:true},
                                                    {name:"مریم",key:"marNor",gender:"f",hiatZ:true,deceased:true,
                                                        spouse:{name:"نائب",key:"naebNor",hiatZ:true,deceased:true},
                                                        children:[
                                                            {name:"حنانه",gender:"f",hiatZ:true,deceased:true}
                                                        ]
                                                    },
                                                    {name:"منیره",key:"monNor",gender:"f",hiatZ:true,deceased:true,
                                                        spouse:{name:"علی",family:"لوطکی",key:"aliBasi",gender:"f",deceased:true},
                                                        children:[
                                                            {name:"عدنان",family:"لوطکی",hiatZ:true,place:"بیرجند"},
                                                            {name:"حلما",gender:"f",family:"لوطکی",hiatZ:true,place:"بیرجند"}
                                                        ]
                                                    },
                                                    {name:"مینا",gender:"f",hiatZ:true,deceased:true},
                                                ]
                                            },
                                            {name:"نور الله",key:"noorShir",deceased:true,
                                                spouse:{name:"گل بی بی",key:"goolMorad",hiatZ:true,family:"لوطکی",gender:"f",deceased:true},
                                                children:[
                                                    {name:"محمد",hiatZ:true,deceased:true},
                                                    {name:"غفور",hiatZ:true,deceased:true,
                                                        spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                        children:[
                                                            {name:"حامد",key:"hamedGhafor",hiatZ:true,deceased:true,
                                                                spouse:{name:"سمانه",key:"samanMoha",deceased:true},
                                                                children:[

                                                                ]
                                                            },
                                                            {name:"افسانه",key:"afsaneGhaf",gender:"f",hiatZ:true,deceased:true,
                                                                spouse:{name:"نادر",key:"naderMajh",hiatZ:true,deceased:true},
                                                                children:[
                                                                    {name:"یونس",deceased:true,hiatZ:true}
                                                                ]
                                                            },
                                                            {name:"فرزانه",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"فریبا",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"حمیرا",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"فاطمه",gender:"f",hiatZ:true,deceased:true},

                                                        ]
                                                    },
                                                    {name:"نائب",key:"naebNor",hiatZ:true,deceased:true,
                                                        spouse:{name:"مریم",gender:"f",key:"marNor",hiatZ:true,deceased:true},
                                                        children:[
                                                            {name:"حنانه",gender:"f",hiatZ:true,deceased:true}
                                                        ]
                                                    },
                                                    {name:"ظاهر",hiatZ:true,deceased:true},
                                                    {name:"زبیده",key:"zobidNor",gender:"f",hiatZ:true,deceased:true,
                                                        spouse:{name:"رسول",key:"rasoHalim",deceased:true},
                                                        children:[
                                                            {name:"احسان",deceased:true,hiatZ:true},
                                                            {name:"وحید",deceased:true,hiatZ:true},
                                                            {name:"نازنین",gender:"f",deceased:true,hiatZ:true},
                                                            {name:"زهرا",gender:"f",deceased:true,hiatZ:true},
                                                        ]
                                                    },
                                                    {name:"مهناز",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"مرضیه",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"طاهره",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"فاطمه",gender:"f",hiatZ:true,deceased:true},
                                                ]
                                            },

                                            {name:"نور بی بی",gender:"f",deceased:true},
                                        ]
                                    },
                                    {name:"یعقوب خان",deceased:true,
                                        spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                        children:[
                                            {name:"در محمد",key:"dormYah",deceased:true,
                                                spouse:{name:"در بی بی",key:"dorLadad",gender:"f",deceased:true},
                                                children:[
                                                    {name:"حاجی",key:"hajiDorb",family:"رضایی",hiatZ:true,place:"کرت آباد",
                                                        spouse:{name:"نامعلوم",gender:"f",family:"براهویی",hiatZ:true,place:"کرت آباد"},
                                                        children:[
                                                            {name:"محمد",family:"رضایی",hiatZ:true,place:"کرت آباد"},
                                                            {name:"ناصر",family:"رضایی",key:"NaserHaji",hiatZ:true,place:"کرت آباد",
                                                            spouse:{name:"مریم",gender:"f",family:"رضایی",key:"maryamRahim",hiatZ:true,place:"کرت آباد"},
                                                            children:[
                                                                {name:"امیر",family:"رضایی",hiatZ:true,place:"کرت آباد"}
                                                            ]},
                                                            {name:"محمود",family:"رضایی",hiatZ:true,place:"کرت آباد"},
                                                            {name:"مهناز",gender:"f",family:"رضایی",key:"mahnazHaji",hiatZ:true,place:"کرت آباد",
                                                            spouse:{name:"موسی",family:"رضایی",key:"moosaRahim",hiatZ:true,place:"کرت آباد"},
                                                            children:[
                                                                {name:"ستاره",gender:"f",family:"رضایی",hiatZ:true,place:"کرت آباد"}
                                                            ]},

                                                            {name:"رضوان",gender:"f",key:"rihanHaji",family:"رضایی",hiatZ:true,place:"کرت آباد",
                                                            spouse:{name:"حسن",family:"چمن پیرا",key:"hasanRahim1",hiatZ:true,place:"کرت آباد"},
                                                            children:[
                                                                {}
                                                            ]},
                                                        ]},
                                                    {name:"نظر",deceased:true,hiatZ:true,
                                                        spouse:{name:"نامعلوم",gender:"f",deceased:true,hiatZ:true},
                                                        children:[
                                                            {name:"یاسین",hiatZ:true,deceased:true},
                                                            {name:"مریم",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"میترا",gender:"f",hiatZ:true,deceased:true},
                                                        ]
                                                    },
                                                    {name:"سمندر",deceased:true},
                                                    {name:"نوروز",deceased:true},
                                                    {name:"رسول",deceased:true},
                                                    {name:"احمد",deceased:true},
                                                    {name:"محمد",deceased:true},
                                                    {name:"ناز بی بی",gender:"f",deceased:true},
                                                    {name:"مهناز",gender:"f",deceased:true},
                                                    {name:"مریم",gender:"f",deceased:true},
                                                    {name:"فاطمه",gender:"f",deceased:true},
                                                    {name:"فرحناز",gender:"f",deceased:true},
                                                    {name:"شهناز",gender:"f",deceased:true},
                                                    {name:"ماه رخ",gender:"f",deceased:true},

                                                ]
                                            },
                                            {name:"حمزه",key:"hamzeYahgh",deceased:true,
                                                spouse:{name:"شاه پری",key:"shahEsma",gender:"f",hiatZ:true},
                                                children:[
                                                    {name:"محمد",family:"نعیمی فر",key:"moShahpari",deceased:true,place:"بیرجند",
                                                    spouse:{name:"سارا",gender:"f",key:"saraNavab",hiatZ:true,deceased:true,place:"بیرجند"},
                                                    children:[
                                                        {name:"الیاس",family:"نعیمی فر",hiatZ:true,place:"بیرجند"},
                                                        {name:"ادریس",family:"نعیمی فر",hiatZ:true,place:"بیرجند"},
                                                        {name:"عطیه",gender:"f",family:"نعیمی فر",hiatZ:true,place:"زابل",
                                                        spouse:{name:"حمید",family:"لوطکی",deceased:true,hiatZ:true,place:"زابل"}}
                                                    ]},
                                                    {name:"حمید",family:"نعیمی فر",hiatZ:true,place:"کرت آباد",
                                                      spouse:{name:"شاه پری",key:"shahEsma",gender:"f",hiatZ:true},
                                                      children:[

                                                      ]
                                                    },
                                                    {name:"مهناز",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"},
                                                    {name:"زهرا",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"},
                                                    {name:"فرحناز",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"},
                                                    {name:"خورشید",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"}
                                            ]},
                                            {name:"زمان",deceased:true,
                                                spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                children:[
                                                    {name:"رحیم",hiatZ:true,family:"پارسافر",deceased:true,
                                                        spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                        children:[
                                                            {name:"محمد رضا",family:"پارسافر",hiatZ:true,deceased:true},
                                                            {name:"علیرضا",family:"پارسافر",hiatZ:true,deceased:true},
                                                            {name:"حمید رضا",family:"پارسافر",hiatZ:true,deceased:true},
                                                            {name:"حدیثه",family:"پارسافر",gender:"f",hiatZ:true,deceased:true},
                                                        ]
                                                    },
                                                    {name:"حسین",key:"hosseinZaman",family:"پارسافر",hiatZ:true,deceased:true,
                                                        spouse:{name:"افسانه",key:"afsaneMohammadAli",family:"لوطکی",gender:"f",hiatZ:true,deceased:true},
                                                        children:[
                                                            {name:"محمد طاها",family:"پارسافر",hiatZ:true,deceased:true},
                                                            {name:"محمد صدرا",family:"پارسافر",hiatZ:true,deceased:true},
                                                        ]
                                                    },
                                                    {name:"عبدالله",key:"habdolZaman",family:"پارسافر",hiatZ:true,place:"کرت آباد",
                                                        spouse:{name:"جان بی بی",key:"janBasii",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                                        children:[
                                                            {name:"محمد یاسین",family:"براهویی",hiatZ:true,place:"بیرجند"},
                                                            {name:"آسیه",gender:"f",family:"براهویی",hiatZ:true,place:"بیرجند"}
                                                        ]
                                                    },
                                                    {name:"مصطفی",family:"پارسافر",hiatZ:true,deceased:true},
                                                    {name:"زینب",key:"zinabZaman",gender:"f",hiatZ:true,deceased:true,
                                                        spouse:{name:"نظر",key:"nezarJihand",hiatZ:true,deceased:true},
                                                        children:[
                                                            {name:"مائده",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"مریم",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"فاطمه",gender:"f",hiatZ:true,deceased:true},
                                                        ]
                                                    },
                                                    {name:"مریم",gender:"f",hiatZ:true,deceased:true,
                                                        spouse:{name:"حسین",hiatZ:true,deceased:true},
                                                        children:[

                                                        ]
                                                    },

                                                ]
                                            },
                                            {name:"امیر",deceased:true},
                                            {name:"حلیمه",gender:"f",deceased:true},
                                            {name:"فاطمه",gender:"f",deceased:true},
                                            {name:"نور بی بی",gender:"f",deceased:true},
                                            {name:"در بیگ",gender:"f",deceased:true,
                                                spouse:{name:"نامعلوم",deceased:true},
                                                children:[
                                                    {name:"ابراهیم",hiatZ:true,deceased:true},
                                                    {name:"رحمان",hiatZ:true,deceased:true},
                                                    {name:"خداداد",hiatZ:true,deceased:true},

                                                ]
                                            },
                                            


                                        ]
                                    },
                                    {name:"حسین",deceased:true,
                                        spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                        children:[
                                            {name:"نادر",deceased:true,
                                                spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                children:[
                                                    {name:"امین",hiatZ:true,deceased:true},
                                                    {name:"اسماء",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"فائذه",gender:"f",hiatZ:true,deceased:true},
                                                ]
                                            },
                                            {name:"در ملک",gender:"f",deceased:true,hiatZ:true},
                                            {name:"در بی بی",gender:"f",deceased:true,hiatZ:true},
                                            {name:"نوری",key:"nooriHossein",gender:"f",deceased:true,hiatZ:true,
                                              spouse:{name:"محمد علی",hiatZ:true,family:"لوطکی",deceased:true},
                                              children:[
                                                {name:"حمید",hiatZ:true,family:"لوطکی",deceased:true},
                                                {name:"محمد امین",key:"mohamMohamm",hiatZ:true,family:"لوطکی",deceased:true,
                                                      spouse:{name:"اسماء",gender:"f",key:"asmaGool",hiatZ:true,family:"مرادی",deceased:true},
                                                      children:[
                                                        {name:"افسون",gender:"f",hiatZ:true,family:"لوطکی",deceased:true}
                                                      ]
                                                },
                                                {name:"افسانه",key:"afsaneMohammadAli",family:"لوطکی",gender:"f",hiatZ:true,deceased:true,
                                                    spouse:{name:"حسین",key:"hosseinZaman",family:"پارسافر",hiatZ:true,deceased:true},
                                                    children:[
                                                        {name:"محمد طاها",family:"پارسافر",hiatZ:true,deceased:true},
                                                        {name:"محمد صدرا",family:"پارسافر",hiatZ:true,deceased:true},
                                                    ]
                                                },
                                                {name:"ریحانه",gender:"f",hiatZ:true,family:"لوطکی",deceased:true,
                                                  spouse:{name:"شریف",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"یاسین",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"سمینا",gender:"f",hiatZ:true,family:"لوطکی",deceased:true,
                                                  spouse:{name:"نامعلوم",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد سبحان",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"سمانه",gender:"f",hiatZ:true,family:"لوطکی",deceased:true},
                                                {name:"سمیرا",key:"samiraMohammad",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                                  spouse:{name:"امین",key:"aminMolaali",hiatZ:true,family:"لوطکی",deceased:true},
                                                  children:[

                                                  ]
                                                },
                                              ]
                                            },
                                            {name:"بی بی",gender:"f",deceased:true,hiatZ:true,
                                                spouse:{name:"نامعلوم",deceased:true},
                                                children:[
                                                    {name:"بهمن",hiatZ:true,deceased:true},
                                                    {name:"ایران",gender:"f",hiatZ:true,deceased:true},
                                                ]
                                            },
                                            {name:"مدینه",gender:"f",deceased:true,hiatZ:true},

                                        ]
                                    },
                                    {name:"مراد بی بی",key:"mooradBibiGami",gender:"f",deceased:true,
                                      spouse:{name:"حاجی حلیم خان",key:"halimGoolMohammad",family:"لوطکی",deceased:true},
                                      children:[
                                        {name:"مجید",family:"لوطکی",deceased:true},
                                        {name:"جیهند",family:"لوطکی",deceased:true,
                                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                          children:[
                                            {name:"عزیز",family:"رضایی",key:"azizMooradbibi",hiatZ:true,deceased:true,
                                              spouse:{name:"حلیمه",family:"رضایی",key:"halimeNoor",gender:"f",deceased:true},
                                              children:[
                                                {name:"محراج",hiatZ:true,deceased:true},
                                                {name:"حنانه",gender:"f",hiatZ:true,deceased:true},
                                                {name:"نیایش",gender:"f",hiatZ:true,deceased:true},
                                              ]
                                            },
                                            {name:"نظر",hiatZ:true,deceased:true,
                                              spouse:{name:"زینب",key:"zinabZaman",gender:"f",hiatZ:true,deceased:true},
                                                children:[
                                                    {name:"مائده",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"مریم",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"فاطمه",gender:"f",hiatZ:true,deceased:true},
                                                ]
                                            },
                                            {name:"رضا",deceased:true},
                                            {name:"نبی",deceased:true},
                                            {name:"نور محمد",deceased:true},
                                            {name:"محمد عمر",deceased:true},
                                            {name:"فاطمه",key:"fatNor",hiatZ:true,gender:"f",deceased:true,
                                              spouse:{name:"محمد",key:"mohHalim",gender:"f",deceased:true},
                                              children:[
                                                  {name:"سامان",deceased:true,hiatZ:true},
                                                  {name:"ادریس",deceased:true,hiatZ:true},
                                                  {name:"سمانه",gender:"f",deceased:true,hiatZ:true,
                                                    spouse:{name:"حامد",key:"hamedGhafor",deceased:true},
                                                      children:[

                                                      ]
                                                  }
                                              ]
                                            },
                                            {name:"حلیمه",hiatZ:true,gender:"f",deceased:true},
                                            {name:"مدینه",hiatZ:true,gender:"f",deceased:true},

                                          ]

                                        },
                                        {name:"مولا علی",family:"لوطکی",key:"moolaAliHalimKhan",deceased:true,
                                          spouse:{name:"خاتون",key:"khatoonShirDel",family:"رضایی",gender:"f",deceased:true},
                                          children:[
                                            {name:"محمود",family:"لوطکی",deceased:true},
                                            {name:"محمد",hiatZ:true,key:"mohammadMolaAli",family:"لوطکی",deceased:true,
                                              spouse:{name:"مهناز",family:"رضایی",key:"mahnazMohammad",gender:"f",hiatZ:true},
                                              children:[
                                                {name:"اسامه",hiatZ:true,family:"لوطکی",deceased:true,}
                                              ]
                                            },
                                            {name:"احمد",key:"ahmadMolaali",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                              spouse:{name:"مدینه",key:"madineGolbibi",gender:"f",family:"رضایی",hiatZ:true,place:"کرت آباد"},
                                              children:[
                                                {name:"طاها",family:"لوطکی",deceased:true,place:"کرت آباد"},
                                                {name:"محمود",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                                {name:"کوثر",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"}
                                              ],
                                            },
                                            {name:"حمید",hiatZ:true,family:"لوطکی",deceased:true,
                                              spouse:{name:"اسماء",key:"",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"},
                                              children:[
                                                
                                              ]
                                            },
                                            {name:"امین",key:"aminMolaali",hiatZ:true,family:"لوطکی",deceased:true,
                                              spouse:{name:"سمیرا",key:"samiraMohammad",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                              children:[

                                              ]
                                            },
                                            {name:"عصمت",key:"esmatMolaAli",gender:"f",hiatZ:true,family:"لوطکی",deceased:true,
                                              spouse:{name:"گل محمد",key:"goolMahganj",hiatZ:true,family:"مرادی",deceased:true},
                                              children:[
                                                {name:"جواد",hiatZ:true,family:"مرادی",deceased:true},
                                                {name:"عماد",hiatZ:true,family:"مرادی",deceased:true},
                                                {name:"اسماء",gender:"f",key:"asmaGool",hiatZ:true,family:"مرادی",deceased:true,
                                                  spouse:{name:"محمد امین",key:"mohamMohamm",hiatZ:true,family:"لوطکی",deceased:true},
                                                  children:[
                                                    {name:"افسون",gender:"f",hiatZ:true,family:"لوطکی",deceased:true}
                                                  ]
                                                },
                                                {name:"سمیه",gender:"f",hiatZ:true,family:"مرادی",deceased:true},

                                              ]
                                            },
                                            {name:"مرضیه",gender:"f",key:"marziyeMoolaAli",hiatZ:true,family:"لوطکی",deceased:true,
                                                spouse:{name:"امان الله",key:"amanoolahAmir",hiatZ:true,family:"رضایی",deceased:true},
                                                children:[
                                                  {name:"امیر رضا",hiatZ:true,family:"رضایی",deceased:true},
                                                  {name:"مجتبی",hiatZ:true,family:"رضایی",deceased:true},
                                                  {name:"یونس",hiatZ:true,family:"رضایی",deceased:true},
                                                  {name:"حفسه",gender:"f",hiatZ:true,family:"رضایی",deceased:true},
                                                ]
                                            },
                                            {name:"پری",key:"pariMola",family:"لوطکی",hiatZ:true,deceased:true,
                                              spouse:{name:"عبدالله",key:"abdollEbrah",family:"براهویی",hiatZ:true,deceased:true},
                                              children:[

                                              ]
                                            },
                                            {name:"آمنه",hiatZ:true,key:"ameneMola",gender:"f",deceased:true,
                                                spouse:{name:"عمر",key:"omarHalim",deceased:true,hiatZ:true},
                                                children:[
                                                    {name:"یاسمن",gender:"f",deceased:true,hiatZ:true,}
                                                ]
                                            },
                                            {name:"زهرا",gender:"f",hiatZ:true,family:"لوطکی",deceased:true},
                                          ]
                                        },
                                        {name:"عیسی",key:"easaMorad",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                          spouse:{name:"بسی",key:"basiEsmaeil",gender:"f",hiatZ:true,place:"کرت آباد"},
                                            children:[
                                              {name:"ناصر",family:"لوطکی",deceased:true,place:"کرت آباد"},
                                              {name:"علی",key:"aliBasi",family:"لوطکی",hiatZ:true,place:"بیرجند",
                                                spouse:{name:"منیره",key:"monNor",gender:"f",hiatZ:true,place:"بیرجند"},
                                                children:[
                                                  {name:"عدنان",family:"لوطکی",hiatZ:true,place:"بیرجند"},
                                                  {name:"حلما",gender:"f",family:"لوطکی",hiatZ:true,place:"بیرجند"}
                                                ]},
                                              {name:"حسین",family:"لوطکی",hiatZ:true,place:"بیرجند",
                                                spouse:{name:"نامشخص",gender:"f",hiatZ:true,place:"بیرجند"},
                                                children:[
                                                  {name:"آیناز",gender:"f",family:"لوطکی",hiatZ:true,place:"بیرجند"}
                                                ]},
                                              {name:"یاسر",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                              {name:"جان بی بی",key:"janBasii",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                                spouse:{name:"عبدالله",key:"habdolZaman",family:"پارسافر",hiatZ:true,place:"کرت آباد"},
                                                children:[
                                                  {name:"محمد یاسین",family:"براهویی",hiatZ:true,place:"بیرجند"},
                                                  {name:"آسیه",gender:"f",family:"براهویی",hiatZ:true,place:"بیرجند"}
                                                ]},
                                              /* ↓ طاهره از شاخه لوطکی، متصل به ظاهر از شاخه براهویی */
                                              {name:"طاهره",gender:"f",family:"لوطکی",hiatZ:true,place:"زاهدان",key:"taher",
                                                spouse:{name:"ظاهر",family:"براهویی",hiatZ:true,place:"زاهدان",key:"zaher"},
                                                children:[
                                                  {name:"اسماء",gender:"f",family:"براهویی",hiatZ:true,place:"زاهدان"},
                                                  {name:"ساینا",gender:"f",family:"براهویی",hiatZ:true,place:"زاهدان"}
                                                ]},
                                              {name:"شهناز",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"}
                                            ]
                                        },
                                        {name:"محمد علی",hiatZ:true,family:"لوطکی",deceased:true,
                                          spouse:{name:"نوری",key:"nooriHossein",gender:"f",deceased:true,hiatZ:true},
                                          children:[
                                            {name:"حمید",hiatZ:true,family:"لوطکی",deceased:true},
                                            {name:"محمد امین",key:"mohamMohamm",hiatZ:true,family:"لوطکی",deceased:true,
                                                  spouse:{name:"اسماء",gender:"f",key:"asmaGool",hiatZ:true,family:"مرادی",deceased:true},
                                                  children:[
                                                    {name:"افسون",gender:"f",hiatZ:true,family:"لوطکی",deceased:true}
                                                  ]
                                            },
                                            {name:"افسانه",key:"afsaneMohammadAli",family:"لوطکی",gender:"f",hiatZ:true,deceased:true,
                                                spouse:{name:"حسین",key:"hosseinZaman",family:"پارسافر",hiatZ:true,deceased:true},
                                                children:[
                                                    {name:"محمد طاها",family:"پارسافر",hiatZ:true,deceased:true},
                                                    {name:"محمد صدرا",family:"پارسافر",hiatZ:true,deceased:true},
                                                ]
                                            },
                                            {name:"ریحانه",gender:"f",hiatZ:true,family:"لوطکی",deceased:true,
                                              spouse:{name:"شریف",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"یاسین",hiatZ:true,deceased:true},
                                              ]
                                            },
                                            {name:"سمینا",gender:"f",hiatZ:true,family:"لوطکی",deceased:true,
                                              spouse:{name:"نامعلوم",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"محمد سبحان",hiatZ:true,deceased:true},
                                              ]
                                            },
                                            {name:"سمانه",gender:"f",hiatZ:true,family:"لوطکی",deceased:true},
                                            {name:"سمیرا",key:"samiraMohammad",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                              spouse:{name:"امین",key:"aminMolaali",hiatZ:true,family:"لوطکی",deceased:true},
                                              children:[

                                              ]
                                            },
                                          ]
                                        },
                                        {name:"گل بی بی",key:"goolMorad",hiatZ:true,family:"لوطکی",gender:"f",deceased:true,
                                            spouse:{name:"نور الله",key:"noorShir",deceased:true},
                                            children:[
                                                {name:"محمد",hiatZ:true,deceased:true},
                                                {name:"غفور",hiatZ:true,deceased:true,
                                                    spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                    children:[
                                                        {name:"حامد",key:"hamedGhafor",hiatZ:true,deceased:true,
                                                            spouse:{name:"سمانه",key:"samanMoha",deceased:true},
                                                            children:[

                                                            ]
                                                        },
                                                        {name:"افسانه",key:"afsaneGhaf",gender:"f",hiatZ:true,deceased:true,
                                                            spouse:{name:"نادر",key:"naderMajh",hiatZ:true,deceased:true},
                                                            children:[
                                                                {name:"یونس",deceased:true,hiatZ:true}
                                                            ]
                                                        },
                                                        {name:"فرزانه",gender:"f",hiatZ:true,deceased:true},
                                                        {name:"فریبا",gender:"f",hiatZ:true,deceased:true},
                                                        {name:"حمیرا",gender:"f",hiatZ:true,deceased:true},
                                                        {name:"فاطمه",gender:"f",hiatZ:true,deceased:true},

                                                    ]
                                                },
                                                {name:"نائب",key:"naebNor",hiatZ:true,deceased:true,
                                                    spouse:{name:"مریم",gender:"f",key:"marNor",hiatZ:true,deceased:true},
                                                    children:[
                                                        {name:"حنانه",gender:"f",hiatZ:true,deceased:true}
                                                    ]
                                                },
                                                {name:"ظاهر",hiatZ:true,deceased:true},
                                                {name:"زبیده",key:"zobidNor",gender:"f",hiatZ:true,deceased:true,
                                                    spouse:{name:"رسول",key:"rasoHalim",deceased:true},
                                                    children:[
                                                        {name:"احسان",deceased:true,hiatZ:true},
                                                        {name:"وحید",deceased:true,hiatZ:true},
                                                        {name:"نازنین",gender:"f",deceased:true,hiatZ:true},
                                                        {name:"زهرا",gender:"f",deceased:true,hiatZ:true},
                                                    ]
                                                },
                                                {name:"مهناز",gender:"f",hiatZ:true,deceased:true},
                                                {name:"مرضیه",gender:"f",hiatZ:true,deceased:true},
                                                {name:"طاهره",gender:"f",hiatZ:true,deceased:true},
                                                {name:"فاطمه",gender:"f",hiatZ:true,deceased:true},
                                            ]
                                        },
                                        {name:"در بی بی",key:"doorbibiMoorad",family:"لوطکی",gender:"f",deceased:true,
                                            spouse:{name:"ابراهیم",key:"ebrahShir",family:"براهویی",deceased:true},
                                            children:[
                                                {name:"محمد",family:"براهویی",hiatZ:true,deceased:true},
                                                {name:"عبدالله",key:"abdollEbrah",family:"براهویی",hiatZ:true,deceased:true,
                                                  spouse:{name:"پری",key:"pariMola",family:"لوطکی",hiatZ:true,deceased:true},
                                                  children:[

                                                  ]
                                                },
                                                {name:"ماه گنج",family:"براهویی",key:"mahganjDoorBibi",gender:"f",deceased:true,
                                                        spouse:{name:"فقیر محمد",family:"رضایی",key:"faghirMohammadBarfi",hiatZ:true,deceased:true},
                                                        children:[
                                                            {name:"الله داد",family:"رضایی",deceased:true},
                                                            {name:"خداداد",family:"رضایی",hiatZ:true,deceased:true,
                                                                spouse:{name:"راحله",hiatZ:true,gender:"f",deceased:true},
                                                                children:[
                                                                    {name:"ایرج",hiatZ:true,deceased:true},
                                                                    {name:"امیر علی",hiatZ:true,deceased:true},
                                                                    {name:"مایان",hiatZ:true,deceased:true},
                                                                ]
                                                            },
                                                            {name:"بیدالله",family:"رضایی",deceased:true},
                                                            {name:"یدالله",family:"رضایی",hiatZ:true,deceased:true},
                                                            {name:"فاطمه",family:"رضایی",gender:"f",key:"fatemeFaghir",hiatZ:true,deceased:true,
                                                                spouse:{name:"علی",key:"aliKhanoom",hiatZ:true,deceased:true},
                                                                children:[
                                                                    {name:"سجاد",hiatZ:true,deceased:true},
                                                                    {name:"یگانه",gender:"f",hiatZ:true,deceased:true},
                                                                ]
                                                            },
                                                            {name:"زینب",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"خدیجه",family:"رضایی",gender:"f",deceased:true},
                                                        ]
                                                    },
                                              ]
                                        },
                                        {name:"بی بی",family:"لوطکی",gender:"f",deceased:true},
                                      ]
                                    },
                                    {name:"مریم",gender:"f",deceased:true},
                                ]
                            },
                            {name:"علم خان",deceased:true,
                                spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                children:[
                                    {name:"عطا محمد",family:"رضایی",deceased:true,
                                      spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                      children:[
                                        {name:"مسکان",family:"رضایی",deceased:true,
                                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                          children:[
                                            {name:"حسین",family:"رضایی",deceased:true,
                                              spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                              children:[
                                                {name:"حمزه",family:"رضایی",deceased:true,
                                                  spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                  children:[
                                                    {name:"فرامرز",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"فرشید",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"فردین",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"یاسر",family:"رضایی",hiatZ:true,deceased:true},
                                                  ]

                                                },
                                                {name:"حاجی",family:"رضایی",deceased:true,
                                                  spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                  children:[
                                                    {name:"عارف",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"یاسین",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"فاطمه",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"پروین",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"ابراهیم",family:"رضایی",deceased:true,
                                                  spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                  children:[
                                                    {name:"اسماعیل",family:"رضایی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"عایشه",family:"رضایی",deceased:true,
                                                  spouse:{name:"نامعلوم",deceased:true},
                                                  children:[
                                                    {name:"سهیل",hiatZ:true,deceased:true},
                                                    {name:"اسماء",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"سما",gender:"f",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"زهرا",family:"رضایی",deceased:true},
                                              ]
                                            },

                                            {name:"سهراب",family:"رضایی",deceased:true},
                                          ]
                                        },
                                        {name:"غیبی",family:"رضایی",deceased:true,
                                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                          children:[
                                            {name:"شهباز",family:"رضایی",hiatZ:true,deceased:true,
                                              spouse:{name:"نامعلوم",hiatZ:true,gender:"f",deceased:true},
                                              children:[
                                                {name:"یوسف",family:"رضایی",key:"yousefShahbaz",hiatZ:true,deceased:true,
                                                  spouse:{name:"آمنه",family:"رضایی",key:"AmeneAMir",hiatZ:true,gender:"f",deceased:true},
                                                  children:[
                                                    {name:"محمد",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"ستایش",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"فاطمه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"صفیه",key:"safiyeShah",gender:"f",family:"رضایی",hiatZ:true,deceased:true,
                                                  spouse:{name:"حسین",key:"hosseinNoorm",family:"رضایی",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"یاسر",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"آسیه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"بارانه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"سمیه",gender:"f",family:"رضایی",hiatZ:true,deceased:true,
                                                  spouse:{name:"نامعلوم",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"پرهام",hiatZ:true,deceased:true},
                                                    {name:"برهان",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"نور بی بی",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                              ]
                                            },
                                            {name:"نور محمد",family:"رضایی",key:"normohammadGhaibi",hiatZ:true,deceased:true,
                                              spouse:{name:"عزیز بخت",gender:"f",key:"azizbakhtKhanoom",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"محمود",family:"رضایی",hiatZ:true,deceased:true,
                                                  spouse:{name:"نامعلوم",hiatZ:true,gender:"f",deceased:true},
                                                  children:[
                                                    {name:"سهیل",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"سهیلا",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"حسین",key:"hosseinNoorm",family:"رضایی",hiatZ:true,deceased:true,
                                                  spouse:{name:"صفیه",key:"safiyeShah",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"یاسر",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"آسیه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"بارانه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"رحمت",family:"رضایی",hiatZ:true,deceased:true},
                                                {name:"حسن",family:"رضایی",hiatZ:true,deceased:true},
                                                {name:"حلیمه",family:"رضایی",key:"halimeNoor",gender:"f",deceased:true,
                                                  spouse:{name:"عزیز",family:"رضایی",key:"azizMooradbibi",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محراج",hiatZ:true,deceased:true},
                                                    {name:"حنانه",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"نیایش",gender:"f",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"زینب",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                {name:"نازی",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                              ]
                                            },
                                            {name:"عزیز بخت",gender:"f",family:"رضایی",hiatZ:true,gender:"f",deceased:true,
                                              spouse:{name:"نامعلوم",deceased:true},
                                              children:[
                                                {name:"امیر",hiatZ:true,deceased:true},
                                                {name:"قادر",hiatZ:true,deceased:true},
                                                {name:"ماه بی بی",gender:"f",hiatZ:true,deceased:true,
                                                  spouse:{name:"نامعلوم",deceased:true},
                                                  children:[
                                                    {name:"موسی",hiatZ:true,deceased:true},
                                                    {name:"عیسی",hiatZ:true,deceased:true},
                                                    {name:"محمد علی",hiatZ:true,deceased:true},
                                                    {name:"سمیه",gender:"f",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"شاه بی بی",gender:"f",hiatZ:true,deceased:true},
                                                {name:"لال بی بی",gender:"f",hiatZ:true,deceased:true},

                                              ]
                                            },
                                            {name:"نور بی بی",gender:"f",family:"رضایی",gender:"f",deceased:true},

                                          ]
                                        },
                                        {name:"رستم",deceased:true,
                                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                          children:[
                                            {name:"احمد",key:"ahmadRostam",hiatZ:true,place:"زاهدان",
                                              spouse:{name:"زینب",key:"zinabMohammadAli",gender:"f",hiatZ:true},
                                              children:[
                                                {name:"مجید",hiatZ:true,place:"زاهدان"},
                                                /* ↓ ظاهر از شاخه براهویی، متصل به طاهره از لوطکی */
                                                {name:"ظاهر",hiatZ:true,place:"زاهدان",key:"zaher",
                                                  spouse:{name:"طاهره",gender:"f",family:"لوطکی",hiatZ:true,place:"زاهدان",key:"taher"},
                                                  children:[
                                                    {name:"اسماء",gender:"f",family:"براهویی",hiatZ:true,place:"زاهدان"},
                                                    {name:"ساینا",gender:"f",family:"براهویی",hiatZ:true,place:"زاهدان"}
                                                  ]},
                                                {name:"نازی",gender:"f",key:"naziAhmad",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"رحمان",key:"rahmanKhanoom",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"معین",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"داوود",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"سوده",gender:"f",hiatZ:true,place:"ارزنچه علیا"}
                                                  ]},
                                                {name:"مدینه",gender:"f",hiatZ:true}
                                            ]},
                                            {name:"خانم",hiatZ:true,gender:"f",deceased:true},
                                            {name:"فاطمه",hiatZ:true,gender:"f",deceased:true},
                                            {name:"ماه سلطان",hiatZ:true,gender:"f",deceased:true},
                                            
                                          ]
                                        },
                                        {name:"مدینه",gender:"f",deceased:true,
                                          spouse:{name:"نامعلوم",deceased:true},
                                          children:[
                                            {name:"مولا حسن",deceased:true},
                                            {name:"صفر",deceased:true},
                                            {name:"شمس الدین",deceased:true},
                                            {name:"علی جان",deceased:true},
                                            {name:"گل محمد",deceased:true},
                                            {name:"ماه بی بی",gender:"f",deceased:true},
                                            {name:"خان بی بی",gender:"f",deceased:true},
                                          ]
                                        },
                                        {name:"فاطمه",key:"fatemeAta",gender:"f",deathYear:"1405",deceased:true,
                                          spouse:{name:"حلیم",key:"halimShir",family:"براهویی عرب",deceased:true},
                                          children:[
                                              {name:"امیر",family:"براهویی عرب",deceased:true,hiatZ:true},
                                              {name:"حسین",family:"براهویی عرب",deceased:true},
                                              {name:"شیر محمد",family:"براهویی عرب",deceased:true},
                                              {name:"محمد",family:"براهویی عرب",key:"mohHalim",deceased:true,hiatZ:true,
                                                  spouse:{name:"فاطمه",key:"fatNor",gender:"f",deceased:true,hiatZ:true},
                                                  children:[
                                                      {name:"سامان",deceased:true,hiatZ:true},
                                                      {name:"ادریس",deceased:true,hiatZ:true},
                                                      {name:"سمانه",key:"samanMoha",gender:"f",deceased:true,hiatZ:true,
                                                          spouse:{name:"حامد",key:"hamedGhafor",deceased:true},
                                                          children:[

                                                          ]
                                                      }
                                                  ]
                                              },
                                              {name:"رسول",family:"براهویی عرب",key:"rasoHalim",deceased:true,hiatZ:true,
                                                  spouse:{name:"زبیده",key:"zobidNor",gender:"f",deceased:true,hiatZ:true},
                                                  children:[
                                                      {name:"احسان",deceased:true,hiatZ:true},
                                                      {name:"وحید",deceased:true,hiatZ:true},
                                                      {name:"نازنین",gender:"f",deceased:true,hiatZ:true},
                                                      {name:"زهرا",gender:"f",deceased:true,hiatZ:true},
                                                  ]
                                              },
                                              {name:"حسن",family:"براهویی عرب",key:"hassanHalim",deceased:true,hiatZ:true,
                                                  spouse:{name:"ماه گل | مراد بی بی",family:"رضایی",gender:"f",hiatZ:true,key:"mahGoolAmir",deceased:true},
                                                  children:[
                                                      {name:"ستار",family:"براهویی عرب",deceased:true,hiatZ:true},
                                                      {name:"الهام",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true},
                                                      {name:"سارینا",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true},
                                                      {name:"مژگان",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true},
                                                      {name:"ستاره",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true},
                                                      
                                                  ]
                                              },
                                              {name:"عمر",key:"omarHalim",deceased:true,hiatZ:true,
                                                  spouse:{name:"آمنه",hiatZ:true,key:"ameneMola",gender:"f",deceased:true},
                                                  children:[
                                                      {name:"یاسمن",gender:"f",deceased:true,hiatZ:true,}
                                                  ]
                                              },
                                              {name:"ماه رخ",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true,
                                                  spouse:{name:"صفر",deceased:true},
                                                  children:[
                                                      {name:"نادر",key:"naderMajh",deceased:true,hiatZ:true,
                                                          spouse:{name:"افسانه",key:"afsaneGhaf",gender:"f",hiatZ:true,deceased:true},
                                                          children:[
                                                              {name:"یونس",deceased:true,hiatZ:true}
                                                          ]
                                                      },
                                                      {name:"منصور",deceased:true,hiatZ:true},
                                                      {name:"ناصر",deceased:true},
                                                      {name:"مرضیه",gender:"f",deceased:true,hiatZ:true},
                                                  ]
                                              },
                                              {name:"عصمت",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true,
                                                  spouse:{name:"محمد",hiatZ:true,deceased:true},
                                                  children:[

                                                  ]
                                              },
                                              {name:"گلبهار",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true,
                                                  spouse:{name:"جمعه",deceased:true,hiatZ:true},
                                                  children:[
                                                      {name:"ایمان",deceased:true,hiatZ:true},
                                                      {name:"یگانه",gender:"f",deceased:true,hiatZ:true},
                                                  ]
                                              },
                                              {name:"در بی بی",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true},
                                          ]
                                        },
                                        {name:"ماه گنج",hiatZ:true,gender:"f",deceased:true,
                                          spouse:{name:"میرزا",family:"مرادی",deceased:true},
                                          children:[
                                            {name:"محمد",family:"مرادی",hiatZ:true,deceased:true,
                                              spouse:{name:"ماه پری",gender:"f",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"عمران",family:"مرادی",hiatZ:true,deceased:true},
                                                {name:"آرزو",family:"مرادی",gender:"f",hiatZ:true,deceased:true,
                                                  spouse:{name:"میثم",hiatZ:true,deceased:true},
                                                  children:[]
                                                },
                                                {name:"هانیه",family:"مرادی",gender:"f",hiatZ:true,deceased:true},
                                              ]
                                            },
                                            {name:"گل محمد",key:"goolMahganj",hiatZ:true,family:"مرادی",deceased:true,
                                              spouse:{name:"عصمت",key:"esmatMolaAli",gender:"f",hiatZ:true,family:"لوطکی",deceased:true},
                                              children:[
                                                {name:"جواد",hiatZ:true,family:"مرادی",deceased:true},
                                                {name:"عماد",hiatZ:true,family:"مرادی",deceased:true},
                                                {name:"اسماء",gender:"f",key:"asmaGool",hiatZ:true,family:"مرادی",deceased:true,
                                                  spouse:{name:"محمد امین",key:"mohamMohamm",hiatZ:true,family:"لوطکی",deceased:true},
                                                  children:[
                                                    {name:"افسون",gender:"f",hiatZ:true,family:"لوطکی",deceased:true}
                                                  ]
                                                },
                                                {name:"سمیه",gender:"f",hiatZ:true,family:"مرادی",deceased:true},
                                              ]
                                            },
                                            {name:"رحیم",family:"مرادی",hiatZ:true,deceased:true,
                                              spouse:{name:"زینب",gender:"f",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"عرفان",family:"مرادی",hiatZ:true,deceased:true},
                                                {name:"دینا",family:"مرادی",gender:"f",hiatZ:true,deceased:true},
                                              ]
                                            },
                                            {name:"بزرگ",gender:"f",family:"مرادی",key:"BozergMahGanj",hiatZ:true,deceased:true,
                                              spouse:{name:"محمد",family:"براهویی",key:"mohammadKamKhan",deceased:true},
                                              children:[
                                                {name:"عصمت",gender:"f",family:"مرادی",key:"esmatBozorg",hiatZ:true,deceased:true,
                                                  spouse:{name:"منصور",family:"براهویی",key:"mansurRasol",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"معید",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"میعاد",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"اسراء",family:"براهویی",gender:"f",hiatZ:true,deceased:true}
                                                  ]
                                                },
                                                {name:"مرضیه",gender:"f",key:"marzieMohammad",family:"مرادی",hiatZ:true,deceased:true,
                                                  spouse:{name:"شیر احمد",key:"ShirAhmadMahjan",family:"براهویی",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد پارسا",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"محمد آرسام",family:"براهویی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"زهرا",key:"zahraBozerg",family:"مرادی",gender:"f",deceased:true,
                                                  spouse:{name:"علی",key:"aliNoorM",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"مهدی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                              ]
                                            },
                                          ]
                                        },
                                        {name:"ماه بیک",gender:"f",deceased:true},
                                      ]
                                    },
                                    {name:"شیردل خان",deceased:true,
                                      spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                      children:[
                                        {name:"رحیم",deceased:true,
                                          spouse:{name:"نامعلوم",gender:"f",hiatZ:true,deceased:true},
                                          children:[
                                            {name:"موسی",family:"رضایی",key:"moosaRahim",hiatZ:true,place:"کرت آباد",
                                                spouse:{name:"مهناز",gender:"f",family:"رضایی",key:"mahnazHaji",hiatZ:true,place:"کرت آباد"},
                                                children:[
                                                    {name:"ستاره",gender:"f",family:"رضایی",hiatZ:true,place:"کرت آباد"}
                                                ],
                                            },
                                            {name:"مریم",gender:"f",family:"رضایی",key:"maryamRahim",hiatZ:true,place:"کرت آباد",
                                              spouse:{name:"ناصر",family:"رضایی",key:"NaserHaji",hiatZ:true,place:"کرت آباد"},
                                              children:[
                                                  {name:"امیر",family:"رضایی",hiatZ:true,place:"کرت آباد"}
                                              ],
                                            },
                                            {name:"منصوره",family:"رضایی",hiatZ:true,gender:"f",deceased:true}
                                          ]
                                        },
                                        {name:"کام خان",deceased:true,
                                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                          children:[
                                            {name:"محمد",family:"براهویی",key:"mohammadKamKhan",deceased:true,
                                              spouse:{name:"بزرگ",gender:"f",family:"مرادی",key:"BozergMahGanj",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"عصمت",gender:"f",family:"مرادی",key:"esmatBozorg",hiatZ:true,deceased:true,
                                                  spouse:{name:"منصور",family:"براهویی",key:"mansurRasol",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"معید",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"میعاد",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"اسراء",family:"براهویی",gender:"f",hiatZ:true,deceased:true}
                                                  ]
                                                },
                                                {name:"مرضیه",gender:"f",key:"marzieMohammad",family:"مرادی",hiatZ:true,deceased:true,
                                                  spouse:{name:"شیر احمد",key:"ShirAhmadMahjan",family:"براهویی",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد پارسا",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"محمد آرسام",family:"براهویی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"زهرا",key:"zahraBozerg",family:"مرادی",gender:"f",deceased:true,
                                                  spouse:{name:"علی",key:"aliNoorM",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"مهدی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                              ]
                                            },
                                            {name:"رسول",key:"rasolKamKhan",hiatZ:true,deceased:true,place:"ارزنچه علیا",
                                              spouse:{name:"بی بی",gender:"f",key:"bibiMohammadAli",deceased:true,place:"زاهدان"},
                                              children:[
                                                {name:"منصور",family:"براهویی",key:"mansurRasol",hiatZ:true,deceased:true,place:"سنگان",
                                                  spouse:{name:"عصمت",gender:"f",family:"مرادی",key:"esmatBozorg",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"معید",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"میعاد",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"اسراء",family:"براهویی",gender:"f",hiatZ:true,deceased:true}
                                                  ]
                                                },
                                                {name:"معصومه",gender:"f",hiatZ:true,place:"زاهدان",deceased:true,
                                                  spouse:{name:"رسول",key:"rasulbibi1",hiatZ:true,place:"زاهدان",deceased:true},
                                                  children:[
                                                    {name:"محمد فاضل",hiatZ:true,place:"زاهدان",deceased:true},
                                                    {name:"فائزه",gender:"f",hiatZ:true,place:"زاهدان",deceased:true}
                                                  ]}
                                              ],
                                            },
                                            {name:"ماه جان",gender:"f",hiatZ:true,deceased:true,
                                              spouse:{name:"نامعلوم",deceased:true},
                                              children:[
                                                {name:"نور احمد",hiatZ:true,deceased:true,
                                                  spouse:{name:"نامعلوم",gender:"f",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد امین",hiatZ:true,deceased:true},
                                                    {name:"متین",hiatZ:true,deceased:true},
                                                    {name:"میکائیل",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"شیر احمد",key:"ShirAhmadMahjan",family:"براهویی",hiatZ:true,deceased:true,
                                                  spouse:{name:"مرضیه",gender:"f",key:"marzieMohammad",family:"مرادی",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد پارسا",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"محمد آرسام",family:"براهویی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"رسول",hiatZ:true,deceased:true,
                                                  spouse:{name:"نامعلوم",gender:"f",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"سدیس",hiatZ:true,deceased:true,}
                                                  ]
                                                },
                                                {name:"ماه بی بی",gender:"f",hiatZ:true,deceased:true,
                                                  spouse:{name:"نامعلوم",deceased:true},
                                                  children:[
                                                    {name:"نادر",hiatZ:true,deceased:true},
                                                    {name:"زینب",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"مهناز",gender:"f",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"مدینه",gender:"f",key:"madineMahjan",hiatZ:true,deceased:true,
                                                  spouse:{name:"دین محمد",key:"dinMohammadKarim",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"سعید",hiatZ:true,deceased:true},
                                                    {name:"حمید",hiatZ:true,deceased:true},
                                                    {name:"سعیده",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"مریم",gender:"f",hiatZ:true,deceased:true},
                                                {name:"هاجر",gender:"f",hiatZ:true,deceased:true},

                                              ]
                                            },
                                            {name:"گل بی بی",key:"GoolBibiKamKhan",gender:"f",hiatZ:true,deceased:true,
                                              spouse:{name:"موسی",family:"رضایی",key:"moosaBarfiKhan",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"عبدالحلیم",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                {name:"عبدالله",family:"رضایی",key:"AbdollahMossa",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"شریفه",gender:"f",family:"رضایی",key:"SharifeMohammmad",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"هانیه",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                ]},
                                                {name:"عبدالرحیم",family:"رضایی",hiatZ:true,place:"مشهد",
                                                  spouse:{name:"نامشخص",gender:"f",hiatZ:true,place:"مشهد"},
                                                  children:[
                                                    {name:"عماد",family:"رضایی",hiatZ:true,place:"مشهد"}
                                                ]},
                                                {name:"کبری",gender:"f",key:"kobraMoosa",family:"رضایی",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"حسین",key:"hosseinMohammad",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"ادریس",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"گلثوم",gender:"f",family:"رضایی",deceased:true,place:"ارزنچه علیا"},
                                                    {name:"منیره",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"محدثه",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"محیا",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                ]},
                                                {name:"مدینه",key:"madineGolbibi",gender:"f",family:"رضایی",hiatZ:true,place:"کرت آباد",
                                                  spouse:{name:"احمد",key:"ahmadMolaali",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                                  children:[
                                                    {name:"طاها",family:"لوطکی",deceased:true,place:"کرت آباد"},
                                                    {name:"محمود",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                                    {name:"کوثر",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"}
                                                ]},
                                                {name:"خدیجه",gender:"f",family:"رضایی",hiatZ:true,place:"مشهد"},
                                                {name:"حمیرا",gender:"f",family:"رضایی",key:"homeiraMoosa",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"رئوف",family:"رضایی",key:"raoofMohammad",deceased:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"امیر حافظ",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                ]},
                                                {name:"پریسا",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                {name:"فاطمه",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                              ],
                                            },
                                            {name:"شاه بی بی",gender:"f",hiatZ:true,deceased:true},
                                          ]
                                        },
                                        {name:"خاتون",key:"khatoonShirDel",deceased:true,
                                          spouse:{name:"مولا علی",family:"لوطکی",key:"moolaAliHalimKhan",deceased:true},
                                          children:[
                                            {name:"محمود",family:"لوطکی",deceased:true},
                                            {name:"محمد",hiatZ:true,key:"mohammadMolaAli",family:"لوطکی",deceased:true,
                                              spouse:{name:"مهناز",family:"رضایی",key:"mahnazMohammad",gender:"f",hiatZ:true},
                                              children:[
                                                {name:"اسامه",hiatZ:true,family:"لوطکی",deceased:true,}
                                              ]
                                            },
                                            {name:"احمد",key:"ahmadMolaali",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                              spouse:{name:"مدینه",key:"madineGolbibi",gender:"f",family:"رضایی",hiatZ:true,place:"کرت آباد"},
                                              children:[
                                                {name:"طاها",family:"لوطکی",deceased:true,place:"کرت آباد"},
                                                {name:"محمود",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                                {name:"کوثر",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"}
                                              ],
                                            },
                                            {name:"حمید",hiatZ:true,family:"لوطکی",deceased:true,
                                              spouse:{name:"اسماء",key:"",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"},
                                              children:[
                                                
                                              ]
                                            },
                                            {name:"امین",key:"aminMolaali",hiatZ:true,family:"لوطکی",deceased:true,
                                              spouse:{name:"سمیرا",key:"samiraMohammad",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                              children:[

                                              ]
                                            },
                                            {name:"عصمت",key:"esmatMolaAli",gender:"f",hiatZ:true,family:"لوطکی",deceased:true,
                                              spouse:{name:"گل محمد",key:"goolMahganj",hiatZ:true,family:"مرادی",deceased:true},
                                              children:[
                                                {name:"جواد",hiatZ:true,family:"مرادی",deceased:true},
                                                {name:"عماد",hiatZ:true,family:"مرادی",deceased:true},
                                                {name:"اسماء",gender:"f",key:"asmaGool",hiatZ:true,family:"مرادی",deceased:true,
                                                  spouse:{name:"محمد امین",key:"mohamMohamm",hiatZ:true,family:"لوطکی",deceased:true},
                                                  children:[
                                                    {name:"افسون",gender:"f",hiatZ:true,family:"لوطکی",deceased:true}
                                                  ]
                                                },
                                                {name:"سمیه",gender:"f",hiatZ:true,family:"مرادی",deceased:true},

                                              ]
                                            },
                                            {name:"مرضیه",gender:"f",key:"marziyeMoolaAli",hiatZ:true,family:"لوطکی",deceased:true,
                                                spouse:{name:"امان الله",key:"amanoolahAmir",hiatZ:true,family:"رضایی",deceased:true},
                                                children:[
                                                  {name:"امیر رضا",hiatZ:true,family:"رضایی",deceased:true},
                                                  {name:"مجتبی",hiatZ:true,family:"رضایی",deceased:true},
                                                  {name:"یونس",hiatZ:true,family:"رضایی",deceased:true},
                                                  {name:"حفسه",gender:"f",hiatZ:true,family:"رضایی",deceased:true},
                                                ]
                                            },
                                            {name:"پری",key:"pariMola",family:"لوطکی",hiatZ:true,deceased:true,
                                              spouse:{name:"عبدالله",key:"abdollEbrah",family:"براهویی",hiatZ:true,deceased:true},
                                              children:[

                                              ]
                                            },
                                            {name:"آمنه",hiatZ:true,key:"ameneMola",gender:"f",deceased:true,
                                                spouse:{name:"عمر",key:"omarHalim",deceased:true,hiatZ:true},
                                                children:[
                                                    {name:"یاسمن",gender:"f",deceased:true,hiatZ:true,}
                                                ]
                                            },
                                            {name:"زهرا",gender:"f",hiatZ:true,family:"لوطکی",deceased:true},
                                          ]
                                        },
                                        {name:"خانم",gender:"f",deceased:true,
                                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                          children:[
                                            {name:"احمد",deceased:true},
                                            {name:"جمعه",deceased:true},
                                            {name:"نظر",deceased:true},
                                            {name:"فاطمه",gender:"f",deceased:true,
                                              spouse:{name:"نامعلوم",deceased:true},
                                              children:[
                                                  {name:"بهروز",deceased:true},
                                                  {name:"فرهاد",hiatZ:true,deceased:true},
                                                  {name:"مرجان",hiatZ:true,deceased:true},
                                                  {name:"مریم",hiatZ:true,deceased:true,
                                                    spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                    children:[
                                                      {name:"میثم",hiatZ:true,deceased:true},
                                                      {name:"محمد",hiatZ:true,deceased:true},
                                                      {name:"میثاق",hiatZ:true,deceased:true},
                                                      {name:"اویس",hiatZ:true,deceased:true},
                                                      {name:"محدثه",gender:"f",hiatZ:true,deceased:true},
                                                    ]
                                                  },
                                              ]
                                            },
                                          ]
                                        }
                                      ]
                                    },
                                    {name:"گل محمد",deceased:true,
                                      spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                      children:[
                                        {name:"دین محمد(برفی خان)",family:"رضایی",deceased:true,
                                          spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                          children:[
                                            {name:"محمد",family:"رضایی",key:"mohammadBarfiKhan",hiatZ:true,deceased:true,
                                              spouse:{name:"جان بی بی",family:"رضایی",key:"janbibiKaraKhan",gender:"f",deceased:true},
                                              children:[
                                                {name:"حسین",key:"hosseinMohammad",family:"رضایی",hiatZ:true,place:"ارزنچه علیا",deceased:true,
                                                  spouse:{name:"کبری",gender:"f",key:"kobraMoosa",family:"رضایی",hiatZ:true,place:"ارزنچه علیا",deceased:true},
                                                  children:[
                                                    {name:"ادریس",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"گلثوم",gender:"f",family:"رضایی",deceased:true,place:"ارزنچه علیا"},
                                                    {name:"منیره",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"محدثه",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"محیا",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                  ],
                                                },
                                                {name:"رضا",family:"رضایی",key:"rezaMohammad",hiatZ:true,deceased:true,
                                                  spouse:{name:"پری",family:"رضایی",key:"pariMohammad",gender:"f",deceased:true},
                                                  children:[
                                                    {name:"سلمان",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"ثنا",family:"رضایی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"رئوف",family:"رضایی",key:"raoofMohammad",deceased:true,place:"ارزنچه علیا",
                                                  spouse:{name:"حمیرا",gender:"f",family:"رضایی",key:"homeiraMoosa",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"امیر حافظ",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                  ],
                                                },
                                                {name:"خاتون",family:"رضایی",hiatZ:true,deceased:true,
                                                  spouse:{name:"جمعه",deceased:true},
                                                  children:[
                                                    {name:"امید",hiatZ:true,deceased:true}
                                                  ]
                                                },
                                                {name:"مهناز",family:"رضایی",key:"mahnazMohammad",gender:"f",hiatZ:true,deceased:true,
                                                  spouse:{name:"محمد",hiatZ:true,key:"mohammadMolaAli",family:"لوطکی",deceased:true},
                                                  children:[
                                                    {name:"اسامه",hiatZ:true,family:"لوطکی",deceased:true,}
                                                  ]
                                                },
                                                {name:"شریفه",gender:"f",family:"رضایی",key:"SharifeMohammmad",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"عبدالله",family:"رضایی",key:"AbdollahMossa",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"هانیه",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                  ],
                                                },
                                                {name:"مریم",family:"رضایی",key:"maryamAmir",hiatZ:true,deceased:true,
                                                  spouse:{name:"حبیب الله",family:"رضایی",key:"habibMohammad",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"امیر محمد",family:"رضایی",hiatZ:true,deceased:true}
                                                  ]
                                                },
                                                {name:"زربخت",family:"رضایی",hiatZ:true,deceased:true}
                                              ]
                                            },
                                            {name:"موسی",family:"رضایی",key:"moosaBarfiKhan",hiatZ:true,deceased:true,
                                              spouse:{name:"گل بی بی",key:"GoolBibiKamKhan",gender:"f",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"عبدالحلیم",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                {name:"عبدالله",family:"رضایی",key:"AbdollahMossa",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"شریفه",gender:"f",family:"رضایی",key:"SharifeMohammmad",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"هانیه",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                ]},
                                                {name:"عبدالرحیم",family:"رضایی",hiatZ:true,place:"مشهد",
                                                  spouse:{name:"نامشخص",gender:"f",hiatZ:true,place:"مشهد"},
                                                  children:[
                                                    {name:"عماد",family:"رضایی",hiatZ:true,place:"مشهد"}
                                                ]},
                                                {name:"کبری",gender:"f",key:"kobraMoosa",family:"رضایی",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"حسین",key:"hosseinMohammad",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"ادریس",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"گلثوم",gender:"f",family:"رضایی",deceased:true,place:"ارزنچه علیا"},
                                                    {name:"منیره",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"محدثه",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"محیا",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                ]},
                                                {name:"مدینه",key:"madineGolbibi",gender:"f",family:"رضایی",hiatZ:true,place:"کرت آباد",
                                                  spouse:{name:"احمد",key:"ahmadMolaali",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                                  children:[
                                                    {name:"طاها",family:"لوطکی",deceased:true,place:"کرت آباد"},
                                                    {name:"محمود",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                                    {name:"کوثر",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"}
                                                ]},
                                                {name:"خدیجه",gender:"f",family:"رضایی",hiatZ:true,place:"مشهد"},
                                                {name:"حمیرا",gender:"f",family:"رضایی",key:"homeiraMoosa",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"رئوف",family:"رضایی",key:"raoofMohammad",deceased:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"امیر حافظ",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                ]},
                                                {name:"پریسا",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                {name:"فاطمه",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                              ],
                                            },
                                            {name:"رحیم",family:"رضایی",deceased:true,
                                              spouse:{name:"نامعلوم",gender:"f",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"حمید",family:"رضایی",hiatZ:true,deceased:true,
                                                  spouse:{name:"نامعلوم",gender:"f",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"پارسا",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"مانیسا",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"هادی",family:"رضایی",hiatZ:true,deceased:true},
                                                {name:"وحیده",family:"رضایی",hiatZ:true,gender:"f",deceased:true,
                                                  spouse:{name:"نامعلوم",gender:"f",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"ترنم",family:"رضایی",gender:"f",hiatZ:true,deceased:true}
                                                  ]
                                                },
                                              ]
                                            },
                                            {name:"امیر",family:"رضایی",key:"amirBarfiKhan",deceased:true,
                                              spouse:{name:"بی بی",family:"رضایی",key:"bibiKaram",gender:"f",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"امان الله",key:"amanoolahAmir",hiatZ:true,family:"رضایی",deceased:true,
                                                  spouse:{name:"مرضیه",gender:"f",key:"marziyeMoolaAli",hiatZ:true,family:"لوطکی",deceased:true},
                                                  children:[
                                                    {name:"امیر رضا",hiatZ:true,family:"رضایی",deceased:true},
                                                    {name:"مجتبی",hiatZ:true,family:"رضایی",deceased:true},
                                                    {name:"یونس",hiatZ:true,family:"رضایی",deceased:true},
                                                    {name:"حفسه",gender:"f",hiatZ:true,family:"رضایی",deceased:true},
                                                ]},
                                                {name:"حبیب الله",family:"رضایی",key:"habibMohammad",hiatZ:true,deceased:true,
                                                  spouse:{name:"مریم",family:"رضایی",key:"maryamAmir",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"امیر محمد",family:"رضایی",hiatZ:true,deceased:true}
                                                  ]
                                                },
                                                {name:"اسماعیل",family:"رضایی",hiatZ:true,deceased:true,
                                                    spouse:{name:"نامعلوم",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                    children:[
                                                      {name:"محمد صالح",family:"رضایی",hiatZ:true,deceased:true}
                                                    ]
                                                },
                                                {name:"ماه گل",family:"رضایی",gender:"f",hiatZ:true,key:"mahGoolAmir",deceased:true,
                                                  spouse:{name:"حسن",family:"براهویی عرب",key:"hassanHalim",deceased:true,hiatZ:true},
                                                  children:[
                                                      {name:"ستار",family:"براهویی عرب",deceased:true,hiatZ:true},
                                                      {name:"ستاره",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true},
                                                      
                                                  ]
                                                },
                                                {name:"گل بی بی",family:"رضایی",key:"goolBibiAmir",gender:"f",hiatZ:true,deceased:true,

                                                  spouse:{name:"محمد",family:"رضایی",key:"mohammadKarim",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"احمد",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"حامد",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"پری",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"آمنه",family:"رضایی",key:"AmeneAMir",hiatZ:true,gender:"f",deceased:true,
                                                  spouse:{name:"یوسف",family:"رضایی",key:"yousefShahbaz",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"ستایش",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"فاطمه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"حلیمه",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                {name:"فاطمه",family:"رضایی",gender:"f",hiatZ:true,deceased:true}
                                              ]
                                            },
                                            {name:"فقیر محمد",family:"رضایی",key:"faghirMohammadBarfi",hiatZ:true,deceased:true,
                                                spouse:{name:"ماه گنج",family:"براهویی",key:"mahganjDoorBibi",gender:"f",deceased:true},
                                                children:[
                                                    {name:"الله داد",family:"رضایی",deceased:true},
                                                    {name:"خداداد",family:"رضایی",hiatZ:true,deceased:true,
                                                        spouse:{name:"راحله",hiatZ:true,gender:"f",deceased:true},
                                                        children:[
                                                            {name:"ایرج",hiatZ:true,deceased:true},
                                                            {name:"امیر علی",hiatZ:true,deceased:true},
                                                            {name:"مایان",hiatZ:true,deceased:true},
                                                        ]
                                                    },
                                                    {name:"بیدالله",family:"رضایی",deceased:true},
                                                    {name:"یدالله",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"فاطمه",family:"رضایی",gender:"f",key:"fatemeFaghir",hiatZ:true,deceased:true,
                                                        spouse:{name:"علی",key:"aliKhanoom",hiatZ:true,deceased:true},
                                                        children:[
                                                            {name:"سجاد",hiatZ:true,deceased:true},
                                                            {name:"یگانه",gender:"f",hiatZ:true,deceased:true},
                                                        ]
                                                    },
                                                    {name:"زینب",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"خدیجه",family:"رضایی",gender:"f",deceased:true},
                                                ]
                                            },
                                            {name:"گل محمد",family:"رضایی",deceased:true},
                                            {name:"ماه بی بی",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                            {name:"خانم",family:"رضایی",key:"KhanomBarfiKhan",gender:"f",hiatZ:true,deceased:true,
                                              spouse:{name:"کریم",key:"karimHossein",deceased:true},
                                              children:[
                                                {name:"محمد",key:"mohammadKarim",hiatZ:true,deceased:true,
                                                    spouse:{name:"گل بی بی",family:"رضایی",key:"goolBibiAmir",gender:"f",hiatZ:true,deceased:true},
                                                    children:[
                                                      {name:"احمد",family:"رضایی",hiatZ:true,deceased:true},
                                                      {name:"حامد",family:"رضایی",hiatZ:true,deceased:true},
                                                      {name:"پری",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                    ]
                                                },
                                                {name:"دین محمد",key:"dinMohammadKarim",hiatZ:true,deceased:true,
                                                  spouse:{name:"مدینه",gender:"f",key:"madineMahjan",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"سعید",hiatZ:true,deceased:true},
                                                    {name:"حمید",hiatZ:true,deceased:true},
                                                    {name:"سعیده",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"رحمان",key:"rahmanKhanoom",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"نازی",gender:"f",key:"naziAhmad",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"معین",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"داوود",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"سوده",gender:"f",hiatZ:true,place:"ارزنچه علیا"}
                                                  ],
                                                },
                                                {name:"علی",key:"aliKhanoom",hiatZ:true,deceased:true,
                                                    spouse:{name:"فاطمه",family:"رضایی",gender:"f",key:"fatemeFaghir",hiatZ:true,deceased:true},
                                                    children:[
                                                        {name:"سجاد",hiatZ:true,deceased:true},
                                                        {name:"یگانه",gender:"f",hiatZ:true,deceased:true},
                                                    ]
                                                },
                                                {name:"زهرا",key:"zahraKhanom",gender:"f",deceased:true,hiatZ:true,
                                                    spouse:{name:"شریف",family:"براهویی عرب",key:"sharifShir",deceased:true},
                                                    children:[
                                                        {name:"مصطفی",family:"براهویی عرب",deceased:true,
                                                            spouse:{name:"نامعلوم",gender:"f",deceased:true,hiatZ:true},
                                                            children:[
                                                                {name:"نامعلوم",family:"براهویی عرب",deceased:true,gender:"f",hiatZ:true}
                                                            ]
                                                        },
                                                        {name:"محمد صادق",family:"براهویی عرب",deceased:true,hiatZ:true},
                                                        {name:"سارا",family:"براهویی عرب",deceased:true,gender:"f",hiatZ:true},
                                                        {name:"سعیده",family:"براهویی عرب",key:"saeideSharif",deceased:true,gender:"f",hiatZ:true,
                                                            spouse:{name:"حامد",family:"براهویی",key:"hamedMohammad",deceased:true,hiatZ:true},
                                                            children:[
                                                                {name:"نامعلوم",family:"براهویی",deceased:true,gender:"f",hiatZ:true}
                                                            ]
                                                        },
                                                    ]
                                                },
                                                {name:"عزیز بخت",gender:"f",key:"azizbakhtKhanoom",hiatZ:true,deceased:true,
                                                    spouse:{name:"نور محمد",family:"رضایی",key:"normohammadGhaibi",hiatZ:true,deceased:true},
                                                    children:[
                                                      {name:"محمود",family:"رضایی",hiatZ:true,deceased:true,
                                                        spouse:{name:"نامعلوم",hiatZ:true,gender:"f",deceased:true},
                                                        children:[
                                                          {name:"سهیل",family:"رضایی",hiatZ:true,deceased:true},
                                                          {name:"سهیلا",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                        ]
                                                      },
                                                      {name:"حسین",key:"hosseinNoorm",family:"رضایی",hiatZ:true,deceased:true,
                                                        spouse:{name:"صفیه",key:"safiyeShah",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                        children:[
                                                          {name:"یاسر",family:"رضایی",hiatZ:true,deceased:true},
                                                          {name:"آسیه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                          {name:"بارانه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                        ]
                                                      },
                                                      {name:"رحمت",family:"رضایی",hiatZ:true,deceased:true},
                                                      {name:"حسن",family:"رضایی",hiatZ:true,deceased:true},
                                                      {name:"حلیمه",family:"رضایی",key:"halimeNoor",gender:"f",deceased:true,
                                                        spouse:{name:"عزیز",family:"رضایی",key:"azizMooradbibi",hiatZ:true,deceased:true},
                                                        children:[
                                                          {name:"محراج",hiatZ:true,deceased:true},
                                                          {name:"حنانه",gender:"f",hiatZ:true,deceased:true},
                                                          {name:"نیایش",gender:"f",hiatZ:true,deceased:true},
                                                        ]
                                                      },
                                                      {name:"زینب",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                      {name:"نازی",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                    ]
                                                },
                                                {name:"ناز بی بی",gender:"f",hiatZ:true,deceased:true,
                                                  spouse:{name:"نامعلوم",deceased:true,hiatZ:true},
                                                  children:[
                                                    {name:"حسن",deceased:true,hiatZ:true},
                                                    {name:"صفر",deceased:true,hiatZ:true},
                                                    {name:"رضا",deceased:true,hiatZ:true},
                                                    {name:"مریم",gender:"f",deceased:true,hiatZ:true},
                                                    {name:"راحله",deceased:true,hiatZ:true},
                                                  ]
                                                },
                                              ]
                                            },

                                          ]
                                        },
                                        {name:"کرم خان",family:"رضایی",deceased:true,
                                          spouse:{name:"مندوست",family:"رضایی",deceased:true},
                                          children:[
                                            {name:"رحمان",family:"رضایی",deceased:true},
                                            {name:"بی بی",family:"رضایی",key:"bibiKaram",gender:"f",hiatZ:true,deceased:true,
                                              spouse:{name:"امیر",family:"رضایی",key:"amirBarfiKhan",deceased:true},
                                              children:[
                                                {name:"امان الله",key:"amanoolahAmir",hiatZ:true,family:"رضایی",deceased:true,
                                                  spouse:{name:"مرضیه",gender:"f",key:"marziyeMoolaAli",hiatZ:true,family:"لوطکی",deceased:true},
                                                  children:[
                                                    {name:"امیر رضا",hiatZ:true,family:"رضایی",deceased:true},
                                                    {name:"مجتبی",hiatZ:true,family:"رضایی",deceased:true},
                                                    {name:"یونس",hiatZ:true,family:"رضایی",deceased:true},
                                                    {name:"حفسه",gender:"f",hiatZ:true,family:"رضایی",deceased:true},
                                                ]},
                                                {name:"حبیب الله",family:"رضایی",key:"habibMohammad",hiatZ:true,deceased:true,
                                                  spouse:{name:"مریم",family:"رضایی",key:"maryamAmir",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"امیر محمد",family:"رضایی",hiatZ:true,deceased:true}
                                                  ]
                                                },
                                                {name:"اسماعیل",family:"رضایی",hiatZ:true,deceased:true,
                                                    spouse:{name:"نامعلوم",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                    children:[
                                                      {name:"محمد صالح",family:"رضایی",hiatZ:true,deceased:true}
                                                    ]
                                                },
                                                {name:"ماه گل",family:"رضایی",gender:"f",hiatZ:true,key:"mahGoolAmir",deceased:true,
                                                  spouse:{name:"حسن",family:"براهویی عرب",key:"hassanHalim",deceased:true,hiatZ:true},
                                                  children:[
                                                      {name:"ستار",family:"براهویی عرب",deceased:true,hiatZ:true},
                                                      {name:"ستاره",family:"براهویی عرب",gender:"f",deceased:true,hiatZ:true},
                                                      
                                                  ]
                                                },
                                                {name:"گل بی بی",family:"رضایی",key:"goolBibiAmir",gender:"f",hiatZ:true,deceased:true,

                                                  spouse:{name:"محمد",family:"رضایی",key:"mohammadKarim",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"احمد",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"حامد",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"پری",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"آمنه",family:"رضایی",key:"AmeneAMir",hiatZ:true,gender:"f",deceased:true,
                                                  spouse:{name:"یوسف",family:"رضایی",key:"yousefShahbaz",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"ستایش",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"فاطمه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"حلیمه",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                {name:"فاطمه",family:"رضایی",gender:"f",hiatZ:true,deceased:true}
                                              ]
                                            },
                                            {name:"جان بی بی",family:"رضایی",key:"janbibiKaraKhan",gender:"f",deceased:true,
                                              spouse:{name:"محمد",family:"رضایی",key:"mohammadBarfiKhan",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"حسین",key:"hosseinMohammad",family:"رضایی",hiatZ:true,place:"ارزنچه علیا",deceased:true,
                                                  spouse:{name:"کبری",gender:"f",key:"kobraMoosa",family:"رضایی",hiatZ:true,place:"ارزنچه علیا",deceased:true},
                                                  children:[
                                                    {name:"ادریس",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"گلثوم",gender:"f",family:"رضایی",deceased:true,place:"ارزنچه علیا"},
                                                    {name:"منیره",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"محدثه",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"محیا",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                  ],
                                                },
                                                {name:"رضا",family:"رضایی",key:"rezaMohammad",hiatZ:true,deceased:true,
                                                  spouse:{name:"پری",family:"رضایی",key:"pariMohammad",gender:"f",deceased:true},
                                                  children:[
                                                    {name:"سلمان",family:"رضایی",hiatZ:true,deceased:true},
                                                    {name:"ثنا",family:"رضایی",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"رئوف",family:"رضایی",key:"raoofMohammad",deceased:true,place:"ارزنچه علیا",
                                                  spouse:{name:"حمیرا",gender:"f",family:"رضایی",key:"homeiraMoosa",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"امیر حافظ",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                  ],
                                                },
                                                {name:"خاتون",family:"رضایی",hiatZ:true,deceased:true,
                                                  spouse:{name:"جمعه",deceased:true},
                                                  children:[
                                                    {name:"امید",hiatZ:true,deceased:true}
                                                  ]
                                                },
                                                {name:"مهناز",family:"رضایی",key:"mahnazMohammad",gender:"f",hiatZ:true,deceased:true,
                                                  spouse:{name:"محمد",hiatZ:true,key:"mohammadMolaAli",family:"لوطکی",deceased:true},
                                                  children:[
                                                    {name:"اسامه",hiatZ:true,family:"لوطکی",deceased:true,}
                                                  ]
                                                },
                                                {name:"شریفه",gender:"f",family:"رضایی",key:"SharifeMohammmad",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"عبدالله",family:"رضایی",key:"AbdollahMossa",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"هانیه",gender:"f",family:"رضایی",hiatZ:true,place:"ارزنچه علیا"}
                                                  ],
                                                },
                                                {name:"مریم",family:"رضایی",key:"maryamAmir",hiatZ:true,deceased:true,
                                                  spouse:{name:"حبیب الله",family:"رضایی",key:"habibMohammad",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"امیر محمد",family:"رضایی",hiatZ:true,deceased:true}
                                                  ]
                                                },
                                                {name:"زربخت",family:"رضایی",hiatZ:true,deceased:true}
                                              ]
                                            }

                                          ]
                                        },
                                        {name:"حاجی حلیم خان",family:"halimGoolMohammad",family:"لوطکی",deceased:true,
                                          spouse:{name:"مراد بی بی",key:"mooradBibiGami",gender:"f",deceased:true},
                                          children:[
                                            {name:"مجید",family:"لوطکی",deceased:true},
                                            {name:"جیهند",family:"لوطکی",deceased:true,
                                              spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                              children:[
                                                {name:"عزیز",family:"رضایی",key:"azizMooradbibi",hiatZ:true,deceased:true,
                                                  spouse:{name:"حلیمه",family:"رضایی",key:"halimeNoor",gender:"f",deceased:true},
                                                  children:[
                                                    {name:"محراج",hiatZ:true,deceased:true},
                                                    {name:"حنانه",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"نیایش",gender:"f",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"نظر",hiatZ:true,deceased:true,
                                                  spouse:{name:"زینب",key:"zinabZaman",gender:"f",hiatZ:true,deceased:true},
                                                    children:[
                                                        {name:"مائده",gender:"f",hiatZ:true,deceased:true},
                                                        {name:"مریم",gender:"f",hiatZ:true,deceased:true},
                                                        {name:"فاطمه",gender:"f",hiatZ:true,deceased:true},
                                                    ]
                                                },
                                                {name:"رضا",deceased:true},
                                                {name:"نبی",deceased:true},
                                                {name:"نور محمد",deceased:true},
                                                {name:"محمد عمر",deceased:true},
                                                {name:"فاطمه",key:"fatNor",hiatZ:true,gender:"f",deceased:true,
                                                  spouse:{name:"محمد",key:"mohHalim",gender:"f",deceased:true},
                                                  children:[
                                                      {name:"سامان",deceased:true,hiatZ:true},
                                                      {name:"ادریس",deceased:true,hiatZ:true},
                                                      {name:"سمانه",gender:"f",deceased:true,hiatZ:true,
                                                        spouse:{name:"حامد",key:"hamedGhafor",deceased:true},
                                                          children:[

                                                          ]
                                                      }
                                                  ]
                                                },
                                                {name:"حلیمه",hiatZ:true,gender:"f",deceased:true},
                                                {name:"مدینه",hiatZ:true,gender:"f",deceased:true},

                                              ]

                                            },
                                            {name:"مولا علی",family:"لوطکی",key:"moolaAliHalimKhan",deceased:true,
                                              spouse:{name:"خاتون",key:"khatoonShirDel",family:"رضایی",gender:"f",deceased:true},
                                              children:[
                                                {name:"محمود",family:"لوطکی",deceased:true},
                                                {name:"محمد",hiatZ:true,key:"mohammadMolaAli",family:"لوطکی",deceased:true,
                                                  spouse:{name:"مهناز",family:"رضایی",key:"mahnazMohammad",gender:"f",hiatZ:true},
                                                  children:[
                                                    {name:"اسامه",hiatZ:true,family:"لوطکی",deceased:true,}
                                                  ]
                                                },
                                                {name:"احمد",key:"ahmadMolaali",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                                  spouse:{name:"مدینه",key:"madineGolbibi",gender:"f",family:"رضایی",hiatZ:true,place:"کرت آباد"},
                                                  children:[
                                                    {name:"طاها",family:"لوطکی",deceased:true,place:"کرت آباد"},
                                                    {name:"محمود",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                                    {name:"کوثر",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"}
                                                  ],
                                                },
                                                {name:"حمید",hiatZ:true,family:"لوطکی",deceased:true,
                                                  spouse:{name:"اسماء",key:"",gender:"f",family:"نعیمی فر",hiatZ:true,place:"کرت آباد"},
                                                  children:[
                                                    
                                                  ]
                                                },
                                                {name:"امین",key:"aminMolaali",hiatZ:true,family:"لوطکی",deceased:true,
                                                  spouse:{name:"سمیرا",key:"samiraMohammad",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                                  children:[

                                                  ]
                                                },
                                                {name:"عصمت",key:"esmatMolaAli",gender:"f",hiatZ:true,family:"لوطکی",deceased:true,
                                                  spouse:{name:"گل محمد",key:"goolMahganj",hiatZ:true,family:"مرادی",deceased:true},
                                                  children:[
                                                    {name:"جواد",hiatZ:true,family:"مرادی",deceased:true},
                                                    {name:"عماد",hiatZ:true,family:"مرادی",deceased:true},
                                                    {name:"اسماء",gender:"f",key:"asmaGool",hiatZ:true,family:"مرادی",deceased:true,
                                                      spouse:{name:"محمد امین",key:"mohamMohamm",hiatZ:true,family:"لوطکی",deceased:true},
                                                      children:[
                                                        {name:"افسون",gender:"f",hiatZ:true,family:"لوطکی",deceased:true}
                                                      ]
                                                    },
                                                    {name:"سمیه",gender:"f",hiatZ:true,family:"مرادی",deceased:true},

                                                  ]
                                                },
                                                {name:"مرضیه",gender:"f",key:"marziyeMoolaAli",hiatZ:true,family:"لوطکی",deceased:true,
                                                    spouse:{name:"امان الله",key:"amanoolahAmir",hiatZ:true,family:"رضایی",deceased:true},
                                                    children:[
                                                      {name:"امیر رضا",hiatZ:true,family:"رضایی",deceased:true},
                                                      {name:"مجتبی",hiatZ:true,family:"رضایی",deceased:true},
                                                      {name:"یونس",hiatZ:true,family:"رضایی",deceased:true},
                                                      {name:"حفسه",gender:"f",hiatZ:true,family:"رضایی",deceased:true},
                                                    ]
                                                },
                                                {name:"پری",key:"pariMola",family:"لوطکی",hiatZ:true,deceased:true,
                                                  spouse:{name:"عبدالله",key:"abdollEbrah",family:"براهویی",hiatZ:true,deceased:true},
                                                  children:[

                                                  ]
                                                },
                                                {name:"آمنه",hiatZ:true,key:"ameneMola",gender:"f",deceased:true,
                                                    spouse:{name:"عمر",key:"omarHalim",deceased:true,hiatZ:true},
                                                    children:[
                                                        {name:"یاسمن",gender:"f",deceased:true,hiatZ:true,}
                                                    ]
                                                },
                                                {name:"زهرا",gender:"f",hiatZ:true,family:"لوطکی",deceased:true},
                                              ]
                                            },
                                            {name:"عیسی",key:"easaMorad",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                              spouse:{name:"بسی",key:"basiEsmaeil",gender:"f",hiatZ:true,place:"کرت آباد"},
                                                children:[
                                                  {name:"ناصر",family:"لوطکی",deceased:true,place:"کرت آباد"},
                                                  {name:"علی",key:"aliBasi",family:"لوطکی",hiatZ:true,place:"بیرجند",
                                                    spouse:{name:"منیره",key:"monNor",gender:"f",hiatZ:true,place:"بیرجند"},
                                                    children:[
                                                      {name:"عدنان",family:"لوطکی",hiatZ:true,place:"بیرجند"},
                                                      {name:"حلما",gender:"f",family:"لوطکی",hiatZ:true,place:"بیرجند"}
                                                    ]},
                                                  {name:"حسین",family:"لوطکی",hiatZ:true,place:"بیرجند",
                                                    spouse:{name:"نامشخص",gender:"f",hiatZ:true,place:"بیرجند"},
                                                    children:[
                                                      {name:"آیناز",gender:"f",family:"لوطکی",hiatZ:true,place:"بیرجند"}
                                                    ]},
                                                  {name:"یاسر",family:"لوطکی",hiatZ:true,place:"کرت آباد"},
                                                  {name:"جان بی بی",key:"janBasii",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                                    spouse:{name:"عبدالله",key:"habdolZaman",family:"پارسافر",hiatZ:true,place:"کرت آباد"},
                                                    children:[
                                                      {name:"محمد یاسین",family:"براهویی",hiatZ:true,place:"بیرجند"},
                                                      {name:"آسیه",gender:"f",family:"براهویی",hiatZ:true,place:"بیرجند"}
                                                    ]},
                                                  /* ↓ طاهره از شاخه لوطکی، متصل به ظاهر از شاخه براهویی */
                                                  {name:"طاهره",gender:"f",family:"لوطکی",hiatZ:true,place:"زاهدان",key:"taher",
                                                    spouse:{name:"ظاهر",family:"براهویی",hiatZ:true,place:"زاهدان",key:"zaher"},
                                                    children:[
                                                      {name:"اسماء",gender:"f",family:"براهویی",hiatZ:true,place:"زاهدان"},
                                                      {name:"ساینا",gender:"f",family:"براهویی",hiatZ:true,place:"زاهدان"}
                                                    ]},
                                                  {name:"شهناز",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد"}
                                                ]
                                            },
                                            {name:"محمد علی",hiatZ:true,family:"لوطکی",deceased:true,
                                              spouse:{name:"نوری",key:"nooriHossein",gender:"f",deceased:true,hiatZ:true},
                                              children:[
                                                {name:"حمید",hiatZ:true,family:"لوطکی",deceased:true},
                                                {name:"محمد امین",key:"mohamMohamm",hiatZ:true,family:"لوطکی",deceased:true,
                                                      spouse:{name:"اسماء",gender:"f",key:"asmaGool",hiatZ:true,family:"مرادی",deceased:true},
                                                      children:[
                                                        {name:"افسون",gender:"f",hiatZ:true,family:"لوطکی",deceased:true}
                                                      ]
                                                },
                                                {name:"افسانه",key:"afsaneMohammadAli",family:"لوطکی",gender:"f",hiatZ:true,deceased:true,
                                                    spouse:{name:"حسین",key:"hosseinZaman",family:"پارسافر",hiatZ:true,deceased:true},
                                                    children:[
                                                        {name:"محمد طاها",family:"پارسافر",hiatZ:true,deceased:true},
                                                        {name:"محمد صدرا",family:"پارسافر",hiatZ:true,deceased:true},
                                                    ]
                                                },
                                                {name:"ریحانه",gender:"f",hiatZ:true,family:"لوطکی",deceased:true,
                                                  spouse:{name:"شریف",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"یاسین",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"سمینا",gender:"f",hiatZ:true,family:"لوطکی",deceased:true,
                                                  spouse:{name:"نامعلوم",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"محمد سبحان",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"سمانه",gender:"f",hiatZ:true,family:"لوطکی",deceased:true},
                                                {name:"سمیرا",key:"samiraMohammad",gender:"f",family:"لوطکی",hiatZ:true,place:"کرت آباد",
                                                  spouse:{name:"امین",key:"aminMolaali",hiatZ:true,family:"لوطکی",deceased:true},
                                                  children:[

                                                  ]
                                                },

                                              ]
                                            },
                                            {name:"گل بی بی",key:"goolMorad",hiatZ:true,family:"لوطکی",gender:"f",deceased:true,
                                          
                                                spouse:{name:"نور الله",key:"noorShir",deceased:true},
                                                children:[
                                                    {name:"محمد",hiatZ:true,deceased:true},
                                                    {name:"غفور",hiatZ:true,deceased:true,
                                                        spouse:{name:"نامعلوم",gender:"f",deceased:true},
                                                        children:[
                                                            {name:"حامد",key:"hamedGhafor",hiatZ:true,deceased:true,
                                                                spouse:{name:"سمانه",key:"samanMoha",deceased:true},
                                                                children:[

                                                                ]
                                                            },
                                                            {name:"افسانه",key:"afsaneGhaf",gender:"f",hiatZ:true,deceased:true,
                                                                spouse:{name:"نادر",key:"naderMajh",hiatZ:true,deceased:true},
                                                                children:[
                                                                    {name:"یونس",deceased:true,hiatZ:true}
                                                                ]
                                                            },
                                                            {name:"فرزانه",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"فریبا",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"حمیرا",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"فاطمه",gender:"f",hiatZ:true,deceased:true},

                                                        ]
                                                    },
                                                    {name:"نائب",key:"naebNor",hiatZ:true,deceased:true,
                                                        spouse:{name:"مریم",gender:"f",key:"marNor",hiatZ:true,deceased:true},
                                                        children:[
                                                            {name:"حنانه",gender:"f",hiatZ:true,deceased:true}
                                                        ]
                                                    },
                                                    {name:"ظاهر",hiatZ:true,deceased:true},
                                                    {name:"زبیده",key:"zobidNor",gender:"f",hiatZ:true,deceased:true,
                                                        spouse:{name:"رسول",key:"rasoHalim",deceased:true},
                                                        children:[
                                                            {name:"احسان",deceased:true,hiatZ:true},
                                                            {name:"وحید",deceased:true,hiatZ:true},
                                                            {name:"نازنین",gender:"f",deceased:true,hiatZ:true},
                                                            {name:"زهرا",gender:"f",deceased:true,hiatZ:true},
                                                        ]
                                                    },
                                                    {name:"مهناز",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"مرضیه",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"طاهره",gender:"f",hiatZ:true,deceased:true},
                                                    {name:"فاطمه",gender:"f",hiatZ:true,deceased:true},
                                                ]
                                            },
                                            {name:"در بی بی",key:"doorbibiMoorad",family:"لوطکی",gender:"f",deceased:true,
                                                spouse:{name:"ابراهیم",key:"ebrahShir",family:"براهویی",deceased:true},
                                                children:[
                                                    {name:"محمد",family:"براهویی",hiatZ:true,deceased:true},
                                                    {name:"عبدالله",key:"abdollEbrah",family:"براهویی",hiatZ:true,deceased:true,
                                                      spouse:{name:"پری",key:"pariMola",family:"لوطکی",hiatZ:true,deceased:true},
                                                      children:[

                                                      ]
                                                    },
                                                    {name:"ماه گنج",family:"براهویی",key:"mahganjDoorBibi",gender:"f",deceased:true,
                                                        spouse:{name:"فقیر محمد",family:"رضایی",key:"faghirMohammadBarfi",hiatZ:true,deceased:true},
                                                        children:[
                                                            {name:"الله داد",family:"رضایی",deceased:true},
                                                            {name:"خداداد",family:"رضایی",hiatZ:true,deceased:true,
                                                                spouse:{name:"راحله",hiatZ:true,gender:"f",deceased:true},
                                                                children:[
                                                                    {name:"ایرج",hiatZ:true,deceased:true},
                                                                    {name:"امیر علی",hiatZ:true,deceased:true},
                                                                    {name:"مایان",hiatZ:true,deceased:true},
                                                                ]
                                                            },
                                                            {name:"بیدالله",family:"رضایی",deceased:true},
                                                            {name:"یدالله",family:"رضایی",hiatZ:true,deceased:true},
                                                            {name:"فاطمه",family:"رضایی",gender:"f",key:"fatemeFaghir",hiatZ:true,deceased:true,
                                                                spouse:{name:"علی",key:"aliKhanoom",hiatZ:true,deceased:true},
                                                                children:[
                                                                    {name:"سجاد",hiatZ:true,deceased:true},
                                                                    {name:"یگانه",gender:"f",hiatZ:true,deceased:true},
                                                                ]
                                                            },
                                                            {name:"زینب",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                            {name:"خدیجه",family:"رضایی",gender:"f",deceased:true},
                                                        ]
                                                    },
                                                  ]
                                            },
                                            {name:"بی بی",family:"لوطکی",gender:"f",deceased:true},
                                          ]
                                        },
                                        {name:"مندوست",family:"رضایی",deceased:true}
                                      ]
                                    },
                                    {name:"عزیز بخت",gender:"f",deceased:true,
                                      spouse:{name:"نامعلوم",deceased:true},
                                      children:[
                                        {name:"حسین",deceased:true,
                                          spouse:{},
                                          children:[
                                            {name:"کریم",key:"karimHossein",deceased:true,
                                              spouse:{name:"خانم",family:"رضایی",key:"KhanomBarfiKhan",gender:"f",hiatZ:true,deceased:true},
                                              children:[
                                                {name:"محمد",key:"mohammadKarim",hiatZ:true,deceased:true,
                                                    spouse:{name:"گل بی بی",family:"رضایی",key:"goolBibiAmir",gender:"f",hiatZ:true,deceased:true},
                                                    children:[
                                                      {name:"احمد",family:"رضایی",hiatZ:true,deceased:true},
                                                      {name:"حامد",family:"رضایی",hiatZ:true,deceased:true},
                                                      {name:"پری",family:"رضایی",gender:"f",hiatZ:true,deceased:true},
                                                    ]
                                                },
                                                {name:"دین محمد",key:"dinMohammadKarim",hiatZ:true,deceased:true,
                                                  spouse:{name:"مدینه",gender:"f",key:"madineMahjan",hiatZ:true,deceased:true},
                                                  children:[
                                                    {name:"سعید",hiatZ:true,deceased:true},
                                                    {name:"حمید",hiatZ:true,deceased:true},
                                                    {name:"سعیده",hiatZ:true,deceased:true},
                                                  ]
                                                },
                                                {name:"رحمان",key:"rahmanKhanoom",hiatZ:true,place:"ارزنچه علیا",
                                                  spouse:{name:"نازی",gender:"f",key:"naziAhmad",hiatZ:true,place:"ارزنچه علیا"},
                                                  children:[
                                                    {name:"معین",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"داوود",hiatZ:true,place:"ارزنچه علیا"},
                                                    {name:"سوده",gender:"f",hiatZ:true,place:"ارزنچه علیا"}
                                                  ],
                                                },
                                                {name:"علی",key:"aliKhanoom",hiatZ:true,deceased:true,
                                                    spouse:{name:"فاطمه",family:"رضایی",gender:"f",key:"fatemeFaghir",hiatZ:true,deceased:true},
                                                    children:[
                                                        {name:"سجاد",hiatZ:true,deceased:true},
                                                        {name:"یگانه",gender:"f",hiatZ:true,deceased:true},
                                                    ]
                                                },
                                                {name:"زهرا",key:"zahraKhanom",gender:"f",deceased:true,hiatZ:true,
                                                    spouse:{name:"شریف",family:"براهویی عرب",key:"sharifShir",deceased:true},
                                                    children:[
                                                        {name:"مصطفی",family:"براهویی عرب",deceased:true,
                                                            spouse:{name:"نامعلوم",gender:"f",deceased:true,hiatZ:true},
                                                            children:[
                                                                {name:"نامعلوم",family:"براهویی عرب",deceased:true,gender:"f",hiatZ:true}
                                                            ]
                                                        },
                                                        {name:"محمد صادق",family:"براهویی عرب",deceased:true,hiatZ:true},
                                                        {name:"سارا",family:"براهویی عرب",deceased:true,gender:"f",hiatZ:true},
                                                        {name:"سعیده",family:"براهویی عرب",key:"saeideSharif",deceased:true,gender:"f",hiatZ:true,
                                                            spouse:{name:"حامد",family:"براهویی",key:"hamedMohammad",deceased:true,hiatZ:true},
                                                            children:[
                                                                {name:"نامعلوم",family:"براهویی",deceased:true,gender:"f",hiatZ:true}
                                                            ]
                                                        },
                                                    ]
                                                },
                                                {name:"عزیز بخت",gender:"f",key:"azizbakhtKhanoom",hiatZ:true,deceased:true,
                                                    spouse:{name:"نور محمد",family:"رضایی",key:"normohammadGhaibi",hiatZ:true,deceased:true},
                                                    children:[
                                                      {name:"محمود",family:"رضایی",hiatZ:true,deceased:true,
                                                        spouse:{name:"نامعلوم",hiatZ:true,gender:"f",deceased:true},
                                                        children:[
                                                          {name:"سهیل",family:"رضایی",hiatZ:true,deceased:true},
                                                          {name:"سهیلا",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                        ]
                                                      },
                                                      {name:"حسین",key:"hosseinNoorm",family:"رضایی",hiatZ:true,deceased:true,
                                                        spouse:{name:"صفیه",key:"safiyeShah",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                        children:[
                                                          {name:"یاسر",family:"رضایی",hiatZ:true,deceased:true},
                                                          {name:"آسیه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                          {name:"بارانه",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                        ]
                                                      },
                                                      {name:"رحمت",family:"رضایی",hiatZ:true,deceased:true},
                                                      {name:"حسن",family:"رضایی",hiatZ:true,deceased:true},
                                                      {name:"حلیمه",family:"رضایی",key:"halimeNoor",gender:"f",deceased:true,
                                                        spouse:{name:"عزیز",family:"رضایی",key:"azizMooradbibi",hiatZ:true,deceased:true},
                                                        children:[
                                                          {name:"محراج",hiatZ:true,deceased:true},
                                                          {name:"حنانه",gender:"f",hiatZ:true,deceased:true},
                                                          {name:"نیایش",gender:"f",hiatZ:true,deceased:true},
                                                        ]
                                                      },
                                                      {name:"زینب",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                      {name:"نازی",gender:"f",family:"رضایی",hiatZ:true,deceased:true},
                                                    ]
                                                },
                                                {name:"ناز بی بی",gender:"f",hiatZ:true,deceased:true,
                                                  spouse:{name:"نامعلوم",deceased:true,hiatZ:true},
                                                  children:[
                                                    {name:"حسن",deceased:true,hiatZ:true},
                                                    {name:"صفر",deceased:true,hiatZ:true},
                                                    {name:"رضا",deceased:true,hiatZ:true},
                                                    {name:"مریم",gender:"f",deceased:true,hiatZ:true},
                                                    {name:"راحله",deceased:true,hiatZ:true},
                                                  ]
                                                },
                                              ]
                                            },
                                            {name:"نور بی بی",gender:"f",deceased:true,
                                              spouse:{name:"نامعلوم",deceased:true},
                                              children:[
                                                {name:"قلی",deceased:true},
                                                {name:"ملک داد",deceased:true},
                                              ]
                                            }
                                          ]
                                              
                                        }
                                      ]
                                    },
                                    {name:"حلیمه",gender:"f",deceased:true},
                                    {name:"ماه گل",gender:"f",deceased:true},
                                    {name:"بی بی ناز",gender:"f",deceased:true},
                                    {name:"گراناز",gender:"f",deceased:true},
                                    {name:"زری",gender:"f",deceased:true},
                                    {name:"شرف ناز",gender:"f",deceased:true},

                                ]
                            },
                    ]}
                  ]}
              ]}
          ]}
      ]}
  ]
};
