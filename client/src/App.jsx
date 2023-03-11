import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Duel, Home, Inspect } from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="inspect" element={<Inspect />} />
        <Route path="duel" element={<Duel />} />
      </Routes>
    </Router>
  );
}

export default App;
