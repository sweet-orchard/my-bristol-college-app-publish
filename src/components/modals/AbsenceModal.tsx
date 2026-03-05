import { useState } from 'react';
import { T } from "../../theme/tokens";
import { Ic, IconName } from "../icons/Icons";


export const AbsenceModal = ({ onClose }: { onClose: () => void }) => {
  const [reason, setReason] = useState('');
  const [other, setOther] = useState('');
  const [done, setDone] = useState(false);
  const opts = [
    { k: 'Sick', i: 'heart' as IconName },
    { k: 'Emergency', i: 'warn' as IconName },
    { k: 'Transport', i: 'pin' as IconName },
    { k: 'Personal', i: 'person' as IconName },
    { k: 'Other', i: 'info' as IconName },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(45,0,21,0.55)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'flex-end',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        style={{
          background: T.card,
          borderRadius: '24px 24px 0 0',
          padding: '26px 22px 40px',
          width: '100%',
          boxShadow: '0 -12px 48px rgba(0,0,0,0.18)',
        }}
      >
        {done ? (
          <div style={{ textAlign: 'center', padding: '10px 0 6px' }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 34,
                background: `linear-gradient(135deg,${T.mint},${T.cyan})`,
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 6px 20px ${T.mint}66`,
              }}
            >
              <Ic n="check" size={32} c={T.plum} sw={2.5} />
            </div>
            <div
              style={{
                fontWeight: 900,
                color: T.plum,
                fontSize: 20,
                marginBottom: 6,
              }}
            >
              Absence Reported
            </div>
            <div
              style={{
                color: T.muted,
                fontSize: 14,
                lineHeight: 1.5,
                marginBottom: 24,
              }}
            >
              Your personal tutor has been notified and your record has been
              updated.
            </div>
            <button
              onClick={onClose}
              style={{
                background: T.plum,
                color: '#fff',
                border: 'none',
                borderRadius: 14,
                padding: '14px 48px',
                fontWeight: 800,
                fontSize: 16,
                cursor: 'pointer',
                fontFamily: 'inherit',
                boxShadow: `0 4px 16px ${T.plum}44`,
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 20,
              }}
            >
              <div>
                <div style={{ fontWeight: 900, color: T.plum, fontSize: 19 }}>
                  Report Absence
                </div>
                <div style={{ color: T.muted, fontSize: 13, marginTop: 3 }}>
                  Why can't you attend today?
                </div>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: T.bg,
                  border: 'none',
                  borderRadius: 12,
                  width: 34,
                  height: 34,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ic n="close" size={17} c={T.plum} />
              </button>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
                marginBottom: 14,
              }}
            >
              {opts.map((o) => (
                <button
                  key={o.k}
                  onClick={() => setReason(o.k)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '13px 14px',
                    borderRadius: 14,
                    border: `2px solid ${reason === o.k ? T.plum : T.border}`,
                    background: reason === o.k ? T.plum : T.card,
                    color: reason === o.k ? '#fff' : T.plum,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.15s',
                  }}
                >
                  <Ic
                    n={o.i}
                    size={17}
                    c={reason === o.k ? '#fff' : T.plum}
                    sw={2}
                  />{' '}
                  {o.k}
                </button>
              ))}
            </div>
            {reason === 'Other' && (
              <textarea
                value={other}
                onChange={(e) => setOther(e.target.value)}
                placeholder="Please describe your reason..."
                rows={2}
                style={{
                  width: '100%',
                  borderRadius: 12,
                  border: `1.5px solid ${T.border}`,
                  padding: '11px 13px',
                  fontFamily: 'inherit',
                  fontSize: 13,
                  marginBottom: 12,
                  boxSizing: 'border-box',
                  resize: 'none',
                  outline: 'none',
                  color: T.plum,
                }}
              />
            )}
            <button
              onClick={() => reason && setDone(true)}
              style={{
                width: '100%',
                background: reason
                  ? `linear-gradient(135deg,${T.plum},${T.plumLt})`
                  : '#e5e7eb',
                color: reason ? '#fff' : '#9ca3af',
                border: 'none',
                borderRadius: 14,
                padding: 15,
                fontWeight: 800,
                fontSize: 16,
                cursor: reason ? 'pointer' : 'default',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                boxShadow: reason ? `0 4px 16px ${T.plum}33` : 'none',
              }}
            >
              Submit Absence
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export type Notification = {
  id: number;
  i: IconName;
  title: string;
  msg: string;
  time: string;
  c: string;
  unread: boolean;
};

export const NOTIFS_DATA: Notification[] = [
  {
    id: 1,
    i: 'file' as IconName,
    title: 'Assignment Due',
    msg: 'Graphic Design logo project due in 3 days',
    time: '2h ago',
    c: T.cyan,
    unread: true,
  },
  {
    id: 2,
    i: 'cal' as IconName,
    title: 'Timetable Change',
    msg: 'Room change: JavaScript class moved to CGS 204',
    time: '5h ago',
    c: T.mint,
    unread: true,
  },
  {
    id: 3,
    i: 'award' as IconName,
    title: 'College Event',
    msg: 'Student Union social event this Friday 5pm',
    time: '1d ago',
    c: T.lilac,
    unread: true,
  },
  {
    id: 4,
    i: 'warn' as IconName,
    title: 'Attendance Alert',
    msg: 'Attendance in Finance is below 75%',
    time: '2d ago',
    c: T.pink,
    unread: true,
  },
  {
    id: 5,
    i: 'users' as IconName,
    title: 'Tutor Message',
    msg: 'Ms. Johnson left feedback on your portfolio',
    time: '3d ago',
    c: T.lav,
    unread: true,
  },
];