import profilePic from './assets/WhatsApp Image 2025-07-02 at 8.24.55 PM.jpeg';
import resumeData from './resumeData';

const Header = () => (
  <header>
    <img src={profilePic} alt="Profile" className="profile-pic" />
    <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0 0.2rem 0', color: '#2d3a4a', fontWeight: 700 }}>Profile</h2>
    <h1 style={{ fontSize: '1.35rem', margin: '0.2rem 0', color: '#2d3a4a', fontWeight: 600 }}>{resumeData.name} - Frontend Developer</h1>
    <p style={{ fontSize: '1.1rem', color: '#555', margin: 0 }}>{resumeData.summary}</p>
  </header>
);

export default Header;
