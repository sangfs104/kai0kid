"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Variants for hover and click glitch effect
  const linkHoverVariants = {
    initial: { scale: 1, x: 0, y: 0 },
    hover: {
      scale: 1.1,
      x: [0, 3, -3, 2, -2, 0],
      y: [0, 2, -2, 0],
      transition: {
        x: { repeat: Infinity, duration: 0.3, repeatDelay: 1, ease: "linear" },
        y: { repeat: Infinity, duration: 0.3, repeatDelay: 1, ease: "linear" },
        scale: { duration: 0.2, ease: "easeOut" },
      },
    },
    click: {
      scale: 1.2,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  // Variants for neon glow effect
  const neonVariants = {
    initial: {
      filter: "drop-shadow(0 0 5px #39ff14) drop-shadow(0 0 10px #39ff14)",
    },
    hover: {
      filter: [
        "drop-shadow(0 0 5px #ff00ff) drop-shadow(0 0 10px #ff00ff)",
        "drop-shadow(0 0 10px #ff00ff) drop-shadow(0 0 15px #ff00ff)",
        "drop-shadow(0 0 5px #ff00ff) drop-shadow(0 0 10px #ff00ff)",
      ],
      transition: {
        filter: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "easeInOut" as const,
        },
      },
    },
    active: {
      filter: [
        "drop-shadow(0 0 5px #39ff14) drop-shadow(0 0 10px #39ff14)",
        "drop-shadow(0 0 10px #39ff14) drop-shadow(0 0 15px #39ff14)",
        "drop-shadow(0 0 5px #39ff14) drop-shadow(0 0 10px #39ff14)",
      ],
      scale: 1.05,
      transition: {
        filter: {
          duration: 1,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "easeInOut" as const,
        },
        scale: {
          duration: 1,
          ease: "easeInOut" as const,
        },
      },
    },
    click: {
      scale: 1.2,
      filter: "drop-shadow(0 0 15px #39ff14) drop-shadow(0 0 20px #39ff14)",
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  // Handle link click with loading state
  const handleLinkClick = (href: string) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(href);
      setIsLoading(false);
    }, 1000); // 1-second delay for loading effect
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-3 sm:py-4 md:py-6 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-60">
          <div className="loader"></div>
        </div>
      )}
      <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-3 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 text-neon-green text-sm sm:text-base md:text-lg lg:text-xl font-hacker">
          <Link href="/" passHref legacyBehavior>
            <motion.a
              className="relative"
              variants={{ ...linkHoverVariants, ...neonVariants }}
              initial="initial"
              whileHover="hover"
              whileTap="click"
              animate={pathname === "/" ? "active" : "initial"}
              style={{ color: "#39ff14" }}
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== "/") handleLinkClick("/");
              }}
            >
              &lt;HOME/&gt;
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-neon-green scale-x-0 transition-transform duration-300 origin-left ${
                  pathname === "/" ? "scale-x-100" : "group-hover:scale-x-100"
                }`}
              ></span>
            </motion.a>
          </Link>
          <Link href="/write-up" passHref legacyBehavior>
            <motion.a
              className="relative"
              variants={{ ...linkHoverVariants, ...neonVariants }}
              initial="initial"
              whileHover="hover"
              whileTap="click"
              animate={pathname === "/write-up" ? "active" : "initial"}
              style={{ color: "#39ff14" }}
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== "/write-up") handleLinkClick("/write-up");
              }}
            >
              &lt;WRITE UP/&gt;
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-neon-green scale-x-0 transition-transform duration-300 origin-left ${
                  pathname === "/write-up"
                    ? "scale-x-100"
                    : "group-hover:scale-x-100"
                }`}
              ></span>
            </motion.a>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <motion.a
              className="relative"
              variants={{ ...linkHoverVariants, ...neonVariants }}
              initial="initial"
              whileHover="hover"
              whileTap="click"
              animate={pathname === "/about" ? "active" : "initial"}
              style={{ color: "#39ff14" }}
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== "/about") handleLinkClick("/about");
              }}
            >
              &lt;ABOUT/&gt;
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-neon-green scale-x-0 transition-transform duration-300 origin-left ${
                  pathname === "/about"
                    ? "scale-x-100"
                    : "group-hover:scale-x-100"
                }`}
              ></span>
            </motion.a>
          </Link>
          <Link href="/others" passHref legacyBehavior>
            <motion.a
              className="relative"
              variants={{ ...linkHoverVariants, ...neonVariants }}
              initial="initial"
              whileHover="hover"
              whileTap="click"
              animate={pathname === "/others" ? "active" : "initial"}
              style={{ color: "#39ff14" }}
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== "/others") handleLinkClick("/others");
              }}
            >
              &lt;OTHERS/&gt;
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-neon-green scale-x-0 transition-transform duration-300 origin-left ${
                  pathname === "/others"
                    ? "scale-x-100"
                    : "group-hover:scale-x-100"
                }`}
              ></span>
            </motion.a>
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
        }

        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #39ff14;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
