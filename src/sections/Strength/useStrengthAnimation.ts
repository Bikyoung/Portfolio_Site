import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Strength 섹션의 카드 수렴 애니메이션을 관리하는 커스텀 훅
 * ypine.com 스타일: 5개의 카드가 펼쳐진 상태에서 스크롤에 따라 중앙으로 모여 하나의 카드로 합쳐짐
 */
export function useStrengthAnimation(
  sectionRef: RefObject<HTMLElement | null>,
  cardsContainerRef: RefObject<HTMLDivElement | null>,
  titleRef: RefObject<HTMLHeadingElement | null>
) {
  useEffect(() => {
    if (!sectionRef.current || !cardsContainerRef.current || !titleRef.current) return

    let ctx: gsap.Context | null = null
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let mediaQuery: MediaQueryList | null = null
    let mediaQueryHandler: ((e: MediaQueryListEvent) => void) | null = null

    // 미디어 쿼리를 사용하여 1024px 이상에서만 애니메이션 실행
    const setupAnimation = () => {
      // 기존 애니메이션 정리
      if (ctx) {
        ctx.revert()
        ctx = null
      }
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }

      // 1024px 미만에서는 애니메이션 실행하지 않음
      if (window.innerWidth < 1024) {
        return
      }

      // DOM이 완전히 렌더링될 때까지 대기 (여러 프레임 대기)
      const initAnimation = () => {
        // ScrollTrigger를 먼저 refresh하여 레이아웃 안정화
        ScrollTrigger.refresh()
        
        // requestAnimationFrame을 사용하여 레이아웃이 완전히 안정화된 후 실행
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            ctx = gsap.context(() => {
              const strengthItems = cardsContainerRef.current?.querySelectorAll('[data-strength-item]')
              
              if (!strengthItems || strengthItems.length === 0) {
                console.warn('Strength Animation: 카드 요소를 찾을 수 없습니다.')
                return
              }

              // 초기 위치 계산 함수 - X축만 계산
              const calculateInitialPositions = () => {
                // 레이아웃이 안정화되도록 강제 리플로우
                cardsContainerRef.current!.offsetHeight
                
                const containerRect = cardsContainerRef.current!.getBoundingClientRect()
                const containerCenterX = containerRect.width / 2

                const positions: Array<{ x: number }> = []
                
                strengthItems.forEach((item) => {
                  const element = item as HTMLElement
                  // 각 요소의 레이아웃도 강제로 계산
                  element.offsetHeight
                  const rect = element.getBoundingClientRect()
                  const containerRect = cardsContainerRef.current!.getBoundingClientRect()
                  
                  // 컨테이너 기준 상대 위치 (X축만)
                  const itemCenterX = rect.left - containerRect.left + rect.width / 2
                  
                  // 중앙으로 이동해야 하는 거리 (X축만)
                  positions.push({
                    x: containerCenterX - itemCenterX,
                  })
                })

                return positions
              }

              // 초기 위치 계산
              const initialPositions = calculateInitialPositions()
              
              if (!initialPositions || initialPositions.length === 0) {
                console.warn('Strength Animation: 위치 계산 실패')
                return
              }

              // ScrollTrigger로 섹션 pin - 타이틀 요소를 직접 trigger로 사용하여 정확한 타이밍 보장
              ScrollTrigger.create({
                trigger: titleRef.current, // 타이틀 요소를 trigger로 사용
                start: 'top top', // 타이틀의 top이 뷰포트 top에 닿을 때
                end: () => {
                  // 섹션의 높이를 기준으로 end 위치 계산
                  const sectionHeight = sectionRef.current!.offsetHeight
                  return `+=${sectionHeight * 2.5}` // 스크롤 구간 단축
                },
                pin: sectionRef.current, // 섹션 전체를 pin
                scrub: 0.3, // 더 빠른 애니메이션 반응
                anticipatePin: 1,
                invalidateOnRefresh: true, // 리사이즈 시 재계산
              })

              // 최종 카드 요소 찾기
              const finalCard = cardsContainerRef.current?.querySelector('[data-strength-final]') as HTMLElement
              
              // 최종 카드 초기 상태 설정
              if (finalCard) {
                gsap.set(finalCard, {
                  opacity: 0,
                  scale: 0.9,
                })
              }

              // 각 카드에 대한 애니메이션
              strengthItems.forEach((item, index) => {
                const element = item as HTMLElement
                const targetPos = initialPositions[index]
                
                // 초기 상태: 모두 보이도록 설정
                gsap.set(element, {
                  x: 0,
                  y: 0, // Y축은 고정
                  scale: 1,
                  opacity: 1,
                  zIndex: 10 - index, // 뒤에 있는 카드가 위에 표시되도록
                })

                // 스크롤 진행도에 따른 애니메이션
                // 모든 카드가 중앙으로 이동하면서 사라짐
                gsap.to(element, {
                  x: targetPos.x, // X축으로 중앙 이동
                  y: 0, // Y축은 고정
                  scale: 0.8, // 약간 작아지면서
                  opacity: 0, // 사라짐
                  duration: 1,
                  ease: 'power2.inOut',
                  scrollTrigger: {
                    trigger: titleRef.current, // 타이틀 요소를 trigger로 사용
                    start: 'top top', // 타이틀의 top이 뷰포트 top에 닿을 때
                    end: () => {
                      const sectionHeight = sectionRef.current!.offsetHeight
                      return `+=${sectionHeight * 2.5}` // 스크롤 구간 단축
                    },
                    scrub: 0.3, // 더 빠른 애니메이션 반응
                    invalidateOnRefresh: true, // 리사이즈 시 재계산
                  },
                })
              })

              // 최종 카드 등장 애니메이션 (기존 카드들이 사라질 때쯤)
              // 기존 카드들이 거의 사라질 때(약 70% 진행도) 나타나도록
              if (finalCard) {
                // 더 정확한 타이밍을 위해 별도의 ScrollTrigger 사용
                ScrollTrigger.create({
                  trigger: titleRef.current, // 타이틀 요소를 trigger로 사용
                  start: 'top top', // 타이틀의 top이 뷰포트 top에 닿을 때
                  end: () => {
                    const sectionHeight = sectionRef.current!.offsetHeight
                    return `+=${sectionHeight * 2.5}` // 스크롤 구간 단축
                  },
                  scrub: 0.3, // 더 빠른 애니메이션 반응
                  invalidateOnRefresh: true, // 리사이즈 시 재계산
                  onUpdate: (self) => {
                    const progress = self.progress
                    // 0.7 이상일 때만 opacity 증가
                    if (progress >= 0.7) {
                      const finalProgress = (progress - 0.7) / 0.3 // 0.7~1.0을 0~1로 정규화
                      gsap.set(finalCard, {
                        opacity: finalProgress,
                        scale: 0.9 + (finalProgress * 0.1), // 0.9에서 1.0으로
                      })
                    } else {
                      gsap.set(finalCard, { opacity: 0, scale: 0.9 })
                    }
                  },
                })
              }
              
              // 초기 스크롤 위치 확인 및 애니메이션 상태 조정
              const checkInitialScroll = () => {
                if (!titleRef.current || !sectionRef.current) return
                
                const titleRect = titleRef.current.getBoundingClientRect()
                const sectionRect = sectionRef.current.getBoundingClientRect()
                
                // 이미 스크롤이 섹션을 지나쳤는지 확인
                if (titleRect.top < 0 && sectionRect.bottom > window.innerHeight) {
                  // 애니메이션이 진행 중인 상태
                  ScrollTrigger.refresh()
                }
              }
              
              // 초기 스크롤 위치 확인
              checkInitialScroll()
            }, sectionRef.current as Element)
          })
        })
      }
      
      timeoutId = setTimeout(initAnimation, 100) // 초기 대기 시간 단축
    }

    // 초기 애니메이션 설정
    setupAnimation()

    // 미디어 쿼리로 창 크기 변경 감지
    mediaQuery = window.matchMedia('(min-width: 1024px)')
    mediaQueryHandler = () => {
      // 리사이즈 시 ScrollTrigger refresh 후 애니메이션 재설정
      ScrollTrigger.refresh()
      setupAnimation()
    }

    // 미디어 쿼리 리스너 등록
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', mediaQueryHandler)
    } else {
      // 구형 브라우저 지원
      mediaQuery.addListener(mediaQueryHandler)
    }
    
    // 리사이즈 이벤트 리스너 추가
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh()
        if (window.innerWidth >= 1024) {
          setupAnimation()
        }
      }, 150)
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (ctx) {
        ctx.revert()
      }
      if (mediaQuery && mediaQueryHandler) {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', mediaQueryHandler)
        } else {
          // 구형 브라우저 지원
          mediaQuery.removeListener(mediaQueryHandler)
        }
      }
      window.removeEventListener('resize', handleResize)
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
      // ScrollTrigger 정리
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === titleRef.current) {
          trigger.kill()
        }
      })
    }
  }, [sectionRef, cardsContainerRef, titleRef])
}

