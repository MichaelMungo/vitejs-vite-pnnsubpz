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
  { id: 1, title: '2D ARCH TO 3D VISUALIZATION', category: 'DESIGN INTEGRATION', image: 'https://i.postimg.cc/JhcrybFb/thumb1.jpg', youtubeId: 'h32x8DYk9EI' },
  { id: 2, title: 'MEPS CONFLICT DETECTION', category: 'PRECONSTRUCTION', image: 'https://i.postimg.cc/T1rFT58F/MEPS-Conflict-Detection-Preconstruction-(Thumbnail-2).jpg', youtubeId: 'p1s2s_jUVgc' },
  { id: 3, title: 'STRUCTURAL VERIFICATION', category: 'COORDINATION', image: 'https://i.postimg.cc/pTW2KmNh/thumb3.jpg', youtubeId: 'y_XKfq5f4OY' },
  { id: 4, title: 'UNDERGROUND UTILITY LOCATIONS', category: 'CIVIL', image: 'https://i.postimg.cc/Jnr1jswy/thumb4.jpg', youtubeId: 'HWp-PkopSq4' },
  { id: 5, title: 'COMPREHENSIVE RFI VISUALS', category: 'COMMUNICATION', image: 'https://i.postimg.cc/MT6W1nkf/thumb5.jpg', youtubeId: 'Kj4-hINzTtY' },
  { id: 6, title: 'FULL BUILD SEQUENCING', category: 'MANAGEMENT', image: 'https://i.postimg.cc/MT6W1nkV/thumb6.jpg', youtubeId: 'rIovdzSwltU' },
];

// --- STYLED COMPONENTS ---

const BrochureHeader = ({ title, subtitle, dark = false }: { title: string; subtitle?: string; dark?: boolean }) => (
  <div className="flex flex-col items-center mb-20">
    <div className={`w-24 h-px bg-gradient-to-r from-transparent ${dark ? 'via-blue-400' : 'via-blue-600'} to-transparent mb-8`} />
    <span className={`${dark ? 'text-blue-400' : 'text-blue-600'} text-[10px] font-black tracking-[0.5em] uppercase mb-4`}>
      {title}
    </span>
    {subtitle && (
      <h2 className={`${dark ? 'text-white' : 'text-slate-900'} text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-center max-w-3xl px-4`}>
        {subtitle}
      </h2>
    )}
  </div>
);

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="relative group p-10 bg-white border border-slate-100 hover:border-blue-600/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl">
    <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 -mr-8 -mt-8 rotate-45 transition-transform group-hover:bg-blue-600" />
    <div className="relative z-10">
      <div className="text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-black text-slate-900 mb-4 uppercase italic tracking-tight border-b border-slate-100 pb-4">
        {title}
      </h3>
      <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed opacity-70">
        {desc}
      </p>
    </div>
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
      className="group relative cursor-pointer aspect-video overflow-hidden border border-slate-200 bg-slate-950 transition-all duration-700 hover:border-blue-500 hover:shadow-[0_0_50px_rgba(37,99,235,0.2)]"
    >
      <div className="absolute inset-0 z-10 border-[1px] border-white/5 pointer-events-none group-hover:border-blue-500/50 transition-colors" />
      {isHovered ? (
        <iframe src={videoSrc} className="absolute inset-0 w-full h-full object-cover scale-110" frameBorder="0" />
      ) : (
        <img src={project.image} className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 opacity-80" alt={project.title} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 p-8 flex flex-col justify-end">
        <span className="text-[9px] font-black text-blue-400 tracking-[0.4em] mb-2">{project.category}</span>
        <h4 className="text-white font-black text-lg uppercase italic tracking-tighter">{project.title}</h4>
      </div>
    </div>
  );
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const heroGridStyle = {
    backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)',
    backgroundSize: '80px 80px',
    WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
    maskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-600/10">
      
      {/* NAVIGATION - TECHNICAL STYLE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center font-mono">
          <div className="text-white text-[10px] font-black tracking-[0.5em] flex items-center gap-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            BUILTLOGIC // 3D_CORE
          </div>
          <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            <a href="#services" className="hover:text-blue-400 transition-colors">SERVICES</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">PORTFOLIO</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* HERO - MINIMAL & MECHANICAL */}
      <section 
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden px-6 pt-20"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={heroGridStyle} />
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
             <div className="px-6 py-2 border border-blue-500/30 rounded-full bg-blue-500/5 backdrop-blur-sm">
                <span className="text-blue-400 text-[9px] font-black tracking-[0.6em] uppercase">V.2026_MASTER_SUITE</span>
             </div>
          </div>
          <img 
            src="/logo-main.png" 
            className="w-full max-w-4xl mx-auto mb-12 drop-shadow-[0_0_50px_rgba(37,99,235,0.3)] animate-float"
            alt="BuiltLogic 3D"
          />
          <p className="text-slate-400 text-[11px] md:text-xs font-black tracking-[0.5em] uppercase max-w-3xl mx-auto leading-loose mb-16">
            Precision Modeling // Clash Detection // Visual Intelligence
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#portfolio" className="group relative px-12 py-5 overflow-hidden">
               <div className="absolute inset-0 border border-white/20 group-hover:border-blue-500 transition-colors" />
               <span className="relative text-white text-[10px] font-black tracking-[0.4em] uppercase">Explore Specs</span>
            </a>
            <a href="mailto:team@builtlogic3d.com" className="bg-blue-600 px-12 py-5 text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              Secure Consultation
            </a>
          </div>
        </div>
      </section>

      {/* MISSION - WHITE SECTION */}
      <section className="py-40 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <BrochureHeader title="MISSION_OVERVIEW" subtitle="Bridging the gap between 2D architectural intent and flawless field execution." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left border-t border-slate-100 pt-16">
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              In commercial construction, the cost of a mistake in the field is exponential compared to its correction on a screen. BuiltLogic 3D exists to provide General Contractors with the visual foresight required to manage complex builds without the weight of unexpected rework.
            </p>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              We don't just "draw" in 3D; we build digitally first. By integrating Architectural and MEP systems into a unified environment, we identify the friction points before they ever reach your job site.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES - THE SPEC SHEET */}
      <section id="services" className="py-40 max-w-7xl mx-auto px-8">
        <BrochureHeader title="CORE_COMPETENCIES" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          <ServiceCard icon={Building2} title="Architectural 3D" desc="1:1 scale modeling of structural and architectural systems for total spatial awareness." />
          <ServiceCard icon={Zap} title="MEPS Integration" desc="Proactive clash detection for mechanical, electrical, and plumbing systems." />
          <ServiceCard icon={Play} title="Visual Sequencing" desc="Animated walkthroughs that demonstrate installation order for complex trade coordination." />
          <ServiceCard icon={UserCheck} title="White-Label Reports" desc="Branded 3D visualizations that elevate your firm's professional presence in client meetings." />
          <ServiceCard icon={Database} title="Digital Twin As-Builts" desc="Finalized 3D models delivered as a permanent navigable manual for facilities management." />
          <ServiceCard icon={ClipboardCheck} title="RFI Support" desc="Clear visual evidence for RFIs, ensuring faster approvals and less ambiguity from engineers." />
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES - DARK SECTION */}
      <section className="bg-slate-950 py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <BrochureHeader title="ANALYTICS_DATA" subtitle="Mechanical performance driven by visual precision." dark />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center mb-32">
            <div className="group">
              <h3 className="text-8xl font-black text-white italic group-hover:text-blue-500 transition-colors">90%</h3>
              <p className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase mt-6">Conflict Reduction</p>
            </div>
            <div className="group">
              <h3 className="text-8xl font-black text-white italic group-hover:text-blue-500 transition-colors">50%</h3>
              <p className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase mt-6">RFI Speed</p>
            </div>
            <div className="group">
              <h3 className="text-8xl font-black text-white italic group-hover:text-blue-500 transition-colors">ROI</h3>
              <p className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase mt-6">Guaranteed Efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO - LIGHT THEME */}
      <section id="portfolio" className="py-40 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <BrochureHeader title="FIELD_CASE_STUDIES" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <VideoCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT - MINIMAL FOOTER */}
      <section id="contact" className="py-40 bg-white">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <BrochureHeader title="GET_STARTED" subtitle="Secure your next project's visual roadmap." />
          <form action="https://formspree.io/f/mkovdyvd" method="POST" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" name="name" placeholder="IDENTIFICATION (NAME)" className="w-full bg-slate-50 p-6 text-[10px] font-black tracking-[0.3em] uppercase border-b-2 border-slate-200 focus:border-blue-600 outline-none transition-all" required />
              <input type="email" name="email" placeholder="CONTACT (EMAIL)" className="w-full bg-slate-50 p-6 text-[10px] font-black tracking-[0.3em] uppercase border-b-2 border-slate-200 focus:border-blue-600 outline-none transition-all" required />
            </div>
            <textarea name="message" rows={6} placeholder="SCOPE_DESCRIPTION (PROJECT DETAILS)" className="w-full bg-slate-50 p-6 text-[10px] font-black tracking-[0.3em] uppercase border-b-2 border-slate-200 focus:border-blue-600 outline-none transition-all" required />
            <button type="submit" className="w-full bg-slate-950 py-8 text-white text-[11px] font-black tracking-[0.5em] uppercase hover:bg-blue-600 transition-all italic">
              SUBMIT_INQUIRY
            </button>
          </form>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
          <div className="w-full max-w-5xl aspect-video bg-black border border-white/10" onClick={e => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1`}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[9px] font-black tracking-[0.4em] text-slate-500">
          <p>© 2026 BUILTLOGIC 3D // ALL RIGHTS RESERVED</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="mailto:team@builtlogic3d.com" className="hover:text-white transition-colors">EMAIL</a>
             <a href="tel:3474941068" className="hover:text-white transition-colors">VOICE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}