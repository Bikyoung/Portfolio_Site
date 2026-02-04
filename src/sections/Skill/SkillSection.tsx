import styles from './SkillSection.module.scss'
import photoshopIcon from '@assets/images/photoshop_icon.webp'
import htmlLogo from '@assets/images/html_logo.png'
import cssLogo from '@assets/images/css_logo.png'
import jQueryLogo from '@assets/images/jQuery_logo.png'
import javaLogo from '@assets/images/java_logo.png'
import cursorLogo from '@assets/images/cursor_logo.png'

/**
 * Skill Section - 기술 스택 영역
 */
const SkillSection = () => {

  const skills = [
    { 
      name: 'HTML', 
      icon: htmlLogo
    },
    { 
      name: 'CSS', 
      icon: cssLogo
    },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'jQuery', icon: jQueryLogo },
    { 
      name: 'Bootstrap', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      customSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0,0,256,256">
          <g transform="translate(-14.08,-14.08) scale(1.11,1.11)">
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" style={{ mixBlendMode: 'normal' }}>
              <g transform="scale(5.33333,5.33333)">
                <path d="M7.373,11.443c-0.08,-2.311 1.721,-4.443 4.156,-4.443h24.946c2.435,0 4.236,2.132 4.155,4.443c-0.077,2.221 0.023,5.097 0.747,7.443c0.726,2.353 1.951,3.84 3.957,4.031v2.167c-2.006,0.191 -3.23,1.678 -3.957,4.031c-0.724,2.345 -0.824,5.222 -0.747,7.443c0.08,2.31 -1.721,4.442 -4.155,4.442h-24.946c-2.434,0 -4.236,-2.132 -4.155,-4.443c0.077,-2.221 -0.023,-5.097 -0.747,-7.443c-0.726,-2.353 -1.954,-3.84 -3.96,-4.031v-2.167c2.006,-0.191 3.233,-1.678 3.96,-4.031c0.723,-2.345 0.824,-5.221 0.746,-7.442z" fill="#7c4dff"></path>
                <path d="M27.073,23.464v-0.028c1.853,-0.32 3.299,-2.057 3.299,-3.97c0,-1.352 -0.52,-2.498 -1.504,-3.312c-0.981,-0.812 -2.357,-1.241 -3.981,-1.241h-7.437v18.167h7.475c1.942,0 3.555,-0.474 4.663,-1.372c1.109,-0.899 1.696,-2.207 1.696,-3.783c-0.001,-2.381 -1.691,-4.169 -4.211,-4.461zM23.59,22.608h-3.181v-5.318h3.784c2.076,0 3.219,0.911 3.219,2.565c0.001,1.775 -1.357,2.753 -3.822,2.753zM20.409,24.834h3.759c2.716,0 4.092,0.981 4.092,2.916c0,1.932 -1.357,2.953 -3.925,2.953h-3.926z" fill="#ffffff"></path>
              </g>
            </g>
          </g>
        </svg>
      )
    },
    { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Java', icon: javaLogo },
    { name: 'Cursor', icon: cursorLogo },
    { name: 'Photoshop', icon: photoshopIcon },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ]

  return (
    <section id="skill" className={styles.skill} aria-label="Skill 섹션">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2 className={styles.title}>SKILL</h2>
            </div>
            
            {/* Marquee 영역 */}
            <div className={styles.marquee}>
              <div className={styles.marqueeContent}>
                <div className={styles.marqueeGroup}>
                  {skills.map((skill, index) => {
                    const showText = (skill as any).showText || false;
                    return (
                      <div key={`skill-${index}`} className={styles.marqueeItem}>
                        {(skill.name === 'HTML' || skill.name === 'CSS' || skill.name === 'Bootstrap' || skill.name === 'Java') && skill.customSvg ? (
                          <div className={styles.marqueeCustomIcon}>{skill.customSvg}</div>
                        ) : (
                          <img src={skill.icon} alt={skill.name} className={styles.marqueeIcon} />
                        )}
                        {showText && <span className={styles.marqueeText}>{skill.name}</span>}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.marqueeGroup} aria-hidden="true">
                  {skills.map((skill, index) => {
                    const showText = (skill as any).showText || false;
                    return (
                      <div key={`skill-duplicate-${index}`} className={styles.marqueeItem}>
                        {(skill.name === 'HTML' || skill.name === 'CSS' || skill.name === 'Bootstrap' || skill.name === 'Java') && skill.customSvg ? (
                          <div className={styles.marqueeCustomIcon}>{skill.customSvg}</div>
                        ) : (
                          <img src={skill.icon} alt={skill.name} className={styles.marqueeIcon} />
                        )}
                        {showText && <span className={styles.marqueeText}>{skill.name}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection

