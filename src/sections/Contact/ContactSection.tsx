import styles from './ContactSection.module.scss'

/**
 * Contact Section - 연락처 영역
 */
const ContactSection = () => {
  return (
    <section id="contact" className={styles.contact} aria-label="Contact 섹션">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2 className={styles.title}>CONTACT</h2>
            </div>
            <p className={styles.highlightText}>
              코드를 <span style={{ fontWeight: 800 }}>재검토</span>하며<br />
              항상 더 나은 구조를 <span className={styles.considerationWrapper}>
                <span style={{ fontWeight: 800 }}>고민</span>합니다
                <span className={styles.period}>.</span>
              </span>
            </p>
            <div className={styles.contactLinks}>
              <div className={styles.githubLink}>
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZ0lEQVR4nO1ZSWsUQRhtUdz35aaCiqioESSoIBFFDx5cQNz1puBFIRIQf0EQEUURb4KIBE8ieFAQjFvw6DZm6XqvOhmNE5VEPbjEJLYU9hAJk6mve6pHwXnwQUN3ve+9r7qWrva8CiqowCl83x9DcjnJTQB2mIiul5l73r+GMAxHaK3XkTwH4DmAfpJhoTD3ADwDcJZkjWn714R3dnaOV0od42+ECcPgaDabHVdW8QD2AugsQfjQeKO13p268I6OjmkkbzoUHg6JG0EQTE1FvNZ6EQCdovgw/1oBWOha/AqS78sgPoziHckqJ+Lb2trmA8iVUXxoAsDb9vb2eSWJD4JgLICn5RbPwXhR0gxF8tJfFB9GcSFp9dcAGCjSxU8B3CWpShCnDEexXjYaAFQnqX6TJfnO/LNKqTkkT5H8TrKX5GMA10ieNxFdG75eAN8A1Js2XgSt9S7LeHgQS7xSar2gequGtvN9f7ZZoYfjNffMM4V6m/Z8NWIDJK/bCJVSKz1HAFAtMNAgIvN9f7LpZgHhVlcGtNbbbPkAfG1paZlkJVNKbZcMQAC1rgwAqBUO+i0SsrMC8bnm5uYZrgy0trbOBNAlyHtGYuBuOaufB8k6Qd47ng0A2i0kAy6rn4fv+7OKrTtRbu3ZQPKzhaTZSwkAWiy98ElioM/pohLPwEOLgT4JyUcLyYu0DJDMWIrXLSEpurcB8KXYapsUuVxugpnrLcXzrUQAnthmgzS+XwHsFawDTa620C/DMBzpSnxjY+Mokq8E0+hFiYGDAgOGrN6VAZKnhTn3ScjmAvgpIDPPHHcgvk6ar9BOtiAA3JdUJCK+THJKXOHm+ITkFWkekvfiVGV/DGJjogvACXNuZOPOZrPTSZ6U7H34Ryil9ogNmEPYhCdvP4q9p+aeeSYB7+tMJjPaiwOSBxIkOiTgPRyXF5LBOxTm5JjkoxiJGlx+8XFQ/IPEp9jmiA9AjzCZ+Js1Oo6XiO/2fX+BVwqUUpuLnfnnI5PJTJRymk9DgYE+82PEcwEAR2x79biclsr3S8ZTXBNFZxCHBnpjTZkxTWwcbnpNwFWoR18rpTZ4ZfjJ0eDaAICrqf3cGEbAWpK3o+Q9cduT/GD2NwBuaa1Xp6NSJqQqCIIlcdsFQbBYKbU0HVUVVPD/4BfRfw0BahX2pgAAAABJRU5ErkJggg=="
                  alt="GitHub" 
                  className={styles.githubIcon}
                />
                <a 
                  href="https://github.com/Bikyoung" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.githubUrl}
                >
                  https://github.com/Bikyoung
                </a>
              </div>
              <div className={styles.emailLink}>
                <img 
                  src="data:image/png;base64,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"
                  alt="Email" 
                  className={styles.emailIcon}
                />
                <a 
                  href="mailto:bikyoungshon@gmail.com"
                  className={styles.emailUrl}
                >
                  bikyoungshon@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

