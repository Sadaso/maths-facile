import KatexRenderer from './KatexRenderer'

export function CrossProductRule() {
  return (
    <div className="geo-diagrams-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
      <div className="geo-diagram-card">
        <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#1e40af', marginBottom: '0.4rem' }}>Regle de la main droite</div>
        <svg viewBox="0 0 160 130" className="geo-svg" style={{ maxWidth: 180 }}>
          {/* u vector */}
          <line x1="80" y1="90" x2="140" y2="60" stroke="#1e40af" strokeWidth="2.5" markerEnd="url(#arrowB)" />
          <text x="135" y="50" fill="#1e40af" fontSize="12" fontWeight="700">u</text>
          {/* v vector */}
          <line x1="80" y1="90" x2="120" y2="120" stroke="#c0392b" strokeWidth="2.5" markerEnd="url(#arrowR)" />
          <text x="125" y="120" fill="#c0392b" fontSize="12" fontWeight="700">v</text>
          {/* u∧v vector (upward) */}
          <line x1="80" y1="90" x2="80" y2="15" stroke="#059669" strokeWidth="2.5" markerEnd="url(#arrowG)" />
          <text x="62" y="14" fill="#059669" fontSize="11" fontWeight="700">u∧v</text>
          {/* dot at origin */}
          <circle cx="80" cy="90" r="3" fill="#334155" />
          <defs>
            <marker id="arrowB" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#1e40af" /></marker>
            <marker id="arrowR" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#c0392b" /></marker>
            <marker id="arrowG" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#059669" /></marker>
          </defs>
        </svg>
      </div>
      <div className="geo-diagram-card">
        <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#1e40af', marginBottom: '0.4rem' }}>Cycle i → j → k</div>
        <svg viewBox="0 0 160 140" className="geo-svg" style={{ maxWidth: 180 }}>
          {/* Circle */}
          <circle cx="80" cy="65" r="40" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          {/* Arrow arcs (clockwise direction = positive) */}
          <path d="M 105 40 A 40 40 0 0 1 105 90" fill="none" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowG2)" />
          <path d="M 105 90 A 40 40 0 0 1 55 90" fill="none" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowG2)" />
          <path d="M 55 90 A 40 40 0 0 1 55 40" fill="none" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowG2)" />
          {/* Labels */}
          <circle cx="80" cy="25" r="14" fill="#1e40af" /><text x="80" y="29" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">i</text>
          <circle cx="115" cy="95" r="14" fill="#c0392b" /><text x="115" y="99" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">j</text>
          <circle cx="45" cy="95" r="14" fill="#059669" /><text x="45" y="99" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">k</text>
          {/* + sign */}
          <text x="80" y="75" textAnchor="middle" fill="#059669" fontSize="14" fontWeight="800">+</text>
          <text x="80" y="125" textAnchor="middle" fill="#64748b" fontSize="9">sens direct = +</text>
          <defs>
            <marker id="arrowG2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L7,2.5 L0,5" fill="#059669" /></marker>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export function SpherePlaneDiagram() {
  return (
    <div className="geo-diagrams-row">
      <div className="geo-diagram-card">
        <svg viewBox="0 0 140 110" className="geo-svg">
          <circle cx="70" cy="45" r="35" fill="none" stroke="#1e40af" strokeWidth="2" />
          <line x1="15" y1="60" x2="125" y2="60" stroke="#c0392b" strokeWidth="1.5" />
          <circle cx="70" cy="45" r="2.5" fill="#1e40af" />
          <text x="78" y="43" fill="#1e40af" fontSize="9">Ω</text>
          <line x1="70" y1="45" x2="70" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
          <text x="74" y="56" fill="#64748b" fontSize="8">d</text>
        </svg>
        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#059669' }}>d &lt; R : cercle</div>
      </div>
      <div className="geo-diagram-card">
        <svg viewBox="0 0 140 110" className="geo-svg">
          <circle cx="70" cy="40" r="35" fill="none" stroke="#1e40af" strokeWidth="2" />
          <line x1="15" y1="75" x2="125" y2="75" stroke="#c0392b" strokeWidth="1.5" />
          <circle cx="70" cy="75" r="3" fill="#c0392b" />
          <circle cx="70" cy="40" r="2.5" fill="#1e40af" />
          <text x="78" y="38" fill="#1e40af" fontSize="9">Ω</text>
          <line x1="70" y1="40" x2="70" y2="75" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
        </svg>
        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#D97706' }}>d = R : tangent</div>
      </div>
      <div className="geo-diagram-card">
        <svg viewBox="0 0 140 110" className="geo-svg">
          <circle cx="70" cy="35" r="30" fill="none" stroke="#1e40af" strokeWidth="2" />
          <line x1="15" y1="90" x2="125" y2="90" stroke="#c0392b" strokeWidth="1.5" />
          <circle cx="70" cy="35" r="2.5" fill="#1e40af" />
          <text x="78" y="33" fill="#1e40af" fontSize="9">Ω</text>
          <line x1="70" y1="35" x2="70" y2="90" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
        </svg>
        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#EF4444' }}>d &gt; R : vide</div>
      </div>
    </div>
  )
}

export function ScalarDecisionFlowchart() {
  return (
    <div className="decision-tree">
      <div className="dt-title">Que cherche-t-on ?</div>
      <div className="dt-graph">
        <div className="dt-branches-fi">
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>Orthogonalité</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-blue"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>u·v = 0</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>Angle</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-green"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>cos θ = u·v/(‖u‖‖v‖)</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>Normale</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-violet"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>n = u ∧ v</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>Aire</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-orange"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>½‖AB∧AC‖</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>Volume</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-orange"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>⅙|det|</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>d(M, P)</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-blue"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>|ax+by+cz+d|/‖n‖</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>d(M, d)</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-green"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>‖AM∧u‖/‖u‖</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.78rem', padding: '0.35rem 0.5rem' }}><span>S ∩ P ?</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-violet"><div className="dt-result-name" style={{ fontSize: '0.7rem' }}>Comparer d(Ω,P) à R</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
