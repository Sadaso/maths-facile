import { useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Renders text containing LaTeX math delimiters and basic markdown
// $...$ for inline math, $$...$$ for display math
// **text** for bold, *text* for italic, `code` for inline code

const KATEX_OPTS = {
  throwOnError: false,
  macros: {
    '\\vec': '\\overrightarrow',
  },
}

export default function KatexRenderer({ content, inline = false }) {
  const html = useMemo(() => {
    if (!content) return ''

    // STEP 1: Convert newlines to a placeholder BEFORE KaTeX rendering
    // (so that <br/> doesn't end up inside KaTeX SVG paths)
    let result = content.replace(/\n/g, '\x00BR\x00')

    // STEP 2: Render display math $$...$$
    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => {
      try {
        return katex.renderToString(tex.replace(/\x00BR\x00/g, '\n').trim(), { ...KATEX_OPTS, displayMode: true })
      } catch (e) {
        return tex
      }
    })

    // STEP 3: Render inline math $...$
    result = result.replace(/\$([^\$]+?)\$/g, (_, tex) => {
      try {
        return katex.renderToString(tex.replace(/\x00BR\x00/g, '\n').trim(), { ...KATEX_OPTS, displayMode: false })
      } catch (e) {
        return tex
      }
    })

    // STEP 4: Now convert placeholders to <br/> (KaTeX HTML is already generated)
    result = result.replace(/\x00BR\x00/g, '<br/>')

    // Handle markdown bold **text**
    result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

    // Handle markdown italic *text* (but not inside already processed tags)
    result = result.replace(/(?<![<\w])\*([^*]+?)\*(?![>])/g, '<em>$1</em>')

    // Handle inline code `code`
    result = result.replace(/`([^`]+?)`/g, '<code class="inline-code">$1</code>')

    // Handle markdown bullet lists (lines starting with • or -)
    result = result.replace(/^[•\-]\s+/gm, '&#8226; ')

    // Handle checkmark symbol
    result = result.replace(/✓/g, '<span class="checkmark">✓</span>')

    return result
  }, [content])

  if (inline) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
