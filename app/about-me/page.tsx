"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutMePage() {
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
        {/* Dark overlay */}
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
            <Link href="/about-me" className="text-blue-400 transition">About Me</Link>
            <Link href="/#resources" className="hover:text-blue-400 transition">Resources</Link>
            <Link href="/#contact" className="hover:text-blue-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <section className="relative py-20 px-4">
          <div className="container mx-auto flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg mb-6">
              <Image
                src="/profile.jpg"
                alt="Ryan Leis Profile Picture"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              Ryan Leis
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md mb-8">
              15+ year's experience in Customer Success, Pre-sales, Support and Delivery.<br/>
              Specialising in the development of technology strategy and delivery of cutting edge solutions in Software Engineering, Devops, Cloud, Web and Security.<br/>
              Proven track record of developing and driving adoption strategies, realising business value and ROI.<br/>
              Extensive experience working in high growth SaaS companies in the start up phase.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
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