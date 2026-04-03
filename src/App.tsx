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
  ArrowRight
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
  { icon: Target, title: '90% Fewer Conflicts', desc: 'Identify coordination issues and drawing errors in a digital environment before breaking ground, preventing costly field conflicts.' },
  { icon: Shield, title: 'Eliminate Rework', desc: 'Trades gain absolute clarity on complex details through accurate 3D models, minimizing misinterpretation and mistakes.' },
  { icon: UserCheck, title: 'Client Confidence', desc: 'Enhance the existing professionalism of your team with state-of-the-art visualization that elevates your reputation.' },
  { icon: Clock, title: 'Accelerated RFI Response', desc: 'Clear 3D visualizations eliminate ambiguity, enabling architects and engineers to provide faster, more accurate responses.' },
  { icon: Building2, title: 'Design Integration', desc: 'Bridge the gap between the architect\'s desk and the field office by translating intent into executable models.' },
  { icon: PlayCircle, title: 'Field Support', desc: 'Export models as step-by-step video walkthroughs, allowing field teams to understand exact sequencing.' },
];

// --- STYLED COMPONENTS ---

const SectionHeader = ({ title, dark = false }: { title: string; dark?: boolean }) => (
  <div className="flex flex-col items-center mb-16">
    <div className={`w-32 h-px bg-gradient-to-r from-transparent ${dark ? 'via-cyan-400/50' : 'via-slate-800/50'} to-transparent mb-6`} />
    <h2 className={`${dark ? 'text-cyan-400' : 'text-slate-900'} text-[11px] md:text-sm font-black tracking-[0.4em] uppercase text-center`}>
      {title}
    </h2>
    <div className={`w-32 h-px bg-gradient-to-r from-transparent ${dark ? 'via-cyan-400/50' : 'via-slate-800/50'} to-transparent mt-6`} />
  </div>
);

// Cyber/Blueprint style card for Dark Sections
const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-slate-900/40 p-8 rounded-xl border border-cyan-500/10 hover:border-cyan-400/50 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.02)] hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-400 transition-all duration-700"></div>
    <div className="w-14 h-14 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-lg font-black text-white mb-3 uppercase tracking-tight">{title}</h3>
    <p className="text-slate-400 text-[12px] leading-relaxed font-medium">{desc}</p>
  </div>
);

// Clean, structured card for Light Sections
const BenefitCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 group shadow-sm hover:shadow-md">
    <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-50 transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tighter">{title}</h3>
    <p className="text-slate-600 text-[13px] leading-relaxed font-medium">{desc}</p>
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
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-950 aspect-video w-full border border-cyan-500/10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
    >
      {isHovered ? (
        <iframe src={videoSrc} className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-[1.05]" frameBorder="0" title={project.title} />
      ) : (
        <img src={project.image} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={project.title} />
      )}
      <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 p-6 flex flex-col justify-end transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">
            {project.category}
          </span>
        </div>
        <h4 className="text-white font-black text-lg leading-tight uppercase tracking-tighter">
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
    backgroundImage: 'linear-gradient(#22d3ee 0.5px, transparent 0.5px), linear-gradient(90deg, #22d3ee 0.5px, transparent 0.5px)',
    backgroundSize: '75px 75px',
    WebkitMaskImage: `radial-gradient(circle 185px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
    maskImage: `radial-gradient(circle 185px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 selection:bg-cyan-500/30 scroll-smooth">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* NAVIGATION BAR - DARK */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Menu size={28} className="text-cyan-400 cursor-pointer md:hidden" onClick={() => setIsMenuOpen(true)} />
          <div className="hidden md:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
            <a href="#mission" className="hover:text-cyan-400 transition-colors">Mission</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
          <div className="w-8 md:hidden"></div> 
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[60] bg-slate-950/98 backdrop-blur-xl transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden border-r border-cyan-500/20`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end"><X size={36} className="text-cyan-400 cursor-pointer" onClick={() => setIsMenuOpen(false)} /></div>
          <div className="flex flex-col gap-10 mt-20 text-3xl font-black text-white uppercase tracking-tighter">
            <a href="#mission" className="hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Mission</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>

      {/* HERO SECTION - DARK */}
      <section onMouseMove={handleMouseMove} className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-24 pb-16 px-6 group">
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={heroGridStyle} />
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center mt-10">
          <img src="/logo-main.png" alt="BuiltLogic 3D" className="animate-float relative z-30 w-[110%] -ml-[5%] md:ml-auto md:w-[85%] lg:w-[80%] max-w-[1200px] mx-auto h-auto object-contain mb-12 drop-shadow-[0_0_45px_rgba(34,211,238,0.2)]" />
          <p className="text-cyan-400 text-[11px] md:text-sm font-black tracking-[0.5em] uppercase max-w-4xl mx-auto mb-16 opacity-90 leading-relaxed border-b border-cyan-900 pb-8 inline-block">
            Precision 3D Construction Models from Architectural and MEP Drawings
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#portfolio" className="flex items-center justify-center gap-3 w-72 bg-transparent text-cyan-400 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.25em] border border-cyan-500/50 hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)] backdrop-blur-sm text-center">
              View Portfolio
            </a>
            <a href="#contact" className="flex items-center justify-center gap-3 w-72 bg-orange-600 text-white py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.25em] hover:bg-orange-500 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] text-center">
              Connect With Us <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT - LIGHT */}
      <section id="mission" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader title="Our Mission" dark={false} />
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 text-center uppercase tracking-tighter">
            Field-First <span className="text-orange-600">Clarity</span>
          </h2>
          
          <div className="space-y-8 text-slate-600 text-base md:text-lg font-medium leading-relaxed bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-100">
            <p>
              <strong className="text-slate-900 font-black">BuiltLogic 3D</strong> was born from forty years of grit, grease, and high-stakes management. Since 1985, we have navigated the complexities of multimillion-dollar commercial projects from New York to Miami.
            </p>
            <p>
              Through those decades, I discovered a universal truth: <span className="text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded">the most expensive mile in construction is the distance between the architect's desk and the field office.</span>
            </p>
            <p>
              We exist to bridge that gap. By translating traditional architectural drawings into <strong className="text-cyan-700 font-black">high-fidelity 3D models</strong>, we empower hardworking field teams to build the original intent the first time. Our mission is to eliminate the <strong className="text-orange-600 font-black">cycle of rework</strong> and enhance the existing professionalism of General Contractors through state-of-the-art visualization.
            </p>
            <p className="text-center font-black text-slate-900 uppercase tracking-widest text-sm pt-6 border-t border-slate-100 mt-8">
              We don't just model buildings; we support the people who build them.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - DARK */}
      <section id="services" className="py-32 px-6 bg-slate-950 relative border-t border-cyan-500/20">
        {/* Blueprint grid background for dark section */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader title="Technical Execution" dark={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={Building2} title="Architectural 3D Translation" desc="We convert flat architectural intent into fully realized, navigable 3D models to ensure field constructability." />
            <ServiceCard icon={Zap} title="Proactive MEPS Clash Detection" desc="Discover physical conflicts in a digital blueprint environment instead of halting progress on the active job site." />
            <ServiceCard icon={Play} title="Sequence Multi-Format Vis" desc="Export your project as high-definition images, step-by-step video sequences, or a fully explorable 3D space." />
            <ServiceCard icon={UserCheck} title="White-Label Branding" desc="Impress clients with 3D models branded to your company. We provide the visuals that elevate your firm's presentation." />
            <ServiceCard icon={Database} title="Digital As-Built Handover" desc="Transition from construction to operations with a precise 1:1 digital twin serving as a permanent facility manual." />
            <ServiceCard icon={ClipboardCheck} title="Precision Procurement" desc="Leverage exact model geometry to calculate precise material quantities, buying exactly what is required." />
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES - LIGHT */}
      <section className="bg-slate-50 py-32 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-[11px]">Core Value Proposition</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mt-6 leading-none tracking-tighter uppercase">
              The ROI of <span className="text-orange-600">Precision</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-[80px] md:text-[100px] font-black text-slate-900 leading-none tracking-tighter">90<span className="text-4xl align-super font-bold text-orange-500">%</span></div>
              <div className="text-slate-500 text-[11px] uppercase tracking-[0.3em] font-black mt-6">Fewer Field Conflicts</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-[80px] md:text-[100px] font-black text-slate-900 leading-none tracking-tighter">50<span className="text-4xl align-super font-bold text-orange-500">%</span></div>
              <div className="text-slate-500 text-[11px] uppercase tracking-[0.3em] font-black mt-6">Faster RFI Resolution</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-[80px] md:text-[100px] font-black text-orange-600 leading-none tracking-tighter">ZERO</div>
              <div className="text-slate-500 text-[11px] uppercase tracking-[0.3em] font-black mt-6">Ambiguity in the Field</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <BenefitCard key={i} icon={b.icon} title={b.title} desc={b.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION - DARK */}
      <section id="portfolio" className="py-32 bg-slate-950 border-b border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader title="Visual Intelligence Portfolio" dark={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {projects.map((project) => (
              <VideoCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY SECTION - LIGHT */}
      <section id="inquiry" className="bg-slate-50 py-32 px-6">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-slate-200">
          <SectionHeader title="Initiate Project Setup" dark={false} />
          <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] text-center -mt-6 mb-12 opacity-80">
            Provide specs for an immediate technical review
          </p>
          
          <form action="https://formspree.io/f/mkovdyvd" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" name="name" placeholder="PROJECT CONTACT" required
                className="w-full p-5 bg-slate-50 rounded-sm border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-[12px] font-black tracking-widest uppercase transition-all"
              />
              <input 
                type="email" name="email" placeholder="EMAIL ADDRESS" required
                className="w-full p-5 bg-slate-50 rounded-sm border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-[12px] font-black tracking-widest uppercase transition-all"
              />
            </div>
            <textarea 
              name="message" placeholder="PROJECT SCOPE (LOCATION, DRAWING STATUS, TIMELINE...)" required
              rows={5}
              className="w-full p-5 bg-slate-50 rounded-sm border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-[12px] font-black tracking-widest uppercase transition-all leading-relaxed"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-6 rounded-sm uppercase tracking-[0.4em] text-[12px] transition-all shadow-lg hover:shadow-orange-500/30 flex justify-center items-center gap-3"
            >
              Submit Requirements <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT SECTION - DARK */}
      <section id="contact" className="bg-slate-950 py-32 px-6 border-t border-cyan-500/20">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader title="Direct Access" dark={true} />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-20 uppercase tracking-tighter">
            Connect With <span className="text-cyan-400">BuiltLogic 3D</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="mailto:team@builtlogic3d.com" className="group bg-slate-900/40 p-10 rounded-xl border border-cyan-500/10 hover:border-orange-500/50 transition-all duration-300">
              <Mail className="mx-auto mb-6 text-cyan-400 group-hover:text-orange-500 transition-colors" size={36} />
              <h3 className="text-slate-400 font-black mb-3 uppercase tracking-[0.3em] text-[11px]">Email Us</h3>
              <p className="text-white font-black text-sm uppercase tracking-wider">team@builtlogic3d.com</p>
            </a>
            <a href="tel:3474941068" className="group bg-slate-900/40 p-10 rounded-xl border border-cyan-500/10 hover:border-orange-500/50 transition-all duration-300">
              <Phone className="mx-auto mb-6 text-cyan-400 group-hover:text-orange-500 transition-colors" size={36} />
              <h3 className="text-slate-400 font-black mb-3 uppercase tracking-[0.3em] text-[11px]">Call Us</h3>
              <p className="text-white font-black text-xl uppercase tracking-wider">(347) 494-1068</p>
            </a>
            <a href="https://youtube.com/@BuiltLogic3D" target="_blank" rel="noreferrer" className="group bg-slate-900/40 p-10 rounded-xl border border-cyan-500/10 hover:border-orange-500/50 transition-all duration-300">
              <Youtube className="mx-auto mb-6 text-cyan-400 group-hover:text-orange-500 transition-colors" size={36} />
              <h3 className="text-slate-400 font-black mb-3 uppercase tracking-[0.3em] text-[11px]">Watch Strategy</h3>
              <p className="text-white font-black text-sm uppercase tracking-wider">YouTube Channel</p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER - DARK */}
      <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center">
              <Building2 size={16} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-widest text-slate-100 uppercase">
                BUILTLOGIC 3D, LLC
              </h3>
            </div>
          </div>
          <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] text-center md:text-right">
            <p>Precision Construction Modeling</p>
            <p className="mt-1">© 2026 BUILTLOGIC 3D, LLC. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* MODAL SECTION */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md" 
          onClick={() => setSelectedProject(null)}
        >
          <button 
            className="absolute top-8 right-8 text-slate-400 z-10 hover:text-cyan-400 transition-colors" 
            onClick={() => setSelectedProject(null)}
          >
            <X size={40} />
          </button>
          
          <div 
            className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)] border border-cyan-500/30 bg-black" 
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