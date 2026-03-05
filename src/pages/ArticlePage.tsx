import { Ic, IconName } from "../components/icons/Icons";
import { Pill } from "../components/shared/Primitives";
import { T } from "../theme/tokens";


export type Article = {
  title: string;
  icon: IconName;
  cat: string;
  color: string;
  isNew: boolean;
  body: string;
};

export const ArticlePage = ({ art, onBack }: { art: Article; onBack: () => void }) => {
  const renderBody = (txt: string) =>
    txt.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**') && line.length > 4)
        return (
          <div
            key={i}
            style={{
              fontWeight: 800,
              color: T.plum,
              fontSize: 14,
              marginTop: 16,
              marginBottom: 5,
            }}
          >
            {line.replace(/\*\*/g, '')}
          </div>
        );
      if (line.match(/^\d+\./))
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: 9,
              fontSize: 13,
              color: '#374151',
              lineHeight: 1.7,
              marginBottom: 4,
            }}
          >
            <span
              style={{
                fontWeight: 800,
                color: T.plum,
                flexShrink: 0,
                minWidth: 16,
              }}
            >
              {line.match(/^\d+/)![0]}.
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: line
                  .replace(/^\d+\.\s*/, '')
                  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'),
              }}
            />
          </div>
        );
      if (line.startsWith('- '))
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: 9,
              fontSize: 13,
              color: '#374151',
              lineHeight: 1.7,
              marginBottom: 4,
            }}
          >
            <span
              style={{
                color: art.color,
                fontWeight: 900,
                flexShrink: 0,
                fontSize: 16,
                lineHeight: 1.3,
              }}
            >
              ·
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: line
                  .substring(2)
                  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'),
              }}
            />
          </div>
        );
      if (line === '') return <div key={i} style={{ height: 5 }} />;
      return (
        <p
          key={i}
          style={{
            fontSize: 13,
            color: '#374151',
            lineHeight: 1.7,
            margin: '0 0 4px',
          }}
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'),
          }}
        />
      );
    });

  const ac = art.color;
  return (
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
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            display: 'flex',
          }}
        >
          <Ic n="chL" size={22} c={T.plum} />
        </button>
        <span style={{ fontWeight: 900, fontSize: 16, color: T.plum, flex: 1 }}>
          {art.title}
        </span>
        <Pill text={art.cat} color={ac} />
      </div>
      <div
        style={{
          background: `linear-gradient(140deg,${ac}55,${ac}22)`,
          padding: '22px 20px',
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          borderBottom: `1px solid ${ac}33`,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 18,
            background: 'rgba(255,255,255,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: `0 4px 16px ${ac}44`,
          }}
        >
          <Ic n={art.icon} size={28} c={T.plum} />
        </div>
        <div>
          <div
            style={{
              fontWeight: 900,
              color: T.plum,
              fontSize: 19,
              lineHeight: 1.2,
            }}
          >
            {art.title}
          </div>
          <div style={{ color: T.muted, fontSize: 12, marginTop: 4 }}>
            {art.cat} · City of Bristol College
          </div>
        </div>
      </div>
      <div style={{ padding: '18px 20px 32px' }}>{renderBody(art.body)}</div>
    </div>
  );
};