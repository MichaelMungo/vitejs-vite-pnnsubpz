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
  ChevronRight
} from 'lucide-react';

// --- DATA ---
const projects = [
  { id: 1, title: 'Visualization from 2D Arch to 3D', category: 'Design Integration', image: 'https://i.postimg.cc/JhcrybFb/thumb1.jpg', youtubeId: 'h32x8DYk9EI' },
  { id: 2, title: 'MEPS Conflict Detection - Preconstruction', category: 'Preconstruction', image: 'https://i.postimg.cc/T1rFT58F/MEPS-Conflict-Detection-Preconstruction-(Thumbnail-2).jpg', youtubeId: 'p1s2s_jUVgc' },
  { id: 3, title: 'Structural Shop Drawing Verification', category: 'Coordination', image: 'https://i.postimg.cc/pTW2KmNh/thumb3.jpg', youtubeId: 'y_XKfq5f4OY' },
  { id: 4, title: 'Underground Utility & MEP Locations', category: 'Civil', image: 'https://i.postimg.cc/Jnr1jswy/thumb4.jpg', youtubeId: 'CUA5iqHpqfM' },
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
const ServiceCard = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mb-4">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <div className="text-slate-500 text-[11px] leading-relaxed uppercase tracking-wider font-semibold">
      {children}
    </div>
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
      if (e.key === 'Escape') setSelectedProject(null);
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/10">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-slate-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
             <span className="text-2xl font-black tracking-tighter text-blue-600 uppercase">BUILTLOGIC<span className="text-white">3D</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#services" className="hover:text-white transition-all">Services</a>
            <a href="#portfolio" className="hover:text-white transition-all">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-all">Contact</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40">
              Get Quote
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10 px-6 py-8 space-y-6 absolute w-full shadow-2xl">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-sm font-bold text-white uppercase tracking-widest">Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-sm font-bold text-white uppercase tracking-widest">Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-sm font-bold text-white uppercase tracking-widest">Contact</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-blue-600 text-white py-4 rounded-lg font-bold uppercase tracking-widest text-xs">Get Quote</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section onMouseMove={handleMouseMove} className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-24 pb-16 px-6 group">
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={heroGridStyle} />
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
          <img 
            src="/logo-main.png" 
            alt="BuiltLogic 3D" 
            className="relative z-30 w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-[900px] mx-auto h-auto object-contain mb-10 drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]" 
          />
          <p className="text-blue-400/90 text-sm md:text-xl font-medium mb-12 tracking-wide max-w-2xl mx-auto italic">Precision 3D Construction Models from Architectural and MEP Drawings</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 text-white px-12 py-5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center">
              Start Your Project <ChevronRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#portfolio" className="bg-white/5 text-white px-12 py-5 rounded-lg font-bold text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all text-center">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">Our Services</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard icon={Building2} title="Architectural 3D">
            3D visualization bridges the gap between architectural intent and field execution.
          </ServiceCard>
          <ServiceCard icon={Zap} title="Proactive MEPS Integration">
            Discover 'clashes' in a $0 digital environment instead of a $10,000 'oops' on the job.
          </ServiceCard>
          <ServiceCard icon={Play} title="Multi-Format Visualization">
            Export your project as high-definition images, step-by-step video sequences, or a fully navigable 3D environment.
          </ServiceCard>
          <ServiceCard icon={UserCheck} title="White-Label Professionalism">
            Impress clients with 3D models and videos branded to your company. We provide the high-tech visuals that make your firm look like the most sophisticated team on the bid.
          </ServiceCard>
          <ServiceCard icon={Database} title="Digital 3-Dimensional As-Builts">
            Transition from construction to operations with a 1:1 digital twin. We provide a precise 3D 'as-built' model that serves as a permanent, navigable manual.
          </ServiceCard>
          <ServiceCard icon={ClipboardCheck} title="Precision Procurement">
            Leverage model accuracy to buy what you need, not what you <i>think</i> you need.
          </ServiceCard>
        </div>