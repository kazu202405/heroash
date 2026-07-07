const supports = [
  { title: '電話相談', text: 'お電話でお気軽にご相談いただけます。' },
  { title: 'オンライン相談', text: 'ご自宅にいながら画面越しにご相談できます。' },
  { title: '現地調査', text: '必要に応じて、現地の確認にお伺いします。' },
]

export default function Nationwide() {
  return (
    <section id="nationwide" className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <p className="text-sm tracking-[0.2em] text-red-700/70 text-center mb-4">
          全国対応しています
        </p>
        <h2 className="text-2xl md:text-[2rem] font-semibold text-gray-900 leading-[1.6] mb-4 text-center">
          遠くの不動産でも、
          <br className="md:hidden" />
          ご相談いただけます。
        </h2>
        <div className="w-12 h-0.5 bg-red-700/60 mx-auto mb-12" />

        <p className="text-lg text-gray-700 leading-[2.1] mb-12 text-center max-w-2xl mx-auto">
          お住まいの地域と、不動産がある場所が離れていてもご相談可能です。
          遠方にある実家や空き家について、
          何度も現地へ足を運べない方をサポートします。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {supports.map((s, i) => (
            <div
              key={i}
              className="bg-[#faf9f7] rounded-2xl border border-gray-200 px-6 py-7 text-center"
            >
              <p className="text-xl font-medium text-gray-900 mb-3">{s.title}</p>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
