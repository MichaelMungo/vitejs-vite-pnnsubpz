import { useState } from 'react';
import {
  Menu, Building2, Ruler, Zap, X, CheckCircle2,
  Play, Mail, Phone, MapPin, Clock, ShieldCheck, 
  Layers, Settings, Video, Send, FileText, Search
} from 'lucide-react';

// --- DATA ---
const projects = [
  { id: 1, title: 'Visualization from 2D Arch to 3D', category: 'Design Integration', image: 'https://i.postimg.cc/JhcrybFb/thumb1.jpg', youtubeId: 'h32x8DYk9EI' },
  { id: 2, title: 'MEPS Conflict Detection - Preconstruction', category: 'Preconstruction', image: 'https://i.postimg.cc/1tm9D8xN/thumb2.jpg', youtubeId: 'tM7fMjEDLT0' },
  { id: 3, title: 'Structural Shop Drawing Verification', category: 'Coordination', image: 'https://i.postimg.cc/pTW2KmNh/thumb3.jpg', youtubeId: 'xcvKuq5h8qU' },
  { id: 4, title: 'Underground Utility & MEP Locations', category: 'Civil', image: 'https://i.postimg.cc/Jnr1jswy/thumb4.jpg', youtubeId: 'CUA5iqHpqfM' },
  { id: 5, title: 'Comprehensive RFIs', category: 'Communication', image: 'https://i.postimg.cc/MT6W1nkf/thumb5.jpg', youtubeId: 'Kj4-hINzTtY' },
  { id: 6, title: 'Full Build Sequencing', category: 'Management', image: 'https://i.postimg.cc/MT6W1nkV/thumb6.jpg', youtubeId: 'J09RphNYcOQ' },
];

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
    <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const VideoCard = ({ project, onClick }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoSrc = `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${project.youtubeId}&rel=0&playsinline=1&modestbranding=1`;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-900 aspect-video w-full border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
    >
      {isHovered ? (
        <iframe src={videoSrc} className="absolute inset-0 w-full h-full object-cover scale-[1.05]" frameBorder="0" />
      ) : (
        <img src={project.image} className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" alt={project.title} />
      )}
      <div className={isHovered ? "opacity-0" : "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent p-6 flex flex-col justify-end transition-opacity"}>
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">{project.category}</span>
        <h4 className="text-white font-bold text-lg leading-tight">{project.title}</h4>
      </div>
    </div>
  );
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const heroGridStyle = {
    backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)',
    backgroundSize: '75px 75px',
    WebkitMaskImage: `radial-gradient(circle 185px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
    maskImage: `radial-gradient(circle 185px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/10 font-sans">
      <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } } .animate-float { animation: float 5s ease-in-out infinite; }`}</style>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          
          {/* Left Side: Hamburger Menu (Replaces the Logo) */}
          <div className="text-white hover:text-blue-500 transition-colors cursor-pointer flex items-center">
            <Menu size={28} />
          </div>

          {/* Right Side: Desktop Links (Remains as is) */}
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400 items-center">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#contact" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition-all">Get Quote</a>
          </div>
          
        </div>
      </nav>

      <section onMouseMove={handleMouseMove} className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-24 pb-16 px-6 group">
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={heroGridStyle} />
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
          <img src="/logo-main.png" alt="BuiltLogic 3D" className="animate-float relative z-30 w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-[900px] mx-auto h-auto object-contain mb-10 drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]" />
          <p className="text-blue-400/90 text-sm md:text-xl font-medium mb-10 tracking-wide max-w-2xl mx-auto italic">Precision 3D Construction Models from Architectural and MEP Drawings</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40">Start Your Project</a>
            <a href="#portfolio" className="bg-white/5 text-white px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all">View Our Work</a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">Value Proposition</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8 leading-tight text-slate-900">Strategic Advantages <br/><span className="text-blue-600 italic uppercase">For Your Projects</span></h2>
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-10">
              <div className="text-center md:text-left"><p className="text-3xl font-black text-slate-900">90%</p><p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Fewer Field Conflicts</p></div>
              <div className="text-center md:text-left"><p className="text-3xl font-black text-slate-900">50%</p><p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Faster RFI Resolution</p></div>
              <div className="text-center md:text-left"><p className="text-3xl font-black text-slate-900">$</p><p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Cost Savings</p></div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100"><ShieldCheck className="text-blue-600 mb-4" /><h4 className="font-bold mb-2">Pre-Construction Detection</h4><p className="text-xs text-slate-500 leading-relaxed">Identify coordination issues before breaking ground.</p></div>
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100"><Layers className="text-blue-600 mb-4" /><h4 className="font-bold mb-2">Superior MEP Coordination</h4><p className="text-xs text-slate-500 leading-relaxed">Enhanced collaboration with trades via clash detection.</p></div>
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100"><Clock className="text-blue-600 mb-4" /><h4 className="font-bold mb-2">Accelerated RFI Response</h4><p className="text-xs text-slate-500 leading-relaxed">3D visuals eliminate ambiguity for faster responses.</p></div>
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100"><Video className="text-blue-600 mb-4" /><h4 className="font-bold mb-2">Video Sequencing</h4><p className="text-xs text-slate-500 leading-relaxed">Walkthroughs for complex installation sequences.</p></div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black uppercase mb-4 tracking-tight text-slate-900">Our Services</h2>
          <p className="max-w-2xl mx-auto text-slate-500">Comprehensive 3D modeling services ensuring accuracy at every stage.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard icon={Building2} title="Architectural 3D Models" desc="Transform 2D elevations into detailed 3D visualizations." />
          <ServiceCard icon={Zap} title="MEP Integration" desc="Comprehensive modeling of systems with full clash detection." />
          <ServiceCard icon={Settings} title="BIM Coordination" desc="Ensuring all disciplines work seamlessly together." />
          <ServiceCard icon={Ruler} title="Shop Drawings" desc="Precise fabrication-ready drawings and specifications." />
          <ServiceCard icon={CheckCircle2} title="As-Built Documentation" desc="Detailed 3D documentation of existing structures." />
          <ServiceCard icon={Play} title="Visualization & Rendering" desc="Photorealistic walkthroughs for final outcome visualization." />
        </div>
      </section>

      <section id="process" className="py-24 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">How It Works</span>
            <h2 className="text-4xl font-black mt-4 uppercase italic">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
             <div className="absolute top-10 left-0 w-full h-[1px] bg-white/10 hidden md:block"></div>
             {[ 
               { icon: FileText, title: "Submit Drawings", desc: "Send us your architectural plans and MEP layouts." },
               { icon: Search, title: "Analysis & Planning", desc: "Our team reviews requirements and creates a project plan." },
               { icon: Building2, title: "3D Model Creation", desc: "We build accurate models integrating all building systems." },
               { icon: CheckCircle2, title: "Review & Delivery", desc: "Receive comprehensive 3D drawings ready for construction." }
             ].map((item, i) => (
               <div key={i} className="relative z-10 group">
                 <div className="w-20 h-20 bg-slate-900 border border-white/20 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:border-blue-500 transition-all">
                   <item.icon size={32} />
                 </div>
                 <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900">Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => <VideoCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />)}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-white">
            <h2 className="text-5xl font-black uppercase mb-8 leading-tight italic">Let's Build <br/><span className="text-blue-500">Together</span></h2>
            <div className="space-y-6 text-slate-300">
              <div className="flex items-center gap-4"><Mail size={20} className="text-blue-500" /> contact@builtlogic3d.com</div>
              <div className="flex items-center gap-4"><Phone size={20} className="text-blue-500" /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-4"><MapPin size={20} className="text-blue-500" /> Worldwide Service</div>
            </div>
          </div>
          <div className="bg-slate-900/80 p-8 rounded-3xl border border-white/10">
            <form className="grid gap-6">
              <input className="bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-blue-500 text-white" placeholder="Name" />
              <input className="bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-blue-500 text-white" placeholder="Email" />
              <textarea rows={4} className="bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-blue-500 text-white" placeholder="Project details"></textarea>
              <button type="button" className="bg-blue-600 py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-white uppercase tracking-widest text-xs"><Send size={16}/> Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-[10px] uppercase font-bold">
          <span className="text-white text-xl font-black">BuiltLogic<span className="text-blue-500 italic">3D</span></span>
          <p>© 2026 BuiltLogic 3D. All rights reserved.</p>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md">
          <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-white"><X size={40} /></button>
          <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10">
            <iframe src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0`} className="w-full h-full" allow="autoplay" />
          </div>
        </div>
      )}
    </div>
  );
}