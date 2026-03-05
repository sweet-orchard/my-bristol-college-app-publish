import { useState } from 'react';
import { Ic, IconName } from "../components/icons/Icons";
import { Card, SecHead } from "../components/shared/Primitives";
import { T } from "../theme/tokens";


export const TimetableTab = () => {
  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const [day, setDay] = useState(1);
  const SCHED: Record<
    number,
    { t: string; e: string; s: string; r: string; c: string }[]
  > = {
    0: [{ t: '09:00', e: '10:30', s: 'Graphic Design', r: 'A204', c: T.cyan }],
    1: [
      { t: '09:00', e: '10:30', s: 'Web Dev', r: 'CGS 105', c: T.mint },
      { t: '11:00', e: '12:30', s: 'Photography', r: 'Studio B', c: T.purple },
      { t: '14:00', e: '15:30', s: 'Business Studies', r: 'E112', c: T.peach },
    ],
    2: [
      { t: '10:00', e: '11:30', s: 'JavaScript', r: 'CGS 202', c: '#c8b800' },
      { t: '13:00', e: '14:30', s: 'Finance', r: 'E108', c: T.pink },
    ],
    3: [
      {
        t: '09:00',
        e: '10:30',
        s: 'Video Production',
        r: 'Studio A',
        c: T.lilac,
      },
    ],
    4: [
      { t: '10:00', e: '12:00', s: 'Portfolio Review', r: 'A201', c: T.lav },
      { t: '14:00', e: '15:00', s: 'Tutorial', r: 'Tutor Room 3', c: T.mint },
    ],
  };
  const UPCOMING = [
    { d: 'Wed', s: 'JS Project Due', i: 'file' as IconName, c: '#c8b800' },
    { d: 'Thu', s: 'Portfolio Review', i: 'star' as IconName, c: T.lav },
    { d: 'Fri', s: 'Business Mock Exam', i: 'book' as IconName, c: T.peach },
  ];

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
      <div style={{ padding: '14px 16px 24px' }}>
        <div
          style={{
            fontWeight: 900,
            fontSize: 23,
            color: T.plum,
            marginBottom: 2,
          }}
        >
          Timetable
        </div>
        <div style={{ color: T.muted, fontSize: 12, marginBottom: 16 }}>
          Week of 24 Feb 2026
        </div>

        {/* Upcoming */}
        <Card style={{ marginBottom: 16, padding: '16px 18px' }}>
          <SecHead title="Upcoming This Week" />
          {UPCOMING.map((u, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                padding: '9px 0',
                borderBottom:
                  i < UPCOMING.length - 1 ? `1px solid ${T.border}` : 'none',
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 11,
                  background: u.c + '44',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Ic n={u.i} size={17} c={T.plum} />
              </div>
              <span
                style={{
                  fontWeight: 700,
                  color: T.plum,
                  fontSize: 13,
                  flex: 1,
                }}
              >
                {u.s}
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: '#fff',
                  background: T.plum,
                  padding: '3px 10px',
                  borderRadius: 8,
                }}
              >
                {u.d}
              </span>
            </div>
          ))}
        </Card>

        {/* Day picker */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          {DAYS.map((d, i) => (
            <button
              key={d}
              onClick={() => setDay(i)}
              style={{
                flex: 1,
                padding: '10px 4px',
                borderRadius: 13,
                border: `1.5px solid ${i === day ? T.plum : T.border}`,
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 13,
                fontFamily: 'inherit',
                transition: 'all 0.15s',
                background: i === day ? T.plum : T.card,
                color: i === day ? '#fff' : T.plum,
                boxShadow: i === day ? `0 4px 12px ${T.plum}33` : 'none',
                textAlign: 'center',
              }}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Lessons */}
        {(SCHED[day] || []).length === 0 ? (
          <Card style={{ textAlign: 'center', padding: '32px 20px' }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background: T.mint + '44',
                margin: '0 auto 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ic n="check" size={28} c={T.plum} sw={2.5} />
            </div>
            <div
              style={{
                fontWeight: 800,
                color: T.plum,
                fontSize: 16,
                marginBottom: 4,
              }}
            >
              Free Day!
            </div>
            <div style={{ color: T.muted, fontSize: 13 }}>
              No lessons scheduled today
            </div>
          </Card>
        ) : (
          (SCHED[day] || []).map((l, i) => (
            <Card
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                borderLeft: `4px solid ${l.c}`,
                paddingLeft: 14,
              }}
            >
              <div style={{ flexShrink: 0, minWidth: 44 }}>
                <div style={{ fontSize: 13, fontWeight: 900, color: T.plum }}>
                  {l.t}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: T.muted,
                    fontWeight: 500,
                    marginTop: 1,
                  }}
                >
                  → {l.e}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, color: T.plum, fontSize: 14 }}>
                  {l.s}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: T.muted,
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <Ic n="pin" size={12} c={T.muted} /> {l.r}
                </div>
              </div>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  background: l.c,
                  flexShrink: 0,
                  boxShadow: `0 0 0 3px ${l.c}33`,
                }}
              />
            </Card>
          ))
        )}
      </div>
    </div>
  );
};