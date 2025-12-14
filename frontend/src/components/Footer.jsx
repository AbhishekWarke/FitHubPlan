import { Link } from "react-router-dom";
import "../dashboards/user/UserFooter.css";

function Footer() {
  return (
    <footer className="user-footer">
      <div className="footer-container">

        {/* Column 1: Brand */}
        <div className="footer-column">
          <h3 className="footer-brand">FitPlanHub</h3>
          <p className="footer-text">
            FitPlanHub connects users with professional trainers and
            structured fitness plans to help build a healthier,
            stronger, and more consistent lifestyle 💪
          </p>
        </div>

        {/* Column 2: Explore */}
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Get Started</Link></li>
          </ul>
        </div>

        {/* Column 3: About FitPlanHub */}
        <div className="footer-column">
          <h4>About FitPlanHub</h4>
          <p className="footer-text">
            FitPlanHub is created with an ambition to promote a
            <strong> Fit India</strong> mindset by making expert fitness
            guidance accessible to everyone.
          </p>
          <p className="footer-auth">
            Enrollment No: <strong>EN22CS301036</strong>
          </p>
          <p className="footer-auth">
            Medicaps University
          </p>
        </div>

        {/* Column 4: Motivation */}
        <div className="footer-column">
          <h4>Daily Motivation</h4>
          <p className="footer-quote">
            “A healthy body is the foundation of a focused mind.  
            Start today, stay consistent, and trust the journey.”
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} FitPlanHub · Built with ❤️ for a healthier India
        </p>
      </div>
    </footer>
  );
}

export default Footer;
