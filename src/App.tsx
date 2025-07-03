import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import Header from './Header'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Footer from './Footer'
import Exercise from './Exercise'
import BuildOffer from './BuildOffer'
import ProjectDetail from './ProjectDetail'

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === '/') return null;
  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back to previous page"
      style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        background: '#f3f4f6',
        color: '#2563eb',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        padding: '0.4rem 1.1rem',
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: '1rem',
        boxShadow: 'none',
        display: 'inline-block',
        zIndex: 200
      }}
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(-1); }}
    >
      ← Back
    </button>
  );
}

function Home() {
  return (
    <main role="main" aria-label="Main content">
      <Exercise />
      {/* <Header /> moved to global position */}
      <div style={{ textAlign: 'right', marginBottom: '1.2rem' }}>
        <Link to="/skills" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'underline', fontSize: '1.1rem' }} aria-label="View Skills page">View Skills &rarr;</Link>
      </div>
      <Experience />
      <Education />
      <BuildOffer />
    </main>
  )
}

function App() {
  return (
    <Router>
      <div className="portfolio-root" style={{ position: 'relative' }} role="application" aria-label="Portfolio Application">
        <BackButton />
        <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<main role="main" aria-label="Skills page"><Skills /></main>} />
          <Route path="/project/:index" element={<main role="main" aria-label="Project detail page"><ProjectDetail /></main>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
