import KatexRenderer from './KatexRenderer'
import DecisionTree from './DecisionTree'
import ConvergenceTree from './ConvergenceTree'
import LimitesTree from './LimitesTree'
import ConvexityDiagram from './ConvexityDiagram'
import { TwoLinesDiagram, LinePlaneDiagram, TwoPlanesDiagram, IntersectionFlowchart, DecisionFlowchart } from './GeometryDiagrams'
import { CrossProductRule, SpherePlaneDiagram, ScalarDecisionFlowchart } from './ScalarDiagrams'
import { ThreePerpendicularsDiagram, DihedralAngleDiagram, OrthoDecisionFlowchart } from './OrthoDistDiagrams'
import { HypothesisTestFlowchart, ProbaDecisionFlowchart } from './ProbaDiagrams'

const blockTypes = {
  definition: { className: 'block-definition', label: 'Definition' },
  theorem: { className: 'block-theorem', label: 'Theoreme' },
  property: { className: 'block-theorem', label: 'Propriete' },
  method: { className: 'block-example', label: 'Methode' },
  example: { className: 'block-example', label: 'Exemple' },
  remark: { className: 'block-remark', label: 'Remarque' },
  proof: { className: 'block-proof', label: 'Demonstration' },
}

export default function CourseContent({ sections }) {
  if (!sections || sections.length === 0) {
    return (
      <div className="placeholder">
        <h2>Contenu a venir</h2>
        <p>Ce chapitre est en cours de redaction. Revenez bientot !</p>
      </div>
    )
  }

  return (
    <div className="course-document">
      {sections.map((section, i) => (
        <div key={i} className="course-section">
          {section.title && (
            <h2><KatexRenderer content={section.title} inline /></h2>
          )}
          {section.subtitle && (
            <h3><KatexRenderer content={section.subtitle} inline /></h3>
          )}
          {section.content && section.content.map((block, j) => {
            if (block.type === 'text') {
              return <KatexRenderer key={j} content={block.value} />
            }
            if (block.type === 'decision-tree') {
              return <DecisionTree key={j} />
            }
            if (block.type === 'convergence-tree') {
              return <ConvergenceTree key={j} />
            }
            if (block.type === 'limites-tree') {
              return <LimitesTree key={j} />
            }
            if (block.type === 'convexity-diagram') {
              return <ConvexityDiagram key={j} />
            }
            if (block.type === 'two-lines-diagram') {
              return <TwoLinesDiagram key={j} />
            }
            if (block.type === 'line-plane-diagram') {
              return <LinePlaneDiagram key={j} />
            }
            if (block.type === 'two-planes-diagram') {
              return <TwoPlanesDiagram key={j} />
            }
            if (block.type === 'intersection-flowchart') {
              return <IntersectionFlowchart key={j} />
            }
            if (block.type === 'geo-decision-flowchart') {
              return <DecisionFlowchart key={j} />
            }
            if (block.type === 'cross-product-rule') {
              return <CrossProductRule key={j} />
            }
            if (block.type === 'sphere-plane-diagram') {
              return <SpherePlaneDiagram key={j} />
            }
            if (block.type === 'scalar-decision-flowchart') {
              return <ScalarDecisionFlowchart key={j} />
            }
            if (block.type === 'three-perpendiculars') {
              return <ThreePerpendicularsDiagram key={j} />
            }
            if (block.type === 'dihedral-angle') {
              return <DihedralAngleDiagram key={j} />
            }
            if (block.type === 'ortho-decision-flowchart') {
              return <OrthoDecisionFlowchart key={j} />
            }
            if (block.type === 'hypothesis-test-flowchart') {
              return <HypothesisTestFlowchart key={j} />
            }
            if (block.type === 'proba-decision-flowchart') {
              return <ProbaDecisionFlowchart key={j} />
            }
            if (block.type === 'table') {
              return (
                <div key={j} className="course-table-wrapper">
                  <table className="course-table">
                    <thead>
                      <tr>
                        {block.headers.map((h, hi) => (
                          <th key={hi}><KatexRenderer content={h} inline /></th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((cell, ci) => (
                            <td key={ci}><KatexRenderer content={cell} inline /></td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            }
            const bt = blockTypes[block.type]
            if (bt) {
              return (
                <div key={j} className={bt.className}>
                  <div className="block-title">
                    {block.title ? <KatexRenderer content={block.title} inline /> : bt.label}
                  </div>
                  <KatexRenderer content={block.value} />
                </div>
              )
            }
            return null
          })}
        </div>
      ))}
    </div>
  )
}
