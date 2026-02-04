import styles from './HeroSection.module.scss'

const HeroVisual = () => {
  return (
    <div className={styles.heroVisual} data-hero-animate="visual">
      <div className={styles.visualContent}>
        {/* 시각적 요소가 들어갈 영역 */}
      </div>
    </div>
  )
}

export default HeroVisual
