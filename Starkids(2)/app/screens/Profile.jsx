// === Profile Screen ===
function ProfileScreen({ back }) {
  const [editing, setEditing] = React.useState(false);
  const [first, setFirst] = React.useState("Шадияр");
  const [last,  setLast]  = React.useState("Турекханулы");

  const kids = [
    { name: "Айдар", emoji: "👦", date: "29 янв 2012", age: "13", tag: "Мальчик", g: "linear-gradient(135deg,#C7DDEF,#B6E3C8)" },
    { name: "Айя",   emoji: "👧", date: "01 янв 2023", age: "2",  tag: "Девочка", g: "linear-gradient(135deg,#FFC8DD,#FFD7B5)" },
  ];

  return (
    <div className="sk-page">
      <div className="sk-topbar">
        <button className="sk-iconbtn" onClick={back}><Icon.ArrowBack style={{width:18,height:18}}/></button>
        <div style={{ flex: 1, textAlign: "center", fontWeight: 600, fontSize: 15 }}>Профиль</div>
        <button className="sk-iconbtn" aria-label="Меню">
          <Icon.Dots style={{width:18,height:18}}/>
        </button>
      </div>

      {/* Hero head */}
      <div className="sk-fade sk-fade--1 sk-profile-head">
        <div className="sk-avatar">
          ШТ
          <button className="sk-avatar__edit" aria-label="Сменить фото">
            <Icon.Camera style={{width:14,height:14, color:"var(--ink-2)"}}/>
          </button>
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 24, letterSpacing: "-0.02em" }}>{first} {last}</div>
        <div className="sk-meta" style={{ marginTop: 4 }}>shadiar009149@gmail.com</div>
        <div className="sk-row" style={{ justifyContent: "center", gap: 6, marginTop: 12 }}>
          <span className="sk-badge sk-badge--accent">★ VIP клиент</span>
          <span className="sk-badge">3 праздника</span>
        </div>
      </div>

      {/* Stats */}
      <div className="sk-stats sk-fade sk-fade--2">
        <div className="sk-stat"><div className="sk-stat__num">3</div><div className="sk-stat__lbl">ПРАЗДНИКОВ</div></div>
        <div className="sk-stat"><div className="sk-stat__num">2</div><div className="sk-stat__lbl">ДЕТЕЙ</div></div>
        <div className="sk-stat"><div className="sk-stat__num">8 200</div><div className="sk-stat__lbl">БОНУСОВ</div></div>
      </div>

      {/* Personal data */}
      <section className="sk-section sk-fade sk-fade--3">
        <div className="sk-section__head">
          <h2>Личные данные</h2>
          <a href="#" onClick={(e) => { e.preventDefault(); setEditing(!editing); }}>
            {editing ? "Готово" : "Изменить"}
          </a>
        </div>
        <div className="sk-form-card" style={{ margin: 0 }}>
          <div className="sk-form-row sk-form-row--input">
            <div className="sk-form-row__lbl">Имя</div>
            {editing
              ? <input value={first} onChange={(e) => setFirst(e.target.value)}/>
              : <div className="sk-form-row__val">{first}</div>}
          </div>
          <div className="sk-form-row sk-form-row--input">
            <div className="sk-form-row__lbl">Фамилия</div>
            {editing
              ? <input value={last} onChange={(e) => setLast(e.target.value)}/>
              : <div className="sk-form-row__val">{last}</div>}
          </div>
          <div className="sk-form-row">
            <div className="sk-form-row__lbl">Email</div>
            <div className="sk-form-row__val">shadiar009149@gmail.com</div>
          </div>
        </div>
      </section>

      {/* Kids */}
      <section className="sk-section sk-fade sk-fade--4">
        <div className="sk-section__head">
          <h2>Дети</h2>
          <button className="sk-btn sk-btn--ghost" style={{ padding: "8px 14px", fontSize: 13 }}>
            <Icon.Plus style={{width:14,height:14}}/> Добавить
          </button>
        </div>
        <div className="sk-stack" style={{ gap: 10 }}>
          {kids.map((k, i) => (
            <div key={i} className="sk-tap" style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: 14, borderRadius: 18,
              background: "var(--bg-elev)", border: "1px solid var(--line)", cursor: "pointer",
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 18,
                background: k.g, display: "grid", placeItems: "center",
                fontSize: 28,
              }}>{k.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{k.name}</div>
                <div className="sk-row" style={{ gap: 8, marginTop: 4 }}>
                  <span className="sk-badge">{k.age} лет</span>
                  <span className="sk-meta">· {k.date}</span>
                </div>
              </div>
              <Icon.Chevron style={{ width: 18, height: 18, color: "var(--ink-3)", transform: "rotate(-90deg)" }}/>
            </div>
          ))}
        </div>
      </section>

      {/* Branch */}
      <section className="sk-section sk-fade sk-fade--5">
        <div className="sk-section__head">
          <h2>Мой филиал</h2>
        </div>
        <div className="sk-tap" style={{
          padding: 16, borderRadius: 18,
          background: "var(--bg-elev)", border: "1px solid var(--line)",
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 14, background: "var(--accent-soft)",
            display: "grid", placeItems: "center", color: "var(--accent)", flex: "0 0 44px",
          }}>
            <Icon.Pin style={{width:20,height:20}}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>Star Kids · Al-Farabi</div>
            <div className="sk-meta">пр. Аль-Фараби, 3 этаж</div>
          </div>
          <Icon.Chevron style={{ width: 18, height: 18, color: "var(--ink-3)", transform: "rotate(-90deg)" }}/>
        </div>
      </section>

      {/* Settings list */}
      <section className="sk-section sk-fade sk-fade--6" style={{ paddingBottom: 8 }}>
        <div className="sk-form-card" style={{ margin: 0 }}>
          {[
            { i: <Icon.Bell  style={{width:18,height:18}}/>, t: "Уведомления", v: "Вкл" },
            { i: <Icon.Tag   style={{width:18,height:18}}/>, t: "Промокоды",   v: "1 активен" },
            { i: <Icon.Chat  style={{width:18,height:18}}/>, t: "Поддержка",   v: "" },
            { i: <Icon.Star  style={{width:18,height:18}}/>, t: "Оценить приложение", v: "" },
          ].map((row, i) => (
            <div key={i} className="sk-form-row sk-tap" style={{
              flexDirection: "row", alignItems: "center", gap: 14, cursor: "pointer",
            }}>
              <div style={{ color: "var(--ink-3)" }}>{row.i}</div>
              <div style={{ flex: 1, fontSize: 15, color: "var(--ink)" }}>{row.t}</div>
              {row.v && <div className="sk-meta">{row.v}</div>}
              <Icon.Chevron style={{ width: 16, height: 16, color: "var(--ink-3)", transform: "rotate(-90deg)" }}/>
            </div>
          ))}
        </div>
      </section>

      <div className="sk-px" style={{ marginTop: 18, marginBottom: 24 }}>
        <button className="sk-btn sk-btn--soft sk-btn--block" style={{ color: "var(--accent)" }}>
          Выйти из аккаунта
        </button>
        <div className="sk-meta" style={{ textAlign: "center", marginTop: 12, fontSize: 11 }}>
          Star Kids · v 2.4.0 · build 248
        </div>
      </div>
    </div>
  );
}

window.ProfileScreen = ProfileScreen;
