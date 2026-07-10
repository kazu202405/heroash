import SectionHead from '../SectionHead'
import { jp } from '../../jp'

const letters = [
  { char: 'A', word: 'Assist', mean: '支える' },
  { char: 'S', word: 'Save', mean: '守る' },
  { char: 'S', word: 'Support', mean: '支援する' },
  { char: 'C', word: 'Cheer', mean: '応援する' },
  { char: 'H', word: 'Help', mean: '助ける' },
]

export default function About() {
  return (
    <section id="about" className="bg-[#faf9f7] py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionHead
          eyebrow="想い"
          title={<>「ヒーローアッシュ」<br className="md:hidden" />という名前に込めた想い</>}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* 左：説明＋代表 */}
          <div>
            <p className="text-lg text-gray-700 leading-[2.1] mb-6">
              {jp('社名の由来ですが「HERO」は、困っている人を助ける“ヒーロー”と、代表の名前の一部「ヒロ」から。「assch」は、5つの言葉の頭文字を取った造語です。')}
            </p>
            <p className="text-lg text-gray-700 leading-[2.1] mb-10">
              {jp('さまざまな問題で困っている人を助けるHEROでありたい。そんな想いを込めています。')}
            </p>

            {/* 代表（控えめに） */}
            <div className="flex items-center gap-5 pt-8 border-t border-gray-200">
              <img
                src="/uchiyama.png"
                alt="代表取締役 内山貴博"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-top bg-white border border-gray-200"
              />
              <div>
                <p className="text-sm text-gray-500 mb-1">代表取締役</p>
                <p className="text-lg font-medium text-gray-900">内山 貴博</p>
                <p className="text-sm text-gray-500 mt-1">宅地建物取引士・相続診断士</p>
              </div>
            </div>
          </div>

          {/* 右：頭文字の意味 */}
          <dl className="border-t border-gray-300/70">
            {letters.map((l, i) => (
              <div key={i} className="flex items-baseline gap-5 py-4 border-b border-gray-300/70">
                <dt className="w-8 text-2xl font-serif font-semibold text-red-700 flex-shrink-0">{l.char}</dt>
                <dd className="flex items-baseline gap-4">
                  <span className="text-lg font-medium text-gray-900 w-24">{l.word}</span>
                  <span className="text-gray-600">{l.mean}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
