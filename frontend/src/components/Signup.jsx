// // original wala
// // import React from "react";

// // const Signup = () => {
// //   return (
// //     <>
// //       <meta charSet="UTF-8" />
// //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //       <title>Signup - AscendAI</title>
      
// //       <header className="bg-gray-800 text-white p-4 text-center">
// //         <h1 className="text-2xl font-bold">Signup</h1>
// //         <nav>
// //           <ul className="flex justify-center space-x-4 mt-2">
// //             <li>
// //               <a href="/" className="hover:text-gray-300">Home</a>
// //             </li>
// //             <li>
// //               <a href="/login" className="hover:text-gray-300">Login</a>
// //             </li>
// //           </ul>
// //         </nav>
// //       </header>
      
// //       <main className="flex justify-center items-center h-screen bg-gray-100">
// //         <section className="bg-white p-6 rounded-lg shadow-lg w-80">
// //           <h2 className="text-xl font-semibold text-center mb-4">Create a New Account</h2>
// //           <form className="flex flex-col space-y-4">
// //             <input type="text" placeholder="Full Name" required className="p-2 border rounded-md" />
// //             <input type="email" placeholder="Email" required className="p-2 border rounded-md" />
// //             <input type="password" placeholder="Password" required className="p-2 border rounded-md" />
// //             <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Signup</button>
// //           </form>
// //         </section>
// //       </main>
// //     </>
// //   );
// // };

// // export default Signup;

// // MODIFIED WITHOUT THE HOVERING 
// import React from "react";
// import { Boxes } from "./Boxes"; // Importing the Boxes animation
// import { FloatingDock } from "./FloatingDock";
// import { IconHome, IconLogin2, IconUserPlus, IconCpu } from "@tabler/icons-react";

// const Signup = () => {
//   const navItems = [
//     { title: "Home", href: "/", icon: <IconHome /> },
//     { title: "Login", href: "/login", icon: <IconLogin2 /> },
//     // { title: "Signup", href: "/signup", icon: <IconUserPlus /> },
//     { title: "Services", href: "/predictor", icon: <IconCpu /> },  // ✅ Added "Services" back
//   ];

//   return (
//     <>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Signup - AscendAI</title>

//       {/* Animated Background */}
//       <div className="relative min-h-screen bg-black overflow-hidden">
//         <Boxes className="absolute inset-0 z-0" /> {/* Adding Boxes in the background */}

//         {/* Floating Dock Navigation */}
//         <FloatingDock 
//           items={navItems} 
//           desktopClassName="fixed top-16 left-1/2 -translate-x-1/2 z-50" 
//           mobileClassName="fixed top-16 right-4 z-50" 
//         />

//         {/* Signup Content */}
//         <main className="relative flex justify-center items-center min-h-screen z-10">
//           <section className="bg-white p-8 rounded-lg shadow-xl w-96 flex flex-col items-center">
//             <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
//               Create a New Account
//             </h2>
//             <form className="flex flex-col space-y-5 w-full">
//               <input type="text" placeholder="Full Name" required className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//               <input type="email" placeholder="Email" required className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//               <input type="password" placeholder="Password" required className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//               <button type="submit" className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all">
//                 Signup
//               </button>
//             </form>
//             <p className="text-sm text-gray-600 mt-4">
//               Already have an account?{" "}
//               <a href="/login" className="text-blue-500 hover:underline">
//                 Login
//               </a>
//             </p>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Signup;

// // THE BELOW ONE HAS WITH HOVER EFFECT 

import React from "react";
import { Boxes } from "../components/Boxes"; // ✅ Importing animated background
import { FloatingDock } from "../components/FloatingDock"; // ✅ Importing Floating Dock
import { IconHome, IconLogin2, IconCpu,IconBadge } from "@tabler/icons-react"; // ✅ Importing Icons

const Signup = () => {
  // ✅ Navigation Items for FloatingDock
  const navItems = [
    { title: "Home", href: "/", icon: <IconHome /> },
    { title: "Login", href: "/login", icon: <IconLogin2 /> },
    { title: "Services", href: "/predictor", icon: <IconCpu /> },
    { title: "Job pred", href: "#", icon: <IconBadge /> },
  ];

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Signup - AscendAI</title>

      {/* Floating Navigation Bar */}
      <FloatingDock 
        items={navItems} 
        desktopClassName="fixed top-16 left-1/2 -translate-x-1/2 z-50" 
        mobileClassName="fixed top-16 right-4 z-50"
      />

      {/* Animated Background */}
      <div className="relative min-h-screen bg-black overflow-hidden flex justify-center items-center">
        <Boxes className="absolute inset-0 z-0" /> {/* Background Animation */}

        {/* Signup Content */}
        <main className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-96 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
            Create a New Account
          </h2>
          <form className="flex flex-col space-y-5 w-full">
            <input 
              type="text" 
              placeholder="Full Name" 
              required 
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="email" 
              placeholder="Email" 
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
              Signup
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </main>
      </div>
    </>
  );
};

export default Signup;
