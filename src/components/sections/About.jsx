const letters = [
  { char: 'A', word: 'Assist', mean: '支える' },
  { char: 'S', word: 'Save', mean: '守る' },
  { char: 'S', word: 'Support', mean: '支援する' },
  { char: 'C', word: 'Cheer', mean: '応援する' },
  { char: 'H', word: 'Help', mean: '助ける' },
]

export default function About() {
  return (
    <section id="about" className="bg-[#faf9f7] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <p className="text-sm tracking-[0.2em] text-red-700/70 text-center mb-4">
          About
        </p>
        <h2 className="text-2xl md:text-[2rem] font-semibold text-gray-900 leading-[1.6] mb-4 text-center">
          「ヒーローアッシュ」
          <br className="md:hidden" />
          という名前に込めた想い
        </h2>
        <div className="w-12 h-0.5 bg-red-700/60 mx-auto mb-12" />

        <p className="text-lg text-gray-700 leading-[2.1] text-center mb-10">
          「HERO」は、代表の名前「ヒロ」と、困っている人を助ける“ヒーロー”から。
          「assch」は、次の5つの言葉の頭文字を取った造語です。
        </p>

        {/* 頭文字の意味 */}
        <div className="bg-white rounded-2xl border border-gray-200 px-6 py-8 md:px-10 md:py-10 mb-10">
          <ul className="space-y-4">
            {letters.map((l, i) => (
              <li key={i} className="flex items-center gap-5">
                <span className="w-10 text-3xl font-bold text-red-700 flex-shrink-0 text-center">
                  {l.char}
                </span>
                <span className="text-xl font-medium text-gray-900 w-28 flex-shrink-0">
                  {l.word}
                </span>
                <span className="text-gray-600">{l.mean}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-lg text-gray-700 leading-[2.1] text-center mb-12">
          「ヒーローアッシュ」という名前で会社をつくり、
          <br className="hidden md:block" />
          不動産や相続で困っている方を、そばで支える存在でありたい。
          <br className="hidden md:block" />
          そんな想いを込めています。
        </p>

        {/* 代表（控えめに） */}
        <div className="flex items-center justify-center gap-5">
          <img
            src="/uchiyama.png"
            alt="代表取締役 内山貴博"
            className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover object-top bg-white border border-gray-200"
          />
          <div className="text-left">
            <p className="text-sm text-gray-500 mb-1">代表取締役</p>
            <p className="text-lg font-medium text-gray-900">内山 貴博</p>
            <p className="text-sm text-gray-500 mt-1">宅地建物取引士・相続診断士</p>
          </div>
        </div>
      </div>
    </section>
  )
}
