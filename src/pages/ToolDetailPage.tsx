import { Ic } from "../components/icons/Icons";
import { Pill } from "../components/shared/Primitives";
import { type Tool, TAG_C } from "../data/mockData";
import { T } from "../theme/tokens";


export const ToolDetailPage = ({ tool, onBack }: { tool: Tool; onBack: () => void }) => (
  <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
    <div
      style={{
        padding: '15px 18px',
        background: T.card,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <button
        onClick={onBack}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}
      >
        <Ic n="chL" size={22} c={T.plum} />
      </button>
      <span style={{ fontWeight: 900, fontSize: 18, color: T.plum }}>Tool Details</span>
    </div>

    <div style={{ padding: 20 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          marginBottom: 30,
        }}
      >
        <div
          style={{
            width: 74,
            height: 74,
            borderRadius: 22,
            overflow: 'hidden',
            background: T.card,
            padding: 8,
            boxShadow: T.shadowMd,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {tool.logo ? (
            <img src={tool.logo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="" />
          ) : (
            <Ic n={tool.icon || 'wrench'} size={36} c={T.plum} />
          )}
        </div>
        <div>
          <h2 style={{ fontWeight: 900, fontSize: 22, color: T.plum, marginBottom: 4 }}>{tool.name}</h2>
          <Pill text={tool.tag} color={TAG_C[tool.tag] || T.blue} />
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: T.plum, marginBottom: 8 }}>Description</div>
        <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.6 }}>{tool.longDesc || tool.desc}</p>
      </div>

      {tool.benefits && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: T.plum, marginBottom: 12 }}>Benefits</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {tool.benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Ic n="check" size={16} c={T.green} sw={3} />
                <span style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.4 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tool.features && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: T.plum, marginBottom: 12 }}>Features</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {tool.features.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    background: T.plumLt,
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.4 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => window.open(tool.url, '_blank')}
        style={{
          width: '100%',
          background: T.plum,
          color: '#fff',
          border: 'none',
          borderRadius: 16,
          padding: '16px 20px',
          fontWeight: 800,
          fontSize: 16,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          boxShadow: `0 8px 24px ${T.plum}44`,
          marginTop: 10,
        }}
      >
        Go to Website <Ic n="link" size={18} c="#fff" />
      </button>
    </div>
  </div>
);