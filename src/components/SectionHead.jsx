// セクション共通の見出し（左揃え・エディトリアル）
// number: 章番号（01 など） / eyebrow: 小ラベル / title: 見出し（ノード可）
export default function SectionHead({ number, eyebrow, title, lead }) {
  return (
    <div className="mb-10 md:mb-14 max-w-3xl">
      <div className="flex items-center gap-3 mb-4">
        {number && (
          <span className="font-serif text-sm text-red-700/70 tracking-wider">{number}</span>
        )}
        <span className="w-8 h-px bg-red-700/40" />
        {eyebrow && (
          <span className="text-sm tracking-[0.16em] text-gray-500">{eyebrow}</span>
        )}
      </div>
      <h2 className="text-[1.55rem] md:text-[2rem] font-semibold text-gray-900 leading-[1.5]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-lg text-gray-600 leading-[2]">{lead}</p>
      )}
    </div>
  )
}
