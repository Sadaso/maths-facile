// SVG diagrams for the geometry chapter (positions relatives)
// Large, clear diagrams with labels and proper spacing

const C = {
  line1: 'var(--blue-600, #2563eb)',
  line2: 'var(--red-500, #ef4444)',
  plane: 'var(--blue-100, #dbeafe)',
  planeStroke: 'var(--slate-400, #94a3b8)',
  plane2: 'var(--indigo-100, #e0e7ff)',
  plane2Stroke: 'var(--blue-400, #60a5fa)',
  dot: 'var(--blue-700, #1d4ed8)',
  interLine: 'var(--red-500, #ef4444)',
  text: 'var(--slate-600, #475569)',
}

function Caption({ x, y, children }) {
  return <text x={x} y={y} textAnchor="middle" fontSize="13" fontWeight="700" fill={C.text} fontFamily="'Sora',sans-serif">{children}</text>
}

export function TwoLinesDiagram() {
  return (
    <div className="geo-diagrams-row">
      <div className="geo-diagram-card">
        <svg viewBox="0 0 180 140" className="geo-svg">
          <line x1="20" y1="100" x2="160" y2="30" stroke={C.line1} strokeWidth="2.5" />
          <line x1="20" y1="30" x2="160" y2="100" stroke={C.line2} strokeWidth="2.5" />
          <circle cx="90" cy="65" r="4" fill={C.dot} />
          <Caption x="90" y="132">Sécantes</Caption>
        </svg>
      </div>
      <div className="geo-diagram-card">
        <svg viewBox="0 0 180 140" className="geo-svg">
          <line x1="20" y1="45" x2="160" y2="45" stroke={C.line1} strokeWidth="2.5" />
          <line x1="20" y1="80" x2="160" y2="80" stroke={C.line2} strokeWidth="2.5" />
          <Caption x="90" y="132">Parallèles</Caption>
        </svg>
      </div>
      <div className="geo-diagram-card">
        <svg viewBox="0 0 180 140" className="geo-svg">
          <line x1="20" y1="85" x2="160" y2="30" stroke={C.line1} strokeWidth="2.5" />
          <line x1="45" y1="25" x2="135" y2="100" stroke={C.line2} strokeWidth="2.5" strokeDasharray="6 4" opacity="0.7" />
          <Caption x="90" y="132">Non coplanaires</Caption>
        </svg>
      </div>
    </div>
  )
}

export function LinePlaneDiagram() {
  return (
    <div className="geo-diagrams-row">
      <div className="geo-diagram-card">
        <svg viewBox="0 0 180 140" className="geo-svg">
          <polygon points="15,85 90,105 165,85 90,60" fill={C.plane} stroke={C.planeStroke} strokeWidth="1.2" />
          <line x1="35" y1="78" x2="145" y2="78" stroke={C.line1} strokeWidth="2.5" />
          <Caption x="90" y="132">Incluse</Caption>
        </svg>
      </div>
      <div className="geo-diagram-card">
        <svg viewBox="0 0 180 140" className="geo-svg">
          <polygon points="15,85 90,105 165,85 90,60" fill={C.plane} stroke={C.planeStroke} strokeWidth="1.2" />
          <line x1="55" y1="15" x2="115" y2="100" stroke={C.line2} strokeWidth="2.5" />
          <circle cx="97" cy="80" r="4" fill={C.dot} />
          <Caption x="90" y="132">Sécante</Caption>
        </svg>
      </div>
      <div className="geo-diagram-card">
        <svg viewBox="0 0 180 140" className="geo-svg">
          <polygon points="15,85 90,105 165,85 90,60" fill={C.plane} stroke={C.planeStroke} strokeWidth="1.2" />
          <line x1="25" y1="40" x2="155" y2="40" stroke={C.line1} strokeWidth="2.5" />
          <Caption x="90" y="132">Parallèle</Caption>
        </svg>
      </div>
    </div>
  )
}

export function TwoPlanesDiagram() {
  return (
    <div className="geo-diagrams-row">
      <div className="geo-diagram-card">
        <svg viewBox="0 0 180 140" className="geo-svg">
          <polygon points="15,70 90,88 165,70 90,45" fill={C.plane} stroke={C.planeStroke} strokeWidth="1.2" />
          <polygon points="15,62 90,80 165,62 90,37" fill={C.plane2} stroke={C.plane2Stroke} strokeWidth="1.2" opacity="0.6" />
          <Caption x="90" y="130">Confondus</Caption>
        </svg>
      </div>
      <div className="geo-diagram-card">
        <svg viewBox="0 0 180 140" className="geo-svg">
          <polygon points="10,78 75,92 150,78 75,50" fill={C.plane} stroke={C.planeStroke} strokeWidth="1.2" />
          <polygon points="35,20 75,92 165,72 125,10" fill={C.plane2} stroke={C.plane2Stroke} strokeWidth="1.2" opacity="0.45" />
          <line x1="52" y1="58" x2="118" y2="82" stroke={C.interLine} strokeWidth="2.5" />
          <Caption x="90" y="130">Sécants</Caption>
        </svg>
      </div>
      <div className="geo-diagram-card">
        <svg viewBox="0 0 180 140" className="geo-svg">
          <polygon points="15,75 90,92 165,75 90,50" fill={C.plane} stroke={C.planeStroke} strokeWidth="1.2" />
          <polygon points="15,42 90,59 165,42 90,17" fill={C.plane2} stroke={C.plane2Stroke} strokeWidth="1.2" opacity="0.5" />
          <Caption x="90" y="130">Parallèles</Caption>
        </svg>
      </div>
    </div>
  )
}

export function IntersectionFlowchart() {
  return (
    <div className="decision-tree">
      <div className="dt-title">Intersection droite / plan</div>
      <div className="dt-graph">
        <div className="dt-level dt-level-0">
          <div className="dt-question dt-root">
            <span>Substituer paramétrique dans cartésienne</span>
          </div>
        </div>
        <div className="dt-branches dt-branches-root">
          <div className="dt-branch dt-branch-left">
            <div className="dt-connector"><div className="dt-line" /><div className="dt-label-yes">t unique</div><div className="dt-line" /></div>
            <div className="dt-result dt-result-green">
              <div className="dt-result-formula" style={{ fontSize: '0.85rem' }}>Point d'intersection</div>
              <div className="dt-result-name">reporter t</div>
            </div>
          </div>
          <div className="dt-branch">
            <div className="dt-connector"><div className="dt-line" /><div className="dt-label-no">0 = k ≠ 0</div><div className="dt-line" /></div>
            <div className="dt-result dt-result-orange">
              <div className="dt-result-formula" style={{ fontSize: '0.85rem' }}>d ∥ 𝒫</div>
              <div className="dt-result-name">parallèle</div>
            </div>
          </div>
          <div className="dt-branch dt-branch-right">
            <div className="dt-connector"><div className="dt-line" /><div className="dt-label-yes">0 = 0</div><div className="dt-line" /></div>
            <div className="dt-result dt-result-blue">
              <div className="dt-result-formula" style={{ fontSize: '0.85rem' }}>d ⊂ 𝒫</div>
              <div className="dt-result-name">incluse</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DecisionFlowchart() {
  return (
    <div className="decision-tree">
      <div className="dt-title">Que cherche-t-on ?</div>
      <div className="dt-graph">
        <div className="dt-branches-fi">
          {[
            { q: 'Alignement ?', r: 'Colinéarité de deux vecteurs', c: 'blue' },
            { q: 'Coplanarité ?', r: 'Combinaison linéaire ou dét = 0', c: 'violet' },
            { q: 'Éq. de plan ?', r: 'Trouver n⃗ (système) → ax+by+cz+d=0', c: 'green' },
            { q: 'Inter. d/𝒫 ?', r: 'Substituer param. dans cart.', c: 'orange' },
            { q: 'd ∥ 𝒫 ?', r: 'u⃗ · n⃗ = 0', c: 'blue' },
            { q: 'Section ?', r: 'Face par face + parallélisme', c: 'violet' },
          ].map((item, i) => (
            <div key={i} className="dt-fi-item">
              <div className="dt-question" style={{ fontSize: '0.82rem', padding: '0.45rem 0.65rem' }}><span>{item.q}</span></div>
              <div className="dt-fi-connector"><div className="dt-line" /></div>
              <div className={`dt-result dt-result-${item.c}`}>
                <div className="dt-result-name" style={{ fontSize: '0.78rem' }}>{item.r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
