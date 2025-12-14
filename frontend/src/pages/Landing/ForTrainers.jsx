import "./ForTrainers.css";
import { useNavigate } from "react-router-dom";

function ForTrainers() {
  const navigate = useNavigate();

  return (
    <section className="for-trainers">
      <div className="container">
        <div className="trainer-card text-center">
          <h2 className="plans-title text-center">Are you a Trainer?</h2>

          <p className="trainer-text">
            If you are a certified fitness trainer and want to reach more
            clients, FitPlanHub gives you the perfect platform to grow your
            presence and share your expertise.
          </p>

          <p className="trainer-text">
            Create fitness plans, connect with users, and build your personal
            brand — all in one place.
          </p>

          <button
            className="btn btn-warning trainer-btn"
            onClick={() => navigate("/login")}
          >
            Join as Trainer
          </button>
        </div>
      </div>
    </section>
  );
}

export default ForTrainers;
