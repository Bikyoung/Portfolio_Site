import styles from './HeroSection.module.scss'

/**
 * HeroScrollIndicator - 마우스 형태의 스크롤 유도 UI
 */
const HeroScrollIndicator = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      className={styles.scrollIndicator}
      onClick={handleClick}
      aria-label="아래로 스크롤"
      data-hero-animate="scroll"
    >
      <div className={styles.scrollMouse}>
        <span className={styles.scrollWheel} />
      </div>
    </button>
  )
}

export default HeroScrollIndicator




















