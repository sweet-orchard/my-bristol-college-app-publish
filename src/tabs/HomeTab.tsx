import { useState } from 'react';
import { Ic, IconName } from "../components/icons/Icons";
import { AbsenceModal } from "../components/modals/AbsenceModal";
import { Bar, Ring, SecHead } from "../components/shared/Primitives";
import { Ribbon } from "../components/shared/Ribbon";
import { COURSES, NEWS } from "../data/mockData";
import { Course } from "../pages/CoursePage";
import { Unit } from "../pages/UnitPage";
import { T } from "../theme/tokens";


export const HomeTab = ({
  onCourse,
  onUnit,
}: {
  onCourse: (c: Course) => void;
  onUnit: (u: Unit) => void;
}) => {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(true);
  const [modal, setModal] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const c = COURSES[idx];

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
      <div style={{ padding: '14px 16px 24px' }}>
        {/* Greeting */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 12,
              color: T.muted,
              fontWeight: 500,
              letterSpacing: 0.3,
            }}
          >
            Good morning
          </div>
          <div
            style={{
              fontWeight: 900,
              fontSize: 23,
              color: T.plum,
              lineHeight: 1.1,
              marginTop: 1,
            }}
          >
            Alex Thompson
          </div>
          <div style={{ fontSize: 12, color: T.muted, marginTop: 3 }}>
            Tuesday · 24 Feb 2026
          </div>
        </div>

        {/* Overall stats
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <SecHead title="Overall Performance" />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 20,
              paddingTop: 12,
              marginBottom: 20
            }}
          >
            <Ring value={82} color={T.cyan} size={125} label="Attendance" />
            <Ring value={88} color={T.mint} size={125} label="Punctuality" />
          </div>
        </div> */}

        {/* Course card */}
        <div
          style={{
            perspective: 1200,
            marginBottom: 0,
            height: 168,
            cursor: 'pointer',
          }}
        >
          <div
            onClick={() => setFlipped(!flipped)}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front Face */}
            <div
              style={{
                borderRadius: 22,
                background: c.grad,
                padding: '22px 20px 18px',
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                boxShadow: flipped ? 'none' : `0 8px 32px rgba(69,0,32,0.15)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.12)',
                }}
              />
              <Ribbon />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      color: 'rgba(255,255,255,0.8)',
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                    }}
                  >
                    Course {idx + 1} / {COURSES.length}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCourse(c);
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.22)',
                      backdropFilter: 'blur(8px)',
                      border: '1.5px solid rgba(255,255,255,0.4)',
                      borderRadius: 10,
                      padding: '5px 12px',
                      color: '#fff',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    View <Ic n="chR" size={13} c="#fff" />
                  </button>
                </div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 20,
                    color: '#fff',
                    textShadow: '0 1px 8px rgba(0,0,0,0.2)',
                    lineHeight: 1.15,
                    marginBottom: 4,
                  }}
                >
                  {c.name}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.88)',
                    marginBottom: 14,
                    lineHeight: 1.5,
                  }}
                >
                  {c.desc}
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
                      width: `${c.progress}%`,
                      height: '100%',
                      background: 'rgba(255,255,255,0.9)',
                      borderRadius: 99,
                      transition: 'width 0.7s',
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
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>
                    Progress
                  </span>
                  <span style={{ fontSize: 12, color: '#fff', fontWeight: 800 }}>
                    {c.progress}%
                  </span>
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div
              style={{
                borderRadius: 22,
                background: T.card,
                padding: '20px',
                border: `1.5px solid ${T.border}`,
                position: 'absolute',
                inset: 0,
                boxShadow: flipped ? `0 8px 32px rgba(69,0,32,0.15)` : 'none',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <div style={{ transform: 'scale(1.1)' }}>
                <Ring value={c.att!} color={T.cyan} size={86} label="Attendance" />
              </div>
              <div style={{ transform: 'scale(1.1)' }}>
                <Ring value={c.punc!} color={T.mint} size={86} label="Punctuality" />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '10px 0 4px',
          }}
        >
          <button
            onClick={() => {
              setIdx(Math.max(0, idx - 1));
              setFlipped(false);
            }}
            style={{
              background: idx > 0 ? T.plum : '#e5e7eb',
              border: 'none',
              borderRadius: 99,
              width: 26,
              height: 26,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: idx > 0 ? `0 2px 8px ${T.plum}44` : 'none',
            }}
          >
            <Ic n="chL" size={13} c={idx > 0 ? '#fff' : '#9ca3af'} />
          </button>
          {COURSES.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === idx ? 20 : 7,
                height: 7,
                borderRadius: 99,
                background: i === idx ? T.plum : '#d1d5db',
                transition: 'all 0.3s',
              }}
            />
          ))}
          <button
            onClick={() => {
              setIdx(Math.min(COURSES.length - 1, idx + 1));
              setFlipped(false);
            }}
            style={{
              background: idx < COURSES.length - 1 ? T.plum : '#e5e7eb',
              border: 'none',
              borderRadius: 99,
              width: 26,
              height: 26,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                idx < COURSES.length - 1 ? `0 2px 8px ${T.plum}44` : 'none',
            }}
          >
            <Ic
              n="chR"
              size={13}
              c={idx < COURSES.length - 1 ? '#fff' : '#9ca3af'}
            />
          </button>
        </div>

        {/* Units strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
            marginTop: 6,
          }}
        >
          <SecHead title="Units" />
          <button
            onClick={() => setOpen((v) => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              color: T.muted,
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            {open ? 'Collapse' : 'Expand'}{' '}
            <Ic n={open ? 'chU' : 'chD'} size={13} c={T.muted} />
          </button>
        </div>
        {open && (
          <div
            style={{
              display: 'flex',
              gap: 9,
              overflowX: 'auto',
              paddingBottom: 8,
              marginBottom: 4,
            }}
          >
            {c.units.map((u, i) => (
              <div
                key={i}
                onClick={() => onUnit(u)}
                style={{
                  background: T.card,
                  border: `1.5px solid ${u.color}55`,
                  borderRadius: 16,
                  padding: '12px 15px',
                  flexShrink: 0,
                  cursor: 'pointer',
                  minWidth: 138,
                  boxShadow: `0 2px 8px ${u.color}22`,
                  transition: 'transform 0.1s',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: u.color + '33',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 8,
                  }}
                >
                  <Ic n="book" size={16} c={T.plum} />
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 12,
                    color: T.plum,
                    marginBottom: 5,
                    lineHeight: 1.3,
                  }}
                >
                  {u.name}
                </div>
                <div style={{ fontSize: 11, color: T.muted }}>
                  Att{' '}
                  <b style={{ color: u.att >= 80 ? '#059669' : T.pink }}>
                    {u.att}%
                  </b>
                </div>
                <div style={{ fontSize: 11, color: T.muted }}>
                  Punc <b style={{ color: T.plum }}>{u.punc}%</b>
                </div>
                <Bar value={u.att} color={u.color} h={4} />
              </div>
            ))}
          </div>
        )}

        {/* Print Balance */}
        <div
          style={{
            borderRadius: 20,
            background: `linear-gradient(135deg,${T.mint}44,${T.cyan}22)`,
            border: `1.5px solid ${T.mint}66`,
            padding: '14px 16px',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            boxShadow: `0 2px 12px ${T.mint}22`,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 15,
              background: `linear-gradient(135deg,${T.mint},${T.cyan})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: `0 4px 12px ${T.cyan}44`,
            }}
          >
            <Ic n="print" size={22} c={T.plum} sw={2} />
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11,
                color: T.muted,
                fontWeight: 600,
                marginBottom: 2,
              }}
            >
              Print Balance
            </div>
            <div
              style={{ fontSize: 22, fontWeight: 900, color: T.plum, lineHeight: 1 }}
            >
              £5.00
            </div>
          </div>
          <button
            style={{
              background: T.plum,
              border: 'none',
              borderRadius: 12,
              padding: '8px 14px',
              fontSize: 12,
              fontWeight: 800,
              color: '#fff',
              cursor: 'pointer',
              fontFamily: 'inherit',
              flexShrink: 0,
            }}
          >
            Top Up
          </button>
        </div>

        {/* Quick actions */}
        <SecHead title="Quick Actions" />
        <div
          style={{
            display: 'flex',
            gap: 10,
            overflowX: 'auto',
            paddingBottom: 8,
            marginBottom: 16,
          }}
        >
          {[
            {
              i: 'warn' as IconName,
              label: 'Report Absence',
              c: `linear-gradient(135deg,${T.pink},${T.peach})`,
              a: () => setModal(true),
            },
            {
              i: 'trend' as IconName,
              label: 'View Grades',
              c: `linear-gradient(135deg,${T.cyan},${T.mint})`,
              a: () => { },
            },
            {
              i: 'users' as IconName,
              label: 'My Tutor',
              c: `linear-gradient(135deg,${T.purple},${T.lilac})`,
              a: () => { },
            },
            {
              i: 'book' as IconName,
              label: 'Library',
              c: `linear-gradient(135deg,${T.lemon}cc,${T.mint})`,
              a: () => { },
            },
          ].map((q, i) => (
            <button
              key={i}
              onClick={q.a}
              style={{
                flexShrink: 0,
                background: q.c,
                border: 'none',
                borderRadius: 20,
                padding: '18px 14px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 24,
                width: 130,
                boxShadow: `0 4px 16px rgba(69,0,32,0.15)`,
                transition: 'transform 0.15s',
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ic n={q.i} size={20} c="#fff" sw={2.2} />
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.3,
                  textAlign: 'left',
                }}
              >
                {q.label}
              </span>
            </button>
          ))}
        </div>

        {/* News */}
        <SecHead title="Campus News" action="See all" />
        <div
          style={{
            display: 'flex',
            gap: 14,
            overflowX: 'auto',
            paddingBottom: 16,
            marginBottom: 8,
            scrollSnapType: 'x mandatory',
          }}
        >
          {NEWS.map((n, i) => (
            <div
              key={i}
              style={{
                width: 260,
                flexShrink: 0,
                height: 320,
                borderRadius: 24,
                overflow: 'hidden',
                background: `linear-gradient(150deg, ${n.color}, ${n.color}bb)`,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 20,
                boxShadow: `0 8px 24px ${n.color}40`,
                scrollSnapAlign: 'start',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -60,
                  right: -40,
                  width: 200,
                  height: 200,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 100,
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: -40,
                  left: -20,
                  width: 150,
                  height: 150,
                  background: 'rgba(0,0,0,0.1)',
                  borderRadius: 75,
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top part: Icon and Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: 'rgba(255,255,255,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Ic n={n.icon} size={24} c="#fff" sw={2} />
                </div>
                <div
                  style={{
                    background: 'rgba(0,0,0,0.2)',
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: 99,
                    letterSpacing: 0.5,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  LATEST
                </div>
              </div>

              {/* Bottom part: Title, Desc, and "Read More" */}
              <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                <div
                  style={{
                    color: '#fff',
                    fontSize: 22,
                    fontWeight: 900,
                    lineHeight: 1.15,
                    marginBottom: 8,
                    textShadow: '0 2px 4px rgba(0,0,0,0.15)',
                  }}
                >
                  {n.title}
                </div>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 13,
                    lineHeight: 1.4,
                    marginBottom: 16,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {n.desc}
                </p>
                <div style={{ display: 'flex' }}>
                  <button
                    style={{
                      background: '#fff',
                      color: T.plum,
                      border: 'none',
                      borderRadius: 12,
                      padding: '10px 16px',
                      fontSize: 12,
                      fontWeight: 800,
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                      display: 'inline-block',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    Read full story
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal && <AbsenceModal onClose={() => setModal(false)} />}
    </div>
  );
};