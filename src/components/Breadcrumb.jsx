import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://maths-facile.com'

export default function Breadcrumb({ level, levelTitle, chapterTitle }) {
  const items = [
    { name: 'Accueil', url: `${BASE_URL}/` },
  ]
  if (level && levelTitle) {
    items.push({ name: levelTitle, url: `${BASE_URL}/${level}` })
  }
  if (chapterTitle) {
    items.push({ name: chapterTitle })
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav aria-label="Fil d'Ariane" className="breadcrumb">
        <ol className="breadcrumb-list">
          {items.map((item, i) => (
            <li key={i} className="breadcrumb-item">
              {i > 0 && <span className="breadcrumb-sep" aria-hidden="true">/</span>}
              {item.url ? (
                <Link to={item.url.replace(BASE_URL, '')}>{item.name}</Link>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
