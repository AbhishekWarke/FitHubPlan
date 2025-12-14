import "./AboutFitHub.css";

function AboutFitHub() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h2 className="about-title">About FitPlanHub</h2>
        <p className="about-subtitle">
          Building a healthier India by connecting users with structured,
          professional fitness guidance.
        </p>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-card">
          <h3>🚀 Our Vision</h3>
          <p>
            FitPlanHub is created with a strong ambition to promote a
            <strong> Fit India</strong> mindset. We believe that fitness should
            be structured, accessible, and guided by professionals — not random
            or confusing.
          </p>
        </div>

        <div className="about-card">
          <h3>🏋️‍♂️ What We Do</h3>
          <p>
            We provide a platform where <strong>trainers</strong> can create and
            manage structured fitness plans, and <strong>users</strong> can
            discover, follow trainers, and access plans that match their goals.
          </p>
        </div>

        <div className="about-card">
          <h3>🔐 Built with Real-World Principles</h3>
          <p>
            FitPlanHub follows industry-level practices such as role-based
            authentication, ownership-based access, and scalable architecture,
            ensuring security and reliability from day one.
          </p>
        </div>

        <div className="about-card highlight">
          <h3>🎯 Why FitPlanHub?</h3>
          <p>
            Because consistency beats motivation. We help users stay on track
            with clear plans, trusted trainers, and a clean, distraction-free
            experience.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutFitHub;
