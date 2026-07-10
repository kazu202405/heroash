import SectionHead from '../SectionHead'
import { jp } from '../../jp'

const questions = [
  '売るべきか、持ち続けるべきか',
  '名義はどうすればいいのか',
  '親族と話がまとまらない',
  '遠方で管理できない',
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionHead
          number="03"
          eyebrow="私たちができること"
          title={<>不動産の「どうする？」を、<br className="md:hidden" />一緒に解決します！</>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <p className="text-lg text-gray-700 leading-[2.1]">
            {jp('不動産の売却や買取だけを目的にするのではなく、相続時や離婚時の不動産問題を整理し、全国対応にて解決方法をご提案します。')}
          </p>

          <div className="border-l-2 border-red-700/25 pl-6 md:pl-8">
            <p className="text-gray-500 mb-5">こんなお悩みを、まずはお聞かせください。</p>
            <ul className="space-y-4">
              {questions.map((q, i) => (
                <li key={i} className="text-lg text-gray-800 leading-8">
                  <span className="text-red-700">「</span>{jp(q)}<span className="text-red-700">」</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
