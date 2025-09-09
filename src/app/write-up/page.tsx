"use client";
import React, { useState } from "react";
import {
  Github,
  Terminal,
  Code,
  Tag,
  Calendar,
  Clock,
  ExternalLink,
  Search,
} from "lucide-react";
import Image from "next/image";
import NavBar from "../component/Navnatige";
import HackerFooter from "../component/Footer";

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 3;

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
    {
      title: "Tối ưu hóa SEO cho Blog",
      date: "03-15-2025",
      category: "SEO",
      tags: ["SEO", "Blogging"],
      description:
        "Hướng dẫn cách tối ưu hóa bài viết blog cho công cụ tìm kiếm.",
      words: 1200,
      minutes: 6,
      image:
        "https://images.unsplash.com/photo-1516321310762-4794370e6a2f?w=800&h=400&fit=crop",
    },
    {
      title: "Giới thiệu Next.js 14",
      date: "02-10-2025",
      category: "Công nghệ",
      tags: ["Next.js", "React"],
      description: "Khám phá các tính năng mới trong Next.js 14.",
      words: 900,
      minutes: 5,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&h=400&fit=crop",
    },
    {
      title: "Xây dựng API với Node.js",
      date: "01-05-2025",
      category: "Lập trình",
      tags: ["Node.js", "API"],
      description: "Hướng dẫn xây dựng API RESTful với Node.js và Express.",
      words: 1500,
      minutes: 8,
      image:
        "https://images.unsplash.com/photo-1516321310762-4794370e6a2f?w=800&h=400&fit=crop",
    },
    {
      title: "Thiết kế giao diện người dùng",
      date: "12-20-2024",
      category: "Thiết kế",
      tags: ["UI", "UX"],
      description: "Mẹo thiết kế giao diện người dùng thân thiện và hiện đại.",
      words: 800,
      minutes: 4,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    },
  ];

  // Filter posts based on search query
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white pt-24">
        <div className="container mx-auto px-8 py-16">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Tìm kiếm theo tiêu đề hoặc thẻ..."
                className="w-full p-3 pl-10 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sticky top-24">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
                    <Image
                      src="/img/Kai0Kid.jpg"
                      alt="Hồ sơ"
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
                    Danh mục
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
                      <span>Ví dụ</span>
                      <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                        3
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
                      <span>SEO</span>
                      <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                        1
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
                      <span>Công nghệ</span>
                      <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                        1
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
                      <span>Lập trình</span>
                      <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                        1
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded hover:bg-white/10 transition-all">
                      <span>Thiết kế</span>
                      <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                        1
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">
                    Thẻ
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">
                      Ví dụ
                    </span>
                    <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                      Video
                    </span>
                    <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                      SEO
                    </span>
                    <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                      API
                    </span>
                    <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                      UI
                    </span>
                    <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">
                      UX
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="space-y-8">
                {currentPosts.length > 0 ? (
                  currentPosts.map((post, index) => (
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

                            <p className="text-gray-300 mb-4">
                              {post.description}
                            </p>

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
                  ))
                ) : (
                  <p className="text-center text-gray-400">
                    Không tìm thấy bài viết nào.
                  </p>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => paginate(page)}
                        className={`px-4 py-2 rounded-full ${
                          currentPage === page
                            ? "bg-purple-500 text-white"
                            : "bg-white/10 text-gray-300 hover:bg-white/20"
                        } transition-all`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <HackerFooter />
    </>
  );
};

export default BlogSection;
