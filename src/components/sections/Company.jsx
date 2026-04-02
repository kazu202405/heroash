import { useEffect, useState, useRef } from 'react'

const companyInfo = [
  { label: '社名', value: 'HERO assch 株式会社（ヒーローアッシュ）' },
  { label: '代表', value: '内山 貴博（宅地建物取引士・相続診断士）' },
  { label: '本社', value: '〒542-0076 大阪府大阪市中央区難波 2-3-11 ナンバ八千代ビル6階' },
  { label: '梅田オフィス', value: '〒530-0001 大阪府大阪市北区梅田 1-3-1 大阪駅前第1ビル8階5号 billage OSAKA 814号室' },
  { label: '電話', value: '090-1429-3396' },
  { label: 'メール', value: 'hero@heroassch.com' },
  { label: '事業内容', value: '不動産売買仲介、相続不動産コンサルティング' },
]

export default function Company() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="company"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* テキスト */}
          <div className="lg:col-span-7">
            <div
              className={`
                flex items-center gap-4 mb-6
                transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <div className="w-12 h-12 rounded-full border border-red-700/20 flex items-center justify-center">
                <span className="text-xs text-red-700/60 tracking-wider">06</span>
              </div>
              <span className="text-xs tracking-[0.3em] text-red-700/60 uppercase">
                Company
              </span>
            </div>

            <h2
              className={`
                text-3xl md:text-4xl lg:text-[3.5rem]
                font-extralight
                text-gray-800
                leading-[1.1]
                tracking-tight
                mb-12
                transition-all duration-1000 delay-200
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              会社<span className="text-red-700">概要</span>
            </h2>

            <dl className="space-y-4">
              {companyInfo.map((item, index) => (
                <div
                  key={index}
                  className={`
                    flex
                    flex-col
                    sm:flex-row
                    sm:gap-8
                    py-4
                    border-b
                    border-gray-100
                    last:border-b-0
                    transition-all duration-700
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  `}
                  style={{ transitionDelay: `${300 + index * 80}ms` }}
                >
                  <dt className="
                    text-xs
                    text-gray-500
                    uppercase
                    tracking-wider
                    sm:w-32
                    flex-shrink-0
                    mb-1
                    sm:mb-0
                  ">
                    {item.label}
                  </dt>
                  <dd className="
                    text-sm
                    text-gray-800
                  ">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 赤い球体のビジュアル */}
          <div
            className={`
              lg:col-span-5
              transition-all duration-1000 delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
          >
            <div className="relative flex items-center justify-center py-8">
              <svg viewBox="0 0 400 400" className="w-full max-w-sm">
                <defs>
                  <radialGradient id="companySphere" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#e63946" />
                    <stop offset="50%" stopColor="#c41e2a" />
                    <stop offset="100%" stopColor="#8b1520" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="200" r="160" fill="url(#companySphere)" />
                <ellipse cx="160" cy="150" rx="60" ry="45" fill="white" opacity="0.08" />
              </svg>

              {/* 装飾的な要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-red-700/10 rounded-xl hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
