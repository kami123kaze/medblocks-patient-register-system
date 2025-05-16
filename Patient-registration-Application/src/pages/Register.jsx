import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initDB  } from '../lib/db';

const channel = new BroadcastChannel("patients");
const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
  });

  const [popup, setPopup] = useState({
    visible: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    const db = await initDB();

    const { name, dob, email, phone } = form; 

    try {
      const result = await db.query(
        'INSERT INTO patient (name, dob, email, phone) VALUES ($1, $2, $3, $4) RETURNING id;',
        [name, dob, email, phone]
      );
      channel.postMessage("patient-updated");
      console.log('New ID:', result.rows[0].id);

      const verify = await db.query('SELECT * FROM patient');
      console.log("All rows:", verify.rows);

       setPopup({
        visible: true,
        success: true,
        message: `Patient named : ${name} added successfully! New ID: ${result.rows[0].id} `,
      });

      // reset form optional will check if looks good
      setForm({ name: "", dob: "", email: "", phone: "" });
    } catch (error) {
      console.error("Insert error:", error);
    }
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

      {/* Popup Modal */}
      {popup.visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-black/90 p-8 rounded-xl max-w-md w-full text-center text-white shadow-lg">
            <h2
              className={`text-2xl font-bold mb-4 ${
                popup.success ? "text-green-400" : "text-red-400"
              }`}
            >
              {popup.success ? "Success!" : "Error"}
            </h2>
            <p className="mb-6">{popup.message}</p>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => setPopup({ ...popup, visible: false })}
                className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
              >
                Close
              </button>
              <button
                onClick={() => navigate("/patients")}
                className="px-6 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 transition"
              >
                Go to Patient List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;