import { useParams } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import "./PlanAccess.css";

function PlanAccess() {
  const { id } = useParams(); // plan id from URL (for future use)

  return (
    <>
      <UserNavbar />

      <div className="plan-access-container">
        {/* Header */}
        <div className="plan-access-header">
          <h2>✅ Plan Access Granted</h2>
          <p className="plan-id-text">
            You are viewing plan ID: <strong>{id}</strong>
          </p>
        </div>

        {/* Main Content */}
        <div className="plan-access-card">
          <h3>What This Plan Includes</h3>

          <ul className="plan-features">
            <li>🏋️ Structured workout routines (Beginner → Advanced)</li>
            <li>🥗 Nutrition & diet guidance</li>
            <li>📆 Weekly workout schedule</li>
            <li>📈 Progress tracking tips</li>
            <li>💬 Trainer support & guidance</li>
          </ul>

          <hr />

          <h4>Sample Weekly Structure</h4>
          <div className="week-grid">
            <div className="week-card">Day 1 – Full Body Workout</div>
            <div className="week-card">Day 2 – Cardio & Core</div>
            <div className="week-card">Day 3 – Upper Body</div>
            <div className="week-card">Day 4 – Rest / Recovery</div>
            <div className="week-card">Day 5 – Lower Body</div>
            <div className="week-card">Day 6 – HIIT & Mobility</div>
            <div className="week-card">Day 7 – Rest</div>
          </div>

          <hr />

          <p className="access-note">
            🔒 This content is available only to users who have purchased this plan.
            Stay consistent and follow the schedule for best results 💪
          </p>
        </div>
      </div>

      <UserFooter />
    </>
  );
}

export default PlanAccess;
