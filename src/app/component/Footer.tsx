"use client";
import React, { useState, useEffect } from "react";
import {
  Terminal,
  Wifi,
  Shield,
  Lock,
  Eye,
  Zap,
  Globe,
  Code,
  Database,
  Server,
} from "lucide-react";

const HackerFooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hackingText, setHackingText] = useState("");
  const [networkStatus, setNetworkStatus] = useState("SECURE");
  const [connections, setConnections] = useState(1337);

  const hackingMessages = [
    "Infiltrating mainframe...",
    "Bypassing encryption...",
    "Establishing secure tunnel...",
    "Accessing dark web nodes...",
    "Deploying stealth protocols...",
    "Scanning for vulnerabilities...",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const hackingTimer = setInterval(() => {
      const randomMessage =
        hackingMessages[Math.floor(Math.random() * hackingMessages.length)];
      setHackingText(randomMessage);
    }, 3000);

    const statusTimer = setInterval(() => {
      const statuses = ["SECURE", "ENCRYPTED", "ANONYMOUS", "PROTECTED"];
      setNetworkStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      setConnections((prev) => prev + Math.floor(Math.random() * 10) - 5);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(hackingTimer);
      clearInterval(statusTimer);
    };
  }, []);

  const socialLinks = [
    { icon: Terminal, label: "GitHub", handle: "@cyberghost" },
    { icon: Shield, label: "Discord", handle: "CyberGhost#1337" },
    { icon: Globe, label: "Website", handle: "cyberghost.dev" },
    { icon: Database, label: "Email", handle: "contact@encrypted.net" },
  ];

  const quickStats = [
    { label: "Active Connections", value: connections, icon: Wifi },
    { label: "Encryption Level", value: "256-bit", icon: Lock },
    { label: "Uptime", value: "99.9%", icon: Zap },
    { label: "Network Status", value: networkStatus, icon: Shield },
  ];

  return (
    <footer className="bg-black border-t-2 border-green-500/50 text-green-400 font-mono relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-10 h-full">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="border border-green-500/20 animate-pulse"
              style={{ animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
        </div>
      </div>

      {/* Glitch Effect Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Top Section - Status Bar */}
        <div className="bg-gray-900/80 border border-green-500/30 rounded-lg p-4 mb-6 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* System Status */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-300">System Online</span>
              </div>
              <div className="text-green-500 text-sm">
                {currentTime.toLocaleTimeString()} UTC
              </div>
            </div>

            {/* Hacking Status */}
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-400 text-sm">{hackingText}</span>
            </div>

            {/* Network Info */}
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-green-500" />
              <span className="text-green-300 text-sm">
                Surveillance: Blocked
              </span>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Quick Stats */}
          <div className="space-y-4">
            <h3 className="text-green-300 font-bold text-sm uppercase tracking-wider border-b border-green-500/30 pb-2">
              System Stats
            </h3>
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center space-x-2">
                  <stat.icon className="w-4 h-4 text-green-500" />
                  <span className="text-green-400">{stat.label}:</span>
                </div>
                <span className="text-green-300 font-bold">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-green-300 font-bold text-sm uppercase tracking-wider border-b border-green-500/30 pb-2">
              Contact Protocols
            </h3>
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 hover:text-green-300 transition-colors cursor-pointer"
              >
                <link.icon className="w-4 h-4 text-green-500" />
                <div className="text-sm">
                  <div className="text-green-400">{link.label}</div>
                  <div className="text-green-600 text-xs">{link.handle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Security Info */}
          <div className="space-y-4">
            <h3 className="text-green-300 font-bold text-sm uppercase tracking-wider border-b border-green-500/30 pb-2">
              Security Protocols
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-green-500" />
                <span className="text-green-400">End-to-End Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-green-400">Zero-Log Policy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="w-4 h-4 text-green-500" />
                <span className="text-green-400">Distributed Network</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-green-500" />
                <span className="text-green-400">Anonymous Access</span>
              </div>
            </div>
          </div>

          {/* Legal/Warning */}
          <div className="space-y-4">
            <h3 className="text-green-300 font-bold text-sm uppercase tracking-wider border-b border-green-500/30 pb-2">
              Legal Notice
            </h3>
            <div className="text-xs text-green-600 space-y-2">
              <p>
                This profile is for educational and demonstration purposes only.
              </p>
              <p>Unauthorized access to computer systems is illegal.</p>
              <p>Use responsibly and ethically.</p>
              <div className="mt-3 p-2 bg-red-900/20 border border-red-500/30 rounded text-red-400">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span className="text-xs font-bold">WARNING</span>
                </div>
                <p className="text-xs mt-1">High-Security Zone</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500/30 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-green-600 text-sm">
              © 2024 CyberGhost. All rights reserved. | Built with React &
              Tailwind
            </div>

            {/* Terminal Command */}
            <div className="bg-gray-900/60 border border-green-500/30 rounded px-4 py-2 text-sm">
              <span className="text-green-500">root@darkweb:~$</span>
              <span className="text-green-400 ml-2">
                stay_anonymous && keep_hacking()
              </span>
              <span className="animate-pulse text-green-300">|</span>
            </div>

            {/* Version Info */}
            <div className="text-green-600 text-sm">
              v2.1.337 | Build: {Date.now().toString().slice(-6)}
            </div>
          </div>
        </div>

        {/* Matrix Footer Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 opacity-50 animate-pulse"></div>
      </div>

      {/* Floating particles effect */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-green-400 rounded-full opacity-70 animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </footer>
  );
};

export default HackerFooter;
