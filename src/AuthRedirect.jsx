import { Navigate } from "react-router-dom";
import { useCurrentUser } from "./hooks/getCurrentUserHook";

const AuthRedirect = ({ children }) => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <p>Loading...</p>;

  if (user) {

    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthRedirect;