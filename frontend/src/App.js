import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Predictor from "./components/Predictor";
import LampDemo from "./components/LampDemo";
import JobPredictor from "./components/JobPredictor";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LampDemo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/predictor" element={<Predictor />} />
                <Route path="/jpredictor" element={<JobPredictor />} />
                {/* <Route path="/lamp-demo" element={<LampDemo />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
