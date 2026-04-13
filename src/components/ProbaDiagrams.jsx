export function HypothesisTestFlowchart() {
  return (
    <div className="decision-tree">
      <div className="dt-title">Test d'hypothese</div>
      <div className="dt-graph">
        <div className="dt-level dt-level-0">
          <div className="dt-question dt-root"><span>H₀ : p = p₀</span></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="dt-connector"><div className="dt-line" /></div>
          <div className="dt-question"><span>Calculer I_n sous p₀</span></div>
          <div className="dt-connector"><div className="dt-line" /></div>
          <div className="dt-question"><span>Observer f_n</span></div>
          <div className="dt-connector"><div className="dt-line" /></div>
          <div className="dt-question"><span>f_n ∈ I_n ?</span></div>
        </div>
        <div className="dt-branches dt-branches-root">
          <div className="dt-branch dt-branch-left">
            <div className="dt-connector"><div className="dt-line" /><div className="dt-label-yes">Oui</div><div className="dt-line" /></div>
            <div className="dt-result dt-result-green">
              <div className="dt-result-formula" style={{ fontSize: '0.82rem' }}>Ne pas rejeter H₀</div>
            </div>
          </div>
          <div className="dt-branch dt-branch-right">
            <div className="dt-connector"><div className="dt-line" /><div className="dt-label-no">Non</div><div className="dt-line" /></div>
            <div className="dt-result dt-result-orange">
              <div className="dt-result-formula" style={{ fontSize: '0.82rem' }}>Rejeter H₀</div>
              <div className="dt-result-name">au seuil choisi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProbaDecisionFlowchart() {
  return (
    <div className="decision-tree">
      <div className="dt-title">Que cherche-t-on ?</div>
      <div className="dt-graph">
        <div className="dt-branches-fi">
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.76rem', padding: '0.3rem 0.45rem' }}><span>E ou V somme</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-blue"><div className="dt-result-name" style={{ fontSize: '0.68rem' }}>E : linearite / V : additivite</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.76rem', padding: '0.3rem 0.45rem' }}><span>E, V moyenne</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-green"><div className="dt-result-name" style={{ fontSize: '0.68rem' }}>E=μ, V=σ²/n</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.76rem', padding: '0.3rem 0.45rem' }}><span>Majorer P</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-violet"><div className="dt-result-name" style={{ fontSize: '0.68rem' }}>Tchebychev</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.76rem', padding: '0.3rem 0.45rem' }}><span>Taille n</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-orange"><div className="dt-result-name" style={{ fontSize: '0.68rem' }}>n ≥ σ²/(αδ²)</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.76rem', padding: '0.3rem 0.45rem' }}><span>Fluctuation</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-blue"><div className="dt-result-name" style={{ fontSize: '0.68rem' }}>I_n formule</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.76rem', padding: '0.3rem 0.45rem' }}><span>Test H₀</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-orange"><div className="dt-result-name" style={{ fontSize: '0.68rem' }}>f_n vs I_n</div></div>
          </div>
          <div className="dt-fi-item">
            <div className="dt-question" style={{ fontSize: '0.76rem', padding: '0.3rem 0.45rem' }}><span>Convergence</span></div>
            <div className="dt-fi-connector"><div className="dt-line" /></div>
            <div className="dt-result dt-result-green"><div className="dt-result-name" style={{ fontSize: '0.68rem' }}>LGN</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
