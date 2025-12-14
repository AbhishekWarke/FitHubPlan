import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function TrainerRoute({ children }) {
  const { isAuthenticated, isTrainer } = useAuth();

  // Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but not a trainer
  if (!isTrainer) {
    return <Navigate to="/" replace />;
  }

  // Authorized trainer
  return children;
}

export default TrainerRoute;
