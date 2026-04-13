import { useState } from 'react'
import ExerciseCard from './ExerciseCard'
import ProblemCard from './ProblemCard'

const filters = [
  { key: 'all', label: 'Tous', color: '#2E4A7A' },
  { key: 'easy', label: 'Facile', color: '#059669' },
  { key: 'medium', label: 'Intermédiaire', color: '#D97706' },
  { key: 'hard', label: 'Difficile', color: '#EF4444' },
  { key: 'advanced', label: 'Avancé', color: '#7C3AED' },
]

export default function ExerciseList({ exercises, isProblems = false }) {
  const [activeFilter, setActiveFilter] = useState('all')

  if (!exercises || exercises.length === 0) {
    return (
      <div className="placeholder">
        <h2>Contenu à venir</h2>
        <p>Les exercices de ce chapitre sont en cours de rédaction.</p>
      </div>
    )
  }

  const counts = {}
  exercises.forEach(ex => {
    counts[ex.difficulty] = (counts[ex.difficulty] || 0) + 1
  })

  const filtered = activeFilter === 'all'
    ? exercises
    : exercises.filter(ex => ex.difficulty === activeFilter)

  return (
    <div className="exercises-container">
      {!isProblems && (
        <>
          <div className="exercises-stats">
            <span className="exercises-total">{exercises.length} exercices disponibles</span>
          </div>
          <div className="exercises-header">
            {filters.map(f => {
              const count = f.key === 'all' ? exercises.length : (counts[f.key] || 0)
              if (f.key !== 'all' && count === 0) return null
              return (
                <button
                  key={f.key}
                  className={`filter-btn ${f.key} ${activeFilter === f.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f.key)}
                >
                  <span className="filter-color-dot" style={{ background: f.color }} />
                  <span className="filter-label">{f.label}</span>
                  <span className="filter-count" style={activeFilter === f.key ? { background: f.color, color: '#fff' } : {}}>{count}</span>
                </button>
              )
            })}
          </div>
        </>
      )}

      {isProblems && (
        <div className="exercises-stats problems-stats">
          <span className="exercises-total">{exercises.length} problèmes de synthèse</span>
        </div>
      )}

      <div className="exercises-grid">
        {isProblems
          ? exercises.map((prob, i) => (
              <ProblemCard
                key={prob.id || i}
                problem={prob}
                index={i}
              />
            ))
          : filtered.map((ex) => (
              <ExerciseCard
                key={`${ex.difficulty}-${ex.number}`}
                exercise={ex}
                isProblem={false}
              />
            ))
        }
      </div>

      {!isProblems && filtered.length === 0 && (
        <div className="exercises-empty">
          <p>Aucun exercice pour ce niveau de difficulté.</p>
        </div>
      )}
    </div>
  )
}
