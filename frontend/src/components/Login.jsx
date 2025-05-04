import React from "react";
import { Boxes } from "../components/Boxes"; // ✅ Importing animated background
import { FloatingDock } from "../components/FloatingDock"; // ✅ Importing Floating Dock
import { IconHome, IconUserPlus, IconCpu, IconBadge } from "@tabler/icons-react"; // ✅ Importing Icons

const Login = () => {
  // ✅ Navigation Items for FloatingDock
  const navItems = [
    { title: "Home", href: "/", icon: <IconHome /> },
    { title: "Signup", href: "/signup", icon: <IconUserPlus /> },
    { title: "Salary Pred", href: "/predictor", icon: <IconCpu /> },
    { title: "Job pred", href: "/jpredictor", icon: <IconBadge /> },
  ];

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login - AscendAI</title>

      {/* Floating Navigation Bar */}
      <FloatingDock 
        items={navItems} 
        desktopClassName="fixed top-16 left-1/2 -translate-x-1/2 z-50" 
        mobileClassName="fixed top-16 right-4 z-50"
      />

      {/* Animated Background */}
      <div className="relative min-h-screen bg-black overflow-hidden flex justify-center items-center">
        <Boxes className="absolute inset-0 z-0" /> {/* Background Animation */}

        {/* Login Content */}
        <main className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-96 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
            Login to Your Account
          </h2>
          <form className="flex flex-col space-y-5 w-full">
            <input 
              type="text" 
              placeholder="Username" 
              required 
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </main>
      </div>
    </>
  );
};

export default Login;
