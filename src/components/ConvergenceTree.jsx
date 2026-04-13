import KatexRenderer from './KatexRenderer'

export default function ConvergenceTree() {
  return (
    <div className="decision-tree">
      <div className="dt-title">Schema de convergence d'une suite</div>

      <div className="dt-graph">
        {/* Level 0: Root question */}
        <div className="dt-level dt-level-0">
          <div className="dt-question dt-root">
            <span>Suite monotone ?</span>
          </div>
        </div>

        {/* Branches from root */}
        <div className="dt-branches dt-branches-root">
          {/* LEFT: Non */}
          <div className="dt-branch dt-branch-left">
            <div className="dt-connector">
              <div className="dt-line" />
              <div className="dt-label-no">Non</div>
              <div className="dt-line" />
            </div>
            <div className="dt-result dt-result-orange">
              <div className="dt-result-formula" style={{ fontSize: '0.85rem' }}>
                Etudier autrement
              </div>
              <div className="dt-result-name">gendarmes, calcul direct...</div>
            </div>
          </div>

          {/* RIGHT: Oui → next question */}
          <div className="dt-branch dt-branch-right">
            <div className="dt-connector">
              <div className="dt-line" />
              <div className="dt-label-yes">Oui</div>
              <div className="dt-line" />
            </div>

            {/* Level 1: Bornée ? */}
            <div className="dt-question">
              <span>Bornee ?</span>
            </div>

            {/* Branches */}
            <div className="dt-branches dt-branches-inner">
              {/* LEFT: Oui → converge */}
              <div className="dt-branch dt-branch-left">
                <div className="dt-connector">
                  <div className="dt-line" />
                  <div className="dt-label-yes">Oui</div>
                  <div className="dt-line" />
                </div>
                <div className="dt-result dt-result-green">
                  <div className="dt-result-formula" style={{ fontSize: '0.85rem' }}>
                    Converge
                  </div>
                  <div className="dt-result-name">th. convergence monotone</div>
                </div>
              </div>

              {/* RIGHT: Non → diverge */}
              <div className="dt-branch dt-branch-right">
                <div className="dt-connector">
                  <div className="dt-line" />
                  <div className="dt-label-no">Non</div>
                  <div className="dt-line" />
                </div>
                <div className="dt-result dt-result-violet">
                  <div className="dt-result-formula">
                    <KatexRenderer content="$\\pm\\infty$" inline />
                  </div>
                  <div className="dt-result-name">diverge vers l'infini</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
