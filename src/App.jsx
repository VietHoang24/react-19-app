import { Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes"

function App() {

  return (
    <Router basename="/my-app">
      <AppRoutes />
    </Router>
  );
}

export default App;
