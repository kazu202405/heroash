import SectionHead from '../SectionHead'
import { jp } from '../../jp'

const partners = [
  { name: '司法書士', role: '相続登記・名義変更' },
  { name: '税理士', role: '相続税・税金の相談' },
  { name: '弁護士', role: '法律・トラブルの相談' },
  { name: '行政書士', role: '各種行政手続き' },
  { name: '介護・施設紹介', role: '施設入居のサポート' },
]

export default function Professionals() {
  return (
    <section id="professionals" className="bg-[#faf9f7] py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionHead
          number="04"
          eyebrow="士業・専門家との連携"
          title={<>不動産だけでは<br className="md:hidden" />解決できないことも。</>}
          lead={<>不動産以外の問題も<span className="whitespace-nowrap"><span className="text-red-700">ワンストップにて解決</span>します。</span></>}
        />

        <p className="text-lg text-gray-700 leading-[2] mb-10 -mt-4 max-w-3xl">
          {jp('不動産登記、税務、法務、行政手続き、施設入居など、必要に応じて全国の提携している「士業」・「専門家」と連携してワンストップにて解決します。')}
        </p>

        <dl className="border-t border-gray-300/70 max-w-3xl">
          {partners.map((p, i) => (
            <div key={i} className="flex items-baseline gap-6 py-5 border-b border-gray-300/70">
              <dt className="text-lg font-medium text-gray-900 w-40 flex-shrink-0">{p.name}</dt>
              <dd className="text-gray-600">{p.role}</dd>
            </div>
          ))}
        </dl>

        <p className="text-lg text-gray-700 leading-[2] mt-10">
          {jp('不動産のことだけでなく、相続と離婚に関わるお悩みをまとめてご相談いただけます。')}
        </p>
      </div>
    </section>
  )
}
