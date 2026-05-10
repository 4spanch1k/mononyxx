// === Menu Screen (с фото) ===
function MenuScreen({ back }) {
  const cats = [
    { id:"soup",  title:"Супы",   icon:"🥣", items:[
      { name:"Куриный суп с домашней лапшой", price:"1 490", img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80" },
      { name:"Суп ребра",                     price:"1 890", img:"https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=400&q=80" },
      { name:"Пельмени с говядиной",          price:"1 390", img:"https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&q=80" },
      { name:"Пельмени с курицей",            price:"1 390", img:"https://images.unsplash.com/photo-1518983546435-91f8b87fe561?auto=format&fit=crop&w=400&q=80" },
    ]},
    { id:"salad", title:"Салаты", icon:"🥗", items:[
      { name:"Хрустящие баклажаны", price:"2 190", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
      { name:"Цезарь с курицей",    price:"2 390", img:"https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=400&q=80" },
      { name:"Греческий",           price:"2 390", img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80" },
      { name:"Свежий микс",         price:"1 490", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
    ]},
    { id:"pizza", title:"Пицца",   icon:"🍕", items:[
      { name:"Пепперони",        price:"2 490", img:"https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80" },
      { name:"Маргарита",        price:"2 390", img:"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=400&q=80" },
      { name:"Болоньезе",        price:"2 890", img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80" },
      { name:"4 сезона",         price:"2 890", img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80" },
      { name:"4 сыра",           price:"2 890", img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80" },
    ]},
    { id:"main",  title:"Вторые блюда", icon:"🍽️", items:[
      { name:"Манты домашние",       price:"2 490", img:"https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80" },
      { name:"Курица в соусе терияки", price:"2 790", img:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=400&q=80" },
      { name:"Сырная паста",         price:"1 790", img:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80" },
    ]},
    { id:"fast",  title:"Фастфуд", icon:"🍔", items:[
      { name:"Чизбургер Beef",     price:"2 090", img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
      { name:"Наггетсы",           price:"1 590", img:"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80" },
      { name:"Сырные палочки",     price:"1 690", img:"https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=400&q=80" },
      { name:"Крылышки (16 шт)",   price:"4 490", img:"https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=400&q=80" },
      { name:"Фри",                price:"790",   img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    ]},
    { id:"tea",   title:"Чай",    icon:"🍵", items:[
      { name:"Чёрный / Зелёный",   price:"990",  img:"https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80" },
      { name:"Чай с молоком",      price:"1 090", img:"https://images.unsplash.com/photo-1545487343-99ec88dee5e8?auto=format&fit=crop&w=400&q=80" },
      { name:"Ташкентский / Ягодный", price:"1 290", img:"https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=400&q=80" },
    ]},
  ];

  const [activeCat, setActiveCat] = React.useState("soup");

  return (
    <div className="sk-page">
      <div className="sk-topbar">
        <button className="sk-iconbtn" onClick={back}><Icon.ArrowBack style={{width:18,height:18}}/></button>
        <div style={{ flex: 1, textAlign: "center", fontWeight: 600, fontSize: 15 }}>Меню кафе</div>
        <button className="sk-iconbtn" aria-label="Поиск">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3" strokeLinecap="round"/></svg>
        </button>
      </div>

      <div className="sk-px sk-fade sk-fade--1" style={{ marginBottom: 16 }}>
        <span className="sk-eyebrow">Al-Farabi · 11:00 — 23:00</span>
        <h2 className="sk-h1" style={{ marginTop: 6 }}>Перекус<br/><em>между играми.</em></h2>
      </div>

      {/* Sticky category rail */}
      <div className="sk-fade sk-fade--2" style={{
        position: "sticky", top: 60, zIndex: 5,
        background: "linear-gradient(var(--bg) 80%, transparent)",
        padding: "8px 0 12px",
      }}>
        <div className="sk-rail" style={{ gap: 8 }}>
          {cats.map((c) => (
            <button key={c.id}
              onClick={() => {
                setActiveCat(c.id);
                document.getElementById("cat-" + c.id)?.scrollIntoView({ block: "start", behavior: "smooth" });
              }}
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                border: "1px solid var(--line)",
                background: activeCat === c.id ? "var(--accent-2)" : "var(--bg-elev)",
                color: activeCat === c.id ? "var(--bg)" : "var(--ink-2)",
                fontFamily: "inherit", fontSize: 13, fontWeight: 500,
                cursor: "pointer", whiteSpace: "nowrap",
                transition: "all .25s",
              }}>
              <span style={{marginRight:6}}>{c.icon}</span>{c.title}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="sk-px">
        {cats.map((c, ci) => (
          <section key={c.id} id={"cat-" + c.id} className={`sk-fade sk-fade--${Math.min(ci+2, 6)}`} style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "8px 0 12px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, letterSpacing: "-0.02em", margin: 0 }}>{c.title}</h2>
              <span className="sk-meta">· {c.items.length}</span>
            </div>
            <div className="sk-stack" style={{ gap: 8 }}>
              {c.items.map((it, i) => (
                <div key={i} className="sk-tap" style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: 10, borderRadius: 18,
                  background: "var(--bg-elev)", border: "1px solid var(--line)",
                  cursor: "pointer",
                }}>
                  <img src={it.img} alt={it.name} style={{
                    width: 64, height: 64, borderRadius: 14, objectFit: "cover",
                    flex: "0 0 64px", background: "var(--bg-soft)",
                  }} onError={(e)=>{e.target.style.opacity=0.3;}}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{it.name}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ink)", marginTop: 4, letterSpacing: "-0.01em" }}>
                      {it.price} <span style={{fontSize:12,color:"var(--ink-3)"}}>₸</span>
                    </div>
                  </div>
                  <button className="sk-iconbtn" style={{ width: 36, height: 36, background: "var(--accent-soft)", border: 0, color: "var(--accent)" }}
                    onClick={(e) => { e.stopPropagation(); rippleClick(e); }}>
                    <Icon.Plus style={{width:16,height:16}}/>
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="sk-px" style={{ marginBottom: 24 }}>
        <div style={{ padding: 14, borderRadius: 14, background: "var(--bg-soft)", display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "var(--ink-3)" }}>
          <Icon.Sparkle style={{width:14,height:14, color:"var(--accent)", flex:"0 0 14px"}}/>
          <span>Заказ на стол доступен только с устройств в кафе. Цены могут отличаться по филиалам.</span>
        </div>
      </div>
    </div>
  );
}
window.MenuScreen = MenuScreen;

// === Contacts Screen ===
function ContactsScreen({ back, goto }) {
  return (
    <div className="sk-page">
      <div className="sk-topbar">
        <button className="sk-iconbtn" onClick={back}><Icon.ArrowBack style={{width:18,height:18}}/></button>
        <div style={{ flex: 1, textAlign: "center", fontWeight: 600, fontSize: 15 }}>Контакты</div>
        <div style={{width:42}}/>
      </div>

      <div className="sk-px sk-fade sk-fade--1" style={{ marginBottom: 16 }}>
        <span className="sk-eyebrow">Star Kids · Al-Farabi</span>
        <h2 className="sk-h1" style={{ marginTop: 6 }}>Связаться<br/><em>в один тап.</em></h2>
      </div>

      {/* Map placeholder */}
      <div className="sk-px sk-fade sk-fade--2" style={{ marginBottom: 14 }}>
        <div style={{
          aspectRatio: "16/10", borderRadius: 22, overflow: "hidden", position: "relative",
          background: "linear-gradient(135deg,#E5E7EB,#D1D5DB)",
        }}>
          {/* fake map grid */}
          <svg width="100%" height="100%" viewBox="0 0 400 250" style={{position:"absolute",inset:0}}>
            <defs>
              <pattern id="m-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#m-grid)"/>
            <path d="M0 130 Q100 110 200 130 T 400 120" stroke="#9CA3AF" strokeWidth="6" fill="none" opacity=".5"/>
            <path d="M150 0 L 150 250" stroke="#9CA3AF" strokeWidth="3" fill="none" opacity=".4"/>
            <path d="M0 80 L 400 90" stroke="#9CA3AF" strokeWidth="3" fill="none" opacity=".4"/>
          </svg>
          {/* pin */}
          <div style={{
            position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-100%)",
            width: 40, height: 40, borderRadius: "50% 50% 50% 0",
            background: "var(--accent)", boxShadow: "0 6px 16px rgba(255,90,95,.5)",
            transform: "translate(-50%, -100%) rotate(-45deg)",
            display: "grid", placeItems: "center",
          }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#fff", transform: "rotate(45deg)" }}/>
          </div>
        </div>
      </div>

      {/* Info card */}
      <div className="sk-form-card sk-fade sk-fade--3" style={{ marginBottom: 12 }}>
        {[
          { i: <Icon.Pin   style={{width:18,height:18}}/>, lbl: "Адрес",       val: "пр. Аль-Фараби, 3 этаж" },
          { i: <Icon.Calendar style={{width:18,height:18}}/>, lbl: "Режим работы", val: "Ежедневно · 11:00 — 23:00" },
          { i: <Icon.Phone style={{width:18,height:18}}/>, lbl: "Телефон",     val: "+7 707 000 00 00" },
          { i: <Icon.Chat  style={{width:18,height:18}}/>, lbl: "WhatsApp",    val: "+7 707 000 00 00" },
        ].map((r,i) => (
          <div key={i} className="sk-form-row" style={{ flexDirection:"row", alignItems:"center", gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: "var(--bg-soft)", display: "grid", placeItems: "center", color: "var(--ink-2)", flex: "0 0 36px" }}>{r.i}</div>
            <div style={{ flex: 1 }}>
              <div className="sk-form-row__lbl">{r.lbl}</div>
              <div className="sk-form-row__val">{r.val}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="sk-px sk-fade sk-fade--4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
        <button className="sk-btn sk-btn--soft" onClick={(e)=>rippleClick(e)}>
          <Icon.Map style={{width:16,height:16}}/>
          Маршрут
        </button>
        <button className="sk-btn sk-btn--ghost" onClick={(e)=>rippleClick(e)}>
          <Icon.Phone style={{width:16,height:16}}/>
          Позвонить
        </button>
      </div>

      <div className="sk-px sk-fade sk-fade--5" style={{ marginBottom: 12 }}>
        <button className="sk-btn sk-btn--soft sk-btn--block"
          style={{ background: "#25D366", color: "#fff" }} onClick={(e)=>rippleClick(e)}>
          <Icon.Chat style={{width:18,height:18}}/>
          Написать в WhatsApp
        </button>
      </div>

      <div className="sk-fade sk-fade--6" style={{ padding: "0 16px", marginTop: 8 }}>
        <div style={{ padding: 16, borderRadius: 18, border: "1px solid var(--line)", background: "var(--bg-elev)" }}>
          <div className="sk-h3" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 18 }}>Неудобно говорить?</div>
          <p className="sk-meta" style={{ marginTop: 6 }}>Оставьте короткий запрос — менеджер ответит в чате с контекстом по филиалу.</p>
          <button className="sk-btn sk-btn--ghost" style={{ marginTop: 10 }} onClick={() => goto("ask")}>
            <Icon.Send style={{width:14,height:14}}/>
            Запрос менеджеру
          </button>
        </div>
      </div>

      <div style={{height:24}}/>
    </div>
  );
}
window.ContactsScreen = ContactsScreen;

// === Ask Manager screen ===
function AskScreen({ back }) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("+7 ");
  const [email, setEmail] = React.useState("");
  const [q, setQ] = React.useState("");
  const valid = name.length >= 2 && phone.length >= 10;
  const [sent, setSent] = React.useState(false);

  if (sent) return <SuccessScreen back={back}/>;

  return (
    <div className="sk-page">
      <div className="sk-topbar">
        <button className="sk-iconbtn" onClick={back}><Icon.ArrowBack style={{width:18,height:18}}/></button>
        <div style={{ flex: 1, textAlign: "center", fontWeight: 600, fontSize: 15 }}>Менеджеру</div>
        <div style={{width:42}}/>
      </div>

      <div className="sk-px sk-fade sk-fade--1" style={{ marginBottom: 18 }}>
        <h2 className="sk-h1">Короткий запрос<br/><em>без переписок.</em></h2>
        <p className="sk-body" style={{ marginTop: 8, color: "var(--ink-3)" }}>Опишите вопрос — перезвоним и поможем без лишних уточнений.</p>
      </div>

      <div className="sk-form-card sk-fade sk-fade--2" style={{ marginBottom: 12 }}>
        <div className="sk-form-row sk-form-row--input">
          <div className="sk-form-row__lbl">Имя</div>
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Айгерим"/>
        </div>
        <div className="sk-form-row sk-form-row--input">
          <div className="sk-form-row__lbl">Телефон</div>
          <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+7 700 000 00 00"/>
        </div>
        <div className="sk-form-row sk-form-row--input">
          <div className="sk-form-row__lbl">Email · необязательно</div>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@email.com"/>
        </div>
        <div className="sk-form-row sk-form-row--input">
          <div className="sk-form-row__lbl">Что нужно уточнить</div>
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Например: свободные даты на 12 мая"/>
        </div>
      </div>

      <div className="sk-px sk-fade sk-fade--3" style={{ marginTop: 8 }}>
        <div className="sk-row" style={{ gap: 8, color: "var(--ink-3)", fontSize: 12 }}>
          <Icon.Lock style={{width:14,height:14}}/>
          <span>Запрос уйдёт менеджеру по филиалу Al-Farabi.</span>
        </div>
      </div>

      <div style={{ height: 110 }}/>
      <div style={{ position: "absolute", bottom: 24, left: 16, right: 16, zIndex: 30 }}>
        <button className="sk-btn sk-btn--accent sk-btn--block"
          disabled={!valid}
          onClick={(e)=>{ rippleClick(e); setTimeout(()=>setSent(true), 600); }}
          style={{ opacity: valid ? 1 : 0.5 }}>
          <Icon.Send style={{width:16,height:16}}/>
          Отправить запрос
        </button>
      </div>
    </div>
  );
}
window.AskScreen = AskScreen;

// === Tickets purchase bottom-sheet ===
function TicketBuySheet({ open, onClose, onContinue }) {
  const [step, setStep] = React.useState("choose"); // choose | buy
  React.useEffect(() => { if (open) setStep("choose"); }, [open]);

  return (
    <>
      <div onClick={onClose} style={{
        position:"absolute", inset:0, background:"rgba(0,0,0,.5)",
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity .25s", zIndex: 80,
      }}/>
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        background: "var(--bg)", borderRadius: "24px 24px 0 0",
        maxHeight: "82%", overflow: "auto",
        transform: open ? "translateY(0)" : "translateY(110%)",
        transition: "transform .4s cubic-bezier(.2,.8,.2,1)",
        zIndex: 81, boxShadow: "var(--shadow-lg)",
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "var(--line-strong)", margin: "10px auto 4px" }}/>

        {step === "choose" && (
          <div style={{ padding: "16px 20px 28px" }}>
            <div className="sk-row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontFamily:"var(--font-display)", fontSize: 24, letterSpacing:"-0.02em", margin: 0 }}>Билеты</h3>
              <button className="sk-iconbtn" onClick={onClose} aria-label="Закрыть">×</button>
            </div>
            <p className="sk-meta" style={{ marginTop: 4 }}>Выберите, что хотите сделать сейчас.</p>
            <div className="sk-stack" style={{ gap: 8, marginTop: 16 }}>
              <div className="sk-tap" style={{ padding: 16, borderRadius: 18, background: "var(--bg-elev)", border: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "var(--accent-soft)", color: "var(--accent)", display: "grid", placeItems: "center" }}>
                  <Icon.Ticket style={{width:18,height:18}}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>Мои билеты</div>
                  <div className="sk-meta">История и активные билеты.</div>
                </div>
                <Icon.Chevron style={{ width: 18, height: 18, transform: "rotate(-90deg)", color: "var(--ink-3)" }}/>
              </div>
              <div className="sk-tap" onClick={() => setStep("buy")} style={{ padding: 16, borderRadius: 18, background: "var(--bg-elev)", border: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon.Plus style={{width:18,height:18}}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>Купить входной билет</div>
                  <div className="sk-meta">Выберите филиал, дату и количество.</div>
                </div>
                <Icon.Chevron style={{ width: 18, height: 18, transform: "rotate(-90deg)", color: "var(--ink-3)" }}/>
              </div>
            </div>
          </div>
        )}

        {step === "buy" && <TicketBuyForm onClose={onClose} onContinue={onContinue}/>}
      </div>
    </>
  );
}

function TicketBuyForm({ onClose, onContinue }) {
  const tariffs = [
    { id:"k13", title:"Дети 1—3 года",  price:"2 700", note:"Документ, подтверждающий возраст", count: 0 },
    { id:"k15", title:"Дети 4—15 лет",  price:"3 700", note:"Базовый билет в игровую зону", count: 1 },
    { id:"adult", title:"Взрослый сопровождающий", price:"400", note:"Тариф для одного взрослого", count: 1 },
  ];
  const [counts, setCounts] = React.useState(() => Object.fromEntries(tariffs.map(t => [t.id, t.count])));
  const total = tariffs.reduce((s,t)=> s + counts[t.id] * parseInt(t.price.replace(/\s/g,""),10), 0);

  return (
    <div style={{ padding: "12px 20px 28px" }}>
      <div className="sk-row" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 style={{ fontFamily:"var(--font-display)", fontSize: 22, letterSpacing:"-0.02em", margin: 0 }}>Купить билет</h3>
          <span className="sk-eyebrow" style={{ fontSize: 10 }}>Шаг 1 из 2</span>
        </div>
        <button className="sk-iconbtn" onClick={onClose} aria-label="Закрыть">×</button>
      </div>

      <p className="sk-meta" style={{ marginTop: 8 }}>Выберите филиал и день посещения.</p>

      <div className="sk-form-card" style={{ margin: "14px 0 0" }}>
        <div className="sk-form-row" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="sk-form-row__lbl">Филиал</div>
            <div className="sk-form-row__val">Star Kids · Al-Farabi</div>
          </div>
          <Icon.Chevron style={{ width: 18, height: 18, color: "var(--ink-3)" }}/>
        </div>
        <div className="sk-form-row" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="sk-form-row__lbl">День посещения</div>
            <div className="sk-form-row__val">Сб, 10 мая</div>
          </div>
          <Icon.Calendar style={{ width: 18, height: 18, color: "var(--ink-3)" }}/>
        </div>
      </div>

      <div style={{ marginTop: 18, marginBottom: 8, fontSize: 11, color:"var(--ink-3)", textTransform:"uppercase", letterSpacing:".06em" }}>
        Доступные тарифы
      </div>
      <div className="sk-stack" style={{ gap: 8 }}>
        {tariffs.map((t) => (
          <div key={t.id} style={{
            padding: 14, borderRadius: 18, background: "var(--bg-elev)",
            border: "1px solid var(--line)",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{t.title}</div>
              <div className="sk-meta" style={{ marginTop: 2 }}>{t.note}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, marginTop: 4, letterSpacing: "-0.02em" }}>
                {t.price} <span style={{fontSize:11,color:"var(--ink-3)"}}>₸</span>
              </div>
            </div>
            <div className="sk-stepper">
              <button onClick={() => setCounts({...counts, [t.id]: Math.max(0, counts[t.id]-1)})} disabled={counts[t.id] === 0}>−</button>
              <span className="sk-stepper__val">{counts[t.id]}</span>
              <button onClick={() => setCounts({...counts, [t.id]: counts[t.id]+1})}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 18, padding: "16px 0", borderTop: "1px solid var(--line)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div className="sk-meta">Итого</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 24, letterSpacing: "-0.02em" }}>
            {total.toLocaleString("ru")} ₸
          </div>
        </div>
        <button className="sk-btn sk-btn--accent" disabled={total === 0}
          style={{ opacity: total === 0 ? 0.5 : 1 }}
          onClick={(e) => { rippleClick(e); onContinue && onContinue(); }}>
          Продолжить
          <Icon.ArrowRight style={{width:16,height:16}}/>
        </button>
      </div>
    </div>
  );
}
window.TicketBuySheet = TicketBuySheet;
