import { useContext } from "react";
import { UserContext } from "./Providers/UserProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isUserLoggedIn } = useContext(UserContext);
  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;