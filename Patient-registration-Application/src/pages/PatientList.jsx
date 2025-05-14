import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PatientCard from "../components/PatientCard";
import { getDB } from '../lib/db';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
     const fetchPatients = async () => {

      const db = await getDB(); // Initialize db
      const result = await db.query('SELECT * FROM patients');
      console.log(result.rows);
      
      setPatients(result.rows);
      
    };

    fetchPatients();
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-black via-[#1a0c1e] to-[#2e0d29] text-white">
      {/* Subtle glowing overlays */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-pink-700 opacity-10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-fuchsia-900 opacity-10 blur-[100px] rounded-full z-0" />

      {/* Moving Squares (can disable if too distracting) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="square" />
        ))}
      </div>

      {/* Glossy dark overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex items-center justify-center h-full p-4">
        <div className="bg-black/40 border border-white/10 backdrop-blur-xl p-10 rounded-2xl w-full max-w-6xl shadow-2xl">
          <h1 className="text-3xl font-semibold mb-6 text-center text-white drop-shadow">
            Registered Patients
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition backdrop-blur"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
