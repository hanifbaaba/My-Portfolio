import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer-container">
        <div className="footer-socials">
          <a href="mailto:baabahanif@gmail.com">
            <FaEnvelope />
            Mail Me
          </a>
          <a
            href="https://www.linkedin.com/in/hanif-muhammad-baaba-4b9591262/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/hanifbaaba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </div>
        <small className="footer-text">
          Copyright © 2025 Hanif Baaba. All Rights Reserved.
        </small>
      </footer>
    </div>
  );
}
