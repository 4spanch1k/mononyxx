// === Main App ===
function App() {
  const [signedIn, setSignedIn] = React.useState(false);
  const [tab, setTab] = React.useState("home");
  const [stack, setStack] = React.useState([]); // modal screens: 'bday', 'form', 'profile'
  const [branchOpen, setBranchOpen] = React.useState(false);

  const tweakDefaults = /*EDITMODE-BEGIN*/{
    "theme": "light",
    "accent": "#FF5A5F",
    "displayFont": "Fraunces",
    "textFont": "Geist"
  }/*EDITMODE-END*/;
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(tweakDefaults) : [tweakDefaults, () => {}];

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", tweaks.theme);
    document.documentElement.style.setProperty("--accent", tweaks.accent);
    // shift accent-soft based on accent
    document.documentElement.style.setProperty("--accent-soft",
      tweaks.accent === "#FF5A5F" ? "#FFE7E5" :
      tweaks.accent === "#7C5CFF" ? "#EBE5FF" :
      tweaks.accent === "#10B981" ? "#D6F5E8" :
      tweaks.accent === "#F59E0B" ? "#FFF1D6" : "#FFE7E5"
    );
  }, [tweaks.theme, tweaks.accent]);

  const goto = (screen) => setStack((s) => [...s, screen]);
  const back = () => setStack((s) => s.slice(0, -1));
  const top = stack[stack.length - 1];

  const tabs = [
    { id: "home",  lbl: "Главная",   icon: Icon.Home },
    { id: "bday",  lbl: "Праздники", icon: Icon.Cake },
    { id: "promo", lbl: "Акции",     icon: Icon.Tag  },
    { id: "tix",   lbl: "Билеты",    icon: Icon.Ticket },
    { id: "me",    lbl: "Профиль",   icon: Icon.Person },
  ];

  function tabContent() {
    if (tab === "home")  return <HomeScreen goto={goto} branchOpen={branchOpen} onBranchOpen={() => setBranchOpen(!branchOpen)} />;
    if (tab === "bday")  return <BirthdaysScreen goto={goto} back={() => setTab("home")} />;
    if (tab === "promo") return <PromoScreen />;
    if (tab === "tix")   return <TicketsScreen />;
    if (tab === "me")    return <ProfileScreen back={() => setTab("home")} />;
    return null;
  }

  if (!signedIn) {
    return <LoginScreen onLogin={() => setSignedIn(true)} />;
  }

  return (
    <div className="sk-app">
      <div className="sk-scroll" key={tab + (top || "")}>
        {top === "bday"     && <BirthdaysScreen goto={goto} back={back} />}
        {top === "form"     && <FormScreen back={back} onSent={() => { setStack([]); setTab("home"); }} />}
        {top === "menu"     && <MenuScreen back={back} />}
        {top === "contacts" && <ContactsScreen back={back} goto={goto} />}
        {top === "ask"      && <AskScreen back={back} />}
        {!top && tabContent()}
      </div>

      {/* Tab bar */}
      {!top && (
        <div className="sk-tabbar">
          {tabs.map((t) => {
            const Ic = t.icon;
            const active = tab === t.id;
            return (
              <button key={t.id}
                className={"sk-tab" + (active ? " sk-tab--active" : "")}
                onClick={(e) => { rippleClick(e); setTab(t.id); }}>
                <Ic style={{ width: 22, height: 22 }} fill={active ? "currentColor" : "none"} stroke="currentColor"/>
                <span>{t.lbl}</span>
                <span className="sk-tab__dot"></span>
              </button>
            );
          })}
        </div>
      )}

      {/* Tweaks panel */}
      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="Theme">
            <window.TweakRadio
              label="Mode"
              value={tweaks.theme}
              options={[{label:"Light",value:"light"},{label:"Dark",value:"dark"}]}
              onChange={(v) => setTweak({ theme: v })}
            />
            <window.TweakRadio
              label="Accent color"
              value={tweaks.accent}
              options={[
                {label:"Coral",  value:"#FF5A5F"},
                {label:"Violet", value:"#7C5CFF"},
                {label:"Mint",   value:"#10B981"},
                {label:"Amber",  value:"#F59E0B"},
              ]}
              onChange={(v) => setTweak({ accent: v })}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </div>
  );
}

window.App = App;
