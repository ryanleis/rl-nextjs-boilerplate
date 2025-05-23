"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/ai-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8,
          }}
        />
        
        {/* Dark overlay - adjusted for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/97 via-blue-900/92 to-slate-900/97" />

        {/* Floating AI Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-64 h-64 rounded-full opacity-[0.15] blur-3xl"
              style={{
                background: `radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, rgba(59, 130, 246, 0) 70%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `scale(${0.5 + Math.random()})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header Navigation */}
      <header className="fixed w-full bg-black/30 backdrop-blur-lg z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="AI Platform Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Platform
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/#products" className="hover:text-blue-400 transition">Products</Link>
            <Link href="/#solutions" className="hover:text-blue-400 transition">Solutions</Link>
            <Link href="/about" className="hover:text-blue-400 transition">About Us</Link>
            <Link href="/#resources" className="hover:text-blue-400 transition">Resources</Link>
            <Link href="/#contact" className="hover:text-blue-400 transition">Contact</Link>
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
              <Link href="/#products" className="hover:text-blue-400 transition py-2 border-b border-white/10">Products</Link>
              <Link href="/#solutions" className="hover:text-blue-400 transition py-2 border-b border-white/10">Solutions</Link>
              <Link href="/about" className="hover:text-blue-400 transition py-2 border-b border-white/10">About Us</Link>
              <Link href="/#resources" className="hover:text-blue-400 transition py-2 border-b border-white/10">Resources</Link>
              <Link href="/#contact" className="hover:text-blue-400 transition py-2">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              Next-Gen AI Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
              Transform your business with cutting-edge artificial intelligence technology
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-transparent" />
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-md">Our AI Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="text-4xl mb-4 drop-shadow-md">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white drop-shadow-sm">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {statPoints.map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/30 text-center shadow-lg"
                >
                  <p className="text-lg text-white drop-shadow-sm">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

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