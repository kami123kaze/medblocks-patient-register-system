import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Save to Pglite
    console.log("Registered:", form);
    navigate("/patients");
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-black via-[#0f172a] to-[#1e293b] text-white">
      {/* Subtle glowing layers */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800 opacity-10 blur-[100px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-900 opacity-10 blur-[100px] rounded-full z-0" />

      {/* Glass black layer */}
      <div className="absolute inset-0 z-0 backdrop-blur-md bg-black/40" />

      <div className="relative z-20 flex items-center justify-center h-full p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-xl border border-white/10 p-10 rounded-2xl w-full max-w-lg space-y-6 shadow-2xl"
        >
          <h1 className="text-3xl font-semibold text-center mb-4 drop-shadow">
            Register New Patient
          </h1>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="123-456-7890"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-700 hover:bg-blue-800 transition rounded-xl font-semibold shadow-lg"
          >
            Submit
          </button>

          <div className="text-center">
            <button
              onClick={() => navigate("/")}
              type="button"
              className="mt-4 text-blue-400 hover:underline"
            >
              ← Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
