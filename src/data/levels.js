// Donnees des niveaux et chapitres

export const levelsData = {
  seconde: {
    title: 'Seconde',
    subtitle: 'Construisez des bases solides en mathématiques',
    description: 'Programme complet de Seconde — 11 chapitres couvrant les nombres, les fonctions, la géométrie, les statistiques et l\'algorithmique.',
    seoIntro: 'Cours de mathématiques de Seconde générale avec exercices corrigés et fiches de révision : fonctions, équations, inéquations, géométrie, statistiques et probabilités.',
    chapters: [],
  },
  premiere: {
    title: 'Première Spé',
    subtitle: 'Approfondissez l\'analyse et découvrez de nouveaux outils',
    description: 'Programme de Première Spécialité — 8 chapitres au cœur du programme de mathématiques.',
    seoIntro: 'Tous les cours de mathématiques de Première générale (spécialité). Exercices corrigés et fiches de révision pour chaque chapitre : second degré, dérivation, suites, probabilités, fonction exponentielle et produit scalaire.',
    chapters: [],
  },
  terminale: {
    title: 'Terminale Spé',
    subtitle: 'Maîtrisez l\'intégralité du programme pour le bac',
    description: 'Programme de Terminale Spécialité — 17 chapitres pour une préparation complète au baccalauréat.',
    seoIntro: 'Retrouvez tous les chapitres du programme de spécialité mathématiques en Terminale générale. Cours complets avec démonstrations, fiches de révision et exercices corrigés classés par difficulté pour chaque notion : combinatoire, suites, limites, continuité, dérivation, convexité, logarithme, exponentielle, trigonométrie, intégration, probabilités et géométrie dans l\'espace.',
    chapters: [
      { id: 1, slug: 'combinatoire-denombrement', title: 'Combinatoire et dénombrement', subtitle: 'Arrangements, combinaisons, coefficients binomiaux', icon: 'proba' },
      { id: 2, slug: 'suites-numeriques', title: 'Suites numériques', subtitle: 'Compléments, convergence, raisonnement par récurrence', icon: 'suites' },
      { id: 3, slug: 'limites-de-fonctions', title: 'Limites de fonctions', subtitle: 'Limites, asymptotes, croissances comparées', icon: 'limites' },
      { id: 4, slug: 'continuite-des-fonctions', title: 'Continuité des fonctions', subtitle: 'Théorème des valeurs intermédiaires, dichotomie', icon: 'continuite' },
      { id: 5, slug: 'complements-derivation', title: 'Compléments sur la dérivation', subtitle: 'Dérivée seconde, extremums, tangentes', icon: 'derivation' },
      { id: 6, slug: 'convexite', title: 'Convexité', subtitle: 'Fonctions convexes et concaves, points d\'inflexion', icon: 'derivation' },
      { id: 7, slug: 'fonction-exponentielle', title: 'Fonction exponentielle', subtitle: 'Compléments, équations, croissance comparée', icon: 'exponentielle' },
      { id: 8, slug: 'fonction-logarithme-neperien', title: 'Fonction logarithme népérien', subtitle: 'Propriétés algébriques, dérivée, limites', icon: 'logarithme' },
      { id: 9, slug: 'fonctions-trigonometriques', title: 'Fonctions trigonométriques', subtitle: 'Dérivées de sin et cos, études de fonctions', icon: 'trigo' },
      { id: 10, slug: 'composee-de-fonctions', title: 'Composée de fonctions', subtitle: 'Composition, dérivation de fonctions composées', icon: 'function' },
      { id: 11, slug: 'calcul-integral', title: 'Calcul intégral', subtitle: 'Intégrales, aires, valeur moyenne, IPP', icon: 'integrale' },
      { id: 12, slug: 'primitives-equations-differentielles', title: 'Primitives et équations différentielles', subtitle: 'Primitives usuelles, y\' = ay + b', icon: 'integrale' },
      { id: 13, slug: 'vecteurs-droites-plans-espace', title: 'Vecteurs, droites et plans de l\'espace', subtitle: 'Représentations paramétriques, positions relatives', icon: 'espace' },
      { id: 14, slug: 'produit-scalaire-espace', title: 'Produit scalaire dans l\'espace', subtitle: 'Définition, propriétés, applications', icon: 'espace' },
      { id: 15, slug: 'orthogonalite-distances-espace', title: 'Orthogonalité et distances dans l\'espace', subtitle: 'Vecteur normal, projeté orthogonal, distance point-plan', icon: 'espace' },
      { id: 16, slug: 'epreuves-independantes-loi-binomiale', title: 'Succession d\'épreuves indépendantes', subtitle: 'Schéma de Bernoulli, loi binomiale', icon: 'proba' },
      { id: 17, slug: 'concentration-loi-grands-nombres', title: 'Sommes de variables aléatoires', subtitle: 'Concentration, loi des grands nombres', icon: 'proba' },
    ],
  },
}

// Helper: find chapter by slug
export function findChapterBySlug(level, slug) {
  const data = levelsData[level]
  if (!data) return null
  return data.chapters.find(ch => ch.slug === slug) || null
}

// Helper: get all routes for sitemap / prerendering
export function getAllRoutes() {
  const routes = ['/', '/contact']
  for (const [level, data] of Object.entries(levelsData)) {
    routes.push(`/${level}`)
    for (const ch of data.chapters) {
      routes.push(`/${level}/${ch.slug}`)
    }
  }
  return routes
}
