import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import UserNavbar from "../UserNavbar";
import "./Trainers.css";
import UserFooter from "../UserFooter";

function Trainers() {
  const { user } = useAuth();

  const [trainers, setTrainers] = useState([]);
  const [followedTrainerIds, setFollowedTrainerIds] = useState([]);
  const [followedTrainersPlans, setFollowedTrainersPlans] = useState([]);

  // ===============================
  // FETCH ALL TRAINERS (REAL)
  // ===============================
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/trainers", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();

        const enriched = data.map((trainer) => ({
          ...trainer,
          experience: `${Math.floor(Math.random() * 6) + 3}+ years experience`,
          specialization: "Fat Loss • Strength • Mobility",
        }));

        setTrainers(enriched);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
  }, [user.token]);

  // ===============================
  // LOAD FOLLOWED TRAINERS (LOCAL)
  // ===============================
  useEffect(() => {
    const storageKey = `followedTrainers_${user._id}`;
    const stored = JSON.parse(localStorage.getItem(storageKey)) || [];
    setFollowedTrainerIds(stored);
  }, [user._id]);

  // ===============================
  // FETCH PLANS FROM FOLLOWED TRAINERS
  // ===============================
  useEffect(() => {
    if (followedTrainerIds.length === 0) {
      setFollowedTrainersPlans([]);
      return;
    }

    const fetchPlans = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/plans/by-trainers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify({
              trainerIds: followedTrainerIds,
            }),
          }
        );

        const data = await res.json();
        setFollowedTrainersPlans(data);
      } catch (error) {
        console.error("Error fetching trainer plans:", error);
      }
    };

    fetchPlans();
  }, [followedTrainerIds, user.token]);

  // ===============================
  // FOLLOW / UNFOLLOW HANDLERS
  // ===============================
  const followTrainer = (trainerId) => {
    const storageKey = `followedTrainers_${user._id}`;
    const updated = [...followedTrainerIds, trainerId];
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setFollowedTrainerIds(updated);
  };

  const unfollowTrainer = (trainerId) => {
    const storageKey = `followedTrainers_${user._id}`;
    const updated = followedTrainerIds.filter(
      (id) => id !== trainerId
    );
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setFollowedTrainerIds(updated);
  };

  return (
    <>
      <UserNavbar />

      <div className="trainers-container">
        {/* ===============================
            AVAILABLE TRAINERS
        =============================== */}
        <div className="trainers-header">
          <h2>Meet Our Trainers</h2>
          <p>
            These trainers are associated with FitPlanHub.
            Follow trainers to see their plans.
          </p>
        </div>

        <div className="trainers-main-card">
          <div className="trainers-grid">
            {trainers.map((trainer) => {
              const isFollowed = followedTrainerIds.includes(trainer._id);

              return (
                <div className="trainer-card" key={trainer._id}>
                  <h4>{trainer.name}</h4>
                  <p className="trainer-exp">{trainer.experience}</p>
                  <p className="trainer-spec">
                    Specialization: {trainer.specialization}
                  </p>

                  {isFollowed ? (
                    <>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => unfollowTrainer(trainer._id)}
                      >
                        Unfollow
                      </button>
                      <p className="followed-text">
                        You have already followed this trainer
                      </p>
                    </>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => followTrainer(trainer._id)}
                    >
                      Follow
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <br /><br />

        {/* ===============================
            PLANS FROM FOLLOWED TRAINERS
        =============================== */}
        <div className="followed-plans-section">
          <h3>Plans From Trainers You Follow</h3>
          <br /><br />

          {followedTrainersPlans.length === 0 ? (
            <p className="empty-followed">
              You are not following any trainers yet,
              or they haven’t published plans.
            </p>
          ) : (
            <div className="plans-grid">
              {followedTrainersPlans.map((plan) => (
                <div className="plan-card" key={plan._id}>
                  <h4>{plan.title}</h4>
                  <p>{plan.description}</p>
                  <p><strong>Duration:</strong> {plan.duration} days</p>
                  <p><strong>Price:</strong> ₹{plan.price}</p>
                  <p className="plan-trainer">
                    Trainer: {plan.trainer.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <UserFooter />
    </>
  );
}

export default Trainers;
