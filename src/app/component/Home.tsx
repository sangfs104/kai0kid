"use client";
import React, { useState, useEffect } from "react";
import { Terminal, Code } from "lucide-react";

// Thành phần MatrixRain tạo hiệu ứng mưa mã
const MatrixRain = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Phần tử canvas không tồn tại");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Không thể lấy ngữ cảnh 2D");
      return;
    }

    // Hàm cập nhật kích thước canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Tái khởi tạo các giọt mưa khi thay đổi kích thước
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops: number[] = Array(columns).fill(1);
      return drops;
    };

    const chars =
      "アイウエKai0KidオカキクケコサシスKai0KidセソタチツテトKai0KidナニヌネノハヒフヘKai0KidホマミムメモヤユヨKai0KidラリルレロワヲンaKai0KidbcdefghiKai0KidjklmnopqrstuvwKai0Kidxyz0123456789@#$%^&*()Kai0Kid";
    const charArray = chars.split("");
    const fontSize = 14;
    let drops = resizeCanvas(); // Khởi tạo drops ban đầu

    // Vẽ hiệu ứng mưa mã
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00FF41";
      ctx.font = `${fontSize}px monospace`;

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

    // Xử lý sự kiện thay đổi kích thước cửa sổ
    const handleResize = () => {
      drops = resizeCanvas(); // Cập nhật drops khi thay đổi kích thước
    };
    window.addEventListener("resize", handleResize);

    // Dọn dẹp khi component unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

// Thành phần HackerSection hiển thị giao diện hacker
const HackerSection = () => {
  const [command, setCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const commands = [
      "sudo rm -rf /",
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
    <div className="min-h-screen relative bg-black text-green-400 flex flex-col justify-center items-center overflow-hidden font-mono">
      <MatrixRain />

      <div className="relative z-10 text-center px-4 sm:px-8 w-full max-w-5xl">
        <div className="mt-24 sm:mt-32 mb-8">
          <div className="border border-green-400 rounded px-3 py-2 inline-block mb-6">
            <span className="text-green-300">$ </span>
            <span className="text-white">{command}</span>
            <span
              className={`text-green-400 ${showCursor ? "opacity-100" : "opacity-0"
                }`}
            >
              |
            </span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-green-400">
          Attack
          <br />
          is the best defense.
        </h2>

        <p className="text-lg sm:text-xl mb-8 text-green-300 max-w-2xl mx-auto">
          Tôi Chỉ Là 1 Người Bình Thường, Bạn Đang Tìm Gì Ở Tôi?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-green-400 text-black px-6 py-2 sm:px-8 sm:py-3 font-bold hover:bg-green-300 transition-all duration-300 flex items-center gap-2"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            <Terminal size={20} />
            Connect
          </button>
          <button
            className="border border-green-400 text-green-400 px-6 py-2 sm:px-8 sm:py-3 font-bold hover:bg-green-400 hover:text-black transition-all duration-300 flex items-center gap-2"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            <Code size={20} />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackerSection;
