import KatexRenderer from './KatexRenderer'

export default function DecisionTree() {
  return (
    <div className="decision-tree">
      <div className="dt-title">Arbre de decision — Quel outil de denombrement utiliser ?</div>

      <div className="dt-graph">
        {/* Level 0: Root question */}
        <div className="dt-level dt-level-0">
          <div className="dt-question dt-root">
            <span>L'ordre compte-t-il ?</span>
          </div>
        </div>

        {/* Branches from root */}
        <div className="dt-branches dt-branches-root">
          {/* LEFT: Non → Combinaison */}
          <div className="dt-branch dt-branch-left">
            <div className="dt-connector">
              <div className="dt-line" />
              <div className="dt-label-no">Non</div>
              <div className="dt-line" />
            </div>
            <div className="dt-result dt-result-blue">
              <div className="dt-result-formula">
                <KatexRenderer content="$\displaystyle\binom{n}{p}$" inline />
              </div>
              <div className="dt-result-name">Combinaison</div>
            </div>
          </div>

          {/* RIGHT: Oui → next question */}
          <div className="dt-branch dt-branch-right">
            <div className="dt-connector">
              <div className="dt-line" />
              <div className="dt-label-yes">Oui</div>
              <div className="dt-line" />
            </div>

            {/* Level 1: Repetitions? */}
            <div className="dt-question">
              <span>Repetitions possibles ?</span>
            </div>

            {/* Branches from repetitions */}
            <div className="dt-branches dt-branches-inner">
              {/* LEFT: Oui → n^p */}
              <div className="dt-branch dt-branch-left">
                <div className="dt-connector">
                  <div className="dt-line" />
                  <div className="dt-label-yes">Oui</div>
                  <div className="dt-line" />
                </div>
                <div className="dt-result dt-result-orange">
                  <div className="dt-result-formula">
                    <KatexRenderer content="$n^p$" inline />
                  </div>
                  <div className="dt-result-name">p-liste</div>
                </div>
              </div>

              {/* RIGHT: Non → next question */}
              <div className="dt-branch dt-branch-right">
                <div className="dt-connector">
                  <div className="dt-line" />
                  <div className="dt-label-no">Non</div>
                  <div className="dt-line" />
                </div>

                {/* Level 2: Tous les elements? */}
                <div className="dt-question">
                  <span>Tous les elements ?</span>
                </div>

                {/* Branches from all elements */}
                <div className="dt-branches dt-branches-inner">
                  {/* LEFT: Oui → n! */}
                  <div className="dt-branch dt-branch-left">
                    <div className="dt-connector">
                      <div className="dt-line" />
                      <div className="dt-label-yes">Oui</div>
                      <div className="dt-line" />
                    </div>
                    <div className="dt-result dt-result-green">
                      <div className="dt-result-formula">
                        <KatexRenderer content="$n!$" inline />
                      </div>
                      <div className="dt-result-name">Permutation</div>
                    </div>
                  </div>

                  {/* RIGHT: Non → n!/(n-p)! */}
                  <div className="dt-branch dt-branch-right">
                    <div className="dt-connector">
                      <div className="dt-line" />
                      <div className="dt-label-no">Non</div>
                      <div className="dt-line" />
                    </div>
                    <div className="dt-result dt-result-violet">
                      <div className="dt-result-formula">
                        <KatexRenderer content="$\dfrac{n!}{(n-p)!}$" inline />
                      </div>
                      <div className="dt-result-name">Arrangement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
