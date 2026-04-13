import { useState, useRef, useEffect } from 'react'
import KatexRenderer from './KatexRenderer'
import ExerciseFigure from './ExerciseFigure'

const difficultyConfig = {
  easy: { label: 'Facile', color: '#059669' },
  medium: { label: 'Intermédiaire', color: '#D97706' },
  hard: { label: 'Difficile', color: '#EF4444' },
  advanced: { label: 'Avancé', color: '#7C3AED' },
}

function QuestionCorrection({ q, globalNumero }) {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight)
    }
  }, [show, q])

  const num = q.numero || globalNumero

  return (
    <div className="problem-partie">
      <div className="problem-partie-question">
        <span className="problem-partie-numero">{num}.</span>
        <KatexRenderer content={q.question} />
      </div>

      <button
        className={`correction-btn partie-correction-btn ${show ? 'open' : ''}`}
        onClick={() => setShow(!show)}
      >
        <svg className="correction-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          {show
            ? <path d="M9 12l2 2 4-4" />
            : <path d="M12 11v4M10 13h4" />
          }
        </svg>
        <span>{show ? 'Masquer' : `Correction Q${num}`}</span>
        <svg className={`correction-chevron ${show ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`correction-panel ${show ? 'open' : ''}`}
        style={{ maxHeight: show ? height + 48 + 'px' : '0px' }}
      >
        <div className="correction-panel-inner" ref={ref}>
          <div className="correction-body">
            <KatexRenderer content={q.correction} />
          </div>
        </div>
      </div>
    </div>
  )
}

function isNestedFormat(parties) {
  return parties.length > 0 && parties[0].questions && Array.isArray(parties[0].questions)
}

export default function ProblemCard({ problem, index }) {
  const difficulty = problem.niveau || problem.difficulty || 'hard'
  const config = difficultyConfig[difficulty] || difficultyConfig.hard

  const parties = problem.parties || []
  const nested = isNestedFormat(parties)

  return (
    <div className={`exercise-card-v2 problem-card ${difficulty}`}>
      <div className="exercise-card-accent" />

      <div className="exercise-card-header">
        <div className="exercise-card-title">
          <span className="exercise-card-number">
            Problème {index + 1}
          </span>
          {problem.titre && (
            <span className="problem-titre"> — <KatexRenderer content={problem.titre} inline /></span>
          )}
        </div>
        <span className={`difficulty-pill ${difficulty}`}>
          {config.label}
        </span>
      </div>

      <div className="exercise-card-body">
        {problem.enonce && (
          <div className="exercise-statement problem-enonce">
            <KatexRenderer content={problem.enonce} />
            {problem.figure && <ExerciseFigure figure={problem.figure} />}
          </div>
        )}

        {nested ? (
          <div className="problem-parties">
            {parties.map((section, si) => (
              <div key={si} className="problem-section">
                {section.titre && (
                  <h4 className="problem-section-titre">
                    <KatexRenderer content={section.titre} inline />
                  </h4>
                )}
                {section.questions && section.questions.map((q, qi) => (
                  <QuestionCorrection key={qi} q={q} globalNumero={q.numero || qi + 1} />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="problem-parties">
            {parties.map((q, qi) => (
              <QuestionCorrection key={qi} q={q} globalNumero={q.numero || qi + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
