import { useRef } from 'react'
import { useStrengthAnimation } from './useStrengthAnimation'
import styles from './StrengthSection.module.scss'

/**
 * Strength Section - 기술 스택 영역
 * 참고: https://www.ypine.com/
 * 5개의 카드가 펼쳐진 상태에서 스크롤에 따라 중앙으로 모여 하나의 카드로 합쳐짐
 */
const StrengthSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useStrengthAnimation(sectionRef, cardsContainerRef, titleRef)

  const strengths = [
    {
      name: '성실함'
    },
    {
      name: '책임감'
    },
    {
      name: '꼼꼼함'
    },
    {
      name: '꾸준함'
    },
    {
      name: '노력파'
    },
  ]

  return (
    <section ref={sectionRef} id="strength" className={styles.strength} aria-label="Strength 섹션">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2 ref={titleRef} className={styles.title}>STRENGTH</h2>
            </div>

            <div ref={cardsContainerRef} className={styles.cardsContainer}>
              {/* 첫 번째 행: 첫 3개 카드 */}
              {strengths.slice(0, 3).map((strength, index) => (
                <div key={strength.name} className={styles.strengthItem} data-strength-item={index}>
                  <h3 className={styles.strengthName}>{strength.name}</h3>
                </div>
              ))}
              {/* 두 번째 행: 4번째, 5번째 카드를 묶는 컨테이너 */}
              <div className={styles.secondRowContainer}>
                {strengths.slice(3, 5).map((strength, index) => (
                  <div key={strength.name} className={styles.strengthItem} data-strength-item={index + 3}>
                    <h3 className={styles.strengthName}>{strength.name}</h3>
                  </div>
                ))}
              </div>
              {/* 그라데이션 테두리의 최종 카드 */}
              <div className={styles.finalCard} data-strength-final>
                <div className={styles.finalCardContent}>
                  <span className={styles.finalStrengthName}>손비경</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StrengthSection

