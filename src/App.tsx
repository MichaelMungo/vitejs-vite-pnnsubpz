import { useState, useEffect } from 'react';
import {
  Menu,
  Building2,
  Zap,
  X,
  Play,
  Mail,
  Phone,
  Youtube,
  UserCheck,
  Clock,
  Shield,
  Users,
  Target,
  PlayCircle,
  Database,
  ClipboardCheck,
} from 'lucide-react';

// --- DATA ---
const projects = [
  { id: 1, title: 'Visualization from 2D Arch to 3D', category: 'Design Integration', image: 'https://i.postimg.cc/JhcrybFb/thumb1.jpg', youtubeId: 'h32x8DYk9EI' },
  { id: 2, title: 'MEPS Conflict Detection - Preconstruction', category: 'Preconstruction', image: 'https://i.postimg.cc/T1rFT58F/MEPS-Conflict-Detection-Preconstruction-(Thumbnail-2).jpg', youtubeId: 'p1s2s_jUVgc' },
  { id: 3, title: 'Structural Shop Drawing Verification', category: 'Coordination', image: 'https://i.postimg.cc/pTW2KmNh/thumb3.jpg', youtubeId: 'y_XKfq5f4OY' },
  { id: 4, title: 'Underground Utility & MEP Locations', category: 'Civil', image: 'https://i.postimg.cc/Jnr1jswy/thumb4.jpg', youtubeId: 'HWp-PkopSq4' },
  { id: 5, title: 'Comprehensive RFIs', category: 'Communication', image: 'https://i.postimg.cc/MT6W1nkf/thumb5.jpg', youtubeId: 'Kj4-hINzTtY' },
  { id: 6, title: 'Full Build Sequencing', category: 'Management', image: 'https://i.postimg.cc/MT6W1nkV/thumb6.jpg', youtubeId: 'rIovdzSwltU' },
];

const benefits = [
  { icon: UserCheck, title: 'Enhanced Client Confidence', desc: 'Present your projects with professional 3D visualizations that elevate your team’s reputation and win more future business through impressive, detailed presentations.' },
  { icon: Clock, title: 'Accelerated RFI Response', desc: 'Clear 3D visualizations eliminate ambiguity in RFIs, enabling architects and engineers to provide faster, more accurate responses and keep projects on schedule.' },
  { icon: Shield, title: 'Pre-Construction Conflict Detection', desc: 'Identify coordination issues and drawing errors before breaking ground. We proactively recommend RFIs for your review, preventing costly field conflicts.' },
  { icon: Users, title: 'Superior MEP Coordination', desc: 'Enhanced collaboration with trades through visual clash detection and coordination reduces rework, delays, and change orders in the field.' },
  { icon: Target, title: 'Reduced Field Errors', desc: 'Trades gain clarity on complex details through accurate 3D models, minimizing misinterpretation and costly mistakes that require rework.' },
  { icon: PlayCircle, title: 'Video Sequencing for Complex Installations', desc: 'Export 3D models as step-by-step video walkthroughs, allowing trades to understand exact sequencing and installation order.' },
];

// --- COMPONENTS ---
const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mb-4">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-wider font-semibold">{desc}</p>
  </div>
);

const BenefitCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-1 group">
    <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
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
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-900 aspect-video w-full border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
    >
      {isHovered ? (
        <iframe 
          src={videoSrc} 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-[1.05]" 
          frameBorder="0" 
          title={project.title}
        />
      ) : (
        <img 
          src={project.image} 
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
          alt={project.title} 
        />
      )}

      <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent p-4 flex flex-col justify-end transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1">
          {project.category}
        </span>
        <h4 className="text-white font-bold text-sm leading-tight">
          {project.title}
        </h4>
      </div>
    </div>
  );
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const heroGridStyle = {
    backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)',
    backgroundSize: '75px 75px',
    WebkitMaskImage: `radial-gradient(circle 185px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
    maskImage: `radial-gradient(circle 185px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/10 scroll-smooth">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Menu 
            size={24} 
            className="text-white cursor-pointer md:hidden" 
            onClick={() => setIsMenuOpen(true)}
          />
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#services" className="hover:text-white transition-all">Services</a>
            <a href="#portfolio" className="hover:text-white transition-all">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-all">Contact</a>
          </div>
          <div className="w-6 md:hidden"></div> 
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-xl transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end">
            <X size={32} className="text-white cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          </div>
          <div className="flex flex-col gap-8 mt-12 text-2xl font-black text-white uppercase tracking-tighter">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>

    {/* HERO SECTION */}
    <section onMouseMove={handleMouseMove} className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-24 pb-16 px-6 group">
        <div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
          style={heroGridStyle} 
        />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <img 
            src="/logo-main.png" 
            alt="BuiltLogic 3D" 
            className="animate-float relative z-30 w-[110%] -ml-[5%] md:ml-auto md:w-[85%] lg:w-[75%] max-w-[1200px] mx-auto h-auto object-contain mb-10 drop-shadow-[0_0_35px_rgba(37,99,235,0.4)]"          />
        
          <p className="text-[#60a5fa] text-[10px] md:text-sm font-black tracking-[0.3em] uppercase max-w-4xl mx-auto mb-10 opacity-90 leading-relaxed">
            Precision 3D Construction Models from Architectural and MEP Drawings
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#portfolio" className="w-64 bg-white/5 text-white py-4 rounded-lg font-bold text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all shadow-lg backdrop-blur-sm text-center">
              View Portfolio
            </a>
            <a href="mailto:team@builtlogic3d.com" className="w-64 bg-white/5 text-white py-4 rounded-lg font-bold text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all shadow-lg backdrop-blur-sm text-center">
              Connect With Our Team
            </a>
          </div>
        </div>
      </section>

 {/* SERVICES SECTION */}
<section id="services" className="py-32 px-6 max-w-7xl mx-auto">
  <div className="flex flex-col items-center mb-24">
    {/* Top Fading Bracket */}
    <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    
    <h2 className="py-8 text-4xl md:text-6xl font-black uppercase italic tracking-[0.3em] text-slate-900 text-center leading-none">
      Our Services
    </h2>
    
    {/* Bottom Fading Bracket */}
    <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    
    {/* Technical Sub-label */}
    <span className="text-[10px] font-bold tracking-[0.5em] text-blue-600 uppercase mt-4 opacity-80">
      Core_Competencies_v2.6
    </span>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* ... rest of your ServiceCards ... */}    
          <ServiceCard icon={Building2} title="Architectural 3D" desc="3D visualization bridges the gap between architectural intent and field execution." />
          <ServiceCard icon={Zap} title="Proactive MEPS Integration" desc="Discover 'clashes' in a $0 digital environment instead of a $10,000 'oops' on the job." />
          <ServiceCard icon={Play} title="Multi-Format Visualization" desc="Export your project as high-definition images, step-by-step video sequences, or a fully navigable 3D environment." />
          <ServiceCard icon={UserCheck} title="White-Label Professionalism" desc="Impress clients with 3D models and videos branded to your company. We provide the high-tech visuals that make your firm look like the most sophisticated team on the bid." />
          <ServiceCard icon={Database} title="Digital 3-Dimensional As-Builts" desc="Transition from construction to operations with a 1:1 digital twin. We provide a precise 3D 'as-built' model that serves as a permanent, navigable manual." />
          <ServiceCard icon={ClipboardCheck} title="Precision Procurement" desc="Leverage model accuracy to buy what you need, not what you think you need." />
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES */}
      <section className="bg-slate-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">VALUE PROPOSITION</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-4 leading-none tracking-tighter">
              Strategic Advantages<br />
              <span className="text-blue-500">for Your Projects</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center group">
              <div className="text-[92px] font-black text-white leading-none tracking-tighter group-hover:text-blue-400 transition-colors">90<span className="text-4xl align-super font-normal">%</span></div>
              <div className="text-blue-400 text-sm uppercase tracking-widest font-semibold mt-1">Fewer Field Conflicts</div>
            </div>
            <div className="text-center group">
              <div className="text-[92px] font-black text-white leading-none tracking-tighter group-hover:text-blue-400 transition-colors">50<span className="text-4xl align-super font-normal">%</span></div>
              <div className="text-blue-400 text-sm uppercase tracking-widest font-semibold mt-1">Faster RFI Resolution</div>
            </div>
            <div className="text-center group">
              <div className="text-[92px] font-black text-white leading-none tracking-tighter group-hover:text-blue-400 transition-colors">$</div>
              <div className="text-blue-400 text-sm uppercase tracking-widest font-semibold mt-1">Significant Cost Savings</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <BenefitCard key={i} icon={b.icon} title={b.title} desc={b.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-16 uppercase tracking-tight">Featured Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <VideoCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY SECTION */}
      <section id="inquiry" className="bg-slate-50 py-24 px-6 border-t border-slate-200">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Start a Project</h2>
            <div className="h-1 w-12 bg-blue-600 mx-auto mt-2 mb-4"></div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              Instant Notification Sent to Our Modeling Team
            </p>
          </div>
          
          <form 
            action="https://formspree.io/f/mkovdyvd" 
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" name="name" placeholder="NAME" required
                className="w-full p-4 bg-white rounded-lg border border-slate-200 focus:border-blue-600 outline-none text-[11px] font-bold tracking-widest uppercase transition-all"
              />
              <input 
                type="email" name="email" placeholder="EMAIL" required
                className="w-full p-4 bg-white rounded-lg border border-slate-200 focus:border-blue-600 outline-none text-[11px] font-bold tracking-widest uppercase transition-all"
              />
            </div>
            <textarea 
              name="message" placeholder="TELL US ABOUT YOUR PROJECT (LOCATION, SCOPE, TIMELINE...)" required
              rows={5}
              className="w-full p-4 bg-white rounded-lg border border-slate-200 focus:border-blue-600 outline-none text-[11px] font-bold tracking-widest uppercase transition-all leading-relaxed"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-slate-950 hover:bg-blue-600 text-white font-black py-5 rounded-lg uppercase tracking-[0.3em] text-[10px] transition-all shadow-xl"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-slate-950 py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tighter">
            Connect with BuiltLogic 3D
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <a href="mailto:team@builtlogic3d.com" className="group bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
              <Mail className="mx-auto mb-6 text-blue-500" size={28} />
              <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Email Us</h3>
              <p className="text-blue-400 font-medium break-all text-sm">team@builtlogic3d.com</p>
            </a>
            <a href="tel:3474941068" className="group bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
              <Phone className="mx-auto mb-6 text-blue-500" size={28} />
              <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Call Directly</h3>
              <p className="text-blue-400 font-medium text-sm">(347) 494-1068</p>
            </a>
            <a href="https://youtube.com/@BuiltLogic3D" target="_blank" rel="noreferrer" className="group bg-slate-900 p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
              <Youtube className="mx-auto mb-6 text-blue-500" size={28} />
              <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Watch Strategy</h3>
              <p className="text-blue-400 font-medium text-sm">YouTube Channel</p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-black italic tracking-tighter text-blue-500">
                BUILTLOGIC 3D, LLC
              </h3>
              <p className="text-slate-400 text-[10px] mt-1 uppercase tracking-[0.2em] font-bold">
                Precision Construction Modeling • BIM Coordination
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">
              <p>© 2026 BUILTLOGIC 3D, LLC. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL SECTION */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4" 
          onClick={() => setSelectedProject(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white z-10" 
            onClick={() => setSelectedProject(null)}
          >
            <X size={40} />
          </button>
          
          <div 
            className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden" 
            onClick={e => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${selectedProject.youtubeId}?autoplay=1&modestbranding=1&rel=0&playsinline=1&fs=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              title={selectedProject.title}
            />
          </div>
        </div>
      )}
    </div>
  );
}