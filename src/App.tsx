import { useState } from 'react';
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
import { TimetableTab } from "./tabs/TimetableTab";
import { ToolsTab } from "./tabs/ToolsTab";
import { T } from "./theme/tokens";


export default function App() {
  const [splash, setSplash] = useState(true);
  const [tab, setTab] = useState('home');
  const [notifs, setNotifs] = useState(false);
  const [course, setCourse] = useState<Course | null>(null);
  const [unit, setUnit] = useState<Unit | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>(NOTIFS_DATA);

  const hasUnread = notifications.some((n) => n.unread);

  const toggleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n))
    );
  };

  const showNav = !notifs && !unit && !course && !selectedTool;

  const Content = () => {
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
    if (selectedTool) return <ToolDetailPage tool={selectedTool} onBack={() => setSelectedTool(null)} />;
    if (tab === 'home')
      return <HomeTab onCourse={setCourse} onUnit={setUnit} />;
    if (tab === 'timetable') return <TimetableTab />;
    if (tab === 'insights') return <InsightsTab />;
    if (tab === 'tools') return <ToolsTab onSelect={setSelectedTool} />;
    if (tab === 'profile') return <ProfileTab />;
    return null;
  };

  return (
    <div
      style={{
        height: '100dvh',
        width: '100%',
        maxWidth: 410,
        margin: '0 auto',
        boxShadow: '0 0 40px rgba(0,0,0,0.08)',
        background: T.card,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Poppins','Segoe UI',sans-serif",
      }}
    >
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
      `}</style>

      {/* Main app container */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Splash screen */}
        {splash && <SplashScreen onDone={() => setSplash(false)} />}

        {/* Header */}
        <div
          style={{
            background: T.card,
            padding: '12px 18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: `1px solid ${T.border}`,
            flexShrink: 0,
            paddingTop: 'env(safe-area-inset-top, 12px)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <LogoCompact />
            <div>
              <div
                style={{
                  fontSize: 9,
                  color: T.muted,
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
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
              position: 'relative',
              background: T.bg,
              border: `1.5px solid ${T.border}`,
              borderRadius: 13,
              width: 42,
              height: 42,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 1px 4px ${T.shadow}`,
            }}
          >
            <Ic n="bell" size={19} c={T.plum} />
            {hasUnread && (
              <span
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  width: 9,
                  height: 9,
                  borderRadius: 9,
                  background: T.pink,
                  border: '2px solid white',
                }}
              />
            )}
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <Content />
        </div>

        {/* Bottom nav */}
        {showNav && (
          <div
            style={{
              background: T.card,
              borderTop: `1px solid ${T.border}`,
              display: 'flex',
              flexShrink: 0,
              paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 10px)',
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '6px 2px 4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                >
                  {active && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 32,
                        height: 3,
                        background: n.ac,
                        borderRadius: '0 0 4px 4px',
                      }}
                    />
                  )}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 11,
                      background: active ? n.ac + '33' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s',
                      marginBottom: 2,
                    }}
                  >
                    <Ic
                      n={n.icon}
                      size={20}
                      c={active ? T.plum : '#b0b7c3'}
                      sw={active ? 2.3 : 1.7}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: active ? 900 : 500,
                      color: active ? T.plum : '#b0b7c3',
                      letterSpacing: active ? 0.2 : 0,
                      transition: 'all 0.2s',
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
  );
}