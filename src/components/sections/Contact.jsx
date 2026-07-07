export default function Contact() {
  return (
    <section id="contact" className="bg-[#8b1520] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-2xl md:text-[2rem] font-semibold text-white leading-[1.6] mb-8">
          まずは話を聞くだけでも
          <br className="md:hidden" />
          大丈夫です。
        </h2>

        <p className="text-lg text-white/90 leading-[2.1] mb-4">
          「まだ何も決まっていない」「売るかどうかもわからない」
          <br className="hidden md:block" />
          「親族と話がまとまっていない」——
        </p>
        <p className="text-lg text-white/90 leading-[2.1] mb-12">
          そのような段階でも大丈夫です。
          <br className="md:hidden" />
          まずはお気軽にご相談ください。
        </p>

        {/* 連絡先カード */}
        <div className="bg-white rounded-2xl px-7 py-8 md:px-10 md:py-10 max-w-md mx-auto">
          <span className="inline-block bg-red-700 text-white text-sm px-4 py-1 rounded-full mb-5">
            相談無料
          </span>
          <p className="text-gray-500 mb-2">お電話でのご相談</p>
          <a
            href="tel:09014293396"
            className="block text-3xl md:text-4xl font-semibold text-gray-900 tracking-wide hover:text-red-700 transition-colors"
          >
            090-1429-3396
          </a>
          <div className="w-full h-px bg-gray-100 my-6" />
          <p className="text-gray-500 mb-2">メールでのご相談</p>
          <a
            href="mailto:hero@heroassch.com"
            className="block text-lg md:text-xl text-gray-900 hover:text-red-700 transition-colors break-all"
          >
            hero@heroassch.com
          </a>
        </div>
      </div>
    </section>
  )
}
