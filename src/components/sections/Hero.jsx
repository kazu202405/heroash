export default function Hero() {
  return (
    <section className="relative bg-[#faf9f7] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* 左：テキスト一式（左寄せ） */}
          <div className="w-full lg:max-w-[600px] text-center lg:text-left">
            {/* ブランド行 */}
            <div className="flex items-center gap-4 mb-7 justify-center lg:justify-start">
              <span className="w-10 h-px bg-red-700/40" />
              <span className="text-sm tracking-[0.2em] text-gray-500">
                HERO assch ／ ヒーローアッシュ
              </span>
            </div>

            {/* 大見出し（改行位置を全幅で固定。最長行「ワンストップで解決できます！」が折り返さない字サイズに） */}
            <h1 className="font-semibold text-gray-900 leading-[1.55] tracking-normal md:tracking-wide mb-8 text-[1.25rem] md:text-3xl lg:text-[2.1rem]">
              相続時・離婚時に起こる
              <br />
              様々なお困りごとを、
              <br />
              <span className="text-red-700">ワンストップで解決できます！</span>
              <br />
              まずはご相談ください
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-[2] mb-4">
              「相続する実家」、「離婚後もそこに住み続けたい」、「共有名義」、「親族間での争い」、「相続の生前対策」など、提携している各士業と各専門家にて全国対応してます。
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-[2] mb-8">
              「どうしたらいいかわからない」という段階から、
              まずはお気軽にご相談いただけます。
            </p>

            {/* 連絡先ブロック */}
            <div className="inline-block w-full sm:w-auto text-left bg-white rounded-2xl border border-gray-200 shadow-sm px-7 py-6">
              <p className="text-sm text-gray-500 mb-3">
                <span className="inline-block bg-red-700 text-white text-xs px-3 py-1 rounded-full mr-2 align-middle">
                  相談無料
                </span>
                電話・メールでお気軽にどうぞ
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

          {/* 左：ブランドキービジュアル（ロゴと文言を左右入れ替え） */}
          <div className="flex-shrink-0 order-first w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
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
