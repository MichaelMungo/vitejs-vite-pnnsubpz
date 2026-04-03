import { useState, useEffect } from 'react';
import {
  Building2,
  Zap,
  Play,
  UserCheck,
  Database,
  ClipboardCheck,
  Mail,
  Phone,
  Youtube,
  ChevronRight
} from 'lucide-react';

const projects = [
  { id: 1, title: '2D ARCH TO 3D VISUALIZATION', category: 'DESIGN_INTENT', image: 'https://i.postimg.cc/JhcrybFb/thumb1.jpg', youtubeId: 'h32x8DYk9EI' },
  { id: 2, title: 'MEPS CONFLICT DETECTION', category: 'PRE_CON', image: 'https://i.postimg.cc/T1rFT58F/MEPS-Conflict-Detection-Preconstruction-(Thumbnail-2).jpg', youtubeId: 'p1s2s_jUVgc' },
  { id: 3, title: 'STRUCTURAL VERIFICATION', category: 'COORDINATION', image: 'https://i.postimg.cc/pTW2KmNh/thumb3.jpg', youtubeId: 'y_XKfq5f4OY' },
  { id: 4, title: 'UNDERGROUND UTILITY LOCATIONS', category: 'CIVIL_ENG', image: 'https://i.postimg.cc/Jnr1jswy/thumb4.jpg', youtubeId: 'HWp-PkopSq4' },
  { id: 5, title: 'COMPREHENSIVE RFI VISUALS', category: 'COMMUNICATION', image: 'https://i.postimg.cc/MT6W1nkf/thumb5.jpg', youtubeId: 'Kj4-hINzTtY' },
  { id: 6, title: 'FULL BUILD SEQUENCING', category: 'MANAGEMENT', image: 'https://i.postimg.cc/MT6W1nkV/thumb6.jpg', youtubeId: 'rIovdzSwltU' },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-mono selection:bg-blue-600 selection:text-white uppercase">
      
      {/* HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b-2 border-black py-3 px-8 flex justify-between items-center">
        <div className="font-black text-[12px] tracking-tighter italic flex items-center gap-3">
          <div className="w-3 h-3 bg-blue-600" /> BUILTLOGIC_3D // REV_2026.04
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-black">
          <a href="#services" className="hover:text-blue-600">01_SERVICES</a>
          <a href="#portfolio" className="hover:text-blue-600">02_PORTFOLIO</a>
          <a href="#contact" className="hover:text-blue-600">03_CONTACT</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden border-b-[12px] border-blue-600">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', 
               backgroundSize: '50px 50px',
               maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black, transparent)` 
             }} 
        />
        <div className="relative z-10 w-full max-w-5xl px-8 border-l-4 border-white/20 ml-4">
          <span className="text-blue-500 text-xs font-black tracking-[0.5em] mb-6 block">PROJECT_SPEC_LEVEL: HIGH_PRECISION</span>
          <img src="/logo-main.png" className="w-full mb-10 drop-shadow-[0_0_30px_rgba(37,99,235,0.2)]" alt="BuiltLogic 3D" />
          <div className="flex flex-wrap gap-6 mt-12">
            <a href="#portfolio" className="bg-blue-600 text-white px-12 py-5 font-black flex items-center gap-4 hover:bg-white hover:text-blue-600 transition-all">
              VIEW_ACTIVE_PROJECTS <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-32 border-b-2 border-slate-100 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-5xl font-black italic tracking-tighter leading-none text-blue-600">MISSION_CTRL</h2>
          </div>
          <div className="md:col-span-8 border-l-2 border-slate-100 pl-12">
            <p className="text-2xl md:text-4xl font-black leading-tight mb-8">
              ELIMINATING <span className="underline decoration-blue-600">FIELD_FRICTION</span> THROUGH DIGITAL TWIN INTEGRATION.
            </p>
            <p className="text-slate-500 font-sans normal-case text-lg max-w-2xl leading-relaxed">
              We identify coordination gaps before they reach the job site, turning complex 2D drawings into actionable 3D intelligence for General Contractors.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-32 border-y-2 border-black px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
            <Service icon={Building2} title="ARCH_MODELING" />
            <Service icon={Zap} title="MEP_CLASH_DETECTION" />
            <Service icon={Play} title="VISUAL_SEQUENCING" />
            <Service icon={UserCheck} title="WHITE_LABEL_DOCS" />
            <Service icon={Database} title="AS_BUILT_DATA" />
            <Service icon={ClipboardCheck} title="RFI_INTELLIGENCE" />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((p) => (
              <div key={p.id} onClick={() => setSelectedProject(p)} className="cursor-pointer border-4 border-black group relative bg-black aspect-video overflow-hidden">
                <img src={p.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" alt={p.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent p-8 flex flex-col justify-end">
                  <span className="text-blue-400 text-[10px] font-black tracking-widest mb-2">{p.category}</span>
                  <h4 className="text-white text-2xl font-black italic">{p.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-950 py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Contact icon={Mail} label="EMAIL" val="team@builtlogic3d.com" />
            <Contact icon={Phone} label="PHONE" val="(347) 494-1068" />
            <Contact icon={Youtube} label="MEDIA" val="YT_CHANNEL" />
          </div>
          <form action="https://formspree.io/f/mkovdyvd" method="POST" className="bg-white p-12 border-b-[16px] border-r-[16px] border-blue-600">
            <input name="name" placeholder="OPERATOR_NAME" className="w-full mb-6 p-5 bg-slate-100 border-2 border-slate-200 outline-none focus:border-blue-600 font-bold" required />
            <input name="email" placeholder="CONTACT_EMAIL" className="w-full mb-6 p-5 bg-slate-100 border-2 border-slate-200 outline-none focus:border-blue-600 font-bold" required />
            <textarea name="message" rows={4} placeholder="PROJECT_SCOPE" className="w-full mb-8 p-5 bg-slate-100 border-2 border-slate-200 outline-none focus:border-blue-600 font-bold" required />
            <button className="w-full bg-blue-600 text-white py-6 font-black text-xl hover:bg-black transition-all">EXECUTE_SUBMITTAL</button>
          </form>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="w-full max-w-5xl aspect-video border-4 border-blue-600" onClick={e => e.stopPropagation()}>
            <iframe src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1`} className="w-full h-full" allowFullScreen title={selectedProject.title} />
          </div>
        </div>
      )}
    </div>
  );
}

function Service({ icon: Icon, title }: any) {
  return (
    <div className="p-12 border border-black bg-white hover:bg-blue-600 hover:text-white transition-all group">
      <Icon size={40} strokeWidth={1.5} className="mb-6 text-blue-600 group-hover:text-white" />
      <h3 className="text-lg font-black italic">{title}</h3>
    </div>
  );
}

function Contact({ icon: Icon, label, val }: any) {
  return (
    <div className="border-l-4 border-blue-600 pl-6 py-2">
      <div className="flex items-center gap-3 text-slate-500 mb-1">
        <Icon size={14} /> <span className="text-[10px] font-black tracking-widest">{label}</span>
      </div>
      <div className="text-white text-sm font-bold">{val}</div>
    </div>
  );
}