// === Tickets / История заявок ===
function TicketsScreen() {
  const items = [
    { id: "SK-2026-048", title: "Magic Party · Айдар", date: "10 мая 2026", status: "confirmed", price: "55 000", g: "linear-gradient(135deg,#FFD7B5,#FF9C8E)" },
    { id: "SK-2026-021", title: "Super Hero · Айя",   date: "01 янв 2026", status: "done",      price: "78 000", g: "linear-gradient(135deg,#C7DDEF,#B6E3C8)" },
    { id: "SK-2025-198", title: "Magic Party · Айдар", date: "29 янв 2025", status: "done",      price: "55 000", g: "linear-gradient(135deg,#E5D4F2,#FFC8DD)" },
  ];
  const statusMap = {
    confirmed: { lbl: "Подтверждено", color: "var(--accent)", bg: "var(--accent-soft)" },
    done:      { lbl: "Завершено",    color: "var(--ink-3)",  bg: "var(--bg-soft)"     },
  };
  return (
    <div className="sk-page">
      <div className="sk-topbar">
        <div style={{ flex: 1, fontFamily:"var(--font-display)", fontSize: 26, letterSpacing:"-0.02em" }}>Билеты</div>
        <button className="sk-iconbtn"><Icon.Plus style={{width:18,height:18}}/></button>
      </div>

      <div className="sk-px sk-fade sk-fade--1" style={{ marginBottom: 16 }}>
        <p className="sk-body" style={{color:"var(--ink-3)"}}>История заявок и предстоящих праздников.</p>
      </div>

      <div className="sk-stack" style={{ padding: "0 16px", gap: 12 }}>
        {items.map((it, i) => (
          <div key={i} className={`sk-fade sk-fade--${i+2} sk-tap`} style={{
            borderRadius: 22, overflow: "hidden",
            background: "var(--bg-elev)", border: "1px solid var(--line)",
            display: "flex",
          }}>
            <div style={{ width: 90, background: it.g, position: "relative", flexShrink: 0 }}>
              <div style={{
                position:"absolute", inset:"auto 8px 8px",
                fontFamily:"var(--font-display)", fontSize: 36, lineHeight:.85,
                color:"rgba(255,255,255,.8)", letterSpacing:"-0.04em",
              }}>{it.title[0]}</div>
            </div>
            <div style={{ padding: "14px 16px", flex: 1 }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap: 8 }}>
                <span className="sk-badge" style={{
                  background: statusMap[it.status].bg,
                  color: statusMap[it.status].color,
                }}>● {statusMap[it.status].lbl}</span>
                <span style={{ fontSize: 11, fontFamily:"var(--font-mono)", color:"var(--ink-4)" }}>{it.id}</span>
              </div>
              <div style={{ fontWeight: 600, fontSize: 15, marginTop: 8, letterSpacing:"-0.01em" }}>{it.title}</div>
              <div className="sk-meta" style={{ marginTop: 2 }}>{it.date} · {it.price} ₸</div>
            </div>
          </div>
        ))}
      </div>

      <div className="sk-px sk-fade sk-fade--5" style={{ marginTop: 28 }}>
        <div style={{
          padding: 18, borderRadius: 22, border: "1px dashed var(--line-strong)",
          textAlign: "center", color: "var(--ink-3)",
        }}>
          <Icon.Sparkle style={{width:22,height:22,color:"var(--accent)"}}/>
          <div style={{fontWeight:600,color:"var(--ink)",marginTop:8}}>Запланировать новый</div>
          <div className="sk-meta" style={{marginTop:4}}>День рождения, частное событие или экскурсия.</div>
        </div>
      </div>
    </div>
  );
}
window.TicketsScreen = TicketsScreen;

// === Promo / Акции ===
function PromoScreen() {
  const promos = [
    { tag: "−25%", title: "Будни до 17:00", sub: "Все пакеты со скидкой 25% по будням до 17:00", g: "linear-gradient(135deg,#FFD7B5,#FF9C8E)" },
    { tag: "+1 ч", title: "Бонусный час",   sub: "Дополнительный час игр в подарок на пакеты от 80 000 ₸", g: "linear-gradient(135deg,#C7DDEF,#B6E3C8)" },
    { tag: "−15%", title: "Друзьям",       sub: "Приведи друга — получи 15% на следующий праздник",       g: "linear-gradient(135deg,#E5D4F2,#FFC8DD)" },
  ];
  return (
    <div className="sk-page">
      <div className="sk-topbar">
        <div style={{ flex: 1, fontFamily:"var(--font-display)", fontSize: 26, letterSpacing:"-0.02em" }}>Акции</div>
      </div>
      <div className="sk-px sk-fade sk-fade--1" style={{ marginBottom: 16 }}>
        <p className="sk-body" style={{color:"var(--ink-3)"}}>Текущие предложения · Al-Farabi</p>
      </div>
      <div className="sk-stack" style={{ padding: "0 16px", gap: 14 }}>
        {promos.map((p,i) => (
          <div key={i} className={`sk-fade sk-fade--${i+2} sk-tap`} style={{
            borderRadius: 24, overflow: "hidden",
            background: p.g, position: "relative", aspectRatio: "16/9",
            display:"flex", alignItems:"flex-end", padding: 20, color:"#fff",
          }}>
            <div style={{
              position:"absolute", top: 16, right: 18,
              fontFamily:"var(--font-display)", fontSize: 44, letterSpacing:"-0.03em",
              color:"rgba(255,255,255,.85)",
            }}>{p.tag}</div>
            <div>
              <div style={{ fontFamily:"var(--font-display)", fontSize: 24, letterSpacing:"-0.02em", textShadow:"0 1px 2px rgba(0,0,0,.1)" }}>{p.title}</div>
              <div style={{ fontSize: 13, marginTop: 6, maxWidth:"26ch", opacity:.95 }}>{p.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.PromoScreen = PromoScreen;
