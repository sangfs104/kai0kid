"use client";
import React from "react";
import {
  Github,
  Terminal,
  Code,
  Tool,
  Link as LinkIcon,
  Folder,
  Zap,
} from "lucide-react";
import Image from "next/image";

const OthersSection = () => {
  const resources = [
    {
      title: "CyberToolKit",
      type: "Công cụ",
      description:
        "Bộ công cụ tự động hóa phân tích bảo mật mạng, hỗ trợ pentester trong việc quét và khai thác lỗ hổng.",
      link: "https://github.com/yourusername/cybertoolkit",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop",
    },
    {
      title: "DarkWeb Crawler",
      type: "Dự án",
      description:
        "Công cụ thu thập dữ liệu từ dark web với giao diện CLI thân thiện, viết bằng Python.",
      link: "https://github.com/yourusername/darkweb-crawler",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    },
    {
      title: "Hacker Resources",
      type: "Tài nguyên",
      description:
        "Bộ sưu tập các tài liệu và liên kết về bảo mật mạng, CTF, và ethical hacking.",
      link: "https://yourwebsite.com/resources",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
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
                  Danh mục
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
                    <span>Công cụ</span>
                    <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                      1
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
                    <span>Dự án</span>
                    <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                      1
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
                    <span>Tài nguyên</span>
                    <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                      1
                    </span>
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
                    <Tool size={20} />
                  </div>
                  Các nội dung khác
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
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Giới thiệu
                  </a>
                  <a
                    href="/others"
                    className="text-purple-300 hover:text-white transition-colors font-bold"
                  >
                    Khác
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

            <div className="space-y-8">
              {resources.map((resource, index) => (
                <article key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-purple-400/50">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-center gap-4 mb-4 text-sm text-purple-300">
                          <div className="flex items-center gap-1">
                            <Folder size={16} />
                            {resource.type}
                          </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                          {resource.title}
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkIcon
                              className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              size={20}
                            />
                          </a>
                        </h2>

                        <p className="text-gray-300 mb-4">
                          {resource.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-300 hover:text-white transition-colors flex items-center gap-1"
                          >
                            Xem chi tiết <Zap size={16} />
                          </a>
                        </div>
                      </div>

                      <div className="md:w-1/3 relative">
                        <div className="h-48 md:h-full rounded-r-2xl overflow-hidden">
                          <Image
                            src={resource.image}
                            alt={resource.title}
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

export default OthersSection;
