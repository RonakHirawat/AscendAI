// // import React from "react";

// // const Login = () => {
// //   return (
// //     <>
// //       <meta charSet="UTF-8" />
// //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //       <title>Login - AscendAI</title>

// //       <header className="bg-gray-900 text-white p-4 text-center shadow-md">
// //         <h1 className="text-3xl font-bold">Login</h1>
// //         <nav>
// //           <ul className="flex justify-center space-x-6 mt-3">
// //             <li>
// //               <a href="/" className="hover:text-gray-300 text-lg">Home</a>
// //             </li>
// //             <li>
// //               <a href="/signup" className="hover:text-gray-300 text-lg">Signup</a>
// //             </li>
// //           </ul>
// //         </nav>
// //       </header>

// //       <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-black">
// //         <section className="bg-white p-8 rounded-lg shadow-xl w-96 flex flex-col items-center">
// //           <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Login to Your Account</h2>
// //           <form className="flex flex-col space-y-5 w-full">
// //             <input
// //               type="text"
// //               placeholder="Username"
// //               required
// //               className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               required
// //               className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <button
// //               type="submit"
// //               className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all"
// //             >
// //               Login
// //             </button>
// //           </form>
// //           <p className="text-sm text-gray-600 mt-4">
// //             Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
// //           </p>
// //         </section>
// //       </main>
// //     </>
// //   );
// // };



// // the workig one 
// import React from "react";
// import { Boxes } from "./Boxes"; // Importing the Boxes animation
// import { FloatingDock } from "./FloatingDock";
// import { IconHome, IconLogin2, IconUserPlus, IconCpu } from "@tabler/icons-react";
// const Login = () => {
//   const navItems = [
//     { title: "Home", href: "/", icon: <IconHome /> },
//     // { title: "Login", href: "/login", icon: <IconLogin2 /> },
//     { title: "Signup", href: "/signup", icon: <IconUserPlus /> },
//     { title: "Services", href: "/predictor", icon: <IconCpu /> },
//   ];

//   return (
//     <>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Login - AscendAI</title>

//       {/* Animated Background */}
//       <div className="relative min-h-screen bg-black overflow-hidden">
//         <Boxes/> {/* Adding Boxes in the background */}

//         {/* Floating Dock Navigation */}
//         <FloatingDock 
//           items={navItems} 
//           desktopClassName="fixed top-16 left-1/2 -translate-x-1/2 z-50" 
//           mobileClassName="fixed top-16 right-4 z-50" 
//         />

//         {/* Login Content */}
//         <main className="relative flex justify-center items-center min-h-screen z-10">
//           <section className="bg-white p-8 rounded-lg shadow-xl w-96 flex flex-col items-center">
//             <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
//               Login to Your Account
//             </h2>
//             <form className="flex flex-col space-y-5 w-full">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 required
//                 className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all"
//               >
//                 Login
//               </button>
//             </form>
//             <p className="text-sm text-gray-600 mt-4">
//               Don't have an account?{" "}
//               <a href="/signup" className="text-blue-500 hover:underline">
//                 Sign up
//               </a>
//             </p>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Login;
import React from "react";
import { Boxes } from "../components/Boxes"; // ✅ Importing animated background
import { FloatingDock } from "../components/FloatingDock"; // ✅ Importing Floating Dock
import { IconHome, IconUserPlus, IconCpu, IconBadge } from "@tabler/icons-react"; // ✅ Importing Icons

const Login = () => {
  // ✅ Navigation Items for FloatingDock
  const navItems = [
    { title: "Home", href: "/", icon: <IconHome /> },
    { title: "Signup", href: "/signup", icon: <IconUserPlus /> },
    { title: "Services", href: "/predictor", icon: <IconCpu /> },
    { title: "Job pred", href: "#", icon: <IconBadge /> },
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
