import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";

import { useEffect, useState } from "react";
import { getCurrentUser } from "./services/api";
import { useDispatch, useSelector } from "react-redux";
import History from "./pages/History";
import Notes from "./pages/Notes";
import Pricing from "./pages/Pricing";
export const serverUrl = "http://localhost:9001/api/v1";
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

      <Route
        path="/history"
        element={userData ? <History /> : <Navigate to="/auth" replace />}
      />

      <Route
        path="/notes"
        element={userData ? <Notes /> : <Navigate to="/auth" replace />}
      />

      <Route
        path="/pricing"
        element={userData ? <Pricing /> : <Navigate to="/auth" replace />}
      />
    </Routes>
  );
}

export default App;
