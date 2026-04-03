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
const logo = "/logo-main.png";

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
const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="flex flex-col items-center mb-16 text-center">
    <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#60a5fa]/50 to-transparent mb-6" />
    <h2 className="text-[#60a5fa] text-xs font-black tracking-[0.4em] uppercase">
      {title}
    </h2>
    <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#60a5fa]/50 to-transparent mt-6" />
    {subtitle && (
      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-4">
        {subtitle}
      </p>
    )}
  </div>
);

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-slate-900/50 p-8 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1 backdrop-blur-sm group">
    <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-slate-400 text-xs leading-relaxed font-medium">{desc}</p>
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
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-600/10 scroll-smooth">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black text-white text-sm">B</div>
            <span className="text-white font-bold tracking-tighter text-lg">BUILTLOGIC<span className="text-blue-500">3D</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-[#60a5fa] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
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
            src={logo} 
            alt="BuiltLogic 3D" 
            className="animate-float relative z-30 w-[110%] -ml-[5%] md:ml-auto md:w-[85%] lg:w-[75%] max-w-[1200px] mx-auto h-auto object-contain mb-10 drop-shadow-[0_0_35px_rgba(37,99,235,0.4)]"
          />
        
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
        <SectionHeader title="Our Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard icon={Building2} title="Architectural 3D" desc="3D visualization bridges the gap between architectural intent and field execution." />
          <ServiceCard icon={Zap} title="Proactive MEPS Integration" desc="Discover 'clashes' in a $0 digital environment instead of a $10,000 'oops' on the job." />
          <ServiceCard icon={Play} title="Multi-Format Visualization" desc="Export your project as high-definition images, video sequences, or a navigable environment." />
          <ServiceCard icon={UserCheck} title="White-Label Professionalism" desc="Impress clients with 3D models and videos branded to your company. Make your firm look like the most sophisticated team." />
          <ServiceCard icon={Database} title="Digital 3D As-Builts" desc="Transition to operations with a 1:1 digital twin. Precise models that serve as a permanent, navigable manual." />
          <ServiceCard icon={ClipboardCheck} title="Precision Procurement" desc="Leverage model accuracy to buy what you need, not what you think you need." />
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES */}
      <section className="bg-slate-900/30 py-32 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">VALUE PROPOSITION</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-4 leading-none tracking-tighter">
              Strategic Advantages<br />
              <span className="text-blue-500">for Your Projects</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { val: "90", unit: "%", label: "Fewer Field Conflicts" },
              { val: "50", unit: "%", label: "Faster RFI Resolution" },
              { val: "$", unit: "", label: "Significant Cost Savings" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-[92px] font-black text-white leading-none tracking-tighter group-hover:text-blue-400 transition-colors">
                  {stat.val}<span className="text-4xl align-super font-normal">{stat.unit}</span>
                </div>
                <div className="text-blue-400 text-sm uppercase tracking-widest font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <BenefitCard key={i} icon={b.icon} title={b.title} desc={b.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-32 px-6">
        <SectionHeader title="Featured Portfolio" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <VideoCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </section>

      {/* INQUIRY SECTION */}
      <section id="inquiry" className="py-32 px-6 border-t border-white/5 bg-slate-900/20">
        <div className="max-w-xl mx-auto">
          <SectionHeader 
            title="Start a Project" 
            subtitle="Instant Notification Sent to Our Modeling Team" 
          />
          
          <form action="https://formspree.io/f/mkovdyvd" method="POST" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="NAME" required className="w-full p-5 bg-slate-900 rounded-lg border border-white/10 focus:border-blue-500 outline-none text-[11px] font-bold tracking-widest uppercase transition-all text-white" />
              <input type="email" name="email" placeholder="EMAIL" required className="w-full p-5 bg-slate-900 rounded-lg border border-white/10 focus:border-blue-500 outline-none text-[11px] font-bold tracking-widest uppercase transition-all text-white" />
            </div>
            <textarea name="message" placeholder="PROJECT SCOPE & TIMELINE..." required rows={5} className="w-full p-5 bg-slate-900 rounded-lg border border-white/10 focus:border-blue-500 outline-none text-[11px] font-bold tracking-widest uppercase transition-all text-white leading-relaxed"></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-lg uppercase tracking-[0.3em] text-[11px] transition-all shadow-xl shadow-blue-900/20">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-16 uppercase tracking-tight">Connect with BuiltLogic 3D</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="mailto:team@builtlogic3d.com" className="group bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
              <Mail className="mx-auto mb-6 text-blue-500" size={28} />
              <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-[10px]">Email Us</h3>
              <p className="text-blue-400 font-medium break-all text-sm">team@builtlogic3d.com</p>
            </a>
            <a href="tel:3474941068" className="group bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
              <Phone className="mx-auto mb-6 text-blue-500" size={28} />
              <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-[10px]">Call Directly</h3>
              <p className="text-blue-400 font-medium text-sm">(347) 494-1068</p>
            </a>
            <a href="https://youtube.com/@BuiltLogic3D" target="_blank" rel="noreferrer" className="group bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
              <Youtube className="mx-auto mb-6 text-blue-500" size={28} />
              <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-[10px]">Watch Strategy</h3>
              <p className="text-blue-400 font-medium text-sm">YouTube Channel</p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black tracking-tighter text-blue-500 uppercase">BUILTLOGIC 3D, LLC</h3>
            <p className="text-slate-500 text-[10px] mt-1 uppercase tracking-[0.2em] font-bold">Precision Construction Modeling • BIM Coordination</p>
          </div>
          <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em]">© 2026 BUILTLOGIC 3D, LLC. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* MODAL SECTION */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4" onClick={() => setSelectedProject(null)}>
          <button className="absolute top-6 right-6 text-white z-10" onClick={() => setSelectedProject(null)}><X size={40} /></button>
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <iframe src={`https://www.youtube-nocookie.com/embed/${selectedProject.youtubeId}?autoplay=1&modestbranding=1&rel=0&playsinline=1&fs=1`} className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowFullScreen title={selectedProject.title} />
          </div>
        </div>
      )}
    </div>
  );
}