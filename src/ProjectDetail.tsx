import { useParams, Link } from 'react-router-dom';
import resumeData from './resumeData';

const ProjectDetail = () => {
  const { index } = useParams<{ index: string }>();
  const exp = resumeData.experience[Number(index)];
  if (!exp) return <div style={{ padding: 32 }}>Project not found. <Link to="/">Go Home</Link></div>;
  return (
    <div className="project-detail" style={{ padding: 32 }}>
      <h2>{exp.role} @ {exp.company}</h2>
      <p><em>{exp.location} | {exp.duration}</em></p>
      <strong>Project:</strong> {exp.project.name}<br/>
      <span>{exp.project.summary}</span>
      <div><strong>Technologies:</strong> {exp.project.technologies.join(', ')}</div>
      <ul>
        {exp.project.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
      <Link to="/" style={{ color: '#3b82f6', textDecoration: 'underline' }}>← Back to Home</Link>
    </div>
  );
};

export default ProjectDetail;
