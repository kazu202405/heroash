import SectionHead from '../SectionHead'
import { jp } from '../../jp'

const companyInfo = [
  { label: '社名', value: 'HERO assch 株式会社（ヒーローアッシュ）' },
  { label: '代表', value: '内山 貴博（宅地建物取引士・相続診断士）' },
  { label: '本社', value: '〒542-0076 大阪府大阪市中央区難波 2-3-11 ナンバ八千代ビル6階' },
  { label: '電話', value: '090-1429-3396' },
  { label: 'メール', value: 'hero@heroassch.com' },
  {
    label: '免許番号',
    // 「宅地建物取引業者免許：」で改行し、「大阪府知事（1）第65883号」はひとかたまりで2行目に
    value: (
      <>
        宅地建物取引業者免許：
        <span className="whitespace-nowrap">大阪府知事（1）第65883号</span>
      </>
    ),
  },
  { label: '事業内容', value: '不動産の「どうする？」を解決します' },
]

export default function Company() {
  return (
    <section id="company" className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionHead title="会社概要" />

        <dl className="divide-y divide-gray-200 border-t border-gray-200 max-w-3xl">
          {companyInfo.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:gap-8 py-5">
              <dt className="text-gray-500 sm:w-36 flex-shrink-0 mb-1 sm:mb-0">
                {item.label}
              </dt>
              <dd className="text-gray-900 leading-[1.9]">{jp(item.value)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
