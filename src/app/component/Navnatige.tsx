"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 sm:py-6 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-16">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-neon-green text-xl sm:text-2xl lg:text-3xl font-bold font-hacker tracking-wider animate-pulse cursor-pointer"
        >
          <Image
            src="/img/Kai0Kid.jpg"
            alt="Logo"
            className="h-8 sm:h-10 lg:h-12 w-auto"
            width={100}
            height={32}
            priority
          />
        </Link>

        {/* Main Title with Glitch Effect */}
        <Link href="/" className="relative glitch cursor-pointer">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-neon-purple">
            kai0kid
            <span className="absolute inset-0 text-neon-green opacity-50 blur-sm animate-glitch-alt">
              kai0kid
            </span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 text-neon-green text-sm sm:text-base lg:text-lg font-hacker">
          <Link
            href="/write-up"
            className="relative group hover:text-neon-purple transition-all duration-300"
          >
            &lt;WRITE UP/&gt;
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="/about"
            className="relative group hover:text-neon-purple transition-all duration-300"
          >
            &lt;ABOUT/&gt;
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="/others"
            className="relative group hover:text-neon-purple transition-all duration-300"
          >
            &lt;OTHERS/&gt;
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        /* Custom Hacker Font */
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=VT323&display=swap");

        .font-hacker {
          font-family: "VT323", monospace;
        }

        /* Neon Colors */
        .text-neon-green {
          color: #39ff14;
          text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14;
        }

        .text-neon-purple {
          color: #ff00ff;
          text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff;
        }

        /* Glitch Animation */
        .glitch {
          position: relative;
          animation: glitch 1.5s infinite;
        }

        .animate-glitch-alt {
          animation: glitch-alt 1.5s infinite;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
            opacity: 1;
          }
          10% {
            transform: translate(-2px, 2px);
            opacity: 0.8;
          }
          20% {
            transform: translate(2px, -2px);
            opacity: 0.9;
          }
          30% {
            transform: translate(-3px, 3px);
            opacity: 0.7;
          }
          40% {
            transform: translate(3px, -3px);
            opacity: 0.8;
          }
          50% {
            transform: translate(0);
            opacity: 1;
          }
        }

        @keyframes glitch-alt {
          0% {
            transform: translate(0);
            opacity: 0.5;
          }
          10% {
            transform: translate(3px, -3px);
            opacity: 0.4;
          }
          20% {
            transform: translate(-3px, 3px);
            opacity: 0.3;
          }
          30% {
            transform: translate(2px, -2px);
            opacity: 0.4;
          }
          40% {
            transform: translate(-2px, 2px);
            opacity: 0.3;
          }
          50% {
            transform: translate(0);
            opacity: 0.5;
          }
        }

        /* Pulse Animation for Logo */
        .animate-pulse {
          animation: pulse 3s infinite ease-in-out;
        }

        @keyframes pulse {
          0% {
            text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14;
          }
          50% {
            text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
          }
          100% {
            text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14;
          }
        }

        /* Responsive Adjustments */
        @media (max-width: 480px) {
          .text-3xl {
            font-size: 1.75rem;
          }
          .text-xl {
            font-size: 1.125rem;
          }
          .text-sm {
            font-size: 0.75rem;
          }
          .h-8 {
            height: 1.75rem;
          }
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .gap-4 {
            gap: 0.75rem;
          }
        }

        @media (min-width: 481px) and (max-width: 640px) {
          .text-3xl {
            font-size: 2.25rem;
          }
          .text-xl {
            font-size: 1.25rem;
          }
          .text-sm {
            font-size: 0.875rem;
          }
          .h-8 {
            height: 2rem;
          }
          .px-4 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .gap-4 {
            gap: 1rem;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .text-5xl {
            font-size: 3rem;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
          .text-base {
            font-size: 0.875rem;
          }
          .h-10 {
            height: 2.5rem;
          }
          .gap-6 {
            gap: 1.25rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .text-5xl {
            font-size: 4rem;
          }
          .text-2xl {
            font-size: 1.75rem;
          }
          .text-base {
            font-size: 1rem;
          }
          .h-10 {
            height: 2.75rem;
          }
          .gap-6 {
            gap: 1.5rem;
          }
        }

        @media (min-width: 1025px) {
          .text-7xl {
            font-size: 5rem;
          }
          .text-3xl {
            font-size: 2rem;
          }
          .text-lg {
            font-size: 1.125rem;
          }
          .h-12 {
            height: 3rem;
          }
          .gap-10 {
            gap: 2rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
