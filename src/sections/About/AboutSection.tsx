import styles from './AboutSection.module.scss'
import aboutImage from '@assets/images/about_image.JPG'

/**
 * About Section - 자기소개 영역
 * soyoung-lee.com 스타일을 참고한 구조
 */
const AboutSection = () => {
  return (
    <section id="about" className={styles.about} aria-label="About 섹션">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* 콘텐츠 영역 */}
          <div className={styles.content}>
            {/* 왼쪽 컨테이너: 제목 + 이미지 */}
            <div className={styles.leftContainer}>
              {/* 제목 영역 */}
              <div className={styles.titleArea} data-aos="fade-up" data-aos-delay="0">
                <h2 className={styles.title}>ABOUT ME</h2>
              </div>

              {/* 이미지 영역 */}
              <div className={styles.imageArea} data-aos="fade-up" data-aos-delay="200">
                <div className={styles.imageWrapper}>
                  <img 
                    src={aboutImage} 
                    alt="손비경 프로필 이미지" 
                    className={styles.aboutImage}
                  />
                </div>
              </div>
            </div>

            {/* 텍스트 영역 */}
            <div className={styles.textArea} data-aos="fade-up" data-aos-delay="400">
              {/* 자기소개 부분 - 처음에만 보임 */}
              <div data-about-intro className={styles.introSection}>
                {/* 첫 번째 계층: 큰 서브타이틀 - ypine.com 스타일 */}
                <h3 className={styles.subtitle}>
                  사용자의 <span className={styles.highlight}><span className={styles.highlightText}>여정은 매끄럽게</span></span><br />
                  팀의 <span className={styles.highlight}><span className={styles.highlightText}>협업은 가볍게</span></span><br />
                  <span className={styles.quote}>'</span><span className={styles.highlightStrong}>함께 걷는 길</span><span className={styles.quote}>'</span>을 <span className={styles.periodWrapper}>공부합니다<span className={styles.period}>.</span></span>
                </h3>

                {/* 두 번째 계층: 자기소개 텍스트 */}
                <div className={styles.intro}>
                  <p>
                    안녕하세요! 퍼블리셔 손비경입니다.
                  </p>
                  <p>
                    저는 사용자가 목적지까지 헤메지 않는 단단한 길을 구현하는 데 무게를 둡니다.<br />
                    웹 표준과 접근성을 준수하여, 모든 사용자가 차별 없이 함께 걷는 웹을 지향합니다.
                  </p>
                  <p>
                    또한 저의 코드가 동료들에게는 수월하게 이어갈 수 있는 길이 되었으면 합니다.<br />
                    재사용성과 효율성을 고려한 설계로 작업하기 편한 코드를 작성하는 퍼블리셔가 되겠습니다.
                  </p>
                </div>
              </div>

              {/* 스크롤 가능한 콘텐츠 - 이후에 보임 */}
              <div data-about-scrollable className={styles.scrollableContent}>
                {/* 자격증 섹션 */}
                <div className={styles.certificationSection}>
                  <h4 className={styles.sectionTitle}>Certifications</h4>
                  <ul className={styles.certificationList}>
                    <li><span className={styles.date}>2025.12</span>&nbsp;&nbsp;&nbsp;웹디자인개발기능사</li>
                    <li><span className={styles.date}>2025.11</span>&nbsp;&nbsp;&nbsp;GTQ 1급</li>
                    <li><span className={styles.date}>2024.06</span>&nbsp;&nbsp;&nbsp;정보처리기사</li>
                  </ul>
                </div>

                {/* 교육 섹션 */}
                <div className={styles.educationSection}>
                  <h4 data-about-education className={styles.sectionTitle}>EDUCATION</h4>
                  <ul className={styles.educationList}>
                    <li><span className={styles.date}>2025.12 - 2026.01</span>&nbsp;&nbsp;&nbsp;생성형 AI 기반 디지털 마케팅 수료 - 이젠아카데미</li>
                    <li><span className={styles.date}>2025.07 - 2025.12</span>&nbsp;&nbsp;&nbsp;UIUX 프론트엔드 개발 & 웹디자인 수료 - 이젠아카데미</li>
                    <li><span className={styles.date}>2018.03 - 2023.02</span>&nbsp;&nbsp;&nbsp;청주대학교 인공지능소프트웨어학과 졸업</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

