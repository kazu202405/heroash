export default function Hero() {
  return (
    <section className="relative bg-[#faf9f7] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* ブランド行 */}
        <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
          <span className="w-10 h-px bg-red-700/40" />
          <span className="text-sm tracking-[0.2em] text-gray-500">
            HERO assch ／ ヒーローアッシュ
          </span>
        </div>

        {/* 大見出し（全幅・ダイナミック） */}
        <h1 className="text-center lg:text-left font-semibold text-gray-900 leading-[1.5] tracking-wide mb-10 md:mb-14 text-[1.75rem] md:text-5xl lg:text-[3.5rem]">
          相続・不動産の
          <br className="md:hidden" />
          お困りごとを、
          <br />
          <span className="text-red-700">まずはご相談ください。</span>
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          {/* 左：本文 + 連絡先 */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg md:text-xl text-gray-700 leading-[2] mb-4">
              相続した実家、空き家、遠方の不動産、共有名義の家など、
              不動産に関するお悩みを全国対応でサポートします。
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-[2] mb-9">
              「どうしたらいいかわからない」という段階から、
              まずはお気軽にご相談いただけます。
            </p>

            {/* 連絡先ブロック */}
            <div className="inline-block w-full sm:w-auto text-left bg-white rounded-2xl border border-gray-200 shadow-sm px-7 py-6">
              <p className="text-sm text-gray-500 mb-3">
                <span className="inline-block bg-red-700 text-white text-xs px-3 py-1 rounded-full mr-2 align-middle">
                  相談無料
                </span>
                お電話・メールでお気軽にどうぞ
              </p>
              <a
                href="tel:09014293396"
                className="block text-3xl md:text-4xl font-semibold text-gray-900 tracking-wide hover:text-red-700 transition-colors"
              >
                090-1429-3396
              </a>
              <a
                href="mailto:hero@heroassch.com"
                className="block mt-2 text-lg text-gray-700 hover:text-red-700 transition-colors"
              >
                hero@heroassch.com
              </a>
            </div>
          </div>

          {/* 右：ブランドキービジュアル */}
          <div className="flex-shrink-0 order-first lg:order-last w-full max-w-[400px] lg:max-w-[480px]">
            <img
              src="/hero-keyvisual.png"
              alt="不動産のどうする？を解決する HERO"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
