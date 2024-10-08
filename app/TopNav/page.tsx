"use client";
// src/components/TopNav.tsx
import React from 'react';

export const TopNav  =  () => {
  return ( 
    <div className="bg-white text-black p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ProConnect</h1>
      <div>
        <button className="bg-green-600 hover:bg-green-600 text-white px-4 py-2 rounded-lg">Log out</button>
      </div>
    </div>
  );
};

export default TopNav;
