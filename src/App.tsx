import './App.css'
import resumeData from './resumeData'
import profilePic from './assets/WhatsApp Image 2025-07-02 at 8.24.55 PM.jpeg'

function App() {
  return (
    <div className="portfolio-root">
      <header>
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>{resumeData.name} - Frontend Developer</h1>
        <p>{resumeData.summary}</p>
      </header>
      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <li key={category}>
              <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong> {skills.join(', ')}
            </li>
          ))}
        </ul>
      </section>
      <section className="experience-section">
        <h2>Experience</h2>
        {resumeData.experience.map((exp, idx) => (
          <div key={idx} className="exp-card">
            <h3>{exp.role} @ {exp.company}</h3>
            <p><em>{exp.location} | {exp.duration}</em></p>
            <strong>Project:</strong> {exp.project.name}<br/>
            <span>{exp.project.summary}</span>
            <div><strong>Technologies:</strong> {exp.project.technologies.join(', ')}</div>
            <ul>
              {exp.project.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="education-section">
        <h2>Education</h2>
        <ul>
          {resumeData.education.map((edu, idx) => (
            <li key={idx}><strong>{edu.degree}</strong>, {edu.university} ({edu.duration})</li>
          ))}
        </ul>
      </section>
      <footer>
        <a href="#" download>Download Resume</a> | <a href={`mailto:${resumeData.email}`}>Contact Me</a>
      </footer>
    </div>
  )
}

export default App
