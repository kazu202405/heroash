const questions = [
  '売るべきか、持ち続けるべきか',
  '名義はどうすればいいのか',
  '親族と話がまとまらない',
  '遠方で管理できない',
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <p className="text-sm tracking-[0.2em] text-red-700/70 text-center mb-4">
          私たちができること
        </p>
        <h2 className="text-2xl md:text-[2rem] font-semibold text-gray-900 leading-[1.6] mb-4 text-center">
          不動産の「どうしよう」を、
          <br className="md:hidden" />
          一緒に整理します。
        </h2>
        <div className="w-12 h-0.5 bg-red-700/60 mx-auto mb-12" />

        <p className="text-lg text-gray-700 leading-[2.1] mb-10 text-center max-w-2xl mx-auto">
          不動産の売却や買取だけを目的にするのではなく、
          相続や不動産に関するお困りごとを整理し、
          解決方法をご提案します。
        </p>

        <div className="bg-[#faf9f7] rounded-2xl border border-gray-200 px-7 py-8 md:px-10 md:py-10">
          <p className="text-gray-600 mb-6 text-center">こんなお悩みを、まずはお聞かせください。</p>
          <ul className="space-y-4 max-w-xl mx-auto">
            {questions.map((q, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-red-700 text-xl leading-8 flex-shrink-0">「</span>
                <span className="text-lg text-gray-800 leading-8">{q}</span>
                <span className="text-red-700 text-xl leading-8 flex-shrink-0">」</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
