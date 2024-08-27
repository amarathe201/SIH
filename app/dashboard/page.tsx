"use client";
import React from 'react';
import Sidebar from '../Sidebar/page';
import TopNav from '../TopNav/page';

interface CardProps {
  titles: string[];
  price: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ titles, price, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-400 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={imageUrl} alt={titles.join(', ')} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="space-y-1">
          {titles.map((title, index) => (
            <h3 key={index} className="text-lg font-semibold">{title}</h3>
          ))}
        </div>
        <p className="text-gray-500">{price}</p>
      </div>
    </div>
  );
};

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="ml-64 flex-1 flex flex-col">
        <div className="fixed top-0 left-64 right-0 bg-white shadow-md z-10">
          <TopNav />
        </div>
        <main className="flex-1 mt-16 p-6 bg-gray-100"> {/* Adjusted for TopNav height */}
          <div className="grid grid-cols-3 gap-6">
            <Card 
              titles={["Innovative Design" ,"Crafting logos that speak volumes in simplicity."]}
              price="$20.00" 
              imageUrl="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/115533372/original/36a26451dd7876335f8f646d41edf6868bea0a93/do-modern-minimalist-logo-design-for-your-business.jpg" 
            />
            <Card 
              titles={["Creative Identity","Bringing unique ideas to life through design." ]}
              price="$25.00" 
              imageUrl="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/192945874/original/45074ea0dfcd30781722c0cc82cdd54355d2102d/do-minimal-logo-design.jpg" 
            />
            <Card 
              titles={["Modern Aesthetics","Where minimalism meets creativity." ]}
              price="$30.00" 
              imageUrl="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/118973381/original/f01a0be51cecefcf606f7f44c27fabb2cc4e4f40/do-minimalist-negative-space-logo-design.jpg" 
            />
            <Card 
              titles={["Fresh Perspectives","Designing logos with a modern twist." ]}
              price="$35.00" 
              imageUrl="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/409631/original/7659bb765838d281f3b828de92e963f6581435e9/make-any-kind-of-logo-design.jpg" 
            />
            <Card 
              titles={["Elegant Solutions","Combining style and substance in every design." ]}
              price="$40.00" 
              imageUrl="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" 
            />
            <Card 
              titles={["Tech Savvy","Designs that resonate with the digital age." ]}
              price="$45.00" 
              imageUrl="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/333083194/original/b87da161b8d2893be741028a9cf38de07e723f64/do-a-modern-versatile-and-timeless-logo-design.jpg" 
            />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
