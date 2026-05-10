// === Birthdays / Packages screen ===
function BirthdaysScreen({ goto, back }) {
  const [pkgIdx, setPkgIdx] = React.useState(0);
  const packages = [
    { id: "magic",  name: "Magic Party",  price: "55 000",  kids: 10, hot: true,  duration: "2 ч", g: "linear-gradient(135deg,#FFD7B5,#FF9C8E)" },
    { id: "super",  name: "Super Hero",   price: "78 000",  kids: 15, hot: false, duration: "2.5 ч", g: "linear-gradient(135deg,#C7DDEF,#B6E3C8)" },
    { id: "royal",  name: "Royal Party",  price: "120 000", kids: 25, hot: false, duration: "3 ч", g: "linear-gradient(135deg,#E5D4F2,#FFC8DD)" },
  ];

  return (
    <div className="sk-page">
      <div className="sk-topbar">
        <button className="sk-iconbtn" onClick={back}><Icon.ArrowBack style={{width:18,height:18}}/></button>
        <div style={{ flex: 1, textAlign: "center", fontWeight: 600, fontSize: 15 }}>Дни рождения</div>
        <button className="sk-iconbtn" aria-label="Поделиться">
          <Icon.Send style={{width:16,height:16}}/>
        </button>
      </div>

      {/* Hero */}
      <div className="sk-hero sk-fade sk-fade--1" style={{ aspectRatio: "5/4" }}>
        <img className="sk-hero__img" src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80" alt="Праздник"/>
        <div className="sk-hero__veil"></div>
        <div className="sk-hero__body">
          <span className="sk-hero__chip">
            <Icon.Pin style={{ width: 12, height: 12 }} />
            Al-Farabi
          </span>
          <h1>Праздник, который<br/>дети <em>запомнят.</em></h1>
        </div>
      </div>

      {/* Why */}
      <section className="sk-section sk-fade sk-fade--2">
        <div className="sk-section__head">
          <h2>Что входит</h2>
        </div>
        <div className="sk-stack">
          {[
            { i: <Icon.Sparkle style={{width:18,height:18}}/>, t: "Аниматор и шоу", s: "Авторские программы под возраст" },
            { i: <Icon.Star    style={{width:18,height:18}}/>, t: "Безлимит активити-парк", s: "3000 м² зон, лабиринты, батуты" },
            { i: <Icon.Cake    style={{width:18,height:18}}/>, t: "Торт и угощения", s: "Меню по бюджету" },
            { i: <Icon.Chat    style={{width:18,height:18}}/>, t: "Заявка без переписок", s: "Менеджер свяжется в течение 30 мин" },
          ].map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: i < 3 ? "1px solid var(--line)" : 0 }}>
              <div style={{ width: 40, height: 40, borderRadius: 14, background: "var(--bg-soft)", display: "grid", placeItems: "center", flex: "0 0 40px" }}>{b.i}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{b.t}</div>
                <div className="sk-meta" style={{ marginTop: 2 }}>{b.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages carousel */}
      <section className="sk-section sk-fade sk-fade--3">
        <div className="sk-section__head">
          <h2>Пакеты</h2>
          <span className="sk-meta">{pkgIdx + 1} / {packages.length}</span>
        </div>
        <div className="sk-rail" style={{ gap: 14 }}>
          {packages.map((p, i) => (
            <div key={p.id}
              onClick={() => setPkgIdx(i)}
              className="sk-tap"
              style={{ width: 280, borderRadius: 24, overflow: "hidden", border: "1px solid var(--line)", background: "var(--bg-elev)", cursor: "pointer" }}>
              <div style={{ aspectRatio: "16/10", background: p.g, position: "relative" }}>
                {p.hot && <span className="sk-badge sk-badge--sun" style={{ position: "absolute", top: 14, left: 14 }}>Хит</span>}
                <div style={{
                  position: "absolute", inset: "auto 16px 16px auto",
                  fontFamily: "var(--font-display)", fontSize: 80, lineHeight: .8,
                  color: "rgba(255,255,255,.7)", letterSpacing: "-0.04em",
                }}>{p.name[0]}</div>
              </div>
              <div style={{ padding: "16px 18px 18px" }}>
                <div className="sk-pkg__row">
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "-0.02em" }}>{p.name}</div>
                </div>
                <div className="sk-meta" style={{ marginTop: 4 }}>До {p.kids} детей · {p.duration}</div>
                <div className="sk-row" style={{ marginTop: 14, justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>от</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "-0.02em" }}>{p.price} ₸</div>
                  </div>
                  <button className="sk-btn sk-btn--primary" style={{ padding: "10px 16px", fontSize: 14 }}
                    onClick={(e) => { e.stopPropagation(); rippleClick(e); goto("form"); }}>
                    Выбрать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 24 }}/>
      
      {/* Sticky CTA */}
      <div style={{
        position: "absolute", bottom: 86, left: 16, right: 16, zIndex: 30,
      }}>
        <button
          className="sk-btn sk-btn--accent sk-btn--block"
          onClick={(e) => { rippleClick(e); goto("form"); }}
          style={{ boxShadow: "0 16px 40px rgba(255,90,95,.35)" }}
        >
          <Icon.Cake style={{width:18,height:18}}/>
          Оставить заявку
        </button>
      </div>
    </div>
  );
}

window.BirthdaysScreen = BirthdaysScreen;
