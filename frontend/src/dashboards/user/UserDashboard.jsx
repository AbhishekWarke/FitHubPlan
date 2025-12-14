import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import UserNavbar from "./UserNavbar";
import "./UserDashboard.css";
import UserFooter from "./UserFooter";

function UserDashboard() {
  const { user } = useAuth();
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [purchasedPlanIds, setPurchasedPlanIds] = useState([]);

  // Fetch all available plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/plans", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();
        setPlans(data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, [user.token]);

  // 🔹 Load purchased plans for this user
  useEffect(() => {
    const storageKey = `myPlans_${user._id}`;
    const storedPlans =
      JSON.parse(localStorage.getItem(storageKey)) || [];

    const ids = storedPlans.map((plan) => plan._id);
    setPurchasedPlanIds(ids);
  }, [user._id, showSuccessModal]);

  // 🔹 Save purchased plan
  const savePlanToMyPlans = (plan) => {
    const storageKey = `myPlans_${user._id}`;
    const existingPlans =
      JSON.parse(localStorage.getItem(storageKey)) || [];

    const alreadyPurchased = existingPlans.some(
      (p) => p._id === plan._id
    );

    if (!alreadyPurchased) {
      existingPlans.push(plan);
      localStorage.setItem(storageKey, JSON.stringify(existingPlans));
    }
  };

  const handleBuyClick = (plan) => {
    setSelectedPlan(plan);
    setShowConfirmModal(true);
  };

  const confirmPurchase = () => {
    savePlanToMyPlans(selectedPlan);
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  return (
    <>
      <UserNavbar />

      <div className="user-dashboard-container">
        {/* Welcome Section */}
        <div className="welcome-section">
          <h2>Welcome, {user.name} 👋</h2>
          <p className="motivation-text">
            Consistency beats motivation. Show up today, your future self will thank you 💪
          </p>
        </div>

        {/* Available Plans */}
        <div className="plans-container">
          <h3 className="section-title">Available Plans</h3>

          <div className="plans-grid">
            {plans.map((plan) => {
              const isPurchased = purchasedPlanIds.includes(plan._id);

              return (
                <div className="plan-card" key={plan._id}>
                  <h4>{plan.title}</h4>
                  <p>{plan.description}</p>
                  <p><strong>Duration:</strong> {plan.duration}</p>
                  <p><strong>Price:</strong> ₹{plan.price}</p>

                  <button
                    className={`btn ${isPurchased ? "btn-secondary" : "btn-primary"}`}
                    disabled={isPurchased}
                    onClick={() => handleBuyClick(plan)}
                  >
                    {isPurchased ? "Purchased" : "Buy / Purchase"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 🔹 CONFIRM PURCHASE MODAL */}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h4>Confirm Purchase</h4>
            <p>
              Do you really want to buy <strong>{selectedPlan?.title}</strong>?
            </p>
            <p className="price-text">
              Price: ₹{selectedPlan?.price}
            </p>

            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setShowConfirmModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={confirmPurchase}
              >
                Yes, Buy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-box success">
            <h4>🎉 Purchase Successful</h4>
            <p>
              Plan successfully added!  
              You can check <strong>My Plans</strong> for further information.
            </p>

            <button
              className="btn btn-success"
              onClick={() => setShowSuccessModal(false)}
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <UserFooter />
    </>
  );
}

export default UserDashboard;
