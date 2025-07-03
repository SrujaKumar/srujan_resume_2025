import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gql, useQuery } from '@apollo/client';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' as const } }
};

type Project = { name: string };
type ExperienceType = {
  company: string;
  location: string;
  role: string;
  duration: string;
  project: Project;
};

const EXPERIENCE_QUERY = gql`
  query GetExperience {
    experience {
      company
      location
      role
      duration
      project {
        name
      }
    }
  }
`;

const Experience = () => {
  const { data, loading, error } = useQuery(EXPERIENCE_QUERY);

  if (loading) return <div>Loading experience...</div>;
  if (error) return <div>Error loading experience.</div>;

  return (
    <motion.section
      className="experience-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <h2>Experience</h2>
      {data.experience.map((exp: ExperienceType, idx: number) => (
        <div key={idx} className="exp-card">
          <h3>{exp.role} @ {exp.company}</h3>
          <p><em>{exp.location} | {exp.duration}</em></p>
          <h4 style={{ margin: '0.5rem 0 0.2rem 0', fontWeight: 600 }}>
            <Link to={`/project/${idx}`}>{exp.project.name}</Link>
          </h4>
        </div>
      ))}
    </motion.section>
  );
};

export default Experience;
