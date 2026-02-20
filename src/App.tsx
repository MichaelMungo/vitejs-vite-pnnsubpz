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

      {/* NAV + HERO + SERVICES (unchanged) */}
      {/* ... [your existing nav, hero, and services section remain exactly the same] ... */}

      {/* === NEW STRATEGIC ADVANTAGES SECTION (DARK) === */}
      <section className="bg-slate-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">VALUE PROPOSITION</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 leading-tight">
              Strategic Advantages<br />
              <span className="text-blue-500">for Your Projects</span>
            </h2>
          </div>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg text-center mb-20">
            Our 3D construction models deliver measurable benefits across every phase of your project—from client presentations to field execution—ensuring fewer conflicts, reduced costs, and superior outcomes.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-7xl font-black text-white mb-2">90%</div>
              <div className="text-blue-400 text-sm uppercase tracking-widest font-semibold">Fewer Field Conflicts</div>
            </div>
            <div className="text-center">
              <div className="text-7xl font-black text-white mb-2">50%</div>
              <div className="text-blue-400 text-sm uppercase tracking-widest font-semibold">Faster RFI Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-7xl font-black text-white mb-2">$</div>
              <div className="text-blue-400 text-sm uppercase tracking-widest font-semibold">Significant Cost Savings</div>
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

      {/* PORTFOLIO SECTION (now follows the new section) */}
      <section id="portfolio" className="py-24 bg-slate-50">
        {/* ... your existing portfolio code ... */}
      </section>

      {/* CONTACT + MODAL (unchanged) */}
      {/* ... rest of your code ... */}

    </div>
  );
}