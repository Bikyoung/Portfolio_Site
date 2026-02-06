import styles from './ProjectSection.module.scss'
import coupangLiveImage from '@assets/images/coupang_live.webp'
import genTeraBioImage from '@assets/images/GenTeraBio.webp'
import anyoneTelecomImage from '@assets/images/anyone_telecom.webp'
import choiceIslandImage from '@assets/images/choice_island.webp'
import portfolioSiteImage from '@assets/images/portfolio_site.webp'

/**
 * Project Section - 프로젝트 영역
 * 참고: https://hchichi104.github.io/Portfolio-hchichi104/
 */
const ProjectSection = () => {
  // 임시 프로젝트 데이터 (나중에 실제 데이터로 교체 가능)
  const projects = [
    {
      id: 1,
      title: '쿠팡 라이브 리뉴얼',
      description: '쿠팡 라이브의 서비스 정체성과 강점을 시각화하고 사용자 맞춤형 구조와 인터랙티브 UI를 개선한 리뉴얼 프로젝트입니다.',
      tags: ['Vanilla JS', 'Bootstrap', 'SCSS', 'GSAP', 'Swiper'],
      githubUrl: 'https://github.com/Bikyoung/Coupang_Live',
      liveUrl: 'https://bk-coupang-live.netlify.app/',
      figmaUrl: 'https://buly.kr/NlK6nj',
    },
    {
      id: 2,
      title: '젠테라바이오',
      description: '기존 세포치료 기업들의 공통적적 한계를 분석하고 이를 보완한 이상적인 세포치료 기업 젠테라바이오를 가상으로 설계하여여, 해당 기업의 공식 웹사이트를 제작한 팀 프로젝트입니다.',
      tags: ['JQuery', 'SCSS', 'GSAP', 'Swiper'],
      githubUrl: 'https://github.com/Bikyoung/GenTeraBio',
      liveUrl: 'https://genterabio.netlify.app/',
      figmaUrl: 'https://buly.kr/3CPRnv7',
    },
    {
      id: 3,
      title: '애니원 텔레콤 리뉴얼',
      description: '사용자의 이해와 행동을 자연스럽게 유도하기 위해 UI·UX와 정보 흐름을 강화하고, 애니원 텔레콤에 대한 신뢰를 형성하는 영역을 새로 추가한 프로젝트입니다.',
      tags: ['Vanilla JS', 'Canvas', 'GSAP', 'Swiper'],
      githubUrl: 'https://github.com/Bikyoung/landing_page',
      liveUrl: 'https://bk-anyone-telecom.netlify.app/',
      figmaUrl: '#',
    },
    {
      id: 4,
      title: '선택의 섬',
      description: '연애 리얼리티의 몰입감 있는 상황 설계를 통해 사용자의 연애 스타일을 발견하는 인터랙티브 웹 콘텐츠입니다.',
      tags: ['Vibe Coding', 'Cursor'],
      githubUrl: 'https://github.com/Bikyoung/Choice_Island',
      liveUrl: 'https://bk-choice-island.netlify.app/',
    },
    {
      id: 5,
      title: '개인 포트폴리오 사이트',
      description: '이 사이트는 저의 사고 방식과 작업 결과를 사용자가 빠르게 이해하고 확인할 수 있도록 설계한 개인 공간입니다.',
      tags: ['Vibe Coding', 'Cursor'],
      githubUrl: 'https://github.com/Bikyoung/Portfolio_Site',
      liveUrl: 'https://bk-portfolio-site.netlify.app/',
    },
  ]

  return (
    <section id="project" className={styles.project} aria-label="Project 섹션">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.header} data-aos="fade-up" data-aos-delay="0">
              <h2 className={styles.title}>PROJECT</h2>
            </div>

            <div className={styles.projectsList} data-aos="fade-up" data-aos-delay="200">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className={styles.projectCard}
                >
                  <div className={styles.projectImage}>
                    {project.id === 1 ? (
                      <img 
                        src={coupangLiveImage} 
                        alt={project.title}
                        className={styles.projectImg}
                      />
                    ) : project.id === 2 ? (
                      <img 
                        src={genTeraBioImage} 
                        alt={project.title}
                        className={styles.projectImg}
                      />
                    ) : project.id === 3 ? (
                      <img 
                        src={anyoneTelecomImage} 
                        alt={project.title}
                        className={styles.projectImg}
                      />
                    ) : project.id === 4 ? (
                      <img 
                        src={choiceIslandImage} 
                        alt={project.title}
                        className={styles.projectImg}
                      />
                    ) : project.id === 5 ? (
                      <img 
                        src={portfolioSiteImage} 
                        alt={project.title}
                        className={styles.projectImg}
                      />
                    ) : (
                      <div className={styles.imagePlaceholder}>
                        <span>{project.title}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectTags}>
                      {project.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href={project.liveUrl}
                        className={styles.linkButton}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo 링크`}
                      >
                        <svg
                          className={styles.chromeIcon}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="18"
                          height="18"
                        >
                          <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path>
                          <path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path>
                          <path fill="#f44336" d="M41.84,15H24v13l-3-1L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"></path>
                          <path fill="#dd2c00" d="M7.158,13.264l8.843,14.862L21,27L7.158,13.264z"></path>
                          <path fill="#558b2f" d="M23.157,44l8.934-16.059L28,25L23.157,44z"></path>
                          <path fill="#f9a825" d="M41.865,15H24l-1.579,4.58L41.865,15z"></path>
                          <path fill="#fff" d="M33,24c0,4.969-4.031,9-9,9s-9-4.031-9-9s4.031-9,9-9S33,19.031,33,24z"></path>
                          <path fill="#2196f3" d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"></path>
                        </svg>
                        Live Demo
                      </a>
                      {project.figmaUrl && project.id !== 4 && (
                        <a
                          href={project.figmaUrl}
                          className={styles.linkButton}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Figma 링크`}
                        >
                          <svg
                            className={styles.figmaIcon}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="#0acf83" d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8z"></path>
                            <path fill="#a259ff" d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z"></path>
                            <path fill="#f24e1e" d="M4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z"></path>
                            <path fill="#ff7262" d="M12 0h4a4 4 0 0 1 0 8h-4V0z"></path>
                            <path fill="#1abcfe" d="M20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
                          </svg>
                          Style Guide
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        className={styles.linkButton}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub 링크`}
                      >
                        <svg
                          className={styles.githubIcon}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="18"
                          height="18"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection



