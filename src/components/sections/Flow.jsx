const steps = [
  {
    title: '無料相談',
    description: 'まずはお電話またはメールでご相談ください。',
  },
  {
    title: '状況の確認',
    description: '不動産の場所、名義、相続状況、ご家族の状況などをお聞きします。',
  },
  {
    title: '調査',
    description: '必要に応じて、不動産や権利関係などを確認します。',
  },
  {
    title: 'ご提案',
    description: '売却、買取、保有、整理、専門家連携など、状況に合った方法をご提案します。',
  },
  {
    title: '解決までサポート',
    description: '必要な手続きや専門家との連携を行いながら、解決まで進めます。',
  },
]

export default function Flow() {
  return (
    <section id="flow" className="bg-[#faf9f7] py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <p className="text-sm tracking-[0.2em] text-red-700/70 text-center mb-4">
          ご相談の流れ
        </p>
        <h2 className="text-2xl md:text-[2rem] font-semibold text-gray-900 leading-[1.6] mb-4 text-center">
          解決までの流れ
        </h2>
        <div className="w-12 h-0.5 bg-red-700/60 mx-auto mb-14" />

        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-5">
              {/* 番号 */}
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center text-lg font-semibold">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="w-px flex-1 min-h-8 bg-red-700/20 my-1" />
                )}
              </div>
              {/* 中身 */}
              <div className="pb-8 pt-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 leading-[1.9]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 bg-white border border-gray-200 rounded-xl px-6 py-5">
          <p className="text-gray-600 leading-[1.9]">
            ※ ご相談は無料です。調査や手続きなどで費用が発生する場合は、
            事前にご説明します。
          </p>
        </div>
      </div>
    </section>
  )
}
