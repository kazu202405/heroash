const partners = [
  { name: '司法書士', role: '相続登記・名義変更' },
  { name: '税理士', role: '相続税・税金の相談' },
  { name: '弁護士', role: '法律・トラブルの相談' },
  { name: '行政書士', role: '各種行政手続き' },
  { name: '介護・施設紹介', role: '施設入居のサポート' },
]

export default function Professionals() {
  return (
    <section id="professionals" className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <p className="text-sm tracking-[0.2em] text-red-700/70 text-center mb-4">
          士業・専門家との連携
        </p>
        <h2 className="text-2xl md:text-[2rem] font-semibold text-gray-900 leading-[1.6] mb-4 text-center">
          不動産だけでは
          <br className="md:hidden" />
          解決できないことも。
        </h2>
        <div className="w-12 h-0.5 bg-red-700/60 mx-auto mb-12" />

        <p className="text-lg text-gray-700 leading-[2.1] mb-10 text-center max-w-2xl mx-auto">
          相続登記、税金、法律、行政手続き、施設入居など、
          必要に応じて各分野の専門家と連携して対応します。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#faf9f7] rounded-xl px-6 py-5 border border-gray-100"
            >
              <span className="text-lg font-medium text-gray-900 whitespace-nowrap">{p.name}</span>
              <span className="w-px h-6 bg-gray-200" />
              <span className="text-gray-600">{p.role}</span>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-700 leading-[2] text-center">
          不動産のことだけでなく、
          <br className="md:hidden" />
          相続に関わるお悩みをまとめてご相談いただけます。
        </p>
      </div>
    </section>
  )
}
