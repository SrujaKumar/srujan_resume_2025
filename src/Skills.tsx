import { motion } from 'framer-motion';
import resumeData from './resumeData';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' as const } }
};

const Skills = () => (
  <motion.section
    className="skills-section"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={sectionVariants}
  >
    <h2>Skills</h2>
    <ul className="skills-list">
      {Object.entries(resumeData.skills).map(([category, skills]) => (
        <li key={category}>
          <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong> {skills.join(', ')}
        </li>
      ))}
    </ul>
  </motion.section>
);

export default Skills;
