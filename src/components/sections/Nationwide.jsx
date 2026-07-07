import SectionHead from '../SectionHead'

const supports = [
  { title: '電話相談', text: 'お電話でお気軽にご相談いただけます。' },
  { title: 'オンライン相談', text: 'ご自宅にいながら画面越しにご相談できます。' },
  { title: '現地調査', text: '必要に応じて、現地の確認にお伺いします。' },
]

export default function Nationwide() {
  return (
    <section id="nationwide" className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionHead
          number="05"
          eyebrow="全国対応しています"
          title={<>遠くの不動産でも、<br className="md:hidden" />ご相談いただけます。</>}
          lead="お住まいの地域と、不動産がある場所が離れていてもご相談可能です。遠方にある実家や空き家について、何度も現地へ足を運べない方をサポートします。"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {supports.map((s, i) => (
            <div key={i} className="border-t-2 border-red-700/40 pt-5">
              <p className="text-xl font-medium text-gray-900 mb-3">{s.title}</p>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
