import { motion } from 'framer-motion';
import resumeData from './resumeData';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' as const } }
};

const Experience = () => (
  <motion.section
    className="experience-section"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={sectionVariants}
  >
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
  </motion.section>
);

export default Experience;
