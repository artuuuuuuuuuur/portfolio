import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <div className="bg-[#010C15] h-screen w-screen p-10 text-white">
          <div className="bg-[#011627] h-full w-full border rounded-md border-[#1E2D3D]">
            <Header />
            <Routes>
              <Route path="/" element={""} />
              <Route path="/about" element={""} />
              <Route path="/projects" element={""} />
              <Route path="/contact" element={""} />
            </Routes>
          </div>
        </div>{" "}
      </Router>
    </>
  );
}

export default App;

