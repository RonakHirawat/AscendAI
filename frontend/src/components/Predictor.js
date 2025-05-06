// // ORIGINAL

// // import { useState } from "react";

// // function Predictor() {
// //     const [formData, setFormData] = useState({
// //         education: "High School",
// //         job_title: "Software Engineer",
// //         gender: "Male",
// //         years_experience: "",
// //         age: "",
// //     });

// //     const [predictedSalary, setPredictedSalary] = useState(null);

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const response = await fetch("http://127.0.0.1:5000/predictor", {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(formData),
// //         });
// //         const data = await response.json();
// //         setPredictedSalary(data.predicted_salary);
// //     };

// //     return (
// //         <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
// //             <h2 className="text-2xl font-semibold text-center mb-4">Enter Your Details</h2>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //                 <label className="block">Education:</label>
// //                 <select name="education" value={formData.education} onChange={handleChange} className="w-full p-2 border rounded">
// //                     <option>High School</option>
// //                     <option>Associate's Degree</option>
// //                     <option>Bachelor's Degree</option>
// //                     <option>Master's Degree</option>
// //                     <option>PhD</option>
// //                 </select>

// //                 <label className="block">Job Title:</label>
// //                 <select name="job_title" value={formData.job_title} onChange={handleChange} className="w-full p-2 border rounded">
// //                     <option>Software Engineer</option>
// //                     <option>Data Scientist</option>
// //                     <option>Product Manager</option>
// //                     <option>Marketing Analyst</option>
// //                     <option>HR Manager</option>
// //                 </select>

// //                 <label className="block">Gender:</label>
// //                 <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded">
// //                     <option>Male</option>
// //                     <option>Female</option>
// //                 </select>

// //                 <label className="block">Years of Experience:</label>
// //                 <input type="number" name="years_experience" value={formData.years_experience} onChange={handleChange} required className="w-full p-2 border rounded" />

// //                 <label className="block">Age:</label>
// //                 <input type="number" name="age" value={formData.age} onChange={handleChange} required className="w-full p-2 border rounded" />

// //                 <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Predict Salary</button>
// //             </form>

// //             {predictedSalary !== null && (
// //                 <div className="mt-4 p-4 bg-gray-100 border rounded">
// //                     <h3 className="text-lg font-semibold">Predicted Salary: ₹{predictedSalary}</h3>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }

// // export default Predictor;


// // MODIFIED BUT HAS WITH ISSUE IN HOVER 

// import { useState } from "react";
// import {Boxes} from "./Boxes";
// import { FloatingDock } from "./FloatingDock";
// import { IconHome, IconLogin2, IconUserPlus, IconCpu } from "@tabler/icons-react";

// function Predictor() {
//     const [formData, setFormData] = useState({
//         education: "High School",
//         job_title: "Software Engineer",
//         gender: "Male",
//         years_experience: "",
//         age: "",
//     });

//     const [predictedSalary, setPredictedSalary] = useState(null);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://127.0.0.1:5000/predictor", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         });
//         const data = await response.json();
//         setPredictedSalary(data.predicted_salary);
//     };

//     const navItems = [
//         { title: "Home", href: "/", icon: <IconHome /> },
//         { title: "Signup", href: "/signup", icon: <IconUserPlus /> },
//         { title: "Services", href: "/predictor", icon: <IconCpu /> },
//     ];

//     return (
//         <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
//             <Boxes />
//             <FloatingDock items={navItems} />
//             <div className="max-w-md mx-auto p-6 bg-gray-800 shadow-lg rounded-lg z-10">
//                 <h2 className="text-2xl font-semibold text-center mb-4">Enter Your Details</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <label className="block">Education:</label>
//                     <select name="education" value={formData.education} onChange={handleChange} className="w-full p-2 border rounded bg-gray-700 text-white">
//                         <option>High School</option>
//                         <option>Associate's Degree</option>
//                         <option>Bachelor's Degree</option>
//                         <option>Master's Degree</option>
//                         <option>PhD</option>
//                     </select>

//                     <label className="block">Job Title:</label>
//                     <select name="job_title" value={formData.job_title} onChange={handleChange} className="w-full p-2 border rounded bg-gray-700 text-white">
//                         <option>Software Engineer</option>
//                         <option>Data Scientist</option>
//                         <option>Product Manager</option>
//                         <option>Marketing Analyst</option>
//                         <option>HR Manager</option>
//                     </select>

//                     <label className="block">Gender:</label>
//                     <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded bg-gray-700 text-white">
//                         <option>Male</option>
//                         <option>Female</option>
//                     </select>

//                     <label className="block">Years of Experience:</label>
//                     <input type="number" name="years_experience" value={formData.years_experience} onChange={handleChange} required className="w-full p-2 border rounded bg-gray-700 text-white" />

//                     <label className="block">Age:</label>
//                     <input type="number" name="age" value={formData.age} onChange={handleChange} required className="w-full p-2 border rounded bg-gray-700 text-white" />

//                     <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Predict Salary</button>
//                 </form>

//                 {predictedSalary !== null && (
//                     <div className="mt-4 p-4 bg-gray-700 border rounded">
//                         <h3 className="text-lg font-semibold">Predicted Salary: ₹{predictedSalary}</h3>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Predictor;


// 
import { useState } from "react";
import { Boxes } from "../components/Boxes"; // ✅ Importing animated background
import { FloatingDock } from "../components/FloatingDock"; // ✅ Importing Floating Dock
import { IconHome, IconLogin2, IconUserPlus,IconBriefcase
} from "@tabler/icons-react"; // ✅ Importing Icons

const Predictor = () => {
    // ✅ Navigation Items for FloatingDock
    const navItems = [
        { title: "Home", href: "/", icon: <IconHome /> },
        { title: "Login", href: "/login", icon: <IconLogin2 /> },
        { title: "Signup", href: "/signup", icon: <IconUserPlus /> },
        { title: "Job pred", href: "jpredictor", icon: <IconBriefcase
            /> },
    ];

    const [formData, setFormData] = useState({
        education: "High School",
        job_title: "Software Engineer",
        gender: "Male",
        years_experience: "",
        age: "",
    });

    const [predictedSalary, setPredictedSalary] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/predictor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        setPredictedSalary(data.predicted_salary);
    };

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Salary Predictor - AscendAI</title>

            {/* Floating Navigation Bar */}
            <FloatingDock
                items={navItems}
                desktopClassName="fixed top-16 left-1/2 -translate-x-1/2 z-50"
                mobileClassName="fixed top-16 right-4 z-50"
            />

            {/* Animated Background */}
            <div className="relative min-h-screen bg-black overflow-hidden flex justify-center items-center">
                <Boxes className="absolute inset-0 z-0" /> {/* Background Animation */}

                {/* Predictor Content */}
                <main className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-[28rem] flex flex-col items-center">
                    <div className="w-3/4"> {/* Adjust width of the heading container */}
                        <h2 className="text-lg font-medium text-center mb-3 text-gray-700">
                            Enter Your Details
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
                        <label className="text-gray-700 font-medium">Education:</label>
                        <select
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>High School</option>
                            <option>Associate's Degree</option>
                            <option>Bachelor's Degree</option>
                            <option>Master's Degree</option>
                            <option>PhD</option>
                        </select>

                        <label className="text-gray-700 font-medium">Job Title:</label>
                        <select
                            name="job_title"
                            value={formData.job_title}
                            onChange={handleChange}
                            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Software Engineer</option>
                            <option>Data Scientist</option>
                            <option>Product Manager</option>
                            <option>Marketing Analyst</option>
                            <option>HR Manager</option>
                        </select>

                        <label className="text-gray-700 font-medium">Gender:</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                        <label className="text-gray-700 font-medium">Years of Experience:</label>
                        <input
                            type="number"
                            name="years_experience"
                            value={formData.years_experience}
                            onChange={handleChange}
                            required
                            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <label className="text-gray-700 font-medium">Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all"
                        >
                            Predict Salary
                        </button>
                    </form>

                    {predictedSalary !== null && (
                        <div className="mt-6 p-4 border rounded-md bg-gray-100 text-center">
                            <h3 className="text-lg font-semibold text-gray-700">Predicted Salary:</h3>
                            <p className="text-xl font-bold text-blue-600">₹{predictedSalary}</p>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
};

export default Predictor;
