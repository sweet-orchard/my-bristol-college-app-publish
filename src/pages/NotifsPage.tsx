import { Ic } from "../components/icons/Icons";
import { Notification } from "../components/modals/AbsenceModal";
import { Card } from "../components/shared/Primitives";
import { T } from "../theme/tokens";


export const NotifsPage = ({
  items,
  onBack,
  onToggleRead,
}: {
  items: Notification[];
  onBack: () => void;
  onToggleRead: (id: number) => void;
}) => {
  const unreadCount = items.filter((n) => n.unread).length;

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
          position: 'sticky',
          top: 0,
          zIndex: 10,
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
        <span style={{ fontWeight: 900, fontSize: 18, color: T.plum }}>
          Notifications
        </span>
        {unreadCount > 0 && (
          <span
            style={{
              marginLeft: 'auto',
              background: T.pink,
              color: '#fff',
              borderRadius: 99,
              fontSize: 11,
              fontWeight: 800,
              padding: '2px 10px',
            }}
          >
            {unreadCount} new
          </span>
        )}
      </div>
      <div style={{ padding: '14px 14px 24px' }}>
        {items.map((n) => (
          <Card
            key={n.id}
            style={{
              display: 'flex',
              gap: 13,
              alignItems: 'flex-start',
              opacity: n.unread ? 1 : 0.6,
              transition: 'opacity 0.2s',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                background: n.c + '33',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: `1.5px solid ${n.c}44`,
              }}
            >
              <Ic n={n.i} size={19} c={T.plum} />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontWeight: 800, color: T.plum, fontSize: 13 }}>
                  {n.title}
                  {n.unread && (
                    <span
                      style={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        borderRadius: 3,
                        background: T.pink,
                        marginLeft: 6,
                        verticalAlign: 'middle',
                      }}
                    />
                  )}
                </span>
                <span style={{ color: T.muted, fontSize: 11 }}>{n.time}</span>
              </div>
              <p
                style={{
                  color: '#6b7280',
                  fontSize: 12,
                  margin: '4px 0 10px',
                  lineHeight: 1.5,
                }}
              >
                {n.msg}
              </p>
              <button
                onClick={() => onToggleRead(n.id)}
                style={{
                  background: n.unread ? T.bg : 'none',
                  border: n.unread ? `1px solid ${T.border}` : 'none',
                  borderRadius: 8,
                  padding: n.unread ? '4px 10px' : '4px 0',
                  fontSize: 11,
                  fontWeight: 700,
                  color: n.unread ? T.plum : T.muted,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                  textDecoration: n.unread ? 'none' : 'underline',
                }}
              >
                {n.unread ? 'Mark as Read' : 'Mark as Unread'}
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};