import { useRef } from 'react'
import { useHeroAnimation } from '@hooks/useHeroAnimation'
import HeroVisual from './HeroVisual'
import HeroScrollIndicator from './HeroScrollIndicator'
import smileImage from '@assets/images/uiw_smile.png'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  
  useHeroAnimation(sectionRef, {
    duration: 0.9,
    stagger: 0.12,
  })

  return (
    <section ref={sectionRef} className={styles.hero} aria-label="히어로 섹션">
      {/* 배경 비주얼 레이어 */}
      <HeroVisual />
      
      {/* 콘텐츠 영역 */}
      <div className={styles.content}>
        {/* Phase 3: 자기 소개 - ypine.com 스타일 */}
        <div className={styles.phase3} data-hero-container="phase3">
          <div className={styles.heroTitle}>
            {/* 1. 왼쪽 꺽쇠 */}
            <div className={styles.angleLeft}>
              <svg viewBox="28 18 44 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <defs>
                  <filter id="shadow-left">
                    <feDropShadow dx="1" dy="1" stdDeviation="0" floodColor="#3371FF" />
                  </filter>
                </defs>
                <polyline points="70,20 30,50 70,80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#shadow-left)" />
              </svg>
            </div>

            {/* 2. 중앙 콘텐츠 블록 (이름과 소개글을 하나로 묶음) */}
            <div className={styles.centerContent}>
              {/* 슬래시 라인 (가장 바닥 레이어) */}
              <svg className={styles.diagonalLine} width="100" height="100" viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <filter id="shadow-diagonal">
                    <feDropShadow dx="1" dy="1" stdDeviation="0" floodColor="#3371FF" />
                  </filter>
                </defs>
                <line 
                  x1="0" 
                  y1="100" 
                  x2="100" 
                  y2="0" 
                  stroke="#ffffff" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  filter="url(#shadow-diagonal)"
                />
              </svg>

              {/* 이름 그룹 (위 레이어) */}
              <div className={styles.introGroup} data-hero-phase="3">
                {/* 이름을 감싸는 라인 박스 */}
                <h1 className={styles.nameBlock}>
                  <div className={styles.nameWrapper}>
                    <span className={styles.nameText}>
                      <span>P</span>
                      <span className={styles.letterO}>
                        <span className={styles.letterOText}>O</span>
                        <img 
                          src={smileImage} 
                          alt="" 
                          className={styles.smileImage}
                          aria-hidden="true"
                        />
                      </span>
                      <span className={styles.letterR}>
                        <span className={styles.letterRText}>R</span>
                      </span>
                      <span>TFOLIO</span>
                    </span>
                  </div>
                </h1>
              </div>

              {/* 3. 포트폴리오 그룹 (위 레이어, 배경색으로 선을 가림) */}
              <div className={styles.portfolioGroup} data-hero-phase="3">
                <div className={styles.portfolioWrapper}>
                  <div className={styles.portfolioLineBox}>
                    <span className={styles.portfolioText}>
                      <span className={styles.portfolioTextRegular}>머무는 시선, 흐르는 코드. </span>
                      <span className={styles.portfolioTextName}>손비경</span>
                      <span className={styles.portfolioTextRegular}>입니다</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. 오른쪽 꺽쇠 */}
            <div className={styles.angleRight}>
              <svg viewBox="28 18 44 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <defs>
                  <filter id="shadow-right">
                    <feDropShadow dx="1" dy="1" stdDeviation="0" floodColor="#3371FF" />
                  </filter>
                </defs>
                <polyline points="30,20 70,50 30,80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#shadow-right)" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* 하단 스크롤 안내 - hero 영역 하단에 배치 */}
      <div className={styles.exploreHint} data-hero-phase="3">
        <span className={styles.exploreText}>EXPLORE</span>
      </div>

      {/* 스크롤 인디케이터 */}
      <HeroScrollIndicator />
    </section>
  )
}

export default HeroSection
