// ============================================
// 프로젝트 상수 정의
// ============================================

export const SITE_CONFIG = {
  title: 'Web Publisher Portfolio',
  description: '창의적이고 확장 가능한 프론트엔드 웹 퍼블리싱',
  author: 'Web Publisher',
  email: 'contact@example.com',
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1,
  },
  ease: {
    default: 'power2.out',
    smooth: 'power3.out',
    bounce: 'elastic.out(1, 0.5)',
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.2,
  },
} as const

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'project', label: 'Project', href: '#project' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const

















