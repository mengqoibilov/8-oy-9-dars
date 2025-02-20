"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/utils/url";

interface Developer {
  _id: string;
  name: string;
  avatar: string;
  company?: string;
  location?: string;
  skills: string[];
}

function Developers() {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await axios.get(`${baseUrl}profile`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log( response.data);
        setDevelopers(response.data);
      } catch (error: any) {
        console.error(error.message);
        if (error.response) {
          console.error(error.response.data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
    
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-white text-2xl font-bold">&lt;/&gt; DevConnector</h1>
        <div className="space-x-4">
          <Link href="/developers" className="hover:underline">Developers</Link>
          <Link href="/register" className="hover:underline">Register</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </div>
      </nav>

     
      <div className="text-center my-6">
        <h1 className="text-4xl font-bold text-teal-600">Developers</h1>
        <p className="text-gray-600 mt-2 flex items-center justify-center gap-2">
          <span>⚛</span> Browse and connect with developers
        </p>
      </div>

    
      {loading ? (
        <p className="text-center text-xl text-gray-600">Loading...</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {developers.length > 0 ? (
            developers.map((dev) => (
              <div key={dev._id} className="bg-white p-6 rounded-lg shadow flex items-center gap-6">
               
                <img
                  src={dev.avatar || "/default-avatar.png"} 
                  alt={dev.name}
                  className="w-20 h-20 rounded-full border border-gray-300"
                />
                
           
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{dev.name }</h2>
                  {dev.company && <p className="text-gray-600">{dev.company}</p>}
                  {dev.location && <p className="text-gray-500">{dev.location}</p>}
                  
               
                  <div className="mt-2 flex flex-wrap gap-2">
                    {dev.skills.map((skill, index) => (
                      <span key={index} className="text-teal-600 text-sm flex items-center">
                        ✔ {skill}
                      </span>
                    ))}
                  </div>
                </div>

              
                <Link
                  href={`/Viev/Profile/${dev._id}`}
                  className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                >
             Viev Profile
                </Link>
              </div>

            ))
          ) : (
            <p className="text-center text-xl text-gray-600">No developers found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Developers;



