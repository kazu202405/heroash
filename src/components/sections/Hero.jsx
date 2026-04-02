import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { NoiseTexture } from '../MorphingBlob'
import { MagneticCTA } from '../MagneticButton'

// 無限スクロールテキスト
function EndlessText() {
  const text = "不動産のどうする？を解決する  ·  HERO assch  ·  相続 · 離婚 · 共有名義 · 住居 · 店舗  ·  "
  const repeated = text.repeat(10)

  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-6 border-t border-gray-200/50">
      <div
        className="whitespace-nowrap animate-endless"
        style={{ width: 'fit-content' }}
      >
        <span className="text-[10px] md:text-xs tracking-[0.3em] text-gray-400 uppercase">
          {repeated}
        </span>
      </div>
    </div>
  )
}

// 赤い球体 + 家のSVGイラスト（名刺のイメージを再現）
function RedSphereWithHouse({ isLoaded }) {
  return (
    <div
      className={`
        relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]
        transition-all duration-1500 ease-out
        ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
      `}
      style={{ transitionDelay: '400ms' }}
    >
      <svg viewBox="0 0 500 500" className="w-full h-full">
        <defs>
          <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#e63946" />
            <stop offset="50%" stopColor="#c41e2a" />
            <stop offset="100%" stopColor="#8b1520" />
          </radialGradient>
          <filter id="sphereShadow">
            <feDropShadow dx="0" dy="8" stdDeviation="15" floodColor="#000" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* 赤い球体 */}
        <circle
          cx="250"
          cy="270"
          r="200"
          fill="url(#sphereGrad)"
          filter="url(#sphereShadow)"
        />

        {/* 球体のハイライト */}
        <ellipse
          cx="200"
          cy="200"
          rx="80"
          ry="60"
          fill="white"
          opacity="0.08"
        />

        {/* 家のイラスト（球体の上に） */}
        <g transform="translate(200, 55) scale(0.9)">
          {/* 屋根 */}
          <path
            d="M50,80 L0,50 L-50,80"
            fill="none"
            stroke="#333"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* 屋根の面 */}
          <path
            d="M50,80 L0,50 L-50,80 L-40,80 L0,58 L40,80 Z"
            fill="#555"
            opacity="0.6"
          />
          {/* 家の壁 */}
          <rect x="-35" y="80" width="70" height="50" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
          {/* ドア */}
          <rect x="-8" y="100" width="16" height="30" fill="#ddd" stroke="#333" strokeWidth="1.5" />
          {/* 窓 */}
          <rect x="-28" y="90" width="14" height="12" fill="#b8d4e3" stroke="#333" strokeWidth="1" />
          <rect x="14" y="90" width="14" height="12" fill="#b8d4e3" stroke="#333" strokeWidth="1" />
          {/* 煙突 */}
          <rect x="20" y="55" width="10" height="20" fill="#777" stroke="#333" strokeWidth="1" />
          {/* 旗 */}
          <line x1="25" y1="55" x2="25" y2="38" stroke="#333" strokeWidth="1.5" />
          <path d="M25,38 L38,43 L25,48" fill="#c41e2a" />
        </g>
      </svg>
    </div>
  )
}

// 背景
function GenerativeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#fafafa]" />
      <NoiseTexture opacity={0.02} />

      {/* 装飾的な細い線 */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-100,600 Q400,400 800,500 T1600,400"
          stroke="#c41e2a"
          strokeWidth="1"
          fill="none"
          opacity="0.04"
        />
        <path
          d="M-100,650 Q500,450 900,550 T1600,450"
          stroke="#c41e2a"
          strokeWidth="1"
          fill="none"
          opacity="0.03"
        />
      </svg>
    </div>
  )
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)

    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.hero-char')
      gsap.fromTo(
        chars,
        {
          y: 120,
          opacity: 0,
          rotateX: -80,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.04,
          ease: 'power3.out',
          delay: 0.3,
        }
      )
    }
  }, [])

  // 行ごとに明示的に分割（変な位置で改行されないように）
  const lines = [
    { text: "不動産の", color: "text-gray-900" },
    { text: "どうする", color: "text-gray-900", suffix: "？", suffixColor: "text-red-600" },
    { text: "を解決する", color: "text-gray-900" },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <GenerativeBackground />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full pt-32 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* 左側：テキスト */}
          <div className="flex-1 order-2 lg:order-1">
            {/* キャプション */}
            <div
              className={`
                flex items-center gap-6 mb-8
                transition-all duration-1000 ease-out
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              <div className="w-16 h-px bg-red-700/30" />
              <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase">
                HERO assch ヒーローアッシュ
              </span>
            </div>

            {/* メインコピー */}
            <h1 ref={titleRef} className="mb-12" style={{ perspective: '1000px' }}>
              {lines.map((line, lineIdx) => (
                <span key={lineIdx} className="block overflow-hidden" style={lineIdx > 0 ? { marginTop: '0.125rem' } : undefined}>
                  <span className="flex whitespace-nowrap">
                    {line.text.split('').map((char, i) => (
                      <span
                        key={`${lineIdx}-${i}`}
                        className={`hero-char inline-block text-[clamp(2rem,7vw,5.5rem)] font-extralight leading-[0.95] tracking-tighter ${line.color}`}
                        style={{ transformOrigin: 'center bottom' }}
                      >
                        {char}
                      </span>
                    ))}
                    {line.suffix && (
                      <span
                        className={`hero-char inline-block text-[clamp(2rem,7vw,5.5rem)] font-extralight leading-[0.95] tracking-tighter ${line.suffixColor}`}
                        style={{ transformOrigin: 'center bottom' }}
                      >
                        {line.suffix}
                      </span>
                    )}
                  </span>
                </span>
              ))}
              <span className="block overflow-hidden mt-2">
                <span
                  className={`
                    hero-char inline-block text-[clamp(2.5rem,9vw,7rem)] font-bold leading-[1] tracking-tight text-gray-900
                    transition-all duration-1000 delay-700
                    ${isLoaded ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  HERO
                </span>
              </span>
            </h1>

            {/* サブコピー */}
            <div
              className={`
                max-w-lg
                transition-all duration-1000 delay-700 ease-out
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                相続・離婚・共有名義・住居・店舗 etc.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                不動産のあらゆる「どうする？」に、
                <br />
                まず状況を整理するところから寄り添います。
              </p>

              <MagneticCTA href="#contact">
                無料相談はこちら
              </MagneticCTA>
            </div>
          </div>

          {/* 右側：赤い球体 + 家 */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <RedSphereWithHouse isLoaded={isLoaded} />
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div
        className={`
          absolute bottom-24 left-8
          flex items-center gap-4
          transition-all duration-1000 delay-1000 ease-out
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-widest text-gray-400 uppercase writing-vertical">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-red-700 animate-scroll-line" />
          </div>
        </div>
      </div>

      <EndlessText />
    </section>
  )
}
