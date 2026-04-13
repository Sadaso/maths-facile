import KatexRenderer from './KatexRenderer'

export default function LimitesTree() {
  return (
    <div className="decision-tree">
      <div className="dt-title">Schema de decision — Calculer une limite</div>

      <div className="dt-graph">
        {/* Level 0 */}
        <div className="dt-level dt-level-0">
          <div className="dt-question dt-root">
            <span>Regles directes applicables ?</span>
          </div>
        </div>

        <div className="dt-branches dt-branches-root">
          {/* OUI → Calculer */}
          <div className="dt-branch dt-branch-left">
            <div className="dt-connector">
              <div className="dt-line" />
              <div className="dt-label-yes">Oui</div>
              <div className="dt-line" />
            </div>
            <div className="dt-result dt-result-green">
              <div className="dt-result-formula" style={{ fontSize: '0.85rem' }}>Calculer</div>
              <div className="dt-result-name">operations + ref.</div>
            </div>
          </div>

          {/* NON → FI */}
          <div className="dt-branch dt-branch-right">
            <div className="dt-connector">
              <div className="dt-line" />
              <div className="dt-label-no">Non (FI)</div>
              <div className="dt-line" />
            </div>

            <div className="dt-question">
              <span>Type de FI ?</span>
            </div>

            {/* 6 branches for FI types */}
            <div className="dt-branches-fi">
              <div className="dt-fi-item">
                <div className="dt-fi-connector">
                  <div className="dt-line" />
                </div>
                <div className="dt-result dt-result-blue">
                  <div className="dt-result-formula">
                    <KatexRenderer content="$\dfrac{\infty}{\infty}$" inline />
                  </div>
                  <div className="dt-result-name">terme dominant</div>
                </div>
              </div>

              <div className="dt-fi-item">
                <div className="dt-fi-connector">
                  <div className="dt-line" />
                </div>
                <div className="dt-result dt-result-violet">
                  <div className="dt-result-formula" style={{ fontSize: '0.8rem' }}>
                    <KatexRenderer content="$+\infty - \infty$" inline />
                  </div>
                  <div className="dt-result-name">factoriser</div>
                </div>
              </div>

              <div className="dt-fi-item">
                <div className="dt-fi-connector">
                  <div className="dt-line" />
                </div>
                <div className="dt-result dt-result-violet">
                  <div className="dt-result-formula" style={{ fontSize: '0.75rem' }}>
                    <KatexRenderer content="$+\infty - \infty$" inline /> + <KatexRenderer content="$\sqrt{\phantom{x}}$" inline />
                  </div>
                  <div className="dt-result-name">conjuguee</div>
                </div>
              </div>

              <div className="dt-fi-item">
                <div className="dt-fi-connector">
                  <div className="dt-line" />
                </div>
                <div className="dt-result dt-result-orange">
                  <div className="dt-result-formula">
                    <KatexRenderer content="$\dfrac{0}{0}$" inline />
                  </div>
                  <div className="dt-result-name">factoriser (x-a)</div>
                </div>
              </div>

              <div className="dt-fi-item">
                <div className="dt-fi-connector">
                  <div className="dt-line" />
                </div>
                <div className="dt-result dt-result-orange">
                  <div className="dt-result-formula" style={{ fontSize: '0.75rem' }}>
                    <KatexRenderer content="$\dfrac{0}{0}$" inline /> + <KatexRenderer content="$\sqrt{\phantom{x}}$" inline />
                  </div>
                  <div className="dt-result-name">conjuguee</div>
                </div>
              </div>

              <div className="dt-fi-item">
                <div className="dt-fi-connector">
                  <div className="dt-line" />
                </div>
                <div className="dt-result dt-result-blue">
                  <div className="dt-result-formula" style={{ fontSize: '0.8rem' }}>
                    <KatexRenderer content="$0 \times \infty$" inline />
                  </div>
                  <div className="dt-result-name">reecrire en frac.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
