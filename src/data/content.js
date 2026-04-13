// Donnees du contenu mathematique des chapitres
// Chaque chapitre contient : cours, fiche, exercices, problemes

import { secondeChapters } from './seconde'
import { premiereChapters } from './premiere'
import { terminaleChapters } from './terminale'

const chaptersContent = {
  ...secondeChapters,
  ...premiereChapters,
  ...terminaleChapters,
}

export function getChapterContent(level, chapterId) {
  const key = `${level}_${chapterId}`
  return chaptersContent[key] || null
}
