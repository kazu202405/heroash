import SectionHead from '../SectionHead'
import { jp } from '../../jp'

const steps = [
  { title: '無料相談', description: 'まずは電話またはメールでご相談ください。' },
  { title: '状況の確認', description: '不動産の場所、名義、相続状況、ご家族の状況などをお聞きします。' },
  { title: '調査', description: '必要に応じて、不動産や権利関係などを確認します。' },
  { title: 'ご提案', description: '売却、買取、保有、整理、専門家連携など、状況に合った方法をご提案します。' },
  { title: '解決までサポート', description: '必要な手続きや専門家との連携を行いながら、解決まで進めます。' },
]

export default function Flow() {
  return (
    <section id="flow" className="bg-[#faf9f7] py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionHead number="06" eyebrow="ご相談の流れ" title="解決までの流れ" />

        <ol className="max-w-3xl">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-6">
              {/* 番号 */}
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="w-11 h-11 rounded-full border border-red-700/40 text-red-700 flex items-center justify-center text-lg font-serif">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="w-px flex-1 min-h-10 bg-red-700/15 my-1" />
                )}
              </div>
              {/* 中身 */}
              <div className="pb-9 pt-1.5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{jp(step.title)}</h3>
                <p className="text-gray-700 leading-[1.9]">{jp(step.description)}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="text-gray-500 leading-[1.9] mt-2 max-w-3xl">
          {jp('※ ご相談は無料です。調査や手続きなどで費用が発生する場合は、事前にご説明します。')}
        </p>
      </div>
    </section>
  )
}
