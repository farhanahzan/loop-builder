
import HeroSection from './components/HeroSection'
import { Layout } from './components/Layout'
import { MobileMenu } from './components/MobileMenu'
import { SectionOne } from './components/SectionOne'
import { SectionTwo } from './components/SectionTwo'


function App() {

  return (
    <Layout>
      <HeroSection/>
      <SectionOne/>
      <SectionTwo/>
      
    </Layout>
  )
}

export default App
