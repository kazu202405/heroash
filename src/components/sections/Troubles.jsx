const troubles = [
  '相続した空き家',
  '遠方にある実家',
  '共有名義の家',
  '売れるかわからない土地・建物',
  '兄弟・親族で話がまとまっていない不動産',
  '相続したものの、何から始めればいいかわからない不動産',
]

export default function Troubles() {
  return (
    <section id="troubles" className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <p className="text-sm tracking-[0.2em] text-red-700/70 text-center mb-4">
          相続にともなう不動産
        </p>
        <h2 className="text-2xl md:text-[2rem] font-semibold text-gray-900 leading-[1.6] mb-4 text-center">
          このような不動産で
          <br className="md:hidden" />
          お困りではありませんか？
        </h2>
        <div className="w-12 h-0.5 bg-red-700/60 mx-auto mb-12" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {troubles.map((text, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-[#faf9f7] rounded-xl px-6 py-5 border border-gray-100"
            >
              <span className="mt-2 w-2.5 h-2.5 rounded-full bg-red-700 flex-shrink-0" />
              <span className="text-lg text-gray-800 leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>

        <p className="text-center text-gray-600 text-lg mt-12 leading-[2]">
          ひとつでも当てはまれば、
          <br className="md:hidden" />
          まずは一度お聞かせください。
        </p>
      </div>
    </section>
  )
}
