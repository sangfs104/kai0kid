// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// const NavBar = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-6 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
//       <div className="flex items-center space-x-8 sm:space-x-16">
//         {/* Logo/Brand */}
//         <Link
//           href="/"
//           className="text-neon-green text-2xl sm:text-3xl font-bold font-hacker tracking-wider animate-pulse cursor-pointer"
//         >
//           <Image
//             src="/img/Kai0Kid.jpg" // Đường dẫn đúng đến file logo trong thư mục public
//             alt="Logo"
//             className="h-10 sm:h-12 w-auto" // Đảm bảo chiều cao và chiều rộng tự điều chỉnh qua CSS
//             width={120} // Cung cấp chiều rộng cụ thể (điều chỉnh theo logo thực tế)
//             height={40} // Chiều cao cụ thể (40px cho màn hình nhỏ)
//             priority // Tải trước logo để tối ưu hóa
//           />
//         </Link>

//         {/* Main Title with Glitch Effect */}
//         <Link href="/" className="relative glitch cursor-pointer">
//           <h1 className="text-5xl sm:text-7xl font-bold text-neon-purple">
//             kai0kid
//             <span className="absolute inset-0 text-neon-green opacity-50 blur-sm animate-glitch-alt">
//               kai0kid
//             </span>
//           </h1>
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex space-x-6 sm:space-x-10 text-neon-green text-base sm:text-lg font-hacker">
//           <Link
//             href="/write-up"
//             className="relative group hover:text-neon-purple transition-all duration-300"
//           >
//             &lt;WRITE UP/&gt;
//             <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//           </Link>
//           <Link
//             href="/about"
//             className="relative group hover:text-neon-purple transition-all duration-300"
//           >
//             &lt;ABOUT/&gt;
//             <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//           </Link>
//           <Link
//             href="/others"
//             className="relative group hover:text-neon-purple transition-all duration-300"
//           >
//             &lt;OTHERS/&gt;
//             <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//           </Link>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Custom Hacker Font */
//         @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=VT323&display=swap");

//         .font-hacker {
//           font-family: "VT323", monospace;
//         }

//         /* Neon Colors */
//         .text-neon-green {
//           color: #39ff14;
//           text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14;
//         }

//         .text-neon-purple {
//           color: #ff00ff;
//           text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff;
//         }

//         /* Glitch Animation */
//         .glitch {
//           position: relative;
//           animation: glitch 1.5s infinite;
//         }

//         .animate-glitch-alt {
//           animation: glitch-alt 1.5s infinite;
//         }

//         @keyframes glitch {
//           0% {
//             transform: translate(0);
//             opacity: 1;
//           }
//           10% {
//             transform: translate(-2px, 2px);
//             opacity: 0.8;
//           }
//           20% {
//             transform: translate(2px, -2px);
//             opacity: 0.9;
//           }
//           30% {
//             transform: translate(-3px, 3px);
//             opacity: 0.7;
//           }
//           40% {
//             transform: translate(3px, -3px);
//             opacity: 0.8;
//           }
//           50% {
//             transform: translate(0);
//             opacity: 1;
//           }
//         }

//         @keyframes glitch-alt {
//           0% {
//             transform: translate(0);
//             opacity: 0.5;
//           }
//           10% {
//             transform: translate(3px, -3px);
//             opacity: 0.4;
//           }
//           20% {
//             transform: translate(-3px, 3px);
//             opacity: 0.3;
//           }
//           30% {
//             transform: translate(2px, -2px);
//             opacity: 0.4;
//           }
//           40% {
//             transform: translate(-2px, 2px);
//             opacity: 0.3;
//           }
//           50% {
//             transform: translate(0);
//             opacity: 0.5;
//           }
//         }

//         /* Pulse Animation for Logo */
//         .animate-pulse {
//           animation: pulse 3s infinite ease-in-out;
//         }

//         @keyframes pulse {
//           0% {
//             text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14;
//           }
//           50% {
//             text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
//           }
//           100% {
//             text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14;
//           }
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 640px) {
//           .text-5xl {
//             font-size: 2.5rem;
//           }
//           .text-2xl {
//             font-size: 1.5rem;
//           }
//           .text-base {
//             font-size: 0.875rem;
//           }
//           .space-x-8 {
//             gap: 1.5rem;
//           }
//           .space-x-6 {
//             gap: 1rem;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default NavBar;
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-3 sm:py-4 md:py-6 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-neon-green text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-hacker tracking-wider animate-pulse cursor-pointer"
        >
          <Image
            src="/img/Kai0Kid.jpg"
            alt="Logo"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Main Title with Glitch Effect */}
        <Link href="/" className="relative glitch cursor-pointer">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neon-purple">
            kai0kid
            <span className="absolute inset-0 text-neon-green opacity-50 blur-sm animate-glitch-alt">
              kai0kid
            </span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-3 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 text-neon-green text-sm sm:text-base md:text-lg lg:text-xl font-hacker">
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
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=VT323&display=swap");

        .font-hacker {
          font-family: "VT323", monospace;
        }

        .text-neon-green {
          color: #39ff14;
          text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14;
        }

        .text-neon-purple {
          color: #ff00ff;
          text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff;
        }

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
      `}</style>
    </nav>
  );
};

export default NavBar;
