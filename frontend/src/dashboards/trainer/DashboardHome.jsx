import TrainerNavbar from "./TrainerNavbar";
import TrainerFooter from "./TrainerFooter";
import "./DashboardHome.css";

function DashboardHome() {
  // TEMPORARY (later we’ll get this from JWT / context)
  const trainerName = "Trainer";

  return (
    <>
      <TrainerNavbar />

      <div className="container my-5 text-center">
        <h2 className="mb-3">
          Welcome, <span className="text-primary">{trainerName}</span>
        </h2>

        <p className="text-muted">
          We’re excited to have you as a trainer on{" "}
          <span className="brand-fit">Fit</span>
          <span className="brand-plan">Plan</span>
          <span className="brand-hub">Hub</span>. Our platform connects you with
          users who are genuinely committed to improving their fitness journey
          through expert guidance.
        </p>
      </div>

      {/* Trainer Guidelines – Modern Card */}
      <div className="guidelines-modern-card text-center">
        <h3 className="guidelines-title">
          Trainer <span>Guidelines</span>
        </h3>

        <ul className="guidelines-list">
          <li>
            For every fitness plan purchased, <strong>10%</strong> of the revenue
            goes to FitPlanHub as a platform service fee, while{" "}
            <strong>90%</strong> is credited to you.
          </li>
          <li>
            Trainers must ensure that all fitness plans are accurate, safe, and
            suitable for the intended audience.
          </li>
          <li>
            Any misleading, harmful, or low-quality content may result in plan
            removal or suspension from the platform.
          </li>
        </ul>

        <p className="mt-4">
          Use the navigation bar above to create new fitness plans or manage your
          existing ones.
        </p>
      </div>

      {/* Growth / Vision Section */}
      <div className="growth-card text-center">
        <h3 className="growth-title">
          Build. <span>Guide.</span> Grow.
        </h3>

        <p>
          Every plan you create has the potential to change someone’s lifestyle.
          FitPlanHub provides you with the tools and audience — your role is to
          deliver quality, consistency, and authenticity.
        </p>

        <p>
          Together, we’re building a community where fitness guidance is trusted
          and accessible. Use this platform to create impactful fitness plans,
          manage your content, and grow your presence on FitPlanHub.
        </p>

        <p>
          Thoughtfully designed plans lead to better results — for your users
          and for you.
        </p>
      </div>

      <TrainerFooter />
    </>
  );
}

export default DashboardHome;
