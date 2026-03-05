import { useState } from 'react';
import { Ic, IconName } from "../components/icons/Icons";
import { Card, Toggle } from "../components/shared/Primitives";
import { RibbonProfile } from "../components/shared/Ribbon";
import { T } from "../theme/tokens";


export const ProfileTab = () => {
  const [darkMode, setDark] = useState(false);
  const [largeText, setLarge] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [lang, setLang] = useState('English');
  const LANGS = ['English', 'Welsh', 'Arabic', 'Somali', 'Polish', 'Urdu'];

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(150deg,${T.blue} 0%,${T.lav} 55%,${T.peach} 100%)`,
          padding: '36px 20px 30px',
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        <RibbonProfile />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 44,
              background: `linear-gradient(135deg,${T.cyan} 0%,${T.purple} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '4px solid rgba(255,255,255,0.9)',
              boxShadow: `0 8px 28px rgba(69,0,32,0.22)`,
              marginBottom: 12,
            }}
          >
            <Ic n="person" size={38} c="#fff" sw={1.5} />
          </div>
          <div
            style={{
              fontWeight: 900,
              color: T.plum,
              fontSize: 21,
              textShadow: '0 1px 3px rgba(255,255,255,0.5)',
              marginBottom: 6,
            }}
          >
            Alex Thompson
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.9)',
              borderRadius: 99,
              padding: '5px 20px',
              fontSize: 12,
              fontWeight: 800,
              color: T.plum,
              boxShadow: `0 3px 12px ${T.purple}55`,
              letterSpacing: 0.4,
            }}
          >
            Student — Level 3
          </div>
        </div>
      </div>

      <div style={{ padding: '16px 14px 28px' }}>
        {/* Info card */}
        <Card>
          {(
            [
              ['Student ID', 'BS2024-8821'],
              ['Programme', 'Digital Media Arts'],
              ['Campus', 'College Green Centre'],
              ['Email', 'a.thompson@cityofbristol.ac.uk'],
            ] as [string, string][]
          ).map(([k, v], i, arr) => (
            <div
              key={k}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom:
                  i < arr.length - 1 ? `1px solid ${T.border}` : 'none',
                gap: 10,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: T.muted,
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {k}
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: T.plum,
                  textAlign: 'right',
                }}
              >
                {v}
              </span>
            </div>
          ))}
        </Card>

        {/* Accessibility */}
        <Card>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 11,
                background: T.blue + '66',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ic n="access" size={18} c={T.plum} />
            </div>
            <span style={{ fontWeight: 900, color: T.plum, fontSize: 16 }}>
              Accessibility
            </span>
          </div>
          {[
            {
              label: 'Large Text',
              val: largeText,
              set: setLarge,
              desc: 'Increases font size throughout app',
              icon: 'sun' as IconName,
            },
            {
              label: 'High Contrast',
              val: contrast,
              set: setContrast,
              desc: 'WCAG AA contrast ratio compliance',
              icon: 'shield' as IconName,
            },
            {
              label: 'Dark Mode',
              val: darkMode,
              set: setDark,
              desc: 'Reduces eye strain in low light',
              icon: 'moon' as IconName,
            },
          ].map((o) => (
            <div
              key={o.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '11px 0',
                borderBottom: `1px solid ${T.border}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 9,
                    background: T.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Ic n={o.icon} size={15} c={T.plum} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: T.plum, fontSize: 13 }}>
                    {o.label}
                  </div>
                  <div style={{ fontSize: 11, color: T.muted, marginTop: 1 }}>
                    {o.desc}
                  </div>
                </div>
              </div>
              <Toggle on={o.val} onToggle={() => o.set((v: boolean) => !v)} />
            </div>
          ))}
          <div style={{ paddingTop: 14 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 9,
              }}
            >
              <Ic n="globe" size={15} c={T.plum} />
              <span style={{ fontWeight: 700, color: T.plum, fontSize: 13 }}>
                Language
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    padding: '6px 13px',
                    borderRadius: 99,
                    fontFamily: 'inherit',
                    border: `1.5px solid ${l === lang ? T.plum : T.border}`,
                    background: l === lang ? T.plum : T.card,
                    color: l === lang ? '#fff' : T.plum,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    boxShadow: l === lang ? `0 2px 8px ${T.plum}33` : 'none',
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Settings */}
        <Card>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 11,
                background: T.lemon + '66',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ic n="gear" size={18} c={T.plum} />
            </div>
            <span style={{ fontWeight: 900, color: T.plum, fontSize: 16 }}>
              Settings
            </span>
          </div>
          {[
            { label: 'Update Profile Info', icon: 'pen' as IconName },
            { label: 'Change Profile Photo', icon: 'cam' as IconName },
            { label: 'Notification Preferences', icon: 'bell' as IconName },
            { label: 'Privacy & Data Settings', icon: 'shield' as IconName },
          ].map((s, i, arr) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '11px 0',
                borderBottom:
                  i < arr.length - 1 ? `1px solid ${T.border}` : 'none',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: T.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Ic n={s.icon} size={15} c={T.plum} />
              </div>
              <span
                style={{
                  fontSize: 14,
                  color: T.plum,
                  fontWeight: 600,
                  flex: 1,
                }}
              >
                {s.label}
              </span>
              <Ic n="chR" size={17} c={T.border} />
            </div>
          ))}
        </Card>

        {/* Sign out */}
        <button
          style={{
            width: '100%',
            background: 'none',
            border: `2px solid ${T.pink}`,
            borderRadius: 16,
            padding: 15,
            fontSize: 15,
            fontWeight: 800,
            color: T.pink,
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 9,
            marginBottom: 8,
            transition: 'background 0.15s',
          }}
        >
          <Ic n="exit" size={18} c={T.pink} /> Sign Out
        </button>
      </div>
    </div>
  );
};