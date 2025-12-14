import { useState } from "react";
import Navbar from "../../components/Navbar"; // ✅ Landing Navbar
import "./WeightLoss.css";
import Footer from "../../components/Footer";

function WeightLoss() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setBmiStatus("Underweight — Focus on healthy weight gain.");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiStatus("Normal range — Maintain your healthy lifestyle 💪");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiStatus("Overweight — Consider balanced diet and regular activity.");
    } else {
      setBmiStatus(
        "Obese range — High health risk. Professional guidance is strongly recommended."
      );
    }
  };

  return (
    <>
      {/* ✅ Correct Navbar */}
      <Navbar />

      <div className="weightloss-container">
        {/* Hero Section */}
        <section className="weightloss-hero">
          <h2>Healthy Weight & Weight Loss</h2>
          <p>
            Maintaining a healthy body weight is not about extreme dieting —
            it’s about balance, consistency, and long-term well-being.
          </p>
        </section>

        {/* Content Section */}
        <section className="weightloss-content">
          <div className="info-card">
            <h3>⚖️ Why Healthy Weight Matters</h3>
            <p>
              Both underweight and overweight conditions can negatively impact
              your health. Excess body fat increases the risk of chronic
              diseases such as heart disease, diabetes, joint problems, and
              reduced stamina.
            </p>
          </div>

          <div className="info-card">
            <h3>🧠 Smart Weight Loss Approach</h3>
            <p>
              Sustainable weight loss focuses on proper nutrition, regular
              physical activity, and consistency.
            </p>
          </div>

          <div className="info-card">
            <h3>🏃 Lifestyle Over Shortcuts</h3>
            <p>
              Healthy habits improve energy, immunity, and long-term wellness.
            </p>
          </div>
        </section>

        {/* BMI Calculator */}
        <section className="bmi-section">
          <div className="bmi-card">
            <h3>📊 Calculate Your BMI</h3>

            <form onSubmit={calculateBMI} className="bmi-form">
              <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />

              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />

              <button type="submit">Calculate BMI</button>
            </form>

            {bmi && (
              <div className="bmi-result">
                <h4>Your BMI: {bmi}</h4>
                <p>{bmiStatus}</p>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default WeightLoss;
