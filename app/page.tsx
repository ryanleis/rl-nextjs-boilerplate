"use client";
import { useState } from "react";
import Image from "next/image";

// Define types for better TypeScript support
type Feature = {
  title: string;
  description: string;
  icon: string;
};

type StatPoint = string;

export default function Home() {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Features data
  const features: Feature[] = [
    {
      title: "Predictive Analytics",
      description: "Harness the power of AI to predict trends and make data-driven decisions faster than ever before.",
      icon: "🔮"
    },
    {
      title: "Natural Language Processing",
      description: "Transform customer interactions with advanced NLP algorithms that understand context and intent.",
      icon: "💬"
    },
    {
      title: "Computer Vision",
      description: "Leverage visual intelligence to automate inspections, enhance security, and unlock new insights.",
      icon: "👁️"
    }
  ];

  // Stats data
  const statPoints: StatPoint[] = [
    "99.8% accuracy in predictive modeling",
    "60% reduction in operational costs",
    "85% faster decision-making processes"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-sans">
      {/* Header Navigation */}
      <header className="fixed w-full bg-black/30 backdrop-blur-lg z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/vercel.svg"
              alt="Company Logo"
              width={32}
              height={32}
              className="invert"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              NEXAI Solutions
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#products" className="hover:text-blue-400 transition">Products</a>
            <a href="#solutions" className="hover:text-blue-400 transition">Solutions</a>
            <a href="#about" className="hover:text-blue-400 transition">About Us</a>
            <a href="#resources" className="hover:text-blue-400 transition">Resources</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#products" className="hover:text-blue-400 transition py-2 border-b border-white/10">Products</a>
              <a href="#solutions" className="hover:text-blue-400 transition py-2 border-b border-white/10">Solutions</a>
              <a href="#about" className="hover:text-blue-400 transition py-2 border-b border-white/10">About Us</a>
              <a href="#resources" className="hover:text-blue-400 transition py-2 border-b border-white/10">Resources</a>
              <a href="#contact" className="hover:text-blue-400 transition py-2">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Powering the Future with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-200">
            Transforming business operations with cutting-edge artificial intelligence solutions designed for tomorrow's challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-4 font-medium transition-colors"
              href="#demo"
            >
              Request Demo
            </a>
            <a
              className="rounded-full border border-white/30 hover:bg-white/10 px-8 py-4 font-medium transition-colors"
              href="#solutions"
            >
              Explore Solutions
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="products" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Solutions</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-blue-900/40 p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition group hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="solutions" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Next-Generation AI Technology</h2>
              <p className="text-gray-300 mb-8">
                Our proprietary neural networks analyze complex data patterns in real-time, providing unprecedented insights and automation capabilities for your business operations.
              </p>
              <ul className="space-y-4">
                {statPoints.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-blue-400">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <a href="#case-studies" className="inline-block mt-8 text-blue-400 hover:underline">
                View case studies →
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10">
                <div className="w-full h-[400px] bg-gradient-to-br from-blue-800 to-purple-900 flex items-center justify-center">
                  <p className="text-lg text-white/70">AI Visualization</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 px-6 py-4 rounded-lg">
                <p className="font-bold">200%</p>
                <p className="text-sm">ROI Average</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the AI revolution and stay ahead of your competition with our cutting-edge solutions.
          </p>
          <a
            className="rounded-full bg-white text-blue-900 hover:bg-blue-100 px-8 py-4 font-bold text-lg transition-colors inline-block"
            href="#contact"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#news" className="text-gray-400 hover:text-white">News & Press</a></li>
                <li><a href="#partners" className="text-gray-400 hover:text-white">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#ai-platform" className="text-gray-400 hover:text-white">AI Platform</a></li>
                <li><a href="#analytics" className="text-gray-400 hover:text-white">Analytics Suite</a></li>
                <li><a href="#automation" className="text-gray-400 hover:text-white">Automation Tools</a></li>
                <li><a href="#integrations" className="text-gray-400 hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#docs" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#webinars" className="text-gray-400 hover:text-white">Webinars</a></li>
                <li><a href="#support" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#linkedin" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="#twitter" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#github" className="text-gray-400 hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/vercel.svg"
                alt="NEXAI Logo"
                width={24}
                height={24}
                className="invert"
              />
              <span className="font-bold">NEXAI Solutions</span>
            </div>
            <p className="text-gray-400 text-sm">© 2025 NEXAI Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}