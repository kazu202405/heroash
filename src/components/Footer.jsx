export default function Footer() {
  return (
    <footer className="bg-[#faf9f7] border-t border-gray-200 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-full bg-red-600" />
              <span className="text-base tracking-wide text-gray-900 font-bold">HERO assch</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              HERO assch 株式会社（ヒーローアッシュ）
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              お電話：
              <a href="tel:09014293396" className="text-gray-900 hover:text-red-700">090-1429-3396</a>
              <span className="mx-2 text-gray-300">/</span>
              <a href="mailto:hero@heroassch.com" className="text-gray-900 hover:text-red-700">hero@heroassch.com</a>
            </p>
          </div>

          <div className="text-xs text-gray-400">
            <p>&copy; 2025 HERO assch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
