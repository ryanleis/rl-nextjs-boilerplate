"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
            <Link href="/about" className="text-blue-400 transition">About Us</Link>
            <Link href="/#resources" className="hover:text-blue-400 transition">Resources</Link>
            <Link href="/#contact" className="hover:text-blue-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              About Us
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
              Pioneering the future of artificial intelligence
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-transparent" />
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-md">Our Mission</h2>
              <p className="text-gray-200 mb-6">
                At NEXAI Solutions, we're dedicated to democratizing artificial intelligence and making it accessible to businesses of all sizes. Our mission is to empower organizations with cutting-edge AI technology that drives innovation and growth.
              </p>
              <p className="text-gray-200 mb-6">
                Founded in 2020, we've been at the forefront of AI development, helping companies transform their operations and unlock new possibilities through intelligent automation and data-driven insights.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-md">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20">
                <h3 className="text-xl font-bold mb-4 text-white drop-shadow-sm">Innovation</h3>
                <p className="text-gray-200">Pushing the boundaries of what's possible with AI technology</p>
              </div>
              <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20">
                <h3 className="text-xl font-bold mb-4 text-white drop-shadow-sm">Excellence</h3>
                <p className="text-gray-200">Delivering the highest quality solutions and support</p>
              </div>
              <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20">
                <h3 className="text-xl font-bold mb-4 text-white drop-shadow-sm">Integrity</h3>
                <p className="text-gray-200">Building trust through ethical AI practices and transparency</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-transparent" />
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-md">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/30 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">John Smith</h3>
                <p className="text-blue-400 mb-2">CEO & Founder</p>
                <p className="text-gray-200">AI visionary with 15+ years of experience</p>
              </div>
              <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/30 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-4xl">👩‍💻</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Sarah Johnson</h3>
                <p className="text-blue-400 mb-2">CTO</p>
                <p className="text-gray-200">Machine Learning expert and innovator</p>
              </div>
              <div className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/30 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-4xl">👨‍🔬</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Michael Chen</h3>
                <p className="text-blue-400 mb-2">Head of Research</p>
                <p className="text-gray-200">Leading breakthrough AI research</p>
              </div>
            </div>
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