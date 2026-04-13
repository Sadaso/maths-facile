export function ThreePerpendicularsDiagram() {
  return (
    <div className="geo-diagrams-row" style={{ gridTemplateColumns: '1fr' }}>
      <div className="geo-diagram-card" style={{ maxWidth: 320, margin: '0 auto' }}>
        <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#1e40af', marginBottom: '0.3rem' }}>Theoreme des trois perpendiculaires</div>
        <svg viewBox="0 0 260 180" className="geo-svg" style={{ maxWidth: 280 }}>
          {/* Plan */}
          <polygon points="20,130 130,160 240,130 130,95" fill="#e0e7ff" stroke="#94a3b8" strokeWidth="1" />
          <text x="200" y="150" fill="#64748b" fontSize="10">P</text>
          {/* Droite d in plan */}
          <line x1="50" y1="120" x2="200" y2="135" stroke="#1e40af" strokeWidth="2" />
          <text x="205" y="133" fill="#1e40af" fontSize="10" fontWeight="600">d</text>
          {/* H on plan */}
          <circle cx="130" cy="125" r="3" fill="#059669" />
          <text x="135" y="122" fill="#059669" fontSize="10" fontWeight="600">H</text>
          {/* A above */}
          <circle cx="130" cy="35" r="3" fill="#c0392b" />
          <text x="137" y="33" fill="#c0392b" fontSize="11" fontWeight="700">A</text>
          {/* AH vertical */}
          <line x1="130" y1="38" x2="130" y2="122" stroke="#c0392b" strokeWidth="1.5" strokeDasharray="5 3" />
          {/* right angle AH-P */}
          <rect x="130" y="115" width="8" height="8" fill="none" stroke="#c0392b" strokeWidth="1" />
          {/* B on d */}
          <circle cx="95" cy="123" r="3" fill="#D97706" />
          <text x="82" y="118" fill="#D97706" fontSize="10" fontWeight="600">B</text>
          {/* HB */}
          <line x1="130" y1="125" x2="95" y2="123" stroke="#059669" strokeWidth="1.5" />
          {/* right angle HB-d */}
          <rect x="95" y="115" width="7" height="7" fill="none" stroke="#059669" strokeWidth="1" transform="rotate(5 95 115)" />
          {/* AB */}
          <line x1="130" y1="38" x2="95" y2="120" stroke="#D97706" strokeWidth="1.5" />
          {/* right angle AB-d */}
          <rect x="97" y="112" width="7" height="7" fill="none" stroke="#D97706" strokeWidth="1" transform="rotate(-55 97 112)" />
          {/* Labels */}
          <text x="20" y="175" fill="#64748b" fontSize="9">AH ⊥ P, HB ⊥ d ⇒ AB ⊥ d</text>
        </svg>
      </div>
    </div>
  )
}

export function DihedralAngleDiagram() {
  return (
    <div className="geo-diagrams-row" style={{ gridTemplateColumns: '1fr' }}>
      <div className="geo-diagram-card" style={{ maxWidth: 300, margin: '0 auto' }}>
        <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#1e40af', marginBottom: '0.3rem' }}>Angle diedre</div>
        <svg viewBox="0 0 240 160" className="geo-svg" style={{ maxWidth: 260 }}>
          {/* Arête */}
          <line x1="60" y1="80" x2="180" y2="80" stroke="#334155" strokeWidth="2.5" />
          <text x="185" y="78" fill="#334155" fontSize="10" fontWeight="600">arete</text>
          {/* Plan 1 */}
          <line x1="120" y1="80" x2="80" y2="25" stroke="#1e40af" strokeWidth="2" />
          <text x="65" y="22" fill="#1e40af" fontSize="10">P₁</text>
          {/* Plan 2 */}
          <line x1="120" y1="80" x2="170" y2="30" stroke="#c0392b" strokeWidth="2" />
          <text x="175" y="28" fill="#c0392b" fontSize="10">P₂</text>
          {/* Angle arc */}
          <path d="M 100 55 A 30 30 0 0 1 148 55" fill="none" stroke="#059669" strokeWidth="2" />
          <text x="118" y="48" fill="#059669" fontSize="12" fontWeight="700">θ</text>
          {/* Perpendicular to edge */}
          <line x1="120" y1="80" x2="120" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
          <text x="125" y="150" fill="#94a3b8" fontSize="9">⊥ arete</text>
        </svg>
      </div>
    </div>
  )
}

export function OrthoDecisionFlowchart() {
  return (
    <div className="decision-tree">
      <div className="dt-title">Que cherche-t-on ?</div>
      <div className="dt-graph">
        <div className="dt-branches-fi">
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>d ⊥ P ?</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-blue"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>u colineaire a n</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>Plan med.</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-green"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>I milieu + n = AB</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>Symetrique</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-violet"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>H projete → M'=2H-M</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>d(M,P)</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-orange"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>|ax+by+cz+d|/‖n‖</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>d(d₁,d₂)</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-orange"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>// → d(A,d₂) | ✗ → det/‖∧‖</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>Sph. circ.</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-blue"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>ΩA²=ΩB²=... syst.</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
