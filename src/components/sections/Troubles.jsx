import SectionHead from '../SectionHead'
import { jp } from '../../jp'

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
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionHead
          number="01"
          eyebrow="相続にともなう不動産"
          title={<>このような不動産で<br className="md:hidden" />お困りではありませんか？</>}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-gray-200">
          {troubles.map((text, i) => (
            <li key={i} className="flex items-start gap-4 py-5 border-b border-gray-200">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-red-700 flex-shrink-0" />
              <span className="text-lg text-gray-800 leading-relaxed">{jp(text)}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 text-lg mt-10 leading-[2]">
          ひとつでも当てはまれば、まずは一度お聞かせください。
        </p>
      </div>
    </section>
  )
}
