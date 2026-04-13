export default function ConvexityDiagram() {
  return (
    <div className="convexity-diagram">
      <div className="convexity-diagram-title">Convexe vs Concave — position relative</div>
      <div className="convexity-diagram-row">
        {/* Convexe */}
        <div className="convexity-diagram-card convexity-convex">
          <div className="convexity-diagram-label">Convexe (f'' ≥ 0)</div>
          <svg viewBox="0 0 200 140" className="convexity-svg">
            {/* Secante (above curve) */}
            <line x1="20" y1="100" x2="180" y2="40" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="6 3" />
            <text x="100" y="55" textAnchor="middle" fill="#EF4444" fontSize="10" fontWeight="600">sécante</text>

            {/* Convex curve (below secant) */}
            <path d="M20,100 Q100,120 180,40" fill="none" stroke="#1e40af" strokeWidth="2.5" />

            {/* Tangente (below curve) */}
            <line x1="60" y1="130" x2="160" y2="80" stroke="#059669" strokeWidth="1.5" strokeDasharray="6 3" />
            <text x="140" y="128" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="600">tangente</text>

            {/* Tangent point */}
            <circle cx="90" cy="108" r="3.5" fill="#1e40af" />

            {/* Annotations */}
            <text x="30" y="20" fill="#64748b" fontSize="9">courbe en dessous</text>
            <text x="30" y="30" fill="#64748b" fontSize="9">des sécantes</text>
          </svg>
          <div className="convexity-diagram-desc">« En creux » — au-dessus des tangentes</div>
        </div>

        {/* Concave */}
        <div className="convexity-diagram-card convexity-concave">
          <div className="convexity-diagram-label">Concave (f'' ≤ 0)</div>
          <svg viewBox="0 0 200 140" className="convexity-svg">
            {/* Secante (below curve) */}
            <line x1="20" y1="40" x2="180" y2="100" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="6 3" />
            <text x="100" y="88" textAnchor="middle" fill="#EF4444" fontSize="10" fontWeight="600">sécante</text>

            {/* Concave curve (above secant) */}
            <path d="M20,40 Q100,20 180,100" fill="none" stroke="#7c3aed" strokeWidth="2.5" />

            {/* Tangente (above curve) */}
            <line x1="60" y1="10" x2="160" y2="60" stroke="#059669" strokeWidth="1.5" strokeDasharray="6 3" />
            <text x="60" y="8" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="600">tangente</text>

            {/* Tangent point */}
            <circle cx="90" cy="30" r="3.5" fill="#7c3aed" />

            {/* Annotations */}
            <text x="30" y="125" fill="#64748b" fontSize="9">courbe au-dessus</text>
            <text x="30" y="135" fill="#64748b" fontSize="9">des sécantes</text>
          </svg>
          <div className="convexity-diagram-desc">« En bosse » — en dessous des tangentes</div>
        </div>
      </div>
    </div>
  )
}
