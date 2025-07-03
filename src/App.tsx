import './App.css'
import Header from './Header'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Footer from './Footer'
import Exercise from './Exercise'
import BuildOffer from './BuildOffer'

function App() {
  return (
    <div className="portfolio-root">
      <Exercise />
      <Header />
      <Skills />
      <Experience />
      <Education />
      <BuildOffer />
      <Footer />
    </div>
  )
}

export default App
