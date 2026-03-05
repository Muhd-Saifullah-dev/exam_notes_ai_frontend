import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import ProtectedRoute from "./ProtectRoute";
import AuthRedirect from "./AuthRedirect";
export const serverUrl = "http://localhost:9001";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/auth"
        element={
          <AuthRedirect>
            {" "}
            <Auth />{" "}
          </AuthRedirect>
        }
      />
    </Routes>
  );
}

export default App;
