import React from "react";

const Home = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Homepage</title>
      
      {/* Navigation Bar */}
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">Home</a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300">Services</a>
              <div className="absolute left-0 mt-2 hidden w-48 bg-white text-black shadow-md group-hover:block">
                <a href="/predictor" className="block px-4 py-2 hover:bg-gray-200">Salary Predictor</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Job Predictor</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Career Advice</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Resume Enhancer</a>
              </div>
            </li>
            <li>
              <a href="/login" className="hover:text-gray-300">Login</a>
            </li>
            <li>
              <a href="/signup" className="hover:text-gray-300">Signup</a>
            </li>
          </ul>
        </nav>
      </header>
      
      {/* Main Content (Centered) */}
      <main className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            AscendAI
            <br />
            <span className="text-lg text-gray-600">Your Job Search Ends here!!</span>
          </h2>
        </div>
      </main>
      
      <div id="root" />
    </>
  );
};

export default Home;
