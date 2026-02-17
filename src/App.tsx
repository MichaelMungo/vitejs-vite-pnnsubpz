import { useState } from 'react';
import {
  Menu, Building2, Ruler, Zap, X, CheckCircle2,
  Play, Mail, Phone, MapPin, Clock, ShieldCheck, 
  Layers, Settings, Video, Send, FileText, Search
} from 'lucide-react';

// --- DATA ---
const projects = [
  { id: 1, title: 'Visualization from 2D Arch to 3D', category: 'Design', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80' },
  { id: 2, title: 'MEPS Conflict Detection - Preconstruction', category: 'Engineering', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Structural Shop Drawing Verification', category: 'Construction', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80' },
  { id: 4, title: 'Underground Utility & MEP Locations', category: 'Civil', image: 'https://images.unsplash.com/photo-1590483734724-383b853b3178?auto=format&fit=crop&q=80' },
  { id: 5, title: 'Comprehensive RFIs', category: 'Communication', image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80' },
  { id: 6, title: 'Full Build Sequencing', category: 'Management', image: 'https://images.unsplash.com/photo-1531834685032-c7446445339c?auto=format&fit=crop&q=80' },
];

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-slate-900/50 p-8 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all group hover:-translate-y-1">
    <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <Icon className="text-blue-500 group-hover:text-white" size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          {/* Left Side: Hamburger Menu */}
          <div className="text-white hover:text-blue-500 transition-colors cursor-pointer flex items-center">
            <Menu size={28} />
          </div>

          {/* Right Side: Desktop Links */}
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400 items-center">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#contact" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition-all">Get Quote</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-8 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">Now Accepting Phase II Projects</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Precision <span className="text-blue-600">3D</span><br />Construction
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Eliminating field errors through advanced BIM coordination and high-fidelity modeling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 text-white px-10 py-5 rounded font-black italic uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/20">Start Your Project</a>
            <a href="#portfolio" className="bg-white/5 text-white px-10 py-5 rounded font-black italic uppercase tracking-widest hover:bg-white/10 border border-white/10 transition-all">View Our Work</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon={Building2} title="BIM Coordination" desc="Full-scale clash detection and coordination between architectural, structural, and MEP systems." />
            <ServiceCard icon={Ruler} title="Quantity Takeoffs" desc="Highly accurate material estimations derived directly from detailed 3D project models." />
            <ServiceCard icon={Zap} title="VDC Strategy" desc="Virtual Design and Construction planning to optimize site logistics and build sequencing." />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Portfolio</h2>
              <div className="w-20 h-1 bg-blue-600" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-800"
              >
                <img src={project.image} alt={project.title} className="w-full h-80 object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-white uppercase italic leading-tight">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantages Section (Moved here) */}
      <section id="advantages" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Strategic Advantages</h2>
            <div className="w-20 h-1 bg-blue-600" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
               <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-white" size={24} />
               </div>
               <div>
                  <h4 className="text-white font-bold uppercase italic mb-2">Error Mitigation</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Detect conflicts in the virtual world before they become expensive problems in the physical one.</p>
               </div>
            </div>
            <div className="flex gap-6">
               <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center shrink-0">
                  <Clock className="text-white" size={24} />
               </div>
               <div>
                  <h4 className="text-white font-bold uppercase italic mb-2">Accelerated Timeline</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Streamline workflows and reduce RFI wait times through clear 3D communication protocols.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">Ready to Build<br /><span className="text-blue-600 text-7xl">Smarter?</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">Send us your plans and let's start the coordination process today.</p>
          <a href="mailto:contact@builtlogic3d.com" className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-6 rounded font-black italic uppercase tracking-widest hover:bg-blue-500 transition-all">
            <Send size={20} />
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row justify-between items-center gap-8">
          <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">© 2026 BuiltLogic 3D. All rights reserved.</span>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
             <a href="#" className="hover:text-blue-500 transition-colors">Instagram</a>
             <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-6">
          <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-white hover:text-blue-500 transition-colors">
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full">
            <img src={selectedProject.image} className="w-full h-[60vh] object-cover rounded-2xl mb-8 border border-white/10 shadow-2xl" />
            <h3 className="text-4xl font-black text-white uppercase italic mb-4">{selectedProject.title}</h3>
            <p className="text-slate-400 text-lg leading-relaxed">Detailed BIM modeling and clash detection analysis for large-scale construction projects. Our process ensures zero field conflicts and optimized material takeoffs.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;