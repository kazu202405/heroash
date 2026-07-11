import { loadDefaultJapaneseParser } from 'budoux'

// BudouX で日本語を「文節」単位に区切り、各文節を white-space:nowrap で包むヘルパー。
// これで単語の途中（例:「不動産」→「不／動産」、「争い」→「争／い」）で折り返さない。
// さらに「郵便番号・番地・番号」など数字＋ハイフンの連なり（例: 2-3-11、542-0076）は
// BudouX が1かたまりにして保護しないため、正規表現で先に切り出して個別に nowrap する。
// 空白（半角スペース）は改行可能点として nowrap の外に出す（住所などが横にはみ出すのを防ぐ）。
const parser = loadDefaultJapaneseParser()
const NUM = /(〒?\d[\d-]*\d号?)/ // 542-0076 / 2-3-11 / 65883号 など
const nw = { whiteSpace: 'nowrap' }

export function jp(text) {
  if (typeof text !== 'string') return text
  const nodes = []
  let key = 0
  const emit = (seg, isNumber) => {
    if (!seg) return
    if (isNumber) {
      nodes.push(<span key={key++} style={nw}>{seg}</span>)
      return
    }
    for (const phrase of parser.parse(seg)) {
      // 前後の空白は改行可能な素のテキストとして外に出し、中身だけ nowrap で保護
      const [, lead, core, trail] = phrase.match(/^(\s*)([\s\S]*?)(\s*)$/)
      if (lead) nodes.push(lead)
      if (core) nodes.push(<span key={key++} style={nw}>{core}</span>)
      if (trail) nodes.push(trail)
    }
  }
  text.split(NUM).forEach((seg, i) => emit(seg, i % 2 === 1))
  return nodes.length ? nodes : text
}
