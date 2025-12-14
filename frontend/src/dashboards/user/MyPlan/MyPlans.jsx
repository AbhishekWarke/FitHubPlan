import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom"; // ✅ NEW
import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";
import "./MyPlans.css";

function MyPlans() {
  const { user } = useAuth();
  const navigate = useNavigate(); // ✅ NEW
  const [purchasedPlans, setPurchasedPlans] = useState([]);

  useEffect(() => {
    const userId = user._id;
    const storageKey = `myPlans_${userId}`;

    const storedPlans =
      JSON.parse(localStorage.getItem(storageKey)) || [];

    setPurchasedPlans(storedPlans);
  }, [user._id]);

  return (
    <>
      <UserNavbar />

      <div className="myplans-container">
        <h2 className="myplans-title">My Plans</h2>
        <p className="myplans-subtitle">
          These are the plans you have purchased. Stay consistent and keep pushing 💪
        </p>

        {purchasedPlans.length === 0 ? (
          <div className="empty-state">
            <h4>No Plans Purchased Yet</h4>
            <p>
              You haven’t purchased any plans yet.  
              Explore the dashboard and find a plan that fits your goals!
            </p>
          </div>
        ) : (
          <div className="myplans-grid">
            {purchasedPlans.map((plan) => (
              <div className="myplan-card" key={plan._id}>
                <h4>{plan.title}</h4>
                <p>{plan.description}</p>
                <p><strong>Duration:</strong> {plan.duration}</p>
                <p><strong>Price Paid:</strong> ₹{plan.price}</p>

                {/* ✅ CONNECTED TO PLAN ACCESS PAGE */}
                <button
                  className="btn btn-success"
                  onClick={() => navigate(`/user/plan/${plan._id}`)}
                >
                  Access Plan
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <UserFooter />
    </>
  );
}

export default MyPlans;
