import React from "react";
import "../css/background.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">

      {/* Glowing Blurs */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-500 to-transparent opacity-40 animate-pulse blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500 to-transparent opacity-40 animate-pulse blur-3xl z-0" />

      

      {/* Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/5 z-10"></div>

      {/* Foreground UI */}
      <div className="relative z-20 flex items-center justify-center h-full p-15">
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-white w-full max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Medblocks Patient Registration</h1>
          <p className="mb-6 text-lg">A minimal app to register patients securely and efficiently.</p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              to="/register"
                  className="inline-block px-6 py-3 bg-transparent border-2 border-white/50 hover:bg-white/20 transition rounded-xl text-white text-center"            >
              Register a Patient
            </Link> {/*To BE Done */ }
            <Link
              to="/patients"
                    className="inline-block px-6 py-3 bg-transparent border-2 border-white/50 hover:bg-white/20 transition rounded-xl text-white text-center"            >
              View Registered Patients
            </Link>  {/*To BE Done */ }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
