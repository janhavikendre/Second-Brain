import Sidebar from './sidebar';
import React, { useEffect, useState } from 'react';
import { getBrain } from '../services/api';

interface Brain {
  _id: string;
  title: string;
  description: string;
}

function BrainPage() {
  const [brains, setBrains] = useState<Brain[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      alert("You are not authorized. Please log in.");
      return;
    }

    const getBrains = async () => {
      try {
        const brainsData = await getBrain(token);
        if (brainsData && Array.isArray(brainsData)) {
          setBrains(brainsData);
        } else {
          console.error("Unexpected data format", brainsData);
        }
      } catch (error) {
        console.error('Error fetching brains:', error);
        alert('Failed to fetch brains. Please try again later.');
      }
    };

    getBrains();
  }, [token]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="min-h-screen w-screen bg-gray-800 justify-center items-center">
        <h1 className="flex justify-center text-4xl text-white font-bold mb-4">Brains</h1>
        <div className="flex flex-col items-center justify-center p-5 mt-20">
          {brains.length > 0 ? (
            brains.map((brain) => (
              <div key={brain._id} className="bg-gray-700 p-2 rounded-lg text-white w-80 mb-4">
                <h2>{brain.title}</h2>
                <p>{brain.description}</p>
              </div>
            ))
          ) : (
            <p className="text-white">No brains found. Please create one.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrainPage;
