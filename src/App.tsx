// BUILD FIX: Removed unused 'X' icon and 'useState' hook
import {
  Menu, Building2, Ruler, Zap, ShieldCheck, 
  Clock, Send, ChevronRight
} from 'lucide-react';

const projects = [
  { id: 1, title: 'Visualization from 2D Arch to 3D', category: 'Design', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80' },
  { id: 2, title: 'MEPS Conflict Detection', category: 'Engineering', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Structural Shop Drawing', category: 'Construction', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80' },
  { id: 4, title: 'Underground Utility Locations', category: 'Civil', image: 'https://images.unsplash.com/photo-1590483734724-383b853b3178?auto=format&fit=crop&q=80' },
  { id: 5, title: 'Comprehensive RFIs', category: 'Communication', image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80' },
  { id: 6, title: 'Full Build Sequencing', category: 'Management', image: 'https://images.unsplash.com/photo-1531834685032-c7446445339c?auto=format&fit=crop&q=80' },
];

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-slate-900/50 p-8 rounded-xl border border-white/5 hover:border-blue-500/50 transition-all group">
    <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <Icon className="text-blue-500 group-hover:text-white" size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-4 uppercase italic">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-blue-500/30">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-black text-white italic text-xl">B</div>
             <div className="flex flex-col">
               <span className="text-white font-bold tracking-tighter text-xl uppercase leading-none">BuiltLogic<span className="text-blue-500 italic font-black">3D</span></span>
               <span className="text-[8px] text-blue-400 font-bold tracking-[0.3em] uppercase opacity-80 mt-1">VDC & BIM Excellence</span>
             </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            </div>
            <a href="#contact" className="hidden sm:block text-white bg-blue-600 px-5 py-2.5 rounded font-black italic uppercase text-[10px] tracking-widest hover:bg-blue-500 transition-all">Get Quote</a>
            <Menu size={28} className="text-white hover:text-blue-500 cursor-pointer ml-2" />
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-slate-950" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-8 inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Now Accepting Phase II</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">
            Build <span className="text-blue-600">Twice</span><br />Move Once
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
            Eliminating field conflicts through high-fidelity BIM coordination and precision 3D sequencing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#contact" className="group bg-blue-600 text-white px-10 py-5 rounded-lg font-black italic uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center gap-2">
              Start Project <ChevronRight size={18} />
            </a>
            <a href="#portfolio" className="text-white px-10 py-5 rounded-lg font-black italic uppercase tracking-widest hover:bg-white/5 border border-white/10 transition-all">View Work</a>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Core Services</h2>
          <div className="w-20 h-1 bg-blue-600 mb-20" />
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon={Building2} title="BIM Coordination" desc="Full-scale clash detection and coordination between architectural and MEP systems." />
            <ServiceCard icon={Ruler} title="Quantity Takeoffs" desc="Highly accurate material estimations derived directly from detailed 3D models." />
            <ServiceCard icon={Zap} title="VDC Strategy" desc="Virtual Design planning to optimize site logistics and build sequencing." />
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4 text-right">Selected Works</h2>
          <div className="w-20 h-1 bg-blue-600 ml-auto mb-20" />
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-800">
                <img src={p.image} className="w-full h-96 object-cover opacity-50 group-hover:opacity-100 transition-all duration-700" alt={p.title} />
                <div className="absolute bottom-0 p-8">
                  <span className="text-blue-500 text-[10px] font-bold uppercase mb-2 block">{p.category}</span>
                  <h3 className="text-xl font-bold text-white uppercase italic">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4 text-center">Strategic Advantages</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-20" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/5">
               <ShieldCheck className="text-blue-600 shrink-0" size={40} />
               <div>
                  <h4 className="text-white font-bold uppercase italic mb-2">Error Mitigation</h4>
                  <p className="text-slate-400 text-sm">Detect conflicts in the virtual world before they become expensive physical problems.</p>
               </div>
            </div>
            <div className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/5">
               <Clock className="text-blue-600 shrink-0" size={40} />
               <div>
                  <h4 className="text-white font-bold uppercase italic mb-2">Accelerated Timeline</h4>
                  <p className="text-slate-400 text-sm">Streamline workflows and reduce RFI wait times through clear 3D protocols.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-blue-600 text-center">
        <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic mb-8">Ready to Build?</h2>
        <a href="mailto:contact@builtlogic3d.com" className="inline-flex items-center gap-4 bg-white text-blue-600 px-12 py-6 rounded-xl font-black italic uppercase tracking-widest hover:bg-slate-100 transition-all">
          <Send size={24} /> Email Us Today
        </a>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <span className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">© 2026 BuiltLogic 3D. Precision in Every Polygon.</span>
      </footer>
    </div>
  );
}