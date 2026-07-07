const troubles = [
  '離婚を機に、自宅を売却したい',
  '共有名義の家を、どちらが持つか決まらない',
  '住宅ローンが残っている家をどうするか',
  '財産分与で、家の価値がわからない',
  '家やローンの名義を変更したい',
  '話がまとまらないまま、家が残っている',
]

export default function Divorce() {
  return (
    <section id="divorce" className="bg-[#faf9f7] py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <p className="text-sm tracking-[0.2em] text-red-700/70 text-center mb-4">
          離婚にともなう不動産
        </p>
        <h2 className="text-2xl md:text-[2rem] font-semibold text-gray-900 leading-[1.6] mb-4 text-center">
          離婚にともなう不動産の
          <br className="md:hidden" />
          お悩みもご相談ください。
        </h2>
        <div className="w-12 h-0.5 bg-red-700/60 mx-auto mb-12" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {troubles.map((text, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-white rounded-xl px-6 py-5 border border-gray-100"
            >
              <span className="mt-2 w-2.5 h-2.5 rounded-full bg-red-700 flex-shrink-0" />
              <span className="text-lg text-gray-800 leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>

        <p className="text-center text-gray-600 text-lg mt-12 leading-[2]">
          離婚にともなう不動産は、時間が経つほど複雑になりがちです。
          <br className="hidden md:block" />
          まずは一度お聞かせください。
        </p>
      </div>
    </section>
  )
}
