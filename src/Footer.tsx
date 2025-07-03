import resumeData from './resumeData';

const Footer = () => (
  <footer>
    <a href={`mailto:${resumeData.email}`} className="contact-link">
      Contact Me
      <span className="contact-info">{resumeData.email} | {resumeData.phone}</span>
    </a>
    <span className="footer-divider">|</span>
    <a href="/Srujan_Tirunagari.docx" download="Srujan_Tirunagari.docx">Download Resume</a>
  </footer>
);

export default Footer;
