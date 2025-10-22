import NavBar from "./components/navBar";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* ナビゲーションバーを挿入 */}
        {/* ルーティング */}
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
