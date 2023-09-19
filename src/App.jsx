import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntroText } from "./pages/IntroText";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<IntroText />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
