import { Ic } from "../components/icons/Icons";
import { Bar, Card, SecHead } from "../components/shared/Primitives";
import { Ribbon } from "../components/shared/Ribbon";
import { T } from "../theme/tokens";
import { Unit } from "./UnitPage";


export type Course = {
  id: number;
  name: string;
  desc: string;
  progress: number;
  grad: string;
  units: Unit[];
};

export const CoursePage = ({
  course,
  onBack,
  onUnit,
}: {
  course: Course;
  onBack: () => void;
  onUnit: (u: Unit) => void;
}) => (
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
        {course.name}
      </span>
    </div>
    <div style={{ padding: 14 }}>
      <div
        style={{
          borderRadius: 22,
          background: course.grad,
          padding: '22px 20px',
          marginBottom: 14,
          position: 'relative',
          overflow: 'hidden',
          minHeight: 140,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.12)',
          }}
        />
        <Ribbon style={{ zIndex: 0, opacity: 0.6 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontWeight: 900,
              fontSize: 20,
              color: '#fff',
              textShadow: '0 1px 8px rgba(0,0,0,0.2)',
              marginBottom: 6,
            }}
          >
            {course.name}
          </div>
          <p
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.55,
              marginBottom: 16,
              textShadow: '0 1px 4px rgba(0,0,0,0.15)',
            }}
          >
            {course.desc}
          </p>
          <div
            style={{
              background: 'rgba(255,255,255,0.28)',
              borderRadius: 99,
              height: 8,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${course.progress}%`,
                height: '100%',
                background: 'rgba(255,255,255,0.92)',
                borderRadius: 99,
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 5,
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
              }}
            >
              Overall Progress
            </span>
            <span style={{ fontSize: 12, color: '#fff', fontWeight: 800 }}>
              {course.progress}%
            </span>
          </div>
        </div>
      </div>
      <SecHead title={`Units (${course.units.length})`} />
      {course.units.map((u, i) => (
        <Card
          key={i}
          onClick={() => onUnit(u)}
          style={{ display: 'flex', alignItems: 'center', gap: 14 }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: u.color + '33',
              border: `1.5px solid ${u.color}55`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Ic n="book" size={21} c={T.plum} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, color: T.plum, fontSize: 14 }}>
              {u.name}
            </div>
            <div style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>
              Attendance {u.att}% · Punctuality {u.punc}%
            </div>
            <Bar value={u.att} color={u.color} h={5} />
          </div>
          <Ic n="chR" size={18} c={T.border} />
        </Card>
      ))}
    </div>
  </div>
);