import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h1 className="text-xl font-bold">Freelancer Dashboard</h1>
      </div>
      <ul>
        <li><Link href="/dashboard" className="block p-4 hover:bg-gray-700">Home</Link></li>
        <li><Link href="/projects" className="block p-4 hover:bg-gray-700">Projects</Link></li>
        <li><Link href="/messages" className="block p-4 hover:bg-gray-700">Messages</Link></li>
        <li><Link href="/notifications" className="block p-4 hover:bg-gray-700">Notifications</Link></li>
        <li><Link href="/settings" className="block p-4 hover:bg-gray-700">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
