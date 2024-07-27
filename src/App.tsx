import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-['Fira Code', monospace]">
      <Router>
        <div className="bg-[#010C15] h-screen w-screen p-10 text-white">
          <div className="bg-[#011627] h-full w-full border rounded-md border-[#1E2D3D] justify-between flex flex-col">
            <div className="">
              <Header />
              <Routes>
                <Route path="/" element={"HOME"} />
                <Route path="/about" element={"ABOUT"} />
                <Route path="/projects" element={"PROJECTS"} />
                <Route path="/contact" element={"CONTACT"} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;


