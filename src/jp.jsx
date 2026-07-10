// 日本語の複合語が行末で分断されるのを防ぐヘルパー。
// 例:「不動産」が「不／動産」に割れたり、「住宅ローン」が途中で折り返すのを防ぐ。
// 指定した語だけ <span class="whitespace-nowrap"> で包み、それ以外は自然に折り返す。
// （長い語順に並べる。共有名義 を 名義 より先にマッチさせるため）
const KEEP = ['共有名義', '住宅ローン', '生前対策', '財産分与', '専門家', '手続き', '不動産', '債務者', '名義', '変更', '売却', '買取', '相続', '解決', '提案', '対応', '整理', '連携', '提携']
const RE = new RegExp(`(${KEEP.join('|')})`, 'g')

export function jp(text) {
  return text.split(RE).map((part, i) =>
    KEEP.includes(part)
      ? <span key={i} className="whitespace-nowrap">{part}</span>
      : part
  )
}
