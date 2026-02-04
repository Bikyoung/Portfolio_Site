import styles from './SkillSection.module.scss'
import jQueryIcon from '@assets/images/jQuery_icon.webp'
import photoshopIcon from '@assets/images/photoshop_icon.webp'

/**
 * Skill Section - 기술 스택 영역
 */
const SkillSection = () => {

  const skills = [
    { 
      name: 'HTML', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      customSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256">
          <g transform="translate(-3.84,-3.84) scale(1.03,1.03)">
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" style={{ mixBlendMode: 'normal' }}>
              <g transform="translate(0,21.33333) scale(5.33333,5.33333)">
                <path d="M41,5h-34l3,34l14,4l14,-4l3,-34z" fill="#e65100"></path>
                <path d="M24,8v31.9l11.2,-3.2l2.5,-28.7z" fill="#ff6d00"></path>
                <path d="M24,25v-4h8.6l-0.7,11.5l-7.9,2.6v-4.2l4.1,-1.4l0.3,-4.5zM32.9,17l0.3,-4h-9.2v4z" fill="#ffffff"></path>
                <path d="M24,30.9v4.2l-7.9,-2.6l-0.4,-5.5h4l0.2,2.5zM19.1,17h4.9v-4h-9.1l0.7,12h8.4v-4h-4.6z" fill="#eeeeee"></path>
              </g>
            </g>
            <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" style={{ mixBlendMode: 'normal' }}>
              <g>
                <path d="M94.43833,9.07333v34.12h-7.03v-14.62h-13.71v14.62h-7.03v-34.12h7.03v13.82h13.71v-13.82zM125.58833,9.07333v5.69h-10.45v28.43h-7.04v-28.43h-10.31v-5.69zM129.59833,9.07333h9.18l8.77,24.75l8.72,-24.75h9.23v34.12h-7.05v-9.33l0.7,-16.1l-9.21,25.43h-4.83l-9.19,-25.41l0.71,16.08v9.33h-7.03zM178.66833,9.07333v28.47h14.93v5.65h-21.96v-34.12z"></path>
              </g>
            </g>
          </g>
        </svg>
      )
    },
    { 
      name: 'CSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      customSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256">
          <g transform="translate(-3.84,-3.84) scale(1.03,1.03)">
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" style={{ mixBlendMode: 'normal' }}>
              <g transform="translate(0,21.33333) scale(5.33333,5.33333)">
                <path d="M41,5h-34l3,34l14,4l14,-4l3,-34z" fill="#0277bd"></path>
                <path d="M24,8v31.9l11.2,-3.2l2.5,-28.7z" fill="#039be5"></path>
                <path d="M33.1,13h-9.1v4h4.9l-0.3,4h-4.6v4h4.4l-0.3,4.5l-4.1,1.4v4.2l7.9,-2.6l0.7,-11.5v0z" fill="#ffffff"></path>
                <path d="M24,13v4h-8.9l-0.3,-4zM19.4,21l0.2,4h4.4v-4zM19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1,-1.4z" fill="#eeeeee"></path>
              </g>
            </g>
            <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" style={{ mixBlendMode: 'normal' }}>
              <g>
                <path d="M107.56833,31.82333h7.04c-0.26667,3.67333 -1.62333,6.56333 -4.07,8.67c-2.44667,2.11333 -5.67,3.17 -9.67,3.17v0c-4.37333,0 -7.81333,-1.47333 -10.32,-4.42c-2.50667,-2.94667 -3.76,-6.99 -3.76,-12.13v0v-2.08c0,-3.28667 0.57667,-6.18 1.73,-8.68c1.15333,-2.5 2.80667,-4.41667 4.96,-5.75c2.14667,-1.33333 4.64333,-2 7.49,-2v0c3.93333,0 7.10333,1.05333 9.51,3.16c2.40667,2.10667 3.79667,5.06667 4.17,8.88v0h-7.03c-0.17333,-2.2 -0.78667,-3.79667 -1.84,-4.79c-1.05333,-0.99333 -2.65667,-1.49 -4.81,-1.49v0c-2.34667,0 -4.10333,0.84 -5.27,2.52c-1.16,1.68 -1.75667,4.28667 -1.79,7.82v0v2.58c0,3.68667 0.56,6.38 1.68,8.08c1.11333,1.70667 2.87333,2.56 5.28,2.56v0c2.17333,0 3.79333,-0.49667 4.86,-1.49c1.07333,-0.99333 1.68667,-2.53 1.84,-4.61zM136.91833,34.24333v0c0,-1.33333 -0.47,-2.35333 -1.41,-3.06c-0.93333,-0.71333 -2.62,-1.46333 -5.06,-2.25c-2.44,-0.79333 -4.37,-1.57 -5.79,-2.33v0c-3.87333,-2.09333 -5.81,-4.91333 -5.81,-8.46v0c0,-1.84667 0.52,-3.49333 1.56,-4.94c1.04,-1.44667 2.53,-2.57333 4.47,-3.38c1.94667,-0.81333 4.13,-1.22 6.55,-1.22v0c2.44,0 4.61333,0.44 6.52,1.32c1.90667,0.88 3.38667,2.12667 4.44,3.74c1.05333,1.60667 1.58,3.43333 1.58,5.48v0h-7.03c0,-1.56 -0.49,-2.77333 -1.47,-3.64c-0.98667,-0.86667 -2.37,-1.3 -4.15,-1.3v0c-1.72,0 -3.05667,0.36333 -4.01,1.09c-0.95333,0.72667 -1.43,1.68333 -1.43,2.87v0c0,1.10667 0.56,2.03667 1.68,2.79c1.11333,0.74667 2.75667,1.45 4.93,2.11v0c4,1.2 6.91333,2.69 8.74,4.47c1.82667,1.78667 2.74,4.00667 2.74,6.66v0c0,2.95333 -1.11667,5.27 -3.35,6.95c-2.23333,1.68 -5.24,2.52 -9.02,2.52v0c-2.62667,0 -5.01667,-0.48 -7.17,-1.44c-2.16,-0.96 -3.80667,-2.27667 -4.94,-3.95c-1.13333,-1.67333 -1.7,-3.61 -1.7,-5.81v0h7.06c0,3.76 2.25,5.64 6.75,5.64v0c1.67333,0 2.97667,-0.34 3.91,-1.02c0.94,-0.67333 1.41,-1.62 1.41,-2.84zM166.42833,34.24333v0c0,-1.33333 -0.47,-2.35333 -1.41,-3.06c-0.94,-0.71333 -2.62667,-1.46333 -5.06,-2.25c-2.44,-0.79333 -4.37,-1.57 -5.79,-2.33v0c-3.87333,-2.09333 -5.81,-4.91333 -5.81,-8.46v0c0,-1.84667 0.51667,-3.49333 1.55,-4.94c1.04,-1.44667 2.53333,-2.57333 4.48,-3.38c1.94667,-0.81333 4.13,-1.22 6.55,-1.22v0c2.44,0 4.61333,0.44 6.52,1.32c1.90667,0.88 3.38667,2.12667 4.44,3.74c1.05333,1.60667 1.58,3.43333 1.58,5.48v0h-7.03c0,-1.56 -0.49333,-2.77333 -1.48,-3.64c-0.98,-0.86667 -2.36333,-1.3 -4.15,-1.3v0c-1.71333,0 -3.04667,0.36333 -4,1.09c-0.95333,0.72667 -1.43,1.68333 -1.43,2.87v0c0,1.10667 0.55667,2.03667 1.67,2.79c1.12,0.74667 2.76667,1.45 4.94,2.11v0c4,1.2 6.91333,2.69 8.74,4.47c1.82667,1.78667 2.74,4.00667 2.74,6.66v0c0,2.95333 -1.11667,5.27 -3.35,6.95c-2.23333,1.68 -5.24,2.52 -9.02,2.52v0c-2.62667,0 -5.02,-0.48 -7.18,-1.44c-2.15333,-0.96 -3.79667,-2.27667 -4.93,-3.95c-1.13333,-1.67333 -1.7,-3.61 -1.7,-5.81v0h7.06c0,3.76 2.25,5.64 6.75,5.64v0c1.66667,0 2.97,-0.34 3.91,-1.02c0.94,-0.67333 1.41,-1.62 1.41,-2.84z"></path>
              </g>
            </g>
          </g>
        </svg>
      )
    },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'jQuery', icon: jQueryIcon },
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
    { name: 'Java', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      customSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0,0,256,256">
          <g transform="translate(3.84,3.84) scale(0.97,0.97)">
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" style={{ mixBlendMode: 'normal' }}>
              <g transform="translate(0,-23.99705) scale(5.33333,5.33333)">
                <path d="M23.65,24.898c-0.998,-1.609 -1.722,-2.943 -2.725,-5.455c-1.696,-4.243 10.315,-8.077 5.445,-15.444c2.111,5.089 -7.577,8.235 -8.477,12.473c-0.823,3.898 5.752,8.426 5.757,8.426z" fill="#f44336"></path>
                <path d="M23.878,17.27c-0.192,2.516 2.229,3.857 2.299,5.695c0.056,1.496 -1.447,2.743 -1.447,2.743c0,0 2.728,-0.536 3.579,-2.818c0.945,-2.534 -1.834,-4.269 -1.548,-6.298c0.267,-1.938 6.031,-5.543 6.031,-5.543c0,0 -8.481,0.562 -8.914,6.221z" fill="#f44336"></path>
                <g fill="#1565c0">
                  <path d="M32.084,25.055c1.754,-0.394 3.233,0.723 3.233,2.01c0,2.901 -4.021,5.643 -4.021,5.643c0,0 6.225,-0.742 6.225,-5.505c0,-3.15 -3.057,-3.937 -5.437,-2.148zM29.129,27.395c0,0 1.941,-1.383 2.458,-1.902c-4.763,1.011 -15.638,1.147 -15.638,0.269c0,-0.809 3.507,-1.638 3.507,-1.638c0,0 -7.773,-0.112 -7.773,2.181c0,2.39 10.175,2.561 17.446,1.09z"></path>
                  <path d="M27.935,29.571c-4.509,1.499 -12.814,1.02 -10.354,-0.993c-1.198,0 -2.974,0.963 -2.974,1.889c0,1.857 8.982,3.291 15.63,0.572z"></path>
                  <path d="M18.686,32.739c-1.636,0 -2.695,1.054 -2.695,1.822c0,2.391 9.76,2.632 13.627,0.205l-2.458,-1.632c-2.889,1.27 -10.146,1.445 -8.474,-0.395z"></path>
                  <path d="M36.281,36.632c0,-0.936 -1.055,-1.377 -1.433,-1.588c2.228,5.373 -22.317,4.956 -22.317,1.784c0,-0.721 1.807,-1.427 3.477,-1.093l-1.42,-0.839c-3.328,-0.522 -5.588,0.941 -5.588,2.121c0,5.503 27.281,5.238 27.281,-0.385z"></path>
                  <path d="M39,38.604c-4.146,4.095 -14.659,5.587 -25.231,3.057c10.572,4.503 25.181,1.967 25.231,-3.057z"></path>
                </g>
              </g>
            </g>
            <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" style={{ mixBlendMode: 'normal' }}>
              <g>
                <path d="M86.19333,241.70167v-26.25h7.81v26.25c0,2.41333 -0.53333,4.54333 -1.6,6.39c-1.06667,1.84667 -2.57333,3.27333 -4.52,4.28c-1.94,1.00667 -4.13333,1.51 -6.58,1.51v0c-4.01333,0 -7.14,-1.02 -9.38,-3.06c-2.24,-2.04 -3.36,-4.92333 -3.36,-8.65v0h7.87c0,1.85333 0.39,3.22333 1.17,4.11c0.78,0.88667 2.01333,1.33 3.7,1.33v0c1.49333,0 2.68,-0.51333 3.56,-1.54c0.88667,-1.02 1.33,-2.47667 1.33,-4.37zM124.13333,253.36167h-7.6c-0.34667,-0.67333 -0.59667,-1.51333 -0.75,-2.52v0c-1.82667,2.02667 -4.19667,3.04 -7.11,3.04v0c-2.76,0 -5.05,-0.79667 -6.87,-2.39c-1.81333,-1.6 -2.72,-3.61333 -2.72,-6.04v0c0,-2.98667 1.10667,-5.28 3.32,-6.88c2.21333,-1.59333 5.41333,-2.4 9.6,-2.42v0h3.46v-1.61c0,-1.30667 -0.33333,-2.35 -1,-3.13c-0.66667,-0.78 -1.72,-1.17 -3.16,-1.17v0c-1.26667,0 -2.26333,0.30333 -2.99,0.91c-0.72,0.60667 -1.08,1.44 -1.08,2.5v0h-7.52c0,-1.63333 0.50333,-3.14333 1.51,-4.53c1.00667,-1.38667 2.43,-2.47667 4.27,-3.27c1.84,-0.78667 3.90667,-1.18 6.2,-1.18v0c3.47333,0 6.22667,0.87 8.26,2.61c2.04,1.74667 3.06,4.2 3.06,7.36v0v12.21c0.02,2.67333 0.39333,4.69667 1.12,6.07v0zM110.31333,248.13167v0c1.10667,0 2.13,-0.24667 3.07,-0.74c0.94,-0.5 1.63333,-1.16667 2.08,-2v0v-4.84h-2.81c-3.76667,0 -5.77333,1.30333 -6.02,3.91v0l-0.02,0.44c0,0.94 0.33,1.71333 0.99,2.32c0.66,0.60667 1.56333,0.91 2.71,0.91zM133.72333,225.19167l5.23,18.98l5.24,-18.98h7.86l-9.5,28.17h-7.19l-9.51,-28.17zM178.90333,253.36167h-7.6c-0.34667,-0.67333 -0.6,-1.51333 -0.76,-2.52v0c-1.82,2.02667 -4.19,3.04 -7.11,3.04v0c-2.76,0 -5.04667,-0.79667 -6.86,-2.39c-1.81333,-1.6 -2.72,-3.61333 -2.72,-6.04v0c0,-2.98667 1.10667,-5.28 3.32,-6.88c2.21333,-1.59333 5.41,-2.4 9.59,-2.42v0h3.47v-1.61c0,-1.30667 -0.33333,-2.35 -1,-3.13c-0.67333,-0.78 -1.73,-1.17 -3.17,-1.17v0c-1.26667,0 -2.26,0.30333 -2.98,0.91c-0.72,0.60667 -1.08,1.44 -1.08,2.5v0h-7.53c0,-1.63333 0.50333,-3.14333 1.51,-4.53c1.00667,-1.38667 2.43,-2.47667 4.27,-3.27c1.84,-0.78667 3.90667,-1.18 6.2,-1.18v0c3.47333,0 6.23,0.87 8.27,2.61c2.04,1.74667 3.06,4.2 3.06,7.36v0v12.21c0.02,2.67333 0.39333,4.69667 1.12,6.07v0zM165.07333,248.13167v0c1.11333,0 2.13667,-0.24667 3.07,-0.74c0.94,-0.5 1.63667,-1.16667 2.09,-2v0v-4.84h-2.81c-3.77333,0 -5.78,1.30333 -6.02,3.91v0l-0.03,0.44c0,0.94 0.33,1.71333 0.99,2.32c0.66,0.60667 1.56333,0.91 2.71,0.91z"></path>
              </g>
            </g>
          </g>
        </svg>
      )},
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

