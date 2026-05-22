import { useState, useEffect } from "react";
import { Ic } from "./components/icons/Icons";
import { LogoCompact } from "./components/icons/LogoCompact";
import { NOTIFS_DATA, Notification } from "./components/modals/AbsenceModal";
import { SplashScreen } from "./components/SplashScreen";
import { NAV } from "./config/nav";
import { Tool } from "./data/mockData";
import { type Course, CoursePage } from "./pages/CoursePage";
import { NotifsPage } from "./pages/NotifsPage";
import { ToolDetailPage } from "./pages/ToolDetailPage";
import { type Unit, UnitPage } from "./pages/UnitPage";
import { HomeTab } from "./tabs/HomeTab";
import { InsightsTab } from "./tabs/InsightsTab";
import { ProfileTab } from "./tabs/ProfileTab";
import { LoginPage } from "./pages/LoginPage";
import { TimetableTab } from "./tabs/TimetableTab";
import { ToolsTab } from "./tabs/ToolsTab";
import { T } from "./theme/tokens";

export default function App() {
  const [splash, setSplash] = useState(true);
  const [tab, setTab] = useState("home");
  const [notifs, setNotifs] = useState(false);
  const [course, setCourse] = useState<Course | null>(null);
  const [unit, setUnit] = useState<Unit | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [notifications, setNotifications] =
    useState<Notification[]>(NOTIFS_DATA);
  const [deviceMode, setDeviceMode] = useState<"phone" | "tablet">("phone");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tabletOrientation, setTabletOrientation] = useState<"landscape" | "portrait">("landscape");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

  // Global Accessibility Settings synced with LocalStorage
  const [largeText, setLargeText] = useState(() => localStorage.getItem("cob-large-text") === "true");
  const [contrast, setContrast] = useState(() => localStorage.getItem("cob-contrast") === "true");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("cob-dark-mode") === "true");

  useEffect(() => {
    localStorage.setItem("cob-large-text", String(largeText));
  }, [largeText]);

  useEffect(() => {
    localStorage.setItem("cob-contrast", String(contrast));
  }, [contrast]);

  useEffect(() => {
    localStorage.setItem("cob-dark-mode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hasUnread = notifications.some((n) => n.unread);

  const toggleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n)),
    );
  };

  const showNav = isLoggedIn && !notifs && !unit && !course && !selectedTool;

  const renderContent = () => {
    if (!isLoggedIn) return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
    if (notifs)
      return (
        <NotifsPage
          items={notifications}
          onBack={() => setNotifs(false)}
          onToggleRead={toggleRead}
        />
      );
    if (unit) return <UnitPage unit={unit} onBack={() => setUnit(null)} />;
    if (course)
      return (
        <CoursePage
          course={course}
          onBack={() => setCourse(null)}
          onUnit={setUnit}
        />
      );
    if (selectedTool)
      return (
        <ToolDetailPage
          tool={selectedTool}
          onBack={() => setSelectedTool(null)}
        />
      );
    if (tab === "home")
      return <HomeTab onCourse={setCourse} onUnit={setUnit} />;
    if (tab === "timetable") return <TimetableTab />;
    if (tab === "insights") return <InsightsTab />;
    if (tab === "tools") return <ToolsTab onSelect={setSelectedTool} />;
    if (tab === "profile")
      return (
        <ProfileTab
          onSignOut={() => setIsLoggedIn(false)}
          largeText={largeText}
          setLargeText={setLargeText}
          contrast={contrast}
          setContrast={setContrast}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      );
    return null;
  };

  const getAppStyles = (): React.CSSProperties => {
    if (!isDesktop) {
      return {
        height: "100dvh",
        width: "100%",
        maxWidth: "none",
        margin: "0 auto",
        background: T.card,
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins','Segoe UI',sans-serif",
      };
    }

    if (deviceMode === "phone") {
      return {
        height: "100dvh",
        maxHeight: 896,
        width: "100%",
        maxWidth: 414,
        margin: "auto",
        background: T.card,
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins','Segoe UI',sans-serif",
        boxShadow: "0 0 50px rgba(0,0,0,0.15)",
        overflow: "hidden",
        border: "14px solid #1a1a1a",
        borderRadius: 40,
      };
    }

    const isLandscape = tabletOrientation === "landscape";
    return {
      height: "100dvh",
      maxHeight: isLandscape ? 768 : 1024,
      width: "100%",
      maxWidth: isLandscape ? 1024 : 768,
      margin: "auto",
      background: "#ffffff",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Poppins','Segoe UI',sans-serif",
      boxShadow: "0 0 50px rgba(0,0,0,0.15)",
      overflow: "hidden",
      border: "16px solid #1a1a1a",
      borderRadius: 40,
    };
  };

  return (
    <div style={{
      display: isDesktop ? "flex" : "block",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100dvh",
      width: "100%",
      background: "#eef0f4",
      position: "relative",
      boxSizing: "border-box"
    }}>
      {isDesktop && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: 60, 
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'center left',
          zIndex: 9999, 
          display: 'flex', 
          gap: 10, 
          background: 'rgba(255,255,255,0.9)', 
          padding: '8px 16px', 
          borderRadius: 30, 
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)', 
          backdropFilter: 'blur(10px)',
          border: `1px solid ${T.border}`
        }}>
          <button 
            onClick={() => setDeviceMode('phone')}
            style={{ 
              padding: '8px 20px', 
              borderRadius: 20, 
              border: 'none', 
              background: deviceMode === 'phone' ? T.plum : 'transparent', 
              color: deviceMode === 'phone' ? 'white' : T.plum, 
              fontWeight: 600, 
              fontSize: 14,
              cursor: 'pointer', 
              transition: 'all 0.2s' 
            }}
          >
            Phone
          </button>
          <button 
            onClick={() => setDeviceMode('tablet')}
            style={{ 
              padding: '8px 20px', 
              borderRadius: 20, 
              border: 'none', 
              background: deviceMode === 'tablet' ? T.plum : 'transparent', 
              color: deviceMode === 'tablet' ? 'white' : T.plum, 
              fontWeight: 600, 
              fontSize: 14,
              cursor: 'pointer', 
              transition: 'all 0.2s' 
            }}
          >
            Tablet
          </button>
        </div>
      )}
      
      {isDesktop && deviceMode === 'tablet' && (
        <button 
          onClick={() => setTabletOrientation(prev => prev === 'landscape' ? 'portrait' : 'landscape')}
          style={{ 
            position: 'absolute', 
            top: 24, 
            right: 24, 
            zIndex: 9999,
            padding: 12, 
            borderRadius: 30, 
            border: `1px solid ${T.border}`, 
            background: 'rgba(255,255,255,0.9)', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            backdropFilter: 'blur(10px)',
            color: T.plum, 
            cursor: 'pointer', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          title="Rotate Tablet"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
        </button>
      )}

      <div style={getAppStyles()}>
      <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; text-align: left; }
        ::-webkit-scrollbar { width: 0; height: 0; }
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          overscroll-behavior: none;
          -webkit-touch-callout: none;
          background: #eef0f4;
        }
        button { font-family: 'Poppins','Segoe UI',sans-serif; }
        input, textarea { font-family: 'Poppins','Segoe UI',sans-serif; }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:translateY(0) } }

        /* Global Accessibility CSS Overrides */
        .large-text {
          zoom: 1.14;
          -moz-transform: scale(1.14);
          -moz-transform-origin: top center;
        }
        
        .high-contrast {
          filter: contrast(1.4) saturate(1.15) !important;
        }
        .high-contrast * {
          text-shadow: none !important;
          box-shadow: none !important;
        }
        
        .dark-mode {
          filter: invert(0.95) hue-rotate(180deg) !important;
          background: #121212 !important;
        }
        
        /* Double invert logic for preserving images, signature branding, and high contrast buttons */
        .dark-mode img,
        .dark-mode .logo-compact,
        .dark-mode .login-page-container,
        .dark-mode .splash-screen-container {
          filter: invert(1) hue-rotate(180deg) !important;
        }
        
        .dark-mode .quick-action-btn span,
        .dark-mode .quick-action-icon-wrapper {
          filter: invert(1) hue-rotate(180deg) !important;
        }
      `}</style>

      {/* Main app container */}
      <div
        className={`${largeText ? "large-text" : ""} ${contrast ? "high-contrast" : ""} ${darkMode ? "dark-mode" : ""}`}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          background: T.card,
          transition: "filter 0.3s ease, background-color 0.3s ease",
        }}
      >
        {/* Splash screen */}
        {splash && <SplashScreen onDone={() => setSplash(false)} />}

        {/* Header */}
        {isLoggedIn && (
          <div
            style={{
              background: T.card,
            padding: "12px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${T.border}`,
            flexShrink: 0,
            paddingTop: "env(safe-area-inset-top, 12px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LogoCompact />
            <div>
              <div
                style={{
                  fontSize: 9,
                  color: T.muted,
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                City of
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 900,
                  color: T.plum,
                  lineHeight: 1.1,
                  letterSpacing: -0.3,
                }}
              >
                Bristol College App
              </div>
            </div>
          </div>
          <button
            onClick={() => setNotifs(true)}
            style={{
              position: "relative",
              background: T.bg,
              border: `1.5px solid ${T.border}`,
              borderRadius: 13,
              width: 42,
              height: 42,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 1px 4px ${T.shadow}`,
            }}
          >
            <Ic n="bell" size={19} c={T.plum} />
            {hasUnread && (
              <span
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  width: 9,
                  height: 9,
                  borderRadius: 9,
                  background: T.pink,
                  border: "2px solid white",
                }}
              />
            )}
          </button>
        </div>
        )}

        {/* Content */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative", containerType: "inline-size" }}>
          {renderContent()}
        </div>

        {/* Bottom nav */}
        {showNav && (
          <div
            style={{
              background: T.card,
              borderTop: `1px solid ${T.border}`,
              display: "flex",
              flexShrink: 0,
              paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 10px)",
              paddingTop: 2,
            }}
          >
            {NAV.map((n) => {
              const active = tab === n.id;
              return (
                <button
                  key={n.id}
                  onClick={() => {
                    setTab(n.id);
                    setCourse(null);
                    setUnit(null);
                    setSelectedTool(null);
                  }}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "6px 2px 4px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  {active && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 32,
                        height: 3,
                        background: n.ac,
                        borderRadius: "0 0 4px 4px",
                      }}
                    />
                  )}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 11,
                      background: active ? n.ac + "33" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 0.2s",
                      marginBottom: 2,
                    }}
                  >
                    <Ic
                      n={n.icon}
                      size={20}
                      c={active ? T.plum : "#b0b7c3"}
                      sw={active ? 2.3 : 1.7}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: active ? 900 : 500,
                      color: active ? T.plum : "#b0b7c3",
                      letterSpacing: active ? 0.2 : 0,
                      transition: "all 0.2s",
                    }}
                  >
                    {n.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
