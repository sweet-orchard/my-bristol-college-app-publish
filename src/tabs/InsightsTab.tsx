import { useState } from 'react';
import { Ic } from "../components/icons/Icons";
import { Card, Pill } from "../components/shared/Primitives";
import { ARTICLE_LIST, ARTICLES, CAT_C } from "../data/mockData";
import { type Article, ArticlePage } from "../pages/ArticlePage";
import { T } from "../theme/tokens";


export const InsightsTab = () => {
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [showBm, setShowBm] = useState(false);
  const [openArt, setOpenArt] = useState<Article | null>(null);
  const toggle = (t: string) =>
    setBookmarks((b) => {
      const n = new Set(b);
      n.has(t) ? n.delete(t) : n.add(t);
      return n;
    });

  const SECTIONS = [
    { label: '✨ New for You', items: ARTICLE_LIST.filter((a) => a.isNew) },
    {
      label: 'Campus Life',
      items: ARTICLE_LIST.filter((a) => a.cat === 'Campus Life'),
    },
    { label: 'Safety', items: ARTICLE_LIST.filter((a) => a.cat === 'Safety') },
    {
      label: 'Learning',
      items: ARTICLE_LIST.filter((a) => a.cat === 'Learning'),
    },
    {
      label: 'Support & Wellbeing',
      items: ARTICLE_LIST.filter(
        (a) => a.cat === 'Support' || a.cat === 'Wellbeing'
      ),
    },
  ].filter((s) => s.items.length);

  if (openArt)
    return <ArticlePage art={openArt} onBack={() => setOpenArt(null)} />;

  if (showBm)
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
            onClick={() => setShowBm(false)}
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
            Saved Articles
          </span>
        </div>
        <div style={{ padding: 14 }}>
          {bookmarks.size === 0 ? (
            <Card style={{ textAlign: 'center', padding: 36 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: T.blue + '44',
                  borderRadius: 18,
                  margin: '0 auto 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ic n="bm" size={26} c={T.plum} />
              </div>
              <div style={{ fontWeight: 800, color: T.plum, fontSize: 16 }}>
                No saved articles yet
              </div>
              <div style={{ color: T.muted, fontSize: 13, marginTop: 5 }}>
                Tap the bookmark on any article to save it here
              </div>
            </Card>
          ) : (
            [...bookmarks].map((t) => {
              const a = ARTICLES[t];
              return (
                <Card
                  key={t}
                  onClick={() => setOpenArt({ title: t, ...a })}
                  style={{ display: 'flex', gap: 13, alignItems: 'center' }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 13,
                      background: (CAT_C[a.cat] || T.blue) + '44',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Ic n={a.icon} size={21} c={T.plum} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 800,
                        color: T.plum,
                        fontSize: 13,
                        marginBottom: 3,
                      }}
                    >
                      {t}
                    </div>
                    <Pill text={a.cat} color={CAT_C[a.cat] || T.blue} />
                  </div>
                  <Ic n="chR" size={17} c={T.border} />
                </Card>
              );
            })
          )}
        </div>
      </div>
    );

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
      <div style={{ padding: '14px 16px 24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 3,
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 23, color: T.plum }}>
            Insights
          </div>
          <button
            onClick={() => setShowBm(true)}
            style={{
              background: T.lav + '66',
              border: `1px solid ${T.lav}`,
              borderRadius: 12,
              padding: '7px 13px',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <Ic n="bm" size={14} c={T.plum} />
            <span style={{ fontSize: 12, fontWeight: 800, color: T.plum }}>
              {bookmarks.size}
            </span>
          </button>
        </div>
        <p
          style={{
            color: T.muted,
            fontSize: 12,
            marginBottom: 18,
            lineHeight: 1.5,
          }}
        >
          Guides and resources to help you thrive at Bristol College
        </p>

        {SECTIONS.map((sec) => (
          <div key={sec.label} style={{ marginBottom: 24 }}>
            <div
              style={{
                fontWeight: 900,
                color: T.plum,
                fontSize: 14,
                marginBottom: 10,
                paddingLeft: 2,
              }}
            >
              {sec.label}
            </div>
            <div
              style={{
                display: 'flex',
                gap: 10,
                overflowX: 'auto',
                paddingBottom: 4,
              }}
            >
              {sec.items.map((art) => {
                const ac = CAT_C[art.cat] || T.blue;
                return (
                  <div
                    key={art.title}
                    onClick={() => setOpenArt(art)}
                    style={{
                      flexShrink: 0,
                      width: 158,
                      background: T.card,
                      borderRadius: 18,
                      border: `1px solid ${T.border}`,
                      cursor: 'pointer',
                      overflow: 'hidden',
                      boxShadow: `0 2px 8px ${T.shadow}`,
                      transition: 'transform 0.12s',
                    }}
                  >
                    <div
                      style={{
                        background: `linear-gradient(140deg,${ac},${ac}88)`,
                        padding: '16px 14px 12px',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: 12,
                          background: 'rgba(255,255,255,0.75)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 2px 8px ${ac}33`,
                        }}
                      >
                        <Ic n={art.icon} size={21} c={T.plum} />
                      </div>
                      {art.isNew && (
                        <span
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            background: T.plum,
                            color: '#fff',
                            fontSize: 9,
                            fontWeight: 800,
                            borderRadius: 6,
                            padding: '2px 7px',
                            letterSpacing: 0.5,
                          }}
                        >
                          NEW
                        </span>
                      )}
                    </div>
                    <div style={{ padding: '11px 13px 13px' }}>
                      <div
                        style={{
                          fontWeight: 800,
                          color: T.plum,
                          fontSize: 12,
                          lineHeight: 1.4,
                          marginBottom: 7,
                        }}
                      >
                        {art.title}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Pill text={art.cat} color={ac} />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggle(art.title);
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 2,
                            display: 'flex',
                          }}
                        >
                          <Ic
                            n={bookmarks.has(art.title) ? 'bmFill' : 'bm'}
                            size={16}
                            c={bookmarks.has(art.title) ? T.plum : '#d1d5db'}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};