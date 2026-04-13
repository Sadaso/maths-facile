// SVG figures for geometry exercises — cube, tetrahedron, parallelepiped, pyramid, sphere
// Large, clear, with vertex dots, bold labels, dashed hidden edges

const C = {
  edge: 'var(--slate-700, #334155)',
  edgeBack: 'var(--slate-400, #94a3b8)',
  fill: 'var(--blue-100, #dbeafe)',
  fillBack: 'var(--blue-50, #eff6ff)',
  accent: 'var(--red-500, #ef4444)',
  label: 'var(--slate-800, #1e293b)',
  dot: 'var(--blue-700, #1d4ed8)',
  highlight: 'var(--amber-500, #f59e0b)',
}

function Dot({ x, y, r = 3.5 }) {
  return <circle cx={x} cy={y} r={r} fill={C.dot} />
}

function Lbl({ x, y, children }) {
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central"
      fontSize="16" fontWeight="800" fill={C.label} fontFamily="'Sora', sans-serif">
      {children}
    </text>
  )
}

/* ------------------------------------------------------------------ */
/*  CUBE                                                               */
/* ------------------------------------------------------------------ */
function CubeDiagram({ labels = 'ABCDEFGH', highlights = [] }) {
  const [A, B, C, D, E, F, G, H] = labels.split('')
  const hl = new Set(highlights)
  const sw  = e => hl.has(e) ? 3.5 : 2
  const sc  = e => hl.has(e) ? C.accent : C.edge
  const scb = e => hl.has(e) ? C.accent : C.edgeBack

  // Vertices — cavalière 45° projection, larger spread
  const pts = {
    A: [40, 260], B: [240, 260], C: [310, 130], D: [110, 130],
    E: [40, 340], F: [240, 340], G: [310, 210], H: [110, 210],
  }
  const p = pts

  return (
    <svg viewBox="0 0 370 380" className="exercise-figure-svg">
      {/* Back face fill */}
      <polygon points={`${p.D},${p.C},${p.G},${p.H}`} fill={C.fillBack} opacity="0.25" />
      {/* Front/bottom face fill */}
      <polygon points={`${p.A},${p.B},${p.F},${p.E}`} fill={C.fill} opacity="0.15" />
      {/* Top face fill */}
      <polygon points={`${p.A},${p.B},${p.C},${p.D}`} fill={C.fill} opacity="0.1" />

      {/* Back edges (dashed) */}
      <line x1={p.D[0]} y1={p.D[1]} x2={p.C[0]} y2={p.C[1]} stroke={scb('DC')} strokeWidth={sw('DC')} strokeDasharray="8 5" />
      <line x1={p.D[0]} y1={p.D[1]} x2={p.H[0]} y2={p.H[1]} stroke={scb('DH')} strokeWidth={sw('DH')} strokeDasharray="8 5" />
      <line x1={p.C[0]} y1={p.C[1]} x2={p.G[0]} y2={p.G[1]} stroke={scb('CG')} strokeWidth={sw('CG')} strokeDasharray="8 5" />

      {/* Front face edges */}
      <line x1={p.A[0]} y1={p.A[1]} x2={p.B[0]} y2={p.B[1]} stroke={sc('AB')} strokeWidth={sw('AB')} />
      <line x1={p.A[0]} y1={p.A[1]} x2={p.D[0]} y2={p.D[1]} stroke={sc('AD')} strokeWidth={sw('AD')} />
      <line x1={p.B[0]} y1={p.B[1]} x2={p.C[0]} y2={p.C[1]} stroke={sc('BC')} strokeWidth={sw('BC')} />

      {/* Bottom + side + right edges */}
      <line x1={p.A[0]} y1={p.A[1]} x2={p.E[0]} y2={p.E[1]} stroke={sc('AE')} strokeWidth={sw('AE')} />
      <line x1={p.B[0]} y1={p.B[1]} x2={p.F[0]} y2={p.F[1]} stroke={sc('BF')} strokeWidth={sw('BF')} />
      <line x1={p.E[0]} y1={p.E[1]} x2={p.F[0]} y2={p.F[1]} stroke={sc('EF')} strokeWidth={sw('EF')} />
      <line x1={p.E[0]} y1={p.E[1]} x2={p.H[0]} y2={p.H[1]} stroke={sc('EH')} strokeWidth={sw('EH')} />
      <line x1={p.F[0]} y1={p.F[1]} x2={p.G[0]} y2={p.G[1]} stroke={sc('FG')} strokeWidth={sw('FG')} />
      <line x1={p.H[0]} y1={p.H[1]} x2={p.G[0]} y2={p.G[1]} stroke={sc('HG')} strokeWidth={sw('HG')} />

      {/* Vertex dots */}
      {Object.values(pts).map((v, i) => <Dot key={i} x={v[0]} y={v[1]} />)}

      {/* Labels */}
      <Lbl x={22}  y={260}>{A}</Lbl>
      <Lbl x={258} y={260}>{B}</Lbl>
      <Lbl x={330} y={125}>{C}</Lbl>
      <Lbl x={92}  y={125}>{D}</Lbl>
      <Lbl x={22}  y={355}>{E}</Lbl>
      <Lbl x={258} y={355}>{F}</Lbl>
      <Lbl x={330} y={215}>{G}</Lbl>
      <Lbl x={92}  y={215}>{H}</Lbl>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  TETRAHEDRON                                                        */
/* ------------------------------------------------------------------ */
function TetrahedronDiagram({ labels = 'ABCD', highlights = [] }) {
  const [A, B, C, D] = labels.split('')
  const hl = new Set(highlights)
  const sw  = e => hl.has(e) ? 3.5 : 2
  const sc  = e => hl.has(e) ? C.accent : C.edge
  const scb = e => hl.has(e) ? C.accent : C.edgeBack

  const ax = 60,  ay = 320
  const bx = 340, by = 320
  const cx = 290, cy = 160
  const dx = 185, dy = 30

  return (
    <svg viewBox="0 0 400 370" className="exercise-figure-svg">
      {/* Faces */}
      <polygon points={`${ax},${ay} ${bx},${by} ${cx},${cy}`} fill={C.fill} opacity="0.15" />
      <polygon points={`${ax},${ay} ${bx},${by} ${dx},${dy}`} fill={C.fill} opacity="0.1" />
      <polygon points={`${bx},${by} ${cx},${cy} ${dx},${dy}`} fill={C.fill} opacity="0.08" />

      {/* Back edge (dashed) */}
      <line x1={ax} y1={ay} x2={cx} y2={cy} stroke={scb('AC')} strokeWidth={sw('AC')} strokeDasharray="8 5" />

      {/* Visible edges */}
      <line x1={ax} y1={ay} x2={bx} y2={by} stroke={sc('AB')} strokeWidth={sw('AB')} />
      <line x1={bx} y1={by} x2={cx} y2={cy} stroke={sc('BC')} strokeWidth={sw('BC')} />
      <line x1={ax} y1={ay} x2={dx} y2={dy} stroke={sc('AD')} strokeWidth={sw('AD')} />
      <line x1={bx} y1={by} x2={dx} y2={dy} stroke={sc('BD')} strokeWidth={sw('BD')} />
      <line x1={cx} y1={cy} x2={dx} y2={dy} stroke={sc('CD')} strokeWidth={sw('CD')} />

      {/* Vertex dots */}
      <Dot x={ax} y={ay} />
      <Dot x={bx} y={by} />
      <Dot x={cx} y={cy} />
      <Dot x={dx} y={dy} />

      {/* Labels */}
      <Lbl x={ax - 18} y={ay + 6}>{A}</Lbl>
      <Lbl x={bx + 18} y={by + 6}>{B}</Lbl>
      <Lbl x={cx + 18} y={cy - 4}>{C}</Lbl>
      <Lbl x={dx}      y={dy - 16}>{D}</Lbl>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  PARALLELEPIPED                                                     */
/* ------------------------------------------------------------------ */
function ParallelepipedDiagram({ labels = 'ABCDEFGH', highlights = [] }) {
  const [A, B, C, D, E, F, G, H] = labels.split('')
  const hl = new Set(highlights)
  const sw  = e => hl.has(e) ? 3.5 : 2
  const sc  = e => hl.has(e) ? C.accent : C.edge
  const scb = e => hl.has(e) ? C.accent : C.edgeBack

  // Wider than tall for parallelepiped look
  const pts = {
    A: [30, 230], B: [270, 230], C: [340, 90], D: [100, 90],
    E: [30, 310], F: [270, 310], G: [340, 170], H: [100, 170],
  }
  const p = pts

  return (
    <svg viewBox="0 0 390 350" className="exercise-figure-svg">
      <polygon points={`${p.D},${p.C},${p.G},${p.H}`} fill={C.fillBack} opacity="0.2" />
      <polygon points={`${p.A},${p.B},${p.F},${p.E}`} fill={C.fill} opacity="0.12" />

      {/* Back edges (dashed) */}
      <line x1={p.D[0]} y1={p.D[1]} x2={p.C[0]} y2={p.C[1]} stroke={scb('DC')} strokeWidth={sw('DC')} strokeDasharray="8 5" />
      <line x1={p.D[0]} y1={p.D[1]} x2={p.H[0]} y2={p.H[1]} stroke={scb('DH')} strokeWidth={sw('DH')} strokeDasharray="8 5" />
      <line x1={p.C[0]} y1={p.C[1]} x2={p.G[0]} y2={p.G[1]} stroke={scb('CG')} strokeWidth={sw('CG')} strokeDasharray="8 5" />

      {/* Visible edges */}
      <line x1={p.A[0]} y1={p.A[1]} x2={p.B[0]} y2={p.B[1]} stroke={sc('AB')} strokeWidth={sw('AB')} />
      <line x1={p.A[0]} y1={p.A[1]} x2={p.D[0]} y2={p.D[1]} stroke={sc('AD')} strokeWidth={sw('AD')} />
      <line x1={p.B[0]} y1={p.B[1]} x2={p.C[0]} y2={p.C[1]} stroke={sc('BC')} strokeWidth={sw('BC')} />
      <line x1={p.A[0]} y1={p.A[1]} x2={p.E[0]} y2={p.E[1]} stroke={sc('AE')} strokeWidth={sw('AE')} />
      <line x1={p.B[0]} y1={p.B[1]} x2={p.F[0]} y2={p.F[1]} stroke={sc('BF')} strokeWidth={sw('BF')} />
      <line x1={p.E[0]} y1={p.E[1]} x2={p.F[0]} y2={p.F[1]} stroke={sc('EF')} strokeWidth={sw('EF')} />
      <line x1={p.E[0]} y1={p.E[1]} x2={p.H[0]} y2={p.H[1]} stroke={sc('EH')} strokeWidth={sw('EH')} />
      <line x1={p.F[0]} y1={p.F[1]} x2={p.G[0]} y2={p.G[1]} stroke={sc('FG')} strokeWidth={sw('FG')} />
      <line x1={p.H[0]} y1={p.H[1]} x2={p.G[0]} y2={p.G[1]} stroke={sc('HG')} strokeWidth={sw('HG')} />

      {Object.values(pts).map((v, i) => <Dot key={i} x={v[0]} y={v[1]} />)}

      <Lbl x={12}  y={230}>{A}</Lbl>
      <Lbl x={288} y={230}>{B}</Lbl>
      <Lbl x={358} y={85}>{C}</Lbl>
      <Lbl x={82}  y={85}>{D}</Lbl>
      <Lbl x={12}  y={325}>{E}</Lbl>
      <Lbl x={288} y={325}>{F}</Lbl>
      <Lbl x={358} y={175}>{G}</Lbl>
      <Lbl x={82}  y={175}>{H}</Lbl>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  PYRAMID                                                            */
/* ------------------------------------------------------------------ */
function PyramidDiagram({ labels = 'SABCD', highlights = [] }) {
  const [S, A, B, Cv, D] = labels.split('')
  const hl = new Set(highlights)
  const sw  = e => hl.has(e) ? 3.5 : 2
  const sc  = e => hl.has(e) ? C.accent : C.edge
  const scb = e => hl.has(e) ? C.accent : C.edgeBack

  const sx = 195, sy = 25
  const ax = 40,  ay = 300
  const bx = 320, by = 300
  const cx = 365, cy = 175
  const dx = 85,  dy = 175

  return (
    <svg viewBox="0 0 410 345" className="exercise-figure-svg">
      {/* Base face */}
      <polygon points={`${ax},${ay} ${bx},${by} ${cx},${cy} ${dx},${dy}`} fill={C.fill} opacity="0.15" />
      <polygon points={`${ax},${ay} ${bx},${by} ${sx},${sy}`} fill={C.fill} opacity="0.08" />

      {/* Back edges (dashed) */}
      <line x1={dx} y1={dy} x2={cx} y2={cy} stroke={scb('DC')} strokeWidth={sw('DC')} strokeDasharray="8 5" />
      <line x1={sx} y1={sy} x2={dx} y2={dy} stroke={scb('SD')} strokeWidth={sw('SD')} strokeDasharray="8 5" />

      {/* Visible edges */}
      <line x1={ax} y1={ay} x2={bx} y2={by} stroke={sc('AB')} strokeWidth={sw('AB')} />
      <line x1={bx} y1={by} x2={cx} y2={cy} stroke={sc('BC')} strokeWidth={sw('BC')} />
      <line x1={ax} y1={ay} x2={dx} y2={dy} stroke={sc('AD')} strokeWidth={sw('AD')} />
      <line x1={sx} y1={sy} x2={ax} y2={ay} stroke={sc('SA')} strokeWidth={sw('SA')} />
      <line x1={sx} y1={sy} x2={bx} y2={by} stroke={sc('SB')} strokeWidth={sw('SB')} />
      <line x1={sx} y1={sy} x2={cx} y2={cy} stroke={sc('SC')} strokeWidth={sw('SC')} />

      <Dot x={sx} y={sy} /><Dot x={ax} y={ay} /><Dot x={bx} y={by} /><Dot x={cx} y={cy} /><Dot x={dx} y={dy} />

      <Lbl x={sx}      y={sy - 15}>{S}</Lbl>
      <Lbl x={ax - 18} y={ay + 10}>{A}</Lbl>
      <Lbl x={bx + 18} y={by + 10}>{B}</Lbl>
      <Lbl x={cx + 18} y={cy}>{Cv}</Lbl>
      <Lbl x={dx - 18} y={dy}>{D}</Lbl>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  SPHERE                                                             */
/* ------------------------------------------------------------------ */
function SphereDiagram({ center = 'Ω', radius = 'R' }) {
  return (
    <svg viewBox="0 0 360 360" className="exercise-figure-svg">
      {/* Main circle */}
      <circle cx="180" cy="180" r="140" fill={C.fill} opacity="0.15" stroke={C.edge} strokeWidth="2.5" />
      {/* Equator back half (dashed) */}
      <ellipse cx="180" cy="180" rx="140" ry="40" fill="none" stroke={C.edgeBack} strokeWidth="1.5" strokeDasharray="8 5" />
      {/* Equator front half */}
      <ellipse cx="180" cy="180" rx="140" ry="40" fill="none" stroke={C.edge} strokeWidth="1.8"
        strokeDasharray="220 440" strokeDashoffset="0" />
      {/* Center dot */}
      <Dot x={180} y={180} r={4} />
      {/* Radius line */}
      <line x1="180" y1="180" x2="308" y2="140" stroke={C.accent} strokeWidth="2" />
      <Dot x={308} y={140} r={3} />
      {/* Labels */}
      <Lbl x={165} y={205}>{center}</Lbl>
      <text x="252" y="148" textAnchor="middle" fontSize="15" fontWeight="700" fontStyle="italic" fill={C.accent} fontFamily="'Sora', sans-serif">{radius}</text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  EXPORT                                                             */
/* ------------------------------------------------------------------ */
const FIGURES = {
  cube: CubeDiagram,
  tetrahedron: TetrahedronDiagram,
  parallelepiped: ParallelepipedDiagram,
  pyramid: PyramidDiagram,
  sphere: SphereDiagram,
}

export default function ExerciseFigure({ figure }) {
  if (!figure) return null
  const Component = FIGURES[figure.type]
  if (!Component) return null
  return (
    <div className="exercise-figure">
      <Component {...figure} />
    </div>
  )
}
