"use client";
import React from "react";
import {
  Github,
  Terminal,
  Code,
  BookOpen,
  User,
  Mail,
  MapPin,
  Link as LinkIcon,
} from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
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
                    alt="Hồ sơ"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">WhitePaper 白花</h2>
                <p className="text-purple-300 mb-4">Ad Astra Per Aspera.</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github
                      className="text-purple-300 hover:text-white cursor-pointer"
                      size={24}
                    />
                  </a>
                  <a
                    href="https://yourwebsite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Terminal
                      className="text-purple-300 hover:text-white cursor-pointer"
                      size={24}
                    />
                  </a>
                  <a
                    href="https://yourportfolio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code
                      className="text-purple-300 hover:text-white cursor-pointer"
                      size={24}
                    />
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-purple-300">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail size={18} />
                    <a
                      href="mailto:your.email@example.com"
                      className="hover:text-purple-300 transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Việt Nam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkIcon size={18} />
                    <a
                      href="https://yourwebsite.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-colors"
                    >
                      yourwebsite.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nội dung chính */}
          <div className="lg:w-2/3">
            <nav className="mb-12">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-2xl font-bold">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <User size={20} />
                  </div>
                  Giới thiệu
                </div>
                <div className="hidden md:flex items-center gap-8">
                  <a
                    href="/"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Trang chủ
                  </a>
                  <a
                    href="/archive"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Lưu trữ
                  </a>
                  <a
                    href="/about"
                    className="text-purple-300 hover:text-white transition-colors font-bold"
                  >
                    Giới thiệu
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
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

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-6 text-purple-300">
                Về tôi
              </h2>
              <p className="text-gray-300 mb-6">
                Tôi là <span className="text-purple-300">WhitePaper 白花</span>,
                một hacker đam mê khám phá thế giới kỹ thuật số, tìm kiếm những
                giới hạn và vượt qua chúng. Với kinh nghiệm trong lập trình, bảo
                mật mạng, và phát triển web, tôi luôn tìm cách biến những ý
                tưởng thành hiện thực qua từng dòng code.
              </p>
              <p className="text-gray-300 mb-6">
                Hành trình của tôi bắt đầu từ những ngày tự học lập trình trên
                chiếc máy tính cũ, và giờ đây tôi đang chinh phục những thử
                thách mới trong thế giới công nghệ. Mục tiêu của tôi là chia sẻ
                kiến thức, tạo ra những công cụ hữu ích, và truyền cảm hứng cho
                cộng đồng hacker.
              </p>
              <p className="text-gray-300 mb-6">
                "Ad Astra Per Aspera" - Qua những khó khăn để vươn tới các vì
                sao. Tôi tin rằng không có giới hạn nào không thể vượt qua, chỉ
                cần bạn có đủ đam mê và sự kiên trì.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Kỹ năng
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Python",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Cybersecurity",
                  "Penetration Testing",
                  "Linux",
                  "Node.js",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                Dự án nổi bật
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Code size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      Project CyberTool
                    </h4>
                    <p className="text-gray-300">
                      Một bộ công cụ bảo mật mã nguồn mở giúp phát hiện lỗ hổng
                      trong ứng dụng web.
                    </p>
                    <a
                      href="https://github.com/yourusername/cybertool"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-white transition-colors flex items-center gap-1"
                    >
                      Xem trên GitHub <LinkIcon size={16} />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">HackScript</h4>
                    <p className="text-gray-300">
                      Script tự động hóa kiểm tra bảo mật mạng, hỗ trợ
                      pentester.
                    </p>
                    <a
                      href="https://github.com/yourusername/hackscript"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-white transition-colors flex items-center gap-1"
                    >
                      Xem trên GitHub <LinkIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
