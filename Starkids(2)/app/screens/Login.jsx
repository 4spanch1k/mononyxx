// === Login Screen ===
function LoginScreen({ onLogin }) {
  const [tab, setTab] = React.useState("login");
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [showPwd, setShowPwd] = React.useState(false);
  const segRef = React.useRef(null);
  const [pillStyle, setPillStyle] = React.useState({ left: 4, width: 0 });

  React.useEffect(() => {
    if (!segRef.current) return;
    const btns = segRef.current.querySelectorAll("button");
    const idx = tab === "login" ? 0 : 1;
    const b = btns[idx];
    setPillStyle({ left: b.offsetLeft, width: b.offsetWidth });
  }, [tab]);

  return (
    <div className="sk-login sk-page">
      <div className="sk-login__brand">
        <div className="sk-login__logo">★</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em" }}>Star Kids</span>
          <span style={{ fontSize: 11, color: "var(--ink-3)" }}>Almaty · Al-Farabi</span>
        </div>
      </div>

      <div className="sk-login__title sk-fade sk-fade--1">
        <h1>Привет, <em>родители</em>.<br/>Праздник в один тап.</h1>
        <p>Выбирайте филиал, открывайте пакеты и оставляйте заявку без звонков и переписок.</p>
      </div>

      <div className="sk-login__form sk-fade sk-fade--3">
        <div className="sk-seg" ref={segRef}>
          <div className="sk-seg__pill" style={pillStyle}></div>
          <button className={`sk-seg__btn ${tab==="login"?"sk-seg__btn--active":""}`} onClick={() => setTab("login")}>Вход</button>
          <button className={`sk-seg__btn ${tab==="signup"?"sk-seg__btn--active":""}`} onClick={() => setTab("signup")}>Регистрация</button>
        </div>

        <div className="sk-field">
          <Icon.Mail style={{ width: 18, height: 18, color: "var(--ink-3)" }} />
          <input
            className="sk-input"
            type="email"
            placeholder="Электронная почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sk-field">
          <Icon.Lock style={{ width: 18, height: 18, color: "var(--ink-3)" }} />
          <input
            className="sk-input"
            type={showPwd ? "text" : "password"}
            placeholder="Пароль"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <button
            onClick={() => setShowPwd(!showPwd)}
            style={{ background: "transparent", border: 0, color: "var(--ink-3)", cursor: "pointer", padding: 4 }}
            aria-label="Показать пароль"
          >
            <Icon.Eye style={{ width: 18, height: 18 }} />
          </button>
        </div>

        <button
          className="sk-btn sk-btn--primary sk-btn--block"
          onClick={(e) => { rippleClick(e); setTimeout(onLogin, 250); }}
          style={{ marginTop: 4 }}
        >
          {tab === "login" ? "Войти" : "Создать аккаунт"}
          <Icon.ArrowRight style={{ width: 18, height: 18 }} />
        </button>

        <div className="sk-row" style={{ justifyContent: "center", gap: 6, marginTop: 4, fontSize: 12, color: "var(--ink-3)" }}>
          <Icon.Lock style={{ width: 12, height: 12 }} />
          <span>Сессия сохраняется на этом устройстве</span>
        </div>
      </div>

      <div className="sk-login__legal">
        Продолжая, вы соглашаетесь с <a href="#">условиями</a> и <a href="#">политикой&nbsp;конфиденциальности</a>.
      </div>
    </div>
  );
}

window.LoginScreen = LoginScreen;
