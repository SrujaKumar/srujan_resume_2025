import { motion } from 'framer-motion';
import resumeData from './resumeData';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' as const } }
};

const Education = () => (
  <motion.section
    className="education-section"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={sectionVariants}
  >
    <h2>Education</h2>
    <ul>
      {resumeData.education.map((edu, idx) => (
        <li key={idx}><strong>{edu.degree}</strong>, {edu.university} ({edu.duration})</li>
      ))}
    </ul>
  </motion.section>
);

export default Education;
