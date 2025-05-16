import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {PatientCard , SqlQueryInput} from "../components/index";
import { initDB } from '../lib/db';


const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('SELECT * FROM patient ORDER BY id DESC');

   const fetchPatients = async () => {
      setLoading(true);
          try {
            const db = await initDB();
            const result = await db.query(query);
            setPatients(result.rows);
          } catch (error) {
            console.error('Error fetching patients:', error);
          } finally {
            setLoading(false);
          }
      };

  useEffect(() => {
    fetchPatients();

    // Create the BroadcastChannel
    const channel = new BroadcastChannel("patients");

    // Listen for messages from other tabs
    const listener = (event) => {
      if (event.data === "patient-updated") {
        fetchPatients();
      }
    };

    channel.addEventListener("message", listener);

    
    return () => {
      channel.removeEventListener("message", listener);
      channel.close();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
      
       

   
  return (
   <div className="min-h-screen w-screen overflow-y-auto bg-gradient-to-br from-black via-[#1a0c1e] to-[#2e0d29] text-white">
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
      {loading ? (
         <div className="relative z-20 flex items-center justify-center h-full p-4">
           <div className="bg-black/40 border border-white/10 backdrop-blur-xl p-10 rounded-2xl w-full max-w-6xl shadow-2xl">
            <h1 className="text-2xl font-semibold text-center text-white drop-shadow">
        Loading...
             </h1>
          </div>
          </div>

      ) : (
               /* SQL Query Input + Run Button */

      <div className="relative z-20 flex items-center justify-center h-full p-4">
        <div className="bg-black/40 border border-white/10 backdrop-blur-xl p-10 rounded-2xl w-full max-w-6xl shadow-2xl">
          <h1 className="text-3xl font-semibold mb-6 text-center text-white drop-shadow">
            Registered Patients
          </h1>
           <div className="w-full bg-black/60 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl">          
           <SqlQueryInput query={query} setQuery={setQuery} />
          <button
            className="mt-4 px-6 py-3 rounded bg-fuchsia-700 hover:bg-fuchsia-900 text-white disabled:opacity-50"
            onClick={fetchPatients}
            disabled={loading}
          >
            Run Query
          </button>
        </div>
         {patients.length === 0 ? (
             <p className="text-center text-3xl text-pink-500 drop-shadow-[0_0_10px_rgb(219,39,119)] mt-6">
                There are no entries.
              </p>
                                      ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {patients.map((patient) => (
                  <PatientCard key={patient.id} patient={patient} />
                ))}
              </div>
          )}

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
      )}
  </div>
)};

export default PatientList;
