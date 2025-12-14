import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function UserRoute({ children }) {
  const { isAuthenticated, user } = useAuth();

  // Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but not a normal user
  if (user?.role !== "user") {
    return <Navigate to="/" replace />;
  }

  // Authorized user
  return children;
}

export default UserRoute;
