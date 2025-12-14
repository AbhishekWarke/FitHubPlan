import { Link } from "react-router-dom";
import "./UserFooter.css";

function UserFooter() {
  return (
    <footer className="user-footer">
      <div className="footer-container">

        {/* Column 1: Brand */}
        <div className="footer-column">
          <h3 className="footer-brand">FitPlanHub</h3>
          <p className="footer-text">
            Your personalized fitness companion.  
            Follow trainers, access curated plans, and stay consistent
            on your fitness journey 💪
          </p>
        </div>

        {/* Column 2: User Navigation */}
        <div className="footer-column">
          <h4>User Dashboard</h4>
          <ul>
            <li><Link to="/user/dashboard">Dashboard</Link></li>
            <li><Link to="/user/my-plans">My Plans</Link></li>
            <li><Link to="/user/trainers">Trainers</Link></li>
          </ul>
        </div>

        {/* Column 3: About FitPlanHub */}
        <div className="footer-column">
          <h4>About FitPlanHub</h4>
          <p className="footer-text">
            FitPlanHub is created with an ambition to promote a
            <strong> Fit India</strong> mindset by making professional
            fitness guidance accessible and consistent for everyone.
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
            “Small progress is still progress.  
            Stay consistent and trust the process.”
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

export default UserFooter;
