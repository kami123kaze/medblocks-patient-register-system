import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PatientCard from "../components/PatientCard"; // Import PatientCard

const dummyPatients = [
  { id: 1, name: "John Doe", dob: "1992-04-01", email: "john@example.com", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", dob: "1988-07-22", email: "jane@example.com", phone: "987-654-3210" },
];

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  // Placeholder for fetching data, we'll replace this later when dynamic data available
  useEffect(() => {
    setPatients(dummyPatients);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0 backdrop-blur-md bg-white/10"></div>
      <div className="relative z-20 flex items-center justify-center h-full p-4">
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl text-white w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Registered Patients</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} /> // Use PatientCard here
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
