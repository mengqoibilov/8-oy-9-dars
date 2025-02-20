"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

export default function VievProfile() {
  const { id } = useParams();
  const [developer, setDeveloper] = useState<Developer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeveloper = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/profile/user/${id}`, {
          headers: { "Content-Type": "application/json" },
        });

        console.log(response.data);
        setDeveloper(response.data);
      } catch (error: any) {
        console.error( error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDeveloper();
    }
  }, [id]);

  if (loading) {
    return <p className="text-center text-xl text-gray-600">Loading...</p>;
  }

  if (!developer) {
    return <p className="text-center text-xl text-red-500">Developer not found!</p>;
  }

  return (
    
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img
        src={developer.avatar || "/default-avatar.png"}
        alt={developer.name}
        className="w-32 h-32 rounded-full mx-auto border border-gray-300"
      />
      <h1 className="text-3xl font-bold text-center mt-4">{developer.name}</h1>
      {developer.company && <p className="text-center text-gray-600">{developer.company}</p>}
      {developer.location && <p className="text-center text-gray-500">{developer.location}</p>}
      
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {developer.skills.map((skill, index) => (
            <span key={index} className="bg-teal-500 text-white px-3 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
