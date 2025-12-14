import "./AboutCreator.css";

function AboutCreator() {
  return (
    <div className="creator-container">
      {/* Hero Section */}
      <section className="creator-hero">
        <h2 className="creator-title">About the Creator</h2>
        <p className="creator-subtitle">
          The mind and motivation behind building FitPlanHub.
        </p>
      </section>

      {/* Content Section */}
      <section className="creator-content">
        <div className="creator-card">
          <h3>👨‍💻 Who Am I?</h3>
          <p>
            My name is <strong>Abhishek Warke</strong>, a passionate web
            developer currently pursuing my <strong>7th semester</strong> in
            Computer Science. I enjoy building real-world applications that
            focus on scalability, security, and clean user experience.
          </p>
        </div>

        <div className="creator-card">
          <h3>🎓 Academic Details</h3>
          <p>
            <strong>Enrollment Number:</strong> EN22CS301036 <br />
            <strong>University:</strong> Medicaps University
          </p>
        </div>

        <div className="creator-card">
          <h3>🚀 Why FitPlanHub?</h3>
          <p>
            FitPlanHub was created as a practical, production-oriented project
            to solve real fitness platform challenges like role-based access,
            ownership validation, and scalable architecture — not just as a
            demo or UI prototype.
          </p>
        </div>

        <div className="creator-card highlight">
          <h3>💡 Developer Mindset</h3>
          <p>
            I strongly believe in learning by building. This project reflects
            my approach toward writing clean backend-first logic, implementing
            proper authentication flows, and designing user-centric interfaces
            that align with real-world product standards.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutCreator;
