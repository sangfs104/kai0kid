// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   Terminal,
//   Github,
//   Code,
//   BookOpen,
//   Tag,
//   Calendar,
//   Clock,
//   ExternalLink,
// } from "lucide-react";
// import Image from "next/image"; // Import next/image

// const MatrixRain = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d");

//     if (!ctx) {
//       console.error("Failed to get 2D context");
//       return;
//     }

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const chars =
//       "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
//     const charArray = chars.split("");

//     const fontSize = 14;
//     const columns = canvas.width / fontSize;
//     const drops: number[] = [];

//     for (let x = 0; x < columns; x++) {
//       drops[x] = 1;
//     }

//     const draw = () => {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "#00FF41";
//       ctx.font = fontSize + "px monospace";

//       for (let i = 0; i < drops.length; i++) {
//         const text = charArray[Math.floor(Math.random() * charArray.length)];
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }
//         drops[i]++;
//       }
//     };

//     const interval = setInterval(draw, 35);

//     return () => clearInterval(interval);
//   }, []);

//   return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
// };

// const HackerSection = () => {
//   const [command, setCommand] = useState("");
//   const [showCursor, setShowCursor] = useState(true);

//   useEffect(() => {
//     const commands = [
//       "./secure_your_digital_assets.sh",
//       "whoami",
//       "ls -la /home/kai0kid",
//     ];
//     let currentIndex = 0;
//     let charIndex = 0;

//     const typeCommand = () => {
//       if (charIndex < commands[currentIndex].length) {
//         setCommand(commands[currentIndex].substring(0, charIndex + 1));
//         charIndex++;
//         setTimeout(typeCommand, 100);
//       } else {
//         setTimeout(() => {
//           charIndex = 0;
//           currentIndex = (currentIndex + 1) % commands.length;
//           setCommand("");
//           setTimeout(typeCommand, 500);
//         }, 2000);
//       }
//     };

//     typeCommand();

//     const cursorInterval = setInterval(() => {
//       setShowCursor((prev) => !prev);
//     }, 500);

//     return () => clearInterval(cursorInterval);
//   }, []);

//   return (
//     <div className="min-h-screen relative bg-black text-green-400 flex flex-col justify-center items-center overflow-hidden">
//       <MatrixRain />

//       <div className="relative z-10 text-center px-8">
//         <nav className="absolute top-8 left-0 right-0 z-20 flex justify-center items-center">
//           <div className="text-green-400 font-mono text-xl font-bold">
//             sanghacker
//           </div>
//           <h1 className="text-6xl font-mono font-bold mt-0 mb-2 text-green-400 glitch mx-4">
//             kai0kid
//           </h1>
//           <div className="hidden md:flex space-x-8 text-green-400 font-mono">
//             <a href="#" className="hover:text-green-300">
//               &lt;ABOUT/&gt;
//             </a>
//             <a href="#" className="hover:text-green-300">
//               &lt;SERVICES/&gt;
//             </a>
//             <a href="#" className="hover:text-green-300">
//               &lt;PRICING/&gt;
//             </a>
//             <a href="#" className="hover:text-green-300">
//               &lt;BLOGS/&gt;
//             </a>
//             <a href="#" className="hover:text-green-300">
//               &lt;CONTACT/&gt;
//             </a>
//           </div>
//         </nav>

//         <div className="mb-8 mt-20">
//           <div className="border border-green-400 rounded px-4 py-2 inline-block mb-6">
//             <span className="text-green-300">$ </span>
//             <span className="text-white">{command}</span>
//             <span
//               className={`text-green-400 ${
//                 showCursor ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               |
//             </span>
//           </div>
//         </div>

//         <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 text-green-400">
//           ADVANCED CYBERSECURITY
//           <br />
//           SOLUTIONS
//         </h2>

//         <p className="text-xl mb-8 text-green-300 max-w-3xl mx-auto">
//           Protect Your Business from Cyber Threats and Attacks with Confidence.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-green-400 text-black px-8 py-3 font-mono font-bold hover:bg-green-300 transition-all duration-300 flex items-center gap-2">
//             <Terminal size={20} />
//             INITIATE CONTACT
//           </button>
//           <button className="border border-green-400 text-green-400 px-8 py-3 font-mono font-bold hover:bg-green-400 hover:text-black transition-all duration-300 flex items-center gap-2">
//             <Code size={20} />
//             PRICING PLAN
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .glitch {
//           animation: glitch 2s infinite;
//         }

//         @keyframes glitch {
//           0% {
//             transform: translate(0);
//           }
//           20% {
//             transform: translate(-2px, 2px);
//           }
//           40% {
//             transform: translate(-2px, -2px);
//           }
//           60% {
//             transform: translate(2px, 2px);
//           }
//           80% {
//             transform: translate(2px, -2px);
//           }
//           100% {
//             transform: translate(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// const BlogSection = () => {
//   const posts = [
//     {
//       title: "Markdown Tutorial",
//       date: "01-20-2025",
//       category: "Examples",
//       tags: ["Markdown", "Blogging"],
//       description: "A simple example of a Markdown blog post.",
//       words: 1700,
//       minutes: 9,
//       image:
//         "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
//     },
//     {
//       title: "Markdown Example",
//       date: "10-01-2023",
//       category: "Examples",
//       tags: ["Markdown", "Blogging"],
//       description: "A simple example of a Markdown blog post.",
//       words: 438,
//       minutes: 2,
//       image:
//         "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
//     },
//     {
//       title: "Include Video in the Posts",
//       date: "08-01-2022",
//       category: "Examples",
//       tags: ["Example", "Video"],
//       description:
//         "This post demonstrates how to include embedded video in a blog post.",
//       words: 650,
//       minutes: 3,
//       image:
//         "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
//       <div className="container mx-auto px-8 py-16">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Sidebar */}
//           <div className="lg:w-1/3">
//             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sticky top-8">
//               <div className="text-center mb-8">
//                 <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
//                   <Image
//                     src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=face"
//                     alt="Profile"
//                     width={200}
//                     height={200}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2 className="text-2xl font-bold mb-2">WhitePaper 白花</h2>
//                 <p className="text-purple-300 mb-4">Ad Astra Per Aspera.</p>
//                 <div className="flex justify-center gap-4">
//                   <Github
//                     className="text-purple-300 hover:text-white cursor-pointer"
//                     size={24}
//                   />
//                   <Terminal
//                     className="text-purple-300 hover:text-white cursor-pointer"
//                     size={24}
//                   />
//                   <Code
//                     className="text-purple-300 hover:text-white cursor-pointer"
//                     size={24}
//                   />
//                 </div>
//               </div>

//               <div className="mb-8">
//                 <h3 className="text-xl font-bold mb-4 text-purple-300">
//                   Categories
//                 </h3>
//                 <div className="space-y-2">
//                   <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
//                     <span>Examples</span>
//                     <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
//                       3
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold mb-4 text-purple-300">Tags</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">
//                     Example
//                   </span>
//                   <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
//                     Video
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:w-2/3">
//             <nav className="mb-12">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2 text-2xl font-bold">
//                   <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
//                     <BookOpen size={20} />
//                   </div>
//                   Yukina
//                 </div>
//                 <div className="hidden md:flex items-center gap-8">
//                   <a
//                     href="#"
//                     className="text-purple-300 hover:text-white transition-colors"
//                   >
//                     Home
//                   </a>
//                   <a
//                     href="#"
//                     className="text-purple-300 hover:text-white transition-colors"
//                   >
//                     Archive
//                   </a>
//                   <a
//                     href="#"
//                     className="text-purple-300 hover:text-white transition-colors"
//                   >
//                     About
//                   </a>
//                   <a
//                     href="#"
//                     className="text-purple-300 hover:text-white transition-colors"
//                   >
//                     GitHub
//                   </a>
//                   <div className="bg-white/20 p-2 rounded-lg">
//                     <Code size={20} />
//                   </div>
//                 </div>
//               </div>
//             </nav>

//             <div className="space-y-8">
//               {posts.map((post, index) => (
//                 <article key={index} className="group">
//                   <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-purple-400/50">
//                     <div className="flex flex-col md:flex-row">
//                       <div className="md:w-2/3 p-8">
//                         <div className="flex items-center gap-4 mb-4 text-sm text-purple-300">
//                           <div className="flex items-center gap-1">
//                             <Calendar size={16} />
//                             {post.date}
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Tag size={16} />
//                             {post.category}
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Clock size={16} />
//                             {post.minutes} Minutes
//                           </div>
//                         </div>

//                         <h2 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
//                           {post.title}
//                           <ExternalLink
//                             className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
//                             size={20}
//                           />
//                         </h2>

//                         <p className="text-gray-300 mb-4">{post.description}</p>

//                         <div className="flex items-center justify-between">
//                           <div className="flex gap-2">
//                             {post.tags.map((tag, tagIndex) => (
//                               <span
//                                 key={tagIndex}
//                                 className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
//                               >
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>
//                           <div className="text-sm text-gray-400">
//                             {post.words} Words | {post.minutes} Minutes
//                           </div>
//                         </div>
//                       </div>

//                       <div className="md:w-1/3 relative">
//                         <div className="h-48 md:h-full rounded-r-2xl overflow-hidden">
//                           <Image
//                             src={post.image}
//                             alt={post.title}
//                             width={400}
//                             height={200}
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function HackerAnimeProfile() {
//   const [currentSection, setCurrentSection] = useState(0);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setScrollY(scrollPosition);

//       if (scrollPosition > window.innerHeight * 0.5) {
//         setCurrentSection(1);
//       } else {
//         setCurrentSection(0);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative">
//       <div
//         className={`transition-all duration-1000 ${
//           currentSection === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
//         }`}
//       >
//         <HackerSection />
//       </div>

//       <div
//         className={`transition-all duration-1000 ${
//           currentSection === 0 ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <BlogSection />
//       </div>

//       {/* Scroll indicator */}
//       <div className="fixed bottom-8 right-8 z-50">
//         <div className="w-2 h-16 bg-white/20 rounded-full overflow-hidden">
//           <div
//             className="bg-gradient-to-t from-green-400 to-purple-400 rounded-full transition-all duration-300"
//             style={{
//               height: `${Math.min(
//                 (scrollY / (document.body.scrollHeight - window.innerHeight)) *
//                   100,
//                 100
//               )}%`,
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect } from "react";
import {
  Terminal,
  Github,
  Code,
  BookOpen,
  Tag,
  Calendar,
  Clock,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const MatrixRain = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Failed to get 2D context");
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00FF41";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HackerSection = () => {
  const [command, setCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const commands = [
      "./secure_your_digital_assets.sh",
      "whoami",
      "ls -la /home/kai0kid",
    ];
    let currentIndex = 0;
    let charIndex = 0;

    const typeCommand = () => {
      if (charIndex < commands[currentIndex].length) {
        setCommand(commands[currentIndex].substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeCommand, 100);
      } else {
        setTimeout(() => {
          charIndex = 0;
          currentIndex = (currentIndex + 1) % commands.length;
          setCommand("");
          setTimeout(typeCommand, 500);
        }, 2000);
      }
    };

    typeCommand();

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen relative bg-black text-green-400 flex flex-col justify-center items-center overflow-hidden">
      <MatrixRain />

      <div className="relative z-10 text-center px-8">
        <nav className="absolute top-8 left-0 right-0 z-20 flex justify-center items-center">
          <div className="text-green-400 font-mono text-xl font-bold">
            sanghacker
          </div>
          <h1 className="text-6xl font-mono font-bold mt-0 mb-2 text-green-400 glitch mx-4">
            kai0kid
          </h1>
          <div className="hidden md:flex space-x-8 text-green-400 font-mono">
            <a href="#" className="hover:text-green-300">
              &lt;ABOUT/&gt;
            </a>
            <a href="#" className="hover:text-green-300">
              &lt;SERVICES/&gt;
            </a>
            <a href="#" className="hover:text-green-300">
              &lt;PRICING/&gt;
            </a>
            <a href="#" className="hover:text-green-300">
              &lt;BLOGS/&gt;
            </a>
            <a href="#" className="hover:text-green-300">
              &lt;CONTACT/&gt;
            </a>
          </div>
        </nav>

        <div className="mb-8 mt-20">
          <div className="border border-green-400 rounded px-4 py-2 inline-block mb-6">
            <span className="text-green-300">$ </span>
            <span className="text-white">{command}</span>
            <span
              className={`text-green-400 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            >
              |
            </span>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 text-green-400">
          ADVANCED CYBERSECURITY
          <br />
          SOLUTIONS
        </h2>

        <p className="text-xl mb-8 text-green-300 max-w-3xl mx-auto">
          Protect Your Business from Cyber Threats and Attacks with Confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-400 text-black px-8 py-3 font-mono font-bold hover:bg-green-300 transition-all duration-300 flex items-center gap-2">
            <Terminal size={20} />
            INITIATE CONTACT
          </button>
          <button className="border border-green-400 text-green-400 px-8 py-3 font-mono font-bold hover:bg-green-400 hover:text-black transition-all duration-300 flex items-center gap-2">
            <Code size={20} />
            PRICING PLAN
          </button>
        </div>
      </div>

      <style jsx>{`
        .glitch {
          animation: glitch 2s infinite;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
};

const BlogSection = () => {
  const posts = [
    {
      title: "Markdown Tutorial",
      date: "01-20-2025",
      category: "Examples",
      tags: ["Markdown", "Blogging"],
      description: "A simple example of a Markdown blog post.",
      words: 1700,
      minutes: 9,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    },
    {
      title: "Markdown Example",
      date: "10-01-2023",
      category: "Examples",
      tags: ["Markdown", "Blogging"],
      description: "A simple example of a Markdown blog post.",
      words: 438,
      minutes: 2,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    },
    {
      title: "Include Video in the Posts",
      date: "08-01-2022",
      category: "Examples",
      tags: ["Example", "Video"],
      description:
        "This post demonstrates how to include embedded video in a blog post.",
      words: 650,
      minutes: 3,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sticky top-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=face"
                    alt="Profile"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">WhitePaper 白花</h2>
                <p className="text-purple-300 mb-4">Ad Astra Per Aspera.</p>
                <div className="flex justify-center gap-4">
                  <Github
                    className="text-purple-300 hover:text-white cursor-pointer"
                    size={24}
                  />
                  <Terminal
                    className="text-purple-300 hover:text-white cursor-pointer"
                    size={24}
                  />
                  <Code
                    className="text-purple-300 hover:text-white cursor-pointer"
                    size={24}
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-purple-300">
                  Categories
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
                    <span>Examples</span>
                    <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                      3
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">
                    Example
                  </span>
                  <span className="bg-blue-600/耍 px-3 py-1 rounded-full text-sm">
                    Video
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3">
            <nav className="mb-12">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-2xl font-bold">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <BookOpen size={20} />
                  </div>
                  Yukina
                </div>
                <div className="hidden md:flex items-center gap-8">
                  <a
                    href="#"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Archive
                  </a>
                  <a
                    href="#"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Code size={20} />
                  </div>
                </div>
              </div>
            </nav>

            <div className="space-y-8">
              {posts.map((post, index) => (
                <article key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-purple-400/50">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-center gap-4 mb-4 text-sm text-purple-300">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Tag size={16} />
                            {post.category}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            {post.minutes} Minutes
                          </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                          {post.title}
                          <ExternalLink
                            className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            size={20}
                          />
                        </h2>

                        <p className="text-gray-300 mb-4">{post.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {post.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="text-sm text-gray-400">
                            {post.words} Words | {post.minutes} Minutes
                          </div>
                        </div>
                      </div>

                      <div className="md:w-1/3 relative">
                        <div className="h-48 md:h-full rounded-r-2xl overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HackerAnimeProfile() {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      // Calculate total scrollable height
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollHeight(totalHeight);

      if (scrollPosition > window.innerHeight * 0.5) {
        setCurrentSection(1);
      } else {
        setCurrentSection(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scroll percentage
  const scrollPercentage =
    scrollHeight > 0 ? Math.min((scrollY / scrollHeight) * 100, 100) : 0;

  return (
    <div className="relative">
      <div
        className={`transition-all duration-1000 ${
          currentSection === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <HackerSection />
      </div>

      <div
        className={`transition-all duration-1000 ${
          currentSection === 0 ? "opacity-0" : "opacity-100"
        }`}
      >
        <BlogSection />
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-2 h-16 bg-white/20 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-t from-green-400 to-purple-400 rounded-full transition-all duration-300"
            style={{
              height: `${scrollPercentage}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
