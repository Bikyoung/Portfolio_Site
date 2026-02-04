import { Navigation } from '@components/Navigation'
import { HeroSection } from '@sections/Hero'
import { AboutSection } from '@sections/About'
import { ProjectSection } from '@sections/Project'
import { StrengthSection } from '@sections/Strength'
import { SkillSection } from '@sections/Skill'
import { ContactSection } from '@sections/Contact'

function App() {
  return (
    <div className="app">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <StrengthSection />
      <SkillSection />
      <ContactSection />
    </div>
  )
}

export default App
