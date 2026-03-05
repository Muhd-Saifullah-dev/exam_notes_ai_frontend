import { Navigate } from "react-router-dom";
import { useCurrentUser } from "./hooks/getCurrentUserHook";

const ProtectedRoute = ({ children }) => {
  const { data: user, isLoading, error } = useCurrentUser();

  if (isLoading) return <p>Loading...</p>;

  console.log("usering",user)
  if (!user) return <Navigate to="/auth" replace />; 

  return children;
};

export default ProtectedRoute;