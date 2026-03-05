import { Ic } from "../components/icons/Icons";
import { Card, SecHead } from "../components/shared/Primitives";
import { TAG_C, Tool, TOOLS } from "../data/mockData";
import { T } from "../theme/tokens";


export const ToolsTab = ({ onSelect }: { onSelect: (t: Tool) => void }) => (
  <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
    <div style={{ padding: '16px 16px 48px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <div>
          <div style={{ fontWeight: 900, fontSize: 24, color: T.plum }}>Tools & Links</div>
          <p style={{ color: T.muted, fontSize: 13, marginTop: 2 }}>Essential resources for your studies</p>
        </div>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 15,
            background: T.card,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: T.shadow,
          }}
        >
          <Ic n="wrench" size={20} c={T.plum} />
        </div>
      </div>

      {/* Grid view first as requested */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        {TOOLS.map((t) => (
          <div
            key={t.name + '_grid'}
            onClick={() => onSelect(t)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 20,
                background: T.card,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: T.shadow,
                border: `1px solid ${T.border}44`,
                overflow: 'hidden',
                padding: 12,
                transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              }}
            >
              {t.logo ? (
                <img src={t.logo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="" />
              ) : (
                <Ic n={t.icon || 'wrench'} size={28} c={T.plum} />
              )}
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: T.plum,
                textAlign: 'center',
                lineHeight: 1.2,
                maxWidth: 70,
                background: 'rgba(255,255,255,0.7)',
                padding: '2px 4px',
                borderRadius: 4
              }}
            >
              {t.name}
            </span>
          </div>
        ))}
      </div>

      <SecHead title="All Resources" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {TOOLS.map((t) => (
          <Card
            key={t.name}
            onClick={() => onSelect(t)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '12px 14px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              border: `1px solid ${T.border}44`,
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                overflow: 'hidden',
                background: '#f8fafc',
                border: `1px solid ${T.border}66`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {t.logo ? (
                <img src={t.logo} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} alt="" />
              ) : (
                <Ic n={t.icon || 'wrench'} size={22} c={T.plum} />
              )}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                <span style={{ fontWeight: 800, color: T.plum, fontSize: 14 }}>{t.name}</span>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    color: TAG_C[t.tag] || T.blue,
                    background: (TAG_C[t.tag] || T.blue) + '18',
                    padding: '2px 6px',
                    borderRadius: 6,
                    textTransform: 'uppercase',
                    letterSpacing: 0.4,
                  }}
                >
                  {t.tag}
                </span>
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: T.muted,
                  lineHeight: 1.4,
                  display: '-webkit-box',
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {t.desc}
              </p>
            </div>

            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: T.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ic n="chR" size={16} c={T.muted} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);