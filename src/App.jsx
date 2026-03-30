import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";

import { useEffect, useState } from "react";
import { getCurrentUser } from "./services/api";
import { useDispatch, useSelector } from "react-redux";
export const serverUrl = "http://localhost:9001";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchUser = async () => {
      await getCurrentUser(dispatch);
      setLoading(false);
    };
    fetchUser();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={userData ? <Home /> : <Navigate to="/auth" replace />}
      />
      <Route
        path="/auth"
        element={userData ? <Navigate to="/" replace /> : <Auth />}
      />
    </Routes>
  );
}

export default App;
