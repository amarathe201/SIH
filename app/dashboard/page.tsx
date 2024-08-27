"use client";
import React from 'react';
import Sidebar from '../Sidebar/page';
import TopNav from '../TopNav/page';

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
