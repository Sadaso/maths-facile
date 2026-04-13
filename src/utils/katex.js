import katex from 'katex';

const KATEX_OPTS = {
  throwOnError: false,
  output: 'html',
  strict: false,
  macros: {
    '\\vec': '\\overrightarrow',
  },
};

export function tex(latex, displayMode = false) {
  return katex.renderToString(latex, { ...KATEX_OPTS, displayMode });
}

/**
 * Render all $...$ and $$...$$ blocks in a text string to KaTeX HTML.
 * Also handles **bold**, *italic*, `code`, bullet lists, and newlines.
 */
export function renderMath(content) {
  if (!content) return '';

  // Display math $$...$$
  let result = content.replace(/\$\$([\s\S]*?)\$\$/g, (_, latex) => {
    try {
      return katex.renderToString(latex.trim(), { ...KATEX_OPTS, displayMode: true });
    } catch {
      return latex;
    }
  });

  // Inline math $...$
  result = result.replace(/\$([^\$]+?)\$/g, (_, latex) => {
    try {
      return katex.renderToString(latex.trim(), { ...KATEX_OPTS, displayMode: false });
    } catch {
      return latex;
    }
  });

  // Markdown bold
  result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Markdown italic (not inside tags)
  result = result.replace(/(?<![<\w])\*([^*]+?)\*(?![>])/g, '<em>$1</em>');

  // Inline code
  result = result.replace(/`([^`]+?)`/g, '<code class="inline-code">$1</code>');

  // Bullet lists
  result = result.replace(/^[•\-]\s+/gm, '&#8226; ');

  // Newlines to <br/> — SAFE because KaTeX SVG is already rendered
  result = result.replace(/\n/g, '<br/>');

  // Checkmark
  result = result.replace(/✓/g, '<span class="checkmark">✓</span>');

  return result;
}
