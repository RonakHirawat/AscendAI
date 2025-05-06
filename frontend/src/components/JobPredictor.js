import { useState } from "react";
import { Boxes } from "../components/Boxes";
import { FloatingDock } from "../components/FloatingDock";
import { IconHome, IconLogin2, IconUserPlus, IconCoinRupee } from "@tabler/icons-react"; // Adjust path as needed

// Dummy skill options; replace or import if needed
const skillOptions = [
    "Python", "Java", "SQL", "Excel", "Machine Learning",
    "Data Analysis", "Project Management", "Communication",
    "Leadership", "Cloud Computing", "UI/UX Design", "Cybersecurity"
];

// Dummy navigation items for FloatingDock
const navItems = [
    { title: "Home", href: "/", icon: <IconHome /> },
    { title: "Login", href: "/login", icon: <IconLogin2 /> },
    { title: "Signup", href: "/signup", icon: <IconUserPlus /> },
    { title: "Salary Pred", href: "/predictor", icon: <IconCoinRupee /> },
];

const JobPredictor = () => {
    const [industry, setIndustry] = useState("Technology");
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [predictedJob, setPredictedJob] = useState(null);

    const handleSkillToggle = (skill) => {
        setSelectedSkills(prev =>
            prev.includes(skill)
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new URLSearchParams();
        formData.append("industry", industry);
        formData.append("skills", selectedSkills.join(", "));
    
        try {
            const response = await fetch("http://127.0.0.1:5000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
            });
    
            const data = await response.json(); // <-- expect JSON now
            setPredictedJob(data.prediction || "Prediction not found");
        } catch (error) {
            console.error("Error during prediction:", error);
            setPredictedJob("Error occurred while predicting.");
        }
    };
    

    return (
        <>
            <FloatingDock
                items={navItems}
                desktopClassName="fixed top-16 left-1/2 -translate-x-1/2 z-50"
                mobileClassName="fixed top-16 right-4 z-50"
            />

            <div className="relative min-h-screen bg-black overflow-hidden flex justify-center items-center">
                <Boxes className="absolute inset-0 z-0" />

                <main className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-[30rem] flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Predict Job Title</h2>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-4">
                            <label htmlFor="industry" className="text-lg text-gray-700 font-medium">Industry:</label><br />
                            <select
                                id="industry"
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            >
                                <option value="Technology">Technology</option>
                                <option value="Finance">Finance</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Retail">Retail</option>
                                <option value="Education">Education</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="skills" className="text-lg text-gray-700 font-medium">Required Skill:</label><br />
                            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto p-3 border rounded-md">
                                {skillOptions.map(skill => (
                                    <label key={skill} className="flex items-center space-x-2 text-sm">
                                        <input
                                            type="checkbox"
                                            value={skill}
                                            checked={selectedSkills.includes(skill)}
                                            onChange={() => handleSkillToggle(skill)}
                                        />
                                        <span>{skill}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <input
                            type="submit"
                            value="Predict"
                            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all w-full"
                        />
                    </form>

                    {predictedJob && (
                        <div className="mt-6 p-4 border rounded-md bg-gray-100 text-center">
                            <h3 className="text-lg font-semibold text-gray-700">Predicted Job Title:</h3>
                            <p className="text-xl font-bold text-blue-600">{predictedJob}</p>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
};

export default JobPredictor;
