import { useState, useEffect } from "react";
import TrainerNavbar from "../TrainerNavbar";
import TrainerFooter from "../TrainerFooter";
import "./ManagePlans.css";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";

function ManagePlans() {
  const { token } = useAuth();

  const [plans, setPlans] = useState([]);
  const [editingPlan, setEditingPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fetch trainer's own plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/plans/my",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPlans(res.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
          "Failed to load plans"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [token]);

  // ✅ Delete plan
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Do you want to delete this plan permanently?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/plans/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPlans(plans.filter((plan) => plan._id !== id));
    } catch (err) {
      alert("Failed to delete plan");
    }
  };

  // ✅ Edit input handler
  const handleEditChange = (e) => {
    setEditingPlan({
      ...editingPlan,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Save edited plan
  const saveEdit = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/plans/${editingPlan._id}`,
        {
          title: editingPlan.title,
          description: editingPlan.description,
          price: editingPlan.price,
          duration: editingPlan.duration,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPlans(
        plans.map((plan) =>
          plan._id === editingPlan._id ? res.data : plan
        )
      );
      setEditingPlan(null);
    } catch (err) {
      alert("Failed to update plan");
    }
  };

  return (
    <>
      <TrainerNavbar />

      <div className="manage-container">
        <h2 className="manage-title">
          Manage Your <span>Plans</span>
        </h2>

        {loading && <p>Loading plans...</p>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="plans-grid">
          {plans.map((plan) => (
            <div className="plan-card" key={plan._id}>
              <h4>{plan.title}</h4>
              <p>{plan.description}</p>

              <div className="plan-meta">
                <span>₹{plan.price}</span>
                <span>{plan.duration}</span>
              </div>

              <div className="plan-actions">
                <button
                  className="edit-btn"
                  onClick={() => setEditingPlan(plan)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(plan._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editingPlan && (
        <div className="modal-overlay">
          <div className="edit-modal">
            <h3>Edit Plan</h3>

            <input
              name="title"
              value={editingPlan.title}
              onChange={handleEditChange}
            />
            <textarea
              name="description"
              value={editingPlan.description}
              onChange={handleEditChange}
            />
            <input
              name="price"
              type="number"
              value={editingPlan.price}
              onChange={handleEditChange}
            />
            <input
              name="duration"
              value={editingPlan.duration}
              onChange={handleEditChange}
            />

            <div className="modal-actions">
              <button className="save-btn" onClick={saveEdit}>
                Save Changes
              </button>
              <button
                className="cancel-btn"
                onClick={() => setEditingPlan(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <TrainerFooter />
    </>
  );
}

export default ManagePlans;
