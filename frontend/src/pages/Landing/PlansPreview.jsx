import "./PlansPreview.css";
import fatLossImg from "../../assets/fatloss.jpg";
import muscleBuildImg from "../../assets/musclebuild.jpg";
import homeworkImg from "../../assets/homework.jpg";
import mindImg from "../../assets/mind.jpg";
import { useNavigate } from "react-router-dom";

function PlansPreview() {
  const navigate = useNavigate();

  return (
    <section className="plans-preview">
      <div className="container">
        {/* Section Heading */}
        <h2 className="plans-title text-center mb-5">Popular Fitness Plans</h2>

        {/* Plans Grid */}
        <div className="row g-4">
          {/* Plan 1 */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100">
              <img
                src={fatLossImg}
                className="card-img-top"
                alt="Fat Loss Plan"
              />

              <div className="card-body">
                <h5 className="card-title">Fat Loss Starter</h5>
                <p className="card-text">
                  A beginner-friendly plan focused on healthy and sustainable
                  fat loss.
                </p>
                <ul>
                  <li>Beginner workouts</li>
                  <li>Diet guidance</li>
                </ul>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/login")}
                >
                  See More Details
                </button>
              </div>
            </div>
          </div>

          {/* Plan 2 */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100">
              <img
                src={muscleBuildImg}
                className="card-img-top"
                alt="Muscle Build Plan"
              />

              <div className="card-body">
                <h5 className="card-title">Muscle Build Pro</h5>
                <p className="card-text">
                  Designed for individuals aiming to gain lean muscle
                  efficiently.
                </p>
                <ul>
                  <li>Strength training</li>
                  <li>High-protein diet</li>
                </ul>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/login")}
                >
                  See More Details
                </button>
              </div>
            </div>
          </div>

          {/* Plan 3 */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100">
              <img
                src={homeworkImg}
                className="card-img-top"
                alt="Home Workout Plan"
              />

              <div className="card-body">
                <h5 className="card-title">Home Workout</h5>
                <p className="card-text">
                  No equipment workouts that you can do anytime at home.
                </p>
                <ul>
                  <li>No gym required</li>
                  <li>Flexible schedule</li>
                </ul>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/login")}
                >
                  See More Details
                </button>
              </div>
            </div>
          </div>

          {/* Plan 4 */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100">
              <img
                src={mindImg}
                className="card-img-top"
                alt="Mind & Body Balance Plan"
              />

              <div className="card-body">
                <h5 className="card-title">Mind & Body Balance</h5>
                <p className="card-text">
                  A holistic plan focusing on mental wellness and physical
                  balance.
                </p>
                <ul>
                  <li>Yoga & stretching</li>
                  <li>Mindfulness routines</li>
                </ul>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/login")}
                >
                  See More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlansPreview;
