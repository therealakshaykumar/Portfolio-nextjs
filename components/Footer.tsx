"use client"
import React, { useEffect } from "react";

export default function Footer() {

  useEffect(() => {
    const logVisit = async () => {
      try {
        await fetch('/api/ping', { 
          method: 'POST',  
          keepalive: true  
        });
      } catch (error) {
        console.error('Error logging visit:', error);
      }
    };
    
    logVisit();
  }, []);

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} <span className="text-red-600 mx-1">Akshay</span>. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}