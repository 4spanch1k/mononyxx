// === Home Screen ===
function HomeScreen({ goto, branchOpen, onBranchOpen }) {
  const tiles = [
    { id: "branch",   icon: <Icon.Map  style={{width:18,height:18}}/>, title: "Филиал и маршрут",  sub: "Как доехать и что внутри", onClick: () => goto("contacts") },
    { id: "bday",     icon: <Icon.Cake style={{width:18,height:18}}/>, title: "Дни рождения",      sub: "Пакеты и заявка", onClick: () => goto("bday") },
    { id: "menu",     icon: <Icon.Fork style={{width:18,height:18}}/>, title: "Меню",              sub: "Еда и напитки", onClick: () => goto("menu") },
    { id: "contacts", icon: <Icon.Phone style={{width:18,height:18}}/>, title: "Контакты",         sub: "WhatsApp · звонок", onClick: () => goto("contacts") },
    { id: "promo",    icon: <Icon.Tag  style={{width:18,height:18}}/>, title: "Акции",             sub: "Текущие предложения" },
    { id: "ask",      icon: <Icon.Chat style={{width:18,height:18}}/>, title: "Менеджеру",         sub: "Вопрос по филиалу", onClick: () => goto("ask") },
  ];

  return (
    <div className="sk-page">
      <div className="sk-topbar">
        <div className="sk-locator sk-tap" onClick={onBranchOpen}>
          <Icon.Pin style={{ width: 16, height: 16, color: "var(--accent)" }} />
          <span style={{ flex: 1 }}>Star Kids · Al-Farabi</span>
          <Icon.Chevron style={{ width: 16, height: 16, color: "var(--ink-3)" }} />
        </div>
        <button className="sk-iconbtn" onClick={(e) => rippleClick(e)} aria-label="Уведомления">
          <Icon.Bell style={{ width: 18, height: 18 }} />
          <span className="sk-iconbtn__dot"></span>
        </button>
      </div>

      {/* Hero */}
      <section className="sk-hero sk-fade sk-fade--1">
        <img className="sk-hero__img" src="https://images.unsplash.com/photo-1576094848989-1ee5b58cdb86?auto=format&fit=crop&w=900&q=80" alt="Star Kids"/>
        <div className="sk-hero__veil"></div>
        <div className="sk-hero__body">
          <span className="sk-hero__chip">
            <Icon.Sparkle style={{ width: 12, height: 12 }} />
            Любят дети · доверяют родители
          </span>
          <h1>Семейный отдых<br/>и <em>яркие</em> дни рождения.</h1>
          <div className="sk-hero__meta">
            <span>3000 м²</span>
            <span style={{opacity:.5}}>·</span>
            <span>11:00 — 23:00</span>
          </div>
          <button
            className="sk-btn sk-btn--accent sk-btn--block"
            onClick={(e) => { rippleClick(e); goto("bday"); }}
            style={{ marginTop: 4 }}
          >
            Организовать день рождения
            <Icon.ArrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </section>

      {/* News rail */}
      <section className="sk-section sk-fade sk-fade--2">
        <div className="sk-section__head">
          <h2>Новости</h2>
          <a href="#">Все →</a>
        </div>
        <div className="sk-rail">
          {[
            { tag: "Анонс", title: "Новая зона приключений", date: "21 апр", g: "linear-gradient(135deg,#FFD7B5,#FF9C8E)" },
            { tag: "Ивент", title: "Парад супергероев", date: "28 апр", g: "linear-gradient(135deg,#C7DDEF,#B6E3C8)" },
            { tag: "Меню", title: "Летнее обновление кафе", date: "5 мая", g: "linear-gradient(135deg,#E5D4F2,#FFC8DD)" },
          ].map((n, i) => (
            <div key={i} className="sk-tap" style={{
              width: 220,
              borderRadius: 22,
              overflow: "hidden",
              border: "1px solid var(--line)",
              background: "var(--bg-elev)",
              cursor: "pointer",
            }}>
              <div style={{ aspectRatio: "16/11", background: n.g, position: "relative" }}>
                <span className="sk-badge" style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,.85)", backdropFilter: "blur(8px)" }}>{n.tag}</span>
              </div>
              <div style={{ padding: "12px 14px 14px" }}>
                <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.25, letterSpacing: "-0.01em" }}>{n.title}</div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 6 }}>{n.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick actions */}
      <section className="sk-fade sk-fade--3" style={{ marginTop: 28 }}>
        <div className="sk-section__head" style={{ padding: "0 20px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, letterSpacing: "-0.02em", margin: 0 }}>Быстрые действия</h2>
        </div>
        <div className="sk-grid-2" style={{ marginTop: 14 }}>
          {tiles.map((t) => (
            <div key={t.id} className="sk-tile" onClick={(e) => { rippleClick(e); t.onClick?.(); }}>
              <div className="sk-tile__icon">{t.icon}</div>
              <div>
                <div className="sk-tile__title">{t.title}</div>
                <div className="sk-tile__sub">{t.sub}</div>
              </div>
              <div className="sk-tile__arrow">
                <Icon.ArrowRight style={{ width: 14, height: 14 }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured package */}
      <section className="sk-section sk-fade sk-fade--4">
        <div className="sk-section__head">
          <h2>Главный пакет</h2>
          <a href="#">Все пакеты →</a>
        </div>
        <div className="sk-pkg sk-tap" onClick={() => goto("bday")}>
          <div className="sk-pkg__media">
            <div className="sk-pkg__media-pattern"></div>
            <span className="sk-badge sk-badge--sun" style={{ position: "absolute", top: 16, left: 16 }}>Хит продаж</span>
            <div style={{
              position:"absolute", inset:"auto 16px 16px auto",
              fontFamily:"var(--font-display)", fontSize:96, lineHeight:.85,
              color: "rgba(255,255,255,.7)", letterSpacing:"-0.04em",
            }}>M</div>
          </div>
          <div className="sk-pkg__body">
            <div className="sk-pkg__row">
              <div className="sk-pkg__name">Magic Party</div>
              <div className="sk-pkg__price">от 55 000 ₸</div>
            </div>
            <div className="sk-meta">До 10 детей · аниматор · 2 часа</div>
            <div className="sk-row" style={{ marginTop: 10, gap: 6, flexWrap: "wrap" }}>
              <span className="sk-badge">Шоу-программа</span>
              <span className="sk-badge">Торт</span>
              <span className="sk-badge">Игровая зона</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust block */}
      <section className="sk-fade sk-fade--5">
        <div className="sk-stats">
          <div className="sk-stat"><div className="sk-stat__num">3000</div><div className="sk-stat__lbl">м² ИГРОВОЙ ЗОНЫ</div></div>
          <div className="sk-stat"><div className="sk-stat__num">12</div><div className="sk-stat__lbl">ЛЕТ НА РЫНКЕ</div></div>
          <div className="sk-stat"><div className="sk-stat__num">4.9</div><div className="sk-stat__lbl">2GIS · 1.2K ОТЗЫВОВ</div></div>
        </div>
      </section>

      <div style={{ height: 24 }}></div>

      {/* Branch picker bottom sheet */}
      <BranchSheet open={branchOpen} onClose={onBranchOpen} />
    </div>
  );
}

function BranchSheet({ open, onClose }) {
  const branches = [
    { name: "Al-Farabi", addr: "пр. Аль-Фараби, 3 этаж", tag: "Текущий" },
    { name: "Mega Park", addr: "ТРЦ Mega, 2 этаж", tag: null },
    { name: "Dostyk Plaza", addr: "Достык 111, 4 этаж", tag: null },
  ];
  return (
    <>
      <div onClick={onClose} style={{
        position: "absolute", inset: 0, background: "rgba(0,0,0,.4)",
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity .25s", zIndex: 70,
      }}/>
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        background: "var(--bg-elev)", borderRadius: "24px 24px 0 0",
        padding: "12px 20px 28px",
        transform: open ? "translateY(0)" : "translateY(110%)",
        transition: "transform .4s cubic-bezier(.2,.8,.2,1)",
        zIndex: 71,
        boxShadow: "var(--shadow-lg)",
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "var(--line-strong)", margin: "4px auto 16px" }}/>
        <h3 className="sk-h3" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, letterSpacing: "-0.02em" }}>Выберите филиал</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 14 }}>
          {branches.map((b, i) => (
            <div key={i} onClick={onClose} className="sk-tap" style={{
              padding: 14, borderRadius: 14,
              background: i === 0 ? "var(--accent-soft)" : "var(--bg-soft)",
              display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "var(--bg-elev)", display: "grid", placeItems: "center",
                color: "var(--accent)",
              }}>
                <Icon.Pin style={{width:16,height:16}}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>Star Kids · {b.name}</div>
                <div className="sk-meta">{b.addr}</div>
              </div>
              {b.tag && <span className="sk-badge sk-badge--accent">{b.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

window.HomeScreen = HomeScreen;
