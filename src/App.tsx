import { useState } from 'react';
import {
  Menu, Building2, Ruler, Zap, X, ShieldCheck, 
  Clock, Send, ChevronRight
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
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 text-slate-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          
          {/* Left Side: Logo & Name RESTORED */}
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-black text-white italic text-xl shadow-lg shadow-blue-600/20">B</div>
             <div className="flex flex-col">
               <span className="text-white font-bold tracking-tighter text-xl uppercase leading-none">BuiltLogic<span className="text-blue-500 italic font-black">3D</span></span>
               <span className="text-[8px] text-blue-400 font-bold tracking-[0.3em] uppercase opacity-80 mt-1">VDC & BIM Excellence</span>
             </div>
          </div>

          {/* Right Side: Desktop Links + Hamburger */}
          <div className="flex gap-8 items-center">
            <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400 items-center">
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            </div>
            <a href="#contact" className="hidden sm:block text-white bg-blue-600 px-5 py-2.5 rounded font-black italic uppercase text-[10px] tracking-widest hover:bg-blue-500 transition-all">Get Quote</a>
            <div className="text-white hover:text-blue-500 transition-colors cursor-pointer ml-2">
              <Menu size={28} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section RESTORED Bold Styling */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(37,99,235,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-slate-950" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-8 inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Next-Gen Construction Modeling</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85] text-balance">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Twice</span>