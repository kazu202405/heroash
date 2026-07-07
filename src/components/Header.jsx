import { useState } from 'react'

const navLinks = [
  { href: '#troubles', label: 'お困りごと' },
  { href: '#what-we-do', label: 'できること' },
  { href: '#flow', label: 'ご相談の流れ' },
  { href: '#company', label: '会社概要' },
]

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-red-600" />
      <div className="flex flex-col leading-tight">
        <span className="text-base tracking-wide text-gray-900 font-bold">HERO assch</span>
        <span className="text-[10px] text-gray-500 tracking-wider">ヒーローアッシュ</span>
      </div>
    </a>
  )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* PC: ナビ + 電話 */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[15px] text-gray-700 hover:text-red-700 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="tel:09014293396"
              className="bg-red-700 text-white text-[15px] font-medium px-5 py-2.5 rounded-full hover:bg-red-800 transition-colors"
            >
              📞 090-1429-3396
            </a>
          </div>

          {/* モバイル: 電話 + メニュー */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:09014293396"
              className="bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              📞 お電話
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              aria-label="メニュー"
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        <div className={`md:hidden overflow-hidden transition-all duration-200 ${isMobileMenuOpen ? 'max-h-72 pb-5' : 'max-h-0'}`}>
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base text-gray-700 hover:text-red-700 transition-colors py-3 border-b border-gray-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
