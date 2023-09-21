import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntroText } from "./pages/IntroText";
import { LoginPage } from "./pages/LoginPage";
import { BrowsePage } from "./pages/BrowsePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<IntroText />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/browse" element={<BrowsePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
