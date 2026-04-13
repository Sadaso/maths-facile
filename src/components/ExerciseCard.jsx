import { useState, useRef, useEffect } from 'react'
import KatexRenderer from './KatexRenderer'
import ExerciseFigure from './ExerciseFigure'

const difficultyConfig = {
  easy: { label: 'Facile', color: '#059669' },
  medium: { label: 'Intermédiaire', color: '#D97706' },
  hard: { label: 'Difficile', color: '#EF4444' },
  advanced: { label: 'Avancé', color: '#7C3AED' },
}

function SingleCorrection({ correction }) {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight)
  }, [show, correction])

  if (!correction) return null

  return (
    <div className="exercise-card-footer">
      <button
        className={`correction-btn ${show ? 'open' : ''}`}
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
        <span>{show ? 'Masquer la correction' : 'Afficher la correction'}</span>
        <svg className={`correction-chevron ${show ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`correction-panel ${show ? 'open' : ''}`}
        style={{ maxHeight: show ? height + 48 + 'px' : '0px' }}
      >
        <div className="correction-panel-inner" ref={ref}>
          <div className="correction-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Correction détaillée</span>
          </div>
          <div className="correction-body">
            <KatexRenderer content={correction} />
          </div>
        </div>
      </div>
    </div>
  )
}

function PartieCorrection({ partie }) {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight)
  }, [show, partie])

  return (
    <div className="problem-partie">
      <div className="problem-partie-question">
        <span className="problem-partie-numero">{partie.numero}.</span>
        <KatexRenderer content={partie.question} />
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
        <span>{show ? 'Masquer' : `Correction question ${partie.numero}`}</span>
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
            <KatexRenderer content={partie.correction} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ExerciseCard({ exercise, index, isProblem = false }) {
  const config = difficultyConfig[exercise.difficulty] || difficultyConfig.easy
  const hasParties = exercise.parties && exercise.parties.length > 0

  return (
    <div className={`exercise-card-v2 ${exercise.difficulty}`}>
      <div className="exercise-card-accent" />

      <div className="exercise-card-header">
        <div className="exercise-card-title">
          <span className="exercise-card-number">
            {isProblem ? `Problème ${exercise.number}` : `Exercice ${exercise.number}`}
          </span>
        </div>
        <span className={`difficulty-pill ${exercise.difficulty}`}>
          {config.label}
        </span>
      </div>

      <div className="exercise-card-body">
        {exercise.statement && (
          <div className={`exercise-statement ${hasParties ? 'problem-enonce' : ''}`}>
            <KatexRenderer content={exercise.statement} />
            {exercise.figure && <ExerciseFigure figure={exercise.figure} />}
          </div>
        )}

        {hasParties && (
          <div className="problem-parties">
            {exercise.parties.map((partie) => (
              <PartieCorrection key={partie.numero} partie={partie} />
            ))}
          </div>
        )}
      </div>

      {!hasParties && <SingleCorrection correction={exercise.correction} />}
    </div>
  )
}
