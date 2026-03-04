import React, { useState } from 'react';
import { 
  Shield, 
  Clock, 
  Users, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl italic">B</div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">BuiltLogic 3D</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-medium hover:text-blue-600 transition-colors">Services</a>
            <a href="#portfolio" className="font-medium hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Start a Project</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
              VDC & BIM Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 uppercase tracking-tighter italic">
              Built with <span className="text-blue-500">Precision.</span><br />Modeled for Success.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              Providing high-fidelity 3D modeling and MEP coordination for commercial developers nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center transition-all group uppercase italic">
                Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all">
                Our Capabilities
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800" 
              alt="Architectural Visualization" 
              className="relative rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </header>

      {/* --- NATIONWIDE SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">
                Nationwide 3D Services
              </h2>
              <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mt-2">
                Coast-to-Coast BIM & VDC Support
              </p>
            </div>
            <p className="text-slate-600 max-w-md text-lg italic">
              "Delivering high-precision modeling for developers and contractors across the United States."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 border border-slate-100 rounded-3xl hover:border-blue-500 transition-all bg-slate-50 hover:bg-white hover:shadow-2xl">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6 font-bold">MEP</div>
              <h3 className="text-xl font-bold mb-3">National MEP Coordination</h3>
              <p className="text-slate-600 leading-relaxed">
                Complex mechanical, electrical, and plumbing coordination for large-scale commercial projects in any US territory.
              </p>
            </div>

            <div className="group p-8 border border-slate-100 rounded-3xl hover:border-blue-500 transition-all bg-slate-50 hover:bg-white hover:shadow-2xl">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6 font-bold">VDC</div>
              <h3 className="text-xl font-bold mb-3">Architectural VDC</h3>
              <p className="text-slate-600 leading-relaxed">
                Virtual Design and Construction services tailored for nationwide developers looking for precision and scale.
              </p>
            </div>

            <div className="group p-8 border border-slate-100 rounded-3xl hover:border-blue-500 transition-all bg-slate-50 hover:bg-white hover:shadow-2xl">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6 font-bold">SCAN</div>
              <h3 className="text-xl font-bold mb-3">3D Laser Scanning</h3>
              <p className="text-slate-600 leading-relaxed">
                As-built documentation and reality capture services available for job sites from New York to California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with the Formspree Plumbing */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 bg-blue-600 text-white">
              <h2 className="text-3xl font-black uppercase mb-6 italic leading-none">Let's Build Something <br/>Great.</h2>
              <p className="mb-8 text-blue-100">Tell us about your next nationwide project and get a precision quote within 24 hours.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">contact@builtlogic3d.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">USA Nationwide Service</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-12">
              <form 
                action="https://formspree.io/f/mkovdyvd" 
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-4">
                  <input type="text" name="name" placeholder="Full Name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <textarea name="message" placeholder="Tell us about your project..." rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-slate-800 transition-all uppercase tracking-wider italic">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic">B</div>
            <span className="font-black uppercase italic tracking-tighter">BuiltLogic 3D</span>
          </div>
          <div className="flex space-x-6 text-slate-400">
            <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 hover:text-blue-600 cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 hover:text-blue-600 cursor-pointer transition-colors" />
          </div>
          <p className="text-slate-500 text-sm mt-6 md:mt-0">© 2026 BuiltLogic 3D. Nationwide BIM & VDC Solutions.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;