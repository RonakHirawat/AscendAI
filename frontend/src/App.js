import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Predictor from "./components/Predictor";
import LampDemo from "./components/LampDemo";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LampDemo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/predictor" element={<Predictor />} />
                {/* <Route path="/lamp-demo" element={<LampDemo />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
