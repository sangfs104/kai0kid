"use client";
import React from "react";
import {
  Github,
  Terminal,
  Code,
  BookOpen,
  Tag,
  Calendar,
  Clock,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

// Thành phần BlogSection hiển thị danh sách bài viết
const BlogSection = () => {
  const posts = [
    {
      title: "Hướng dẫn Markdown",
      date: "01-20-2025",
      category: "Ví dụ",
      tags: ["Markdown", "Blogging"],
      description: "Một ví dụ đơn giản về bài đăng blog Markdown.",
      words: 1700,
      minutes: 9,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    },
    {
      title: "Ví dụ Markdown",
      date: "10-01-2023",
      category: "Ví dụ",
      tags: ["Markdown", "Blogging"],
      description: "Một ví dụ đơn giản về bài đăng blog Markdown.",
      words: 438,
      minutes: 2,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    },
    {
      title: "Chèn video vào bài đăng",
      date: "08-01-2022",
      category: "Ví dụ",
      tags: ["Ví dụ", "Video"],
      description: "Bài đăng này hướng dẫn cách chèn video nhúng vào bài blog.",
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
                    alt="Hồ sơ"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">Kai0Kid</h2>
                <p className="text-purple-300 mb-4">Hello, nice to meet you.</p>
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
                  Danh mục
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
                    <span>Ví dụ</span>
                    <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                      3
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">Thẻ</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">
                    Ví dụ
                  </span>
                  <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                    Video
                  </span>
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
                    <BookOpen size={20} />
                  </div>
                  Lê Bá Sang
                </div>
                <div className="hidden md:flex items-center gap-8">
                  <a
                    href="#"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Trang chủ
                  </a>
                  <a
                    href="#"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Lưu trữ
                  </a>
                  <a
                    href="#"
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    Giới thiệu
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
                            {post.minutes} Phút
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
                            {post.words} Từ | {post.minutes} Phút
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

export default BlogSection;
