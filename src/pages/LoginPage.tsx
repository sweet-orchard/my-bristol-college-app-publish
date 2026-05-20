import React, { useState } from "react";
import { T } from "../theme/tokens";
import { LogoCompact } from "../components/icons/LogoCompact";

export function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    setError("");
    
    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: `linear-gradient(160deg, ${T.plumDk} 0%, ${T.plum} 55%, ${T.plumLt} 100%)`,
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top ribbon decoration */}
      <svg
        viewBox="0 0 393 200"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          pointerEvents: 'none',
          animation: 'loginRib 0.9s ease both',
          zIndex: 0
        }}
      >
        <defs>
          <linearGradient id="l_sp1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d0fa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#73ffcc" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="l_sp2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffbaff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#afa3f0" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d="M-30 60 Q80 10 180 70 Q280 130 420 50"
          fill="none"
          stroke="url(#l_sp1)"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <path
          d="M-30 110 Q100 160 220 90 Q340 20 430 100"
          fill="none"
          stroke="url(#l_sp2)"
          strokeWidth="16"
          strokeLinecap="round"
        />
      </svg>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 400, margin: '0 auto', width: '100%', zIndex: 1 }}>
        <div style={{ alignSelf: 'center', marginBottom: 32, transform: 'scale(1.5)', animation: 'splashLogo 0.7s cubic-bezier(.34,1.56,.64,1) 0.3s both' }}>
          <LogoCompact />
        </div>
        
        <div style={{ animation: 'splashLogo 0.7s cubic-bezier(.34,1.56,.64,1) 0.4s both' }}>
          <h1 style={{ textAlign: 'center', fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 8, letterSpacing: -0.5 }}>
            WELCOME
          </h1>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: 15, marginBottom: 40 }}>
            Sign in to your Bristol College account
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, animation: 'splashSub 0.6s ease 0.6s both' }}>
          {error && (
            <div style={{ background: 'rgba(255,60,100,0.2)', color: '#ffbaff', border: '1px solid rgba(255,60,100,0.3)', padding: '12px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600 }}>
              {error}
            </div>
          )}
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginLeft: 4 }}>Email or Student ID</label>
            <input 
              type="text" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="e.g. 713784@student.cityofbristol.ac.uk"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: 16,
                border: `1.5px solid rgba(255,255,255,0.15)`,
                background: 'rgba(255,255,255,0.1)',
                fontSize: 15,
                color: '#fff',
                outline: 'none',
                transition: 'all 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.5)'; e.target.style.background = 'rgba(255,255,255,0.15)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginLeft: 4 }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: 16,
                border: `1.5px solid rgba(255,255,255,0.15)`,
                background: 'rgba(255,255,255,0.1)',
                fontSize: 15,
                color: '#fff',
                outline: 'none',
                transition: 'all 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.5)'; e.target.style.background = 'rgba(255,255,255,0.15)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: T.cyan, cursor: 'pointer', opacity: 0.9 }}>
              Forgot password?
            </span>
          </div>

          <button 
            type="submit"
            disabled={loading}
            style={{
              marginTop: 16,
              background: loading ? 'rgba(255,255,255,0.7)' : '#ffffff',
              color: T.plumDk,
              border: 'none',
              padding: '18px',
              borderRadius: 16,
              fontSize: 16,
              fontWeight: 800,
              cursor: loading ? 'default' : 'pointer',
              transition: 'background 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            }}
          >
            {loading ? (
              <div style={{ width: 22, height: 22, border: '3px solid rgba(45,0,21,0.2)', borderTopColor: T.plumDk, borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <style>{`
          @keyframes spin { 
            0% { transform: rotate(0deg); } 
            100% { transform: rotate(360deg); } 
          }
          @keyframes loginRib { from { opacity:0; transform:translateX(-40px) } to { opacity:1; transform:translateX(0) } }
          @keyframes splashLogo { from { opacity:0; transform:scale(0.8) } to { opacity:1; transform:scale(1) } }
          @keyframes splashSub  { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
          
          /* Placeholder color */
          ::placeholder {
            color: rgba(255,255,255,0.4) !important;
          }
        `}</style>
      </div>
    </div>
  );
}
