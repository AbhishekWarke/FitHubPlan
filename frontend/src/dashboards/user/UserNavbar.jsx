import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function UserNavbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clears token + user
    navigate("/login", { replace: true }); // prevent back navigation
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand" to="/user/dashboard">
          FitPlanHub
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#userNavbar"
          aria-controls="userNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="userNavbar">
          <div className="navbar-nav w-100 d-flex justify-content-evenly text-center">



            <Link className="nav-link" to="/user/my-plans">
              My Plans
            </Link>

            <Link className="nav-link" to="/user/trainers">
              Trainers
            </Link>

            {/* Logout */}
            <button
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default UserNavbar;
