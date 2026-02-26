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
  Phone,
  Youtube,
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
      onMouseLeave={() => setIsHovered