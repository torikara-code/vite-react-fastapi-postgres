import NavBar from "./components/navBar";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* ナビゲーションバーを挿入 */}
        {/* ルーティング */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
