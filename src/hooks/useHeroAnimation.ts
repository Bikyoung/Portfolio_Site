import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface HeroAnimationConfig {
  duration?: number
  stagger?: number
  ease?: string
}

/**
 * Hero 섹션의 인트로 애니메이션을 관리하는 커스텀 훅
 * Phase 1: Hello 등장 및 사라짐
 * Phase 2: 코너 요소 4개가 중앙에서 70% 크기로 등장 → 네 모서리로 이동하며 100%로 커짐
 * Phase 3: 코너 이동 중 "I'm~" 텍스트 등장
 */
export function useHeroAnimation(
  containerRef: RefObject<HTMLElement | null>,
  config: HeroAnimationConfig = {}
) {
  const { duration = 0.9, stagger = 0.12, ease = 'power3.out' } = config
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let ctx: gsap.Context | null = null

    // DOM 렌더링 완료 후 애니메이션 시작
    const timeoutId = setTimeout(() => {
      ctx = gsap.context(() => {
        // 초기 상태 설정
        gsap.set('[data-hero-phase="1"]', {
          opacity: 0,
          y: 40,
        })

        // Phase 2: 코너 요소들 숨김 (이동 애니메이션 제거)
        gsap.set('[data-hero-phase="2"]', {
          opacity: 0,
        })

        // Phase 2-final: 최종 위치의 코너 요소들 처음부터 표시
        gsap.set('[data-hero-phase="2-final"]', {
          opacity: 1,
          scale: 1,
        })

        // Phase 3: 메인 콘텐츠 초기 상태
        // 개별 요소들은 opacity만 제어하고, 컨테이너 전체에 clip-path 적용
        gsap.set('[data-hero-phase="3"]', {
          opacity: 0,
          scale: 0.85,
          y: 0,
        })
        
        // Phase 3 컨테이너 준비
        const phase3Container = containerRef.current?.querySelector('[data-hero-container="phase3"]') as HTMLElement
        
        // clip-path 효과 제거 - Phase 3 컨테이너를 바로 보이도록 설정
        if (phase3Container) {
            gsap.set(phase3Container, {
            clipPath: 'inset(0% 0% 0% 0%)',
            })
        }

        gsap.set('[data-hero-animate="scroll"]', {
          opacity: 0,
          y: 20,
        })

        gsap.set('[data-hero-animate="visual"]', {
          opacity: 0,
        })

        // 위치 계산 함수
        const calculatePositions = () => {
          const containerEl = containerRef.current
          if (!containerEl) return null

          // data 속성으로 요소 선택 (CSS Modules 해시 문제 해결)
          const phase2El = containerEl.querySelector('[data-hero-container="phase2"]') as HTMLElement
          if (!phase2El) {
            console.warn('Hero Animation: phase2 요소를 찾을 수 없습니다.')
            return null
          }
          
          // 최종 위치의 코너 장식 컨테이너 찾기
          const cornerDecorEl = containerEl.querySelector('[data-hero-container="corner-decor"]') as HTMLElement
          if (!cornerDecorEl) {
            console.warn('Hero Animation: cornerDecor 요소를 찾을 수 없습니다.')
            return null
          }
          
          // 현재 phase2의 중심 위치 계산 (CSS transform 적용 후의 실제 위치)
          const phase2Rect = phase2El.getBoundingClientRect()
          const centerX = phase2Rect.left + phase2Rect.width / 2
          const centerY = phase2Rect.top + phase2Rect.height / 2
          
          // 이동하는 코너 요소들의 실제 초기 위치 계산
          // 각 코너 요소는 .cornerFrame 내부에 있고, .cornerFrame은 .phase2 내부에 있음
          const cornerFrameEl = phase2El.querySelector('[data-hero-container="corner-frame"]') as HTMLElement
          if (!cornerFrameEl) {
            console.warn('Hero Animation: cornerFrame 요소를 찾을 수 없습니다.')
            return null
          }
          
          // 각 이동하는 코너 요소의 실제 초기 위치
          const movingTopLeft = cornerFrameEl.querySelector('[data-corner="top-left"]') as HTMLElement
          const movingTopRight = cornerFrameEl.querySelector('[data-corner="top-right"]') as HTMLElement
          const movingBottomLeft = cornerFrameEl.querySelector('[data-corner="bottom-left"]') as HTMLElement
          const movingBottomRight = cornerFrameEl.querySelector('[data-corner="bottom-right"]') as HTMLElement
          
          if (!movingTopLeft || !movingTopRight || !movingBottomLeft || !movingBottomRight) {
            console.warn('Hero Animation: 이동하는 코너 요소를 찾을 수 없습니다.')
            return null
          }
          
          // 이동하는 코너 요소들의 실제 초기 화면 위치
          const movingTopLeftRect = movingTopLeft.getBoundingClientRect()
          const movingTopRightRect = movingTopRight.getBoundingClientRect()
          const movingBottomLeftRect = movingBottomLeft.getBoundingClientRect()
          const movingBottomRightRect = movingBottomRight.getBoundingClientRect()
          
          const initialTopLeft = {
            x: movingTopLeftRect.left + movingTopLeftRect.width / 2,
            y: movingTopLeftRect.top + movingTopLeftRect.height / 2
          }
          const initialTopRight = {
            x: movingTopRightRect.left + movingTopRightRect.width / 2,
            y: movingTopRightRect.top + movingTopRightRect.height / 2
          }
          const initialBottomLeft = {
            x: movingBottomLeftRect.left + movingBottomLeftRect.width / 2,
            y: movingBottomLeftRect.top + movingBottomLeftRect.height / 2
          }
          const initialBottomRight = {
            x: movingBottomRightRect.left + movingBottomRightRect.width / 2,
            y: movingBottomRightRect.top + movingBottomRightRect.height / 2
          }
          
          // 최종 위치의 코너 장식 컨테이너 위치 계산
          const cornerDecorRect = cornerDecorEl.getBoundingClientRect()
          
          // 각 코너의 최종 위치 계산 (cornerDecor 컨테이너 내부의 각 코너 위치)
          // data 속성으로 요소 선택 (CSS Modules 해시 문제 해결)
          const topLeftCorner = cornerDecorEl.querySelector('[data-corner-final="top-left"]') as HTMLElement
          const topRightCorner = cornerDecorEl.querySelector('[data-corner-final="top-right"]') as HTMLElement
          const bottomLeftCorner = cornerDecorEl.querySelector('[data-corner-final="bottom-left"]') as HTMLElement
          const bottomRightCorner = cornerDecorEl.querySelector('[data-corner-final="bottom-right"]') as HTMLElement
          
          if (!topLeftCorner || !topRightCorner || !bottomLeftCorner || !bottomRightCorner) {
            console.warn('Hero Animation: 최종 코너 요소를 찾을 수 없습니다.')
            // fallback: cornerDecor의 모서리 위치 사용
            const targetTopLeft = {
              x: cornerDecorRect.left,
              y: cornerDecorRect.top
            }
            const targetTopRight = {
              x: cornerDecorRect.right,
              y: cornerDecorRect.top
            }
            const targetBottomLeft = {
              x: cornerDecorRect.left,
              y: cornerDecorRect.bottom
            }
            const targetBottomRight = {
              x: cornerDecorRect.right,
              y: cornerDecorRect.bottom
            }
            
            return {
              topLeft: {
                x: targetTopLeft.x - centerX,
                y: targetTopLeft.y - centerY
              },
              topRight: {
                x: targetTopRight.x - centerX,
                y: targetTopRight.y - centerY
              },
              bottomLeft: {
                x: targetBottomLeft.x - centerX,
                y: targetBottomLeft.y - centerY
              },
              bottomRight: {
                x: targetBottomRight.x - centerX,
                y: targetBottomRight.y - centerY
              }
            }
          }
          
          // 각 코너의 실제 화면 위치 계산 (최종 위치)
          const topLeftRect = topLeftCorner.getBoundingClientRect()
          const topRightRect = topRightCorner.getBoundingClientRect()
          const bottomLeftRect = bottomLeftCorner.getBoundingClientRect()
          const bottomRightRect = bottomRightCorner.getBoundingClientRect()
          
          // 각 코너의 중심 위치 (최종 고정 위치)
          // 이 위치가 정확히 사용자가 원하는 "고정되는 위치"입니다
          const targetTopLeft = {
            x: topLeftRect.left + topLeftRect.width / 2,
            y: topLeftRect.top + topLeftRect.height / 2
          }
          const targetTopRight = {
            x: topRightRect.left + topRightRect.width / 2,
            y: topRightRect.top + topRightRect.height / 2
          }
          const targetBottomLeft = {
            x: bottomLeftRect.left + bottomLeftRect.width / 2,
            y: bottomLeftRect.top + bottomLeftRect.height / 2
          }
          const targetBottomRight = {
            x: bottomRightRect.left + bottomRightRect.width / 2,
            y: bottomRightRect.top + bottomRightRect.height / 2
          }
          
          // 각 코너 요소의 초기 위치에서 최종 위치까지의 상대적 거리 계산
          // GSAP의 x, y transform은 요소의 현재 위치를 기준으로 적용되므로
          // 초기 위치에서 목표 위치까지의 차이를 계산해야 함
          return {
            topLeft: {
              x: targetTopLeft.x - initialTopLeft.x,
              y: targetTopLeft.y - initialTopLeft.y
            },
            topRight: {
              x: targetTopRight.x - initialTopRight.x,
              y: targetTopRight.y - initialTopRight.y
            },
            bottomLeft: {
              x: targetBottomLeft.x - initialBottomLeft.x,
              y: targetBottomLeft.y - initialBottomLeft.y
            },
            bottomRight: {
              x: targetBottomRight.x - initialBottomRight.x,
              y: targetBottomRight.y - initialBottomRight.y
            }
          }
        }

        // 메인 타임라인 (위치 계산 실패해도 애니메이션은 실행)
        timelineRef.current = gsap.timeline({
          defaults: { ease },
        })

        // 위치 계산 (타임라인 시작 전에 계산)
        const positions = calculatePositions()
        
        // 디버깅: 위치 계산 결과 확인
        if (!positions) {
          console.warn('Hero Animation: 위치 계산 실패. 기본 애니메이션만 실행됩니다.')
        }

        // Phase 1: "Hello" 등장 - 제거됨
        // Phase 1 애니메이션을 제거하고 바로 Phase 2로 진행

        // Phase 2: 코너 이동 애니메이션 제거 - 바로 Phase 3로 진행
        // Phase 3: 콘텐츠 바로 표시
        timelineRef.current
          .to('[data-hero-phase="3"]', {
            opacity: 1,
            scale: 1,
            duration: duration,
            stagger: stagger,
            ease: 'power2.out',
          })
          // 배경 비주얼은 Phase 3와 함께 등장
              .to('[data-hero-animate="visual"]', {
                opacity: 1,
                duration: duration * 1.2,
          }, '<') // Phase 3와 함께 배경 등장
            // 스크롤 인디케이터는 나중에 등장
              .to('[data-hero-animate="scroll"]', {
                opacity: 1,
                y: 0,
                duration: duration * 0.6,
          }, '-=0.4')
        
        if (false) { // 코너 이동 애니메이션 비활성화
          // 위치 계산 실패 시 Phase 3만 별도로 등장
          const timeline = timelineRef.current
          if (timeline) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            timeline!
              .to('[data-hero-phase="3"]', {
                opacity: 1,
                scale: 1,
                duration: duration,
                stagger: stagger,
                ease: 'power2.out',
              }, `+=${duration * 0.4}`)
              .to('[data-hero-animate="visual"]', {
                opacity: 1,
                duration: duration * 1.2,
              }, '<')
              .to('[data-hero-animate="scroll"]', {
                opacity: 1,
                y: 0,
                duration: duration * 0.6,
              }, '-=0.4')
          }
        }
        

        
        // 애니메이션 실행 실패 시 fallback (5초 후 콘텐츠 표시)
        const fallbackTimeout = setTimeout(() => {
          const phase3Elements = containerRef.current?.querySelectorAll('[data-hero-phase="3"]')
          if (phase3Elements && phase3Elements.length > 0) {
            const firstElement = phase3Elements[0] as HTMLElement
            if (firstElement && window.getComputedStyle(firstElement).opacity === '0') {
              console.warn('Hero Animation: 애니메이션 실행 실패, fallback 활성화')
              gsap.to('[data-hero-phase="3"]', {
                opacity: 1,
                y: 0,
                duration: 0.5,
              })
              gsap.to('[data-hero-animate="visual"]', {
                opacity: 1,
                duration: 0.5,
              })
              gsap.to('[data-hero-animate="scroll"]', {
                opacity: 1,
                y: 0,
                duration: 0.5,
              })
            }
          }
        }, 5000)

        // Cleanup fallback timeout
        return () => {
          clearTimeout(fallbackTimeout)
        }

      }, containerRef)
    }, 100) // 100ms 지연으로 DOM 렌더링 완료 보장

    // Cleanup
    return () => {
      clearTimeout(timeoutId)
      if (ctx) {
        ctx.revert()
      }
    }
  }, [containerRef, duration, stagger, ease])

  return timelineRef
}

export default useHeroAnimation
