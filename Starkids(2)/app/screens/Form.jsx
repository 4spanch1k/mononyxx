// === Birthday Request Form ===
function FormScreen({ back, onSent }) {
  const [pkg, setPkg] = React.useState("Magic Party");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("+7 ");
  const [date, setDate] = React.useState(2);
  const [guests, setGuests] = React.useState(8);
  const [comment, setComment] = React.useState("");
  const [pkgOpen, setPkgOpen] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const dateRange = [
    { day: "ПН", num: 5,  full: "5 мая"  },
    { day: "ВТ", num: 6,  full: "6 мая"  },
    { day: "СР", num: 7,  full: "7 мая"  },
    { day: "ЧТ", num: 8,  full: "8 мая"  },
    { day: "ПТ", num: 9,  full: "9 мая"  },
    { day: "СБ", num: 10, full: "10 мая" },
    { day: "ВС", num: 11, full: "11 мая" },
  ];

  const valid = name.length >= 2 && phone.length >= 10 && pkg && guests > 0;

  function submit(e) {
    if (!valid) return;
    rippleClick(e);
    setSubmitting(true);
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => { onSent && onSent(); }, 1800);
    }, 800);
  }

  if (success) return <SuccessScreen back={back}/>;

  return (
    <div className="sk-page">
      <div className="sk-topbar">
        <button className="sk-iconbtn" onClick={back}><Icon.ArrowBack style={{width:18,height:18}}/></button>
        <div style={{ flex: 1, textAlign: "center", fontWeight: 600, fontSize: 15 }}>Заявка</div>
        <div style={{ width: 42 }}/>
      </div>

      <div className="sk-px sk-fade sk-fade--1" style={{ marginBottom: 18 }}>
        <span className="sk-eyebrow">Шаг 1 из 1</span>
        <h2 className="sk-h1" style={{ marginTop: 6 }}>Соберём праздник<br/>за <em style={{fontStyle:"italic"}}>пару минут.</em></h2>
        <p className="sk-body" style={{ marginTop: 8, color: "var(--ink-3)" }}>Менеджер свяжется в течение 30 минут — подтвердит дату и расскажет про пакет.</p>
      </div>

      {/* Branch + Package card */}
      <div className="sk-form-card sk-fade sk-fade--2" style={{ marginBottom: 12 }}>
        <div className="sk-form-row" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="sk-form-row__lbl">Филиал</div>
            <div className="sk-form-row__val">Star Kids · Al-Farabi</div>
            <div className="sk-meta" style={{ marginTop: 2 }}>пр. Аль-Фараби, 3 этаж</div>
          </div>
          <Icon.Chevron style={{ width: 18, height: 18, color: "var(--ink-3)" }}/>
        </div>
        <div className="sk-form-row sk-tap" onClick={() => setPkgOpen(!pkgOpen)} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
          <div>
            <div className="sk-form-row__lbl">Пакет</div>
            <div className="sk-form-row__val">{pkg}</div>
          </div>
          <Icon.Chevron style={{ width: 18, height: 18, color: "var(--ink-3)", transform: pkgOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }}/>
        </div>
        {pkgOpen && (
          <div style={{ padding: "10px 0 14px", display: "flex", flexDirection: "column", gap: 6 }}>
            {["Magic Party", "Super Hero", "Royal Party"].map((p) => (
              <button key={p} onClick={() => { setPkg(p); setPkgOpen(false); }}
                style={{
                  textAlign: "left", padding: "10px 12px",
                  background: pkg === p ? "var(--accent-soft)" : "transparent",
                  border: 0, borderRadius: 12, cursor: "pointer",
                  fontFamily: "inherit", fontSize: 14, color: "var(--ink)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                <span>{p}</span>
                {pkg === p && <Icon.Check style={{ width: 16, height: 16, color: "var(--accent)" }}/>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Date pills */}
      <div className="sk-fade sk-fade--3" style={{ padding: "0 16px 12px" }}>
        <div style={{ fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 10 }}>
          Желаемая дата
        </div>
        <div className="sk-datepills">
          {dateRange.map((d, i) => (
            <div key={i} onClick={() => setDate(i)}
              className={"sk-datepill" + (date === i ? " sk-datepill--active" : "")}>
              <div className="sk-datepill__day">{d.day}</div>
              <div className="sk-datepill__num">{d.num}</div>
            </div>
          ))}
        </div>
        <div className="sk-meta" style={{ marginTop: 8 }}>Выбрано: <strong style={{color:"var(--ink)"}}>{dateRange[date].full}</strong> · можно изменить позже</div>
      </div>

      {/* Contact + guests */}
      <div className="sk-form-card sk-fade sk-fade--4" style={{ marginBottom: 12 }}>
        <div className="sk-form-row sk-form-row--input">
          <div className="sk-form-row__lbl">Имя родителя</div>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Айгерим"/>
        </div>
        <div className="sk-form-row sk-form-row--input">
          <div className="sk-form-row__lbl">Телефон</div>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 700 000 00 00"/>
        </div>
        <div className="sk-form-row" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="sk-form-row__lbl">Гостей</div>
            <div className="sk-form-row__val">{guests} {guests === 1 ? "ребёнок" : guests < 5 ? "ребёнка" : "детей"}</div>
          </div>
          <div className="sk-stepper">
            <button onClick={() => setGuests(Math.max(1, guests - 1))} disabled={guests <= 1}>−</button>
            <span className="sk-stepper__val">{guests}</span>
            <button onClick={() => setGuests(Math.min(30, guests + 1))} disabled={guests >= 30}>+</button>
          </div>
        </div>
        <div className="sk-form-row sk-form-row--input">
          <div className="sk-form-row__lbl">Комментарий <span style={{textTransform:"none",letterSpacing:0,color:"var(--ink-4)"}}>· необязательно</span></div>
          <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Тематика, особые пожелания…"/>
        </div>
      </div>

      <div className="sk-px sk-fade sk-fade--5" style={{ marginTop: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ink-3)", fontSize: 12 }}>
          <Icon.Lock style={{width:14,height:14}}/>
          <span>Данные используются только для связи. Без рекламы.</span>
        </div>
      </div>

      <div style={{ height: 120 }}/>

      {/* Sticky submit */}
      <div style={{ position: "absolute", bottom: 24, left: 16, right: 16, zIndex: 30 }}>
        <button
          className="sk-btn sk-btn--accent sk-btn--block"
          disabled={!valid || submitting}
          onClick={submit}
          style={{
            opacity: valid ? 1 : 0.5,
            boxShadow: valid ? "0 16px 40px rgba(255,90,95,.35)" : "none",
            transition: "opacity .2s, box-shadow .2s",
          }}>
          {submitting ? <Spinner/> : <><Icon.Send style={{width:16,height:16}}/> Отправить заявку</>}
        </button>
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <span style={{
      width: 18, height: 18, border: "2px solid rgba(255,255,255,.4)",
      borderTopColor: "#fff", borderRadius: "50%",
      animation: "spin .8s linear infinite", display: "inline-block",
    }}/>
  );
}

function SuccessScreen({ back }) {
  const colors = ["#FF5A5F", "#FFC857", "#B6E3C8", "#C7DDEF", "#E5D4F2"];
  return (
    <div className="sk-page" style={{
      height: "100%", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      padding: "0 32px",
    }}>
      <div className="sk-confetti">
        {Array.from({length: 40}).map((_, i) => (
          <span key={i} style={{
            left: (Math.random()*100) + "%",
            background: colors[i%colors.length],
            animationDelay: (Math.random()*0.4) + "s",
            animationDuration: (1 + Math.random()*0.6) + "s",
          }}/>
        ))}
      </div>
      <div style={{
        width: 96, height: 96, borderRadius: "50%",
        background: "var(--accent-soft)", display: "grid", placeItems: "center",
        animation: "popIn .5s cubic-bezier(.2,1.4,.4,1)",
      }}>
        <Icon.Check style={{ width: 44, height: 44, color: "var(--accent)" }}/>
      </div>
      <h1 className="sk-h1" style={{ marginTop: 24 }}>Заявка отправлена!</h1>
      <p className="sk-body" style={{ marginTop: 8, color: "var(--ink-3)" }}>
        Менеджер свяжется в течение 30 минут — подтвердит дату и расскажет про пакет.
      </p>
      <button className="sk-btn sk-btn--soft" style={{ marginTop: 24 }} onClick={back}>На главный</button>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes popIn { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}

window.FormScreen = FormScreen;
