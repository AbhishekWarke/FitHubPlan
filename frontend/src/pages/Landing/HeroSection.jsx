import "./HeroSection.css";
import heroImage from "../../assets/heroSection.png";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Text */}
          <div className="col-lg-8 col-md-7 text-section">
            <h1 className="hero-title">Start your fitness journey with us</h1>
            <p className="hero-subtitle">
              Personalized plans, expert trainers, and a healthier lifestyle —
              all in one place.
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-warning me-3"
                onClick={() => navigate("/login")}
              >
                Explore Plans
              </button>

              <button
                className="btn btn-outline-warning"
                onClick={() => navigate("/login")}
              >
                Join as Trainer
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="col-lg-4 col-md-5 image-section">
            <img src={heroImage} alt="Fitness model" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
