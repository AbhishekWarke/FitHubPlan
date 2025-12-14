import TrainerNavbar from "../TrainerNavbar";
import TrainerFooter from "../TrainerFooter";
import "./CreatePlan.css";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";

function CreatePlan() {
  const { token } = useAuth(); // ✅ get JWT

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/plans",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Fitness plan created successfully!");

      // clear form after success
      setFormData({
        title: "",
        description: "",
        price: "",
        duration: "",
      });

      console.log("Created Plan:", res.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Failed to create plan. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TrainerNavbar />

      <div className="create-plan-container">
        <div className="create-plan-card">
          <h2 className="create-plan-title">
            Create Your <span>Fitness Plan</span>
          </h2>

          <p className="create-plan-subtitle">
            Design a structured fitness plan that helps users achieve real
            results. Keep it clear, honest, and impactful.
          </p>

          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="form-group">
              <label>Plan Title</label>
              <input
                type="text"
                name="title"
                placeholder="e.g. Fat Loss Beginner Plan"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description */}
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                rows="4"
                placeholder="Describe what this plan offers and who it is for"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Price & Duration */}
            <div className="form-row">
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="e.g. 999"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  name="duration"
                  placeholder="e.g. 30 days"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="create-plan-btn"
              disabled={loading}
            >
              {loading ? "Publishing..." : "Publish Plan"}
            </button>
          </form>
        </div>
      </div>

      <TrainerFooter />
    </>
  );
}

export default CreatePlan;
