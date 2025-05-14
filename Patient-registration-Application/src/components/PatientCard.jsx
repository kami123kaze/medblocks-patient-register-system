import React from "react";

const PatientCard = ({ patient }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-sm mx-auto p-6 my-4 backdrop-blur-lg bg-white/20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">{patient.name}</h2>
        <span className="text-sm text-gray-400">{patient.id}</span>
      </div>
       
      <p className="text-gray-200 mb-2"><strong>Unique ID: </strong>{patient.id}</p>
      <p className="text-gray-200 mb-2"><strong>Date of Birth: </strong>{patient.dob}</p>
      <p className="text-gray-200 mb-2"><strong>Email: </strong>{patient.email}</p>
      <p className="text-gray-200 mb-4"><strong>Phone: </strong>{patient.phone}</p>

      {/* Action Buttons */}
      <div className="flex justify-around gap-4">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
          Edit
        </button>
        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
