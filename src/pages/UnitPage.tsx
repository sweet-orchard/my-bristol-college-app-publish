import { Ic } from "../components/icons/Icons";
import { Card, Ring, SecHead } from "../components/shared/Primitives";
import { T } from "../theme/tokens";


export type Unit = {
  name: string;
  color: string;
  att: number;
  punc: number;
  assignments: string[];
  teacher: string;
};

export const UnitPage = ({ unit, onBack }: { unit: Unit; onBack: () => void }) => (
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
      <span style={{ fontWeight: 900, fontSize: 16, color: T.plum }}>
        {unit.name}
      </span>
    </div>
    <div style={{ padding: 14 }}>
      <div
        style={{
          background: `linear-gradient(140deg,${unit.color}30,${unit.color}15)`,
          border: `1.5px solid ${unit.color}44`,
          borderRadius: 20,
          padding: 18,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            fontWeight: 900,
            color: T.plum,
            fontSize: 17,
            marginBottom: 14,
          }}
        >
          {unit.name}
        </div>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 14,
              padding: 14,
              textAlign: 'center',
              boxShadow: `0 2px 8px ${T.shadow}`,
            }}
          >
            <Ring
              value={unit.att}
              color={unit.att >= 80 ? T.green : T.pink}
              size={64}
            />
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: T.muted,
                marginTop: 6,
              }}
            >
              ATTENDANCE
            </div>
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 14,
              padding: 14,
              textAlign: 'center',
              boxShadow: `0 2px 8px ${T.shadow}`,
            }}
          >
            <Ring
              value={unit.punc}
              color={unit.punc >= 80 ? T.cyan : '#c8b800'}
              size={64}
            />
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: T.muted,
                marginTop: 6,
              }}
            >
              PUNCTUALITY
            </div>
          </div>
        </div>
      </div>
      <Card style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: `linear-gradient(135deg,${T.mint},${T.cyan})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Ic n="person" size={22} c={T.plum} />
        </div>
        <div>
          <div style={{ fontWeight: 800, color: T.plum, fontSize: 15 }}>
            {unit.teacher}
          </div>
          <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>
            Unit Tutor
          </div>
        </div>
      </Card>
      <Card>
        <SecHead title="Assignments" />
        {unit.assignments.map((a, i, arr) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '9px 0',
              borderBottom:
                i < arr.length - 1 ? `1px solid ${T.border}` : 'none',
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: 9,
                background: unit.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{ fontSize: 14, color: T.plum, flex: 1, fontWeight: 500 }}
            >
              {a}
            </span>
            <span
              style={{
                fontSize: 11,
                color: T.muted,
                background: T.bg,
                padding: '3px 9px',
                borderRadius: 7,
                border: `1px solid ${T.border}`,
                fontWeight: 600,
              }}
            >
              Due Soon
            </span>
          </div>
        ))}
      </Card>
    </div>
  </div>
);