import { useEffect, useState } from 'react'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'project', label: 'PROJECT' },
    { id: 'strength', label: 'STRENGTH' },
    { id: 'skill', label: 'SKILL' },
    { id: 'contact', label: 'CONTACT' },
  ]

  // 스크롤 감지 및 활성 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)

      // 각 섹션의 위치 확인
      const sections = menuItems.map(item => {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            id: item.id,
            top: rect.top + scrollY,
            bottom: rect.bottom + scrollY,
          }
        }
        return null
      }).filter(Boolean) as Array<{ id: string; top: number; bottom: number }>

      // 현재 보이는 섹션 찾기
      const currentSection = sections.find(section => {
        return scrollY >= section.top - 100 && scrollY < section.bottom - 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 초기 실행

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 섹션으로 스크롤
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // 헤더 높이 고려
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      setIsMobileMenuOpen(false)
    }
  }

  // Hero 섹션으로 스크롤 (맨 위로)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setActiveSection('')
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <button 
            className={styles.logo}
            onClick={scrollToTop}
            aria-label="홈으로 이동"
          >
            BI KYOUNG's PORTFOLIO
          </button>

          {/* 데스크톱 메뉴 */}
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.menuItem} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`${item.label} 섹션으로 이동`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* 모바일 햄버거 버튼 */}
          <button
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기/닫기"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileMenuList}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.mobileMenuItem} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`${item.label} 섹션으로 이동`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navigation

