import SectionHead from '../SectionHead'

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
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionHead
          number="02"
          eyebrow="離婚にともなう不動産"
          title={<>離婚にともなう不動産の<br className="md:hidden" />お悩みもご相談ください。</>}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-gray-300/70">
          {troubles.map((text, i) => (
            <li key={i} className="flex items-start gap-4 py-5 border-b border-gray-300/70">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-red-700 flex-shrink-0" />
              <span className="text-lg text-gray-800 leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 text-lg mt-10 leading-[2]">
          離婚にともなう不動産は、時間が経つほど複雑になりがちです。まずは一度お聞かせください。
        </p>
      </div>
    </section>
  )
}
