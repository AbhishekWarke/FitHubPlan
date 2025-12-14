import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser } from "../../api/authApi";
import "./LoginPage.css";

function LoginPage() {
  const { login, isAuthenticated, user } = useAuth(); // ✅ added auth flags
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ NEW: prevent access if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      if (user?.role === "trainer") {
        navigate("/trainer/dashboard", { replace: true });
      } else {
        navigate("/user/dashboard", { replace: true });
      }
    }
  }, [isAuthenticated, user, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginUser(formData);

      // delegate auth handling to AuthContext
      login(res.data);

      // Role-based redirect
      if (res.data.role === "trainer") {
        navigate("/trainer/dashboard", { replace: true });
      } else {
        navigate("/user/dashboard", { replace: true });
      }

    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-brand text-center">
        <Link to="/" className="brand-link">
          FitPlanHub
        </Link>
      </div>

      <div className="login-container">
        <div className="login-card">
          <h2 className="text-center mb-4">Login</h2>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-warning w-100" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-3">
            Don’t have an account?{" "}
            <Link to="/signup" className="link-text">
              Sign up
            </Link>
          </p>

          <p className="text-center mt-2">
            <Link to="/" className="link-text">
              Go to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
