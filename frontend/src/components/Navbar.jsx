import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand brand-text" to="/">
          FitPlanHub
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav w-100 d-flex justify-content-center gap-4 text-center">

            <Link className="nav-link nav-item-custom" to="/weight-loss">
              Weight Loss
            </Link>

            <Link className="nav-link nav-item-custom" to="/about">
              About Us
            </Link>

          </div>

          {/* Auth Button */}
          <div className="d-flex justify-content-end">
            <Link to="/login" className="btn login-btn">
              Login / Signup
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
