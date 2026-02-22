import { useState, useEffect } from 'react';
import {
  Menu,
  Building2,
  Ruler,
  Zap,
  X,
  ArrowRight,
  CheckCircle2,
  Play,
  Mail,
  UserCheck,
  Clock,
  Shield,
  Users,
  Target,
  PlayCircle,
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Menu size={24} className="text-white cursor-pointer" />
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#services" className="hover:text-white transition-all">Services</a>
            <a href="#portfolio" className="hover:text-white transition-all">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section onMouseMove={handleMouseMove} className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-24 pb-16 px-6 group">
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={heroGridStyle} />
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
          <img 
            src="/logo-main.png" 
            alt="BuiltLogic 3D" 
            className="animate-float relative z-30 w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-[900px] mx-auto h-auto object-contain mb-10 drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]" 
          />
          <p className="text-blue-400/90 text-sm md:text-xl font-medium mb-10 tracking-wide max-w-2xl mx-auto italic">Precision 3D Construction Models from Architectural and MEP Drawings</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40">Start Your Project</button>
            <a href="#portfolio" className="bg-white/5 text-white px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all">View Our Work</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Our Services</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard icon={Building2} title="Architectural 3D" desc="Transform 2D floor plans into detailed 3D visualizations." />
          <ServiceCard icon={Zap} title="MEP Integration" desc="Modeling of mechanical, electrical, and plumbing systems." />
          <ServiceCard icon={Ruler} title="BIM Coordination" desc="Ensuring all disciplines work seamlessly together." />
          <ServiceCard icon={ArrowRight} title="Shop Drawings" desc="Precise fabrication-ready drawings and specs." />
          <ServiceCard icon={CheckCircle2} title="As-Built Docs" desc="Detailed documentation of existing structures." />
          <ServiceCard icon={Play} title="Visualization" desc="Photorealistic renders and walkthroughs." />
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES - REFINED */}
      <section className="bg-slate-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">VALUE PROPOSITION</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-4 leading-none tracking-tighter">
              Strategic Advantages<br />
              <span className="text-blue-500">for Your Projects</span>
            </h2>
          </div>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg text-center mb-20 leading-relaxed">
            Our 3D construction models deliver measurable benefits across every phase of your project — from client presentations to field execution — ensuring fewer conflicts, reduced costs, and superior outcomes.
          </p>

          {/* Prominent Stats */}
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

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <BenefitCard key={i} icon={b.icon} title={b.title} desc={b.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-16 uppercase tracking-tight">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <VideoCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-950 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-left">
            <h2 className="text-4xl font-black text-white mb-6 uppercase">Let's Build Together</h2>
            <div className="flex items-center gap-4 text-white">
              <Mail size={20} className="text-blue-500" />
              <a href="mailto:contact@builtlogic3d.com" className="hover:text-blue-400 font-medium tracking-wide">contact@builtlogic3d.com</a>
            </div>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 shadow-2xl">
            <form className="grid grid-cols-2 gap-4">
              <input placeholder="Name" className="bg-slate-800 border border-white/5 rounded p-4 text-white text-sm outline-none focus:border-blue-500 transition-colors" />
              <input placeholder="Email" className="bg-slate-800 border border-white/5 rounded p-4 text-white text-sm outline-none focus:border-blue-500 transition-colors" />
              <textarea placeholder="Project Details" rows={4} className="bg-slate-800 border border-white/5 rounded p-4 text-white text-sm col-span-2 outline-none focus:border-blue-500 transition-colors"></textarea>
              <button type="button" className="col-span-2 bg-blue-600 text-white font-bold py-4 rounded uppercase text-xs tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button 
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-[110]"
          >
            <X size={40} />
          </button>
          <div 
            className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)]"
            onClick={e => e.stopPropagation()}
          >
            <iframe 
              src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
              className="w-full h-full" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; fullscreen"
              title={selectedProject.title}
            />
          </div>
        </div>
      )}
    </div>
  );
}