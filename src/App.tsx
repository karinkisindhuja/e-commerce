import AppRoutes from "./router/appRoutes";
import { useEffect, useState } from "react";
function App() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => setIsOffline(false));
    window.addEventListener("offline", () => setIsOffline(true));
    return () => {
      window.removeEventListener("online", () => setIsOffline(false));
      window.removeEventListener("offline", () => setIsOffline(true));
    };
  }, []);
  return (
    <div className="app-container">
      {isOffline && <p>You are currently offline.</p>}

      <AppRoutes />
    </div>
  );
}

export default App;
