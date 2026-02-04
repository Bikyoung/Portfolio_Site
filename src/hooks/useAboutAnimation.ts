import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AboutAnimationConfig {
  duration?: number
  ease?: string
}

/**
 * About 섹션의 스크롤 애니메이션을 관리하는 커스텀 훅
 * leftContainer를 pin하고 textArea를 스크롤하는 구조
 */
export function useAboutAnimation(
  containerRef: RefObject<HTMLElement | null>,
  config: AboutAnimationConfig = {}
) {
  const { duration = 0.8, ease = 'power3.out' } = config
  const leftContainerRef = useRef<HTMLElement | null>(null)
  const textAreaRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // leftContainer와 textArea 참조 찾기
    leftContainerRef.current = containerRef.current.querySelector('[class*="leftContainer"]') as HTMLElement
    textAreaRef.current = containerRef.current.querySelector('[class*="textArea"]') as HTMLElement

    if (!leftContainerRef.current || !textAreaRef.current) return

    const ctx = gsap.context(() => {
      // leftContainer를 pin하고 textArea를 스크롤
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: leftContainerRef.current,
        scrub: 2,
      })

      // textArea 요소들에 fade-in 애니메이션
      const textElements = textAreaRef.current?.querySelectorAll('*')
      if (textElements && textElements.length > 0) {
        gsap.fromTo(
          textElements,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration,
            ease,
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [containerRef, duration, ease])
}
