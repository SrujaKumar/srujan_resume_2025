import profilePic from './assets/WhatsApp Image 2025-07-02 at 8.24.55 PM.jpeg';
import resumeData from './resumeData';

const Header = () => (
  <header>
    <img src={profilePic} alt="Profile" className="profile-pic" />
    <h1>{resumeData.name} - Frontend Developer</h1>
    <p>{resumeData.summary}</p>
  </header>
);

export default Header;
