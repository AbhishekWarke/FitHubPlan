import { Link } from "react-router-dom";
import "../user/UserFooter.css";


function TrainerFooter() {
  return (
    <footer className="user-footer">
      <div className="footer-container">

        {/* Column 1: Brand */}
        <div className="footer-column">
          <h3 className="footer-brand">FitPlanHub</h3>
          <p className="footer-text">
            Empowering trainers to create impactful fitness plans,  
            connect with motivated users, and grow their fitness brand 💪
          </p>
        </div>

        {/* Column 2: Trainer Navigation */}
        <div className="footer-column">
          <h4>Trainer Dashboard</h4>
          <ul>
            <li><Link to="/trainer/dashboard">Dashboard</Link></li>
            <li><Link to="/trainer/create">Create Plan</Link></li>
            <li><Link to="/trainer/manage">Manage Plans</Link></li>
          </ul>
        </div>

        {/* Column 3: About FitPlanHub */}
        <div className="footer-column">
          <h4>About FitPlanHub</h4>
          <p className="footer-text">
            FitPlanHub is built with an ambition to promote a
            <strong> Fit India</strong> mindset by enabling trainers
            to share authentic, structured, and effective fitness plans.
          </p>
          <p className="footer-auth">
            Enrollment No: <strong>EN22CS301036</strong>
          </p>
          <p className="footer-auth">
            Medicaps University
          </p>
        </div>

        {/* Column 4: Trainer Motivation */}
        <div className="footer-column">
          <h4>Trainer Motivation</h4>
          <p className="footer-quote">
            “Every plan you create has the power to change someone’s life.  
            Lead with consistency and purpose.”
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} FitPlanHub · Built with ❤️ for trainers who inspire India
        </p>
      </div>
    </footer>
  );
}

export default TrainerFooter;
