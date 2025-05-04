import { useState } from "react";
import { Boxes } from "../components/Boxes";
import { FloatingDock } from "../components/FloatingDock";
import { IconHome, IconLogin2, IconUserPlus, IconBadge } from "@tabler/icons-react";

const navItems = [
    { title: "Home", href: "/", icon: <IconHome /> },
    { title: "Login", href: "/login", icon: <IconLogin2 /> },
    { title: "Signup", href: "/signup", icon: <IconUserPlus /> },
    { title: "Job pred", href: "/jpredictor", icon: <IconBadge /> },
];

const skillOptions = [
    "Python", "Java", "C++", "SQL", "Excel", "Risk Analysis", "Financial Modeling",
    "SEO", "Content Writing", "Google Ads", "Social Media", "Machine Learning",
    "Customer Service", "Sales", "Merchandising", "Production Planning",
    "Quality Control", "Supply Chain", "Teaching", "Curriculum Design", "Research",
    "Medical Research", "Nursing", "Patient Care", "Pharmaceuticals", "React", "EdTech",
    "Market Research", "AWS"
];

const JobPredictor = () => {
    const [experience, setExperience] = useState("Entry Level"); // Match backend format
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
        const response = await fetch("http://127.0.0.1:5000/jobpredictor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ experience, skills: selectedSkills }),
        });

        const data = await response.json();
        setPredictedJob(data.predicted_job || data.error);
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
                    <h2 className="text-lg font-medium text-center mb-4 text-gray-700">
                        Predict Your Job Title
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
                        <label className="text-gray-700 font-medium">Experience Level:</label>
                        <select
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Entry Level">Entry Level</option>
                            <option value="Mid Level">Mid Level</option>
                            <option value="Senior Level">Senior Level</option>
                        </select>

                        <label className="text-gray-700 font-medium">Select Your Skills:</label>
                        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto border p-3 rounded-md">
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

                        <button
                            type="submit"
                            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all"
                        >
                            Predict Job
                        </button>
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
