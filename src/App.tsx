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
  ChevronRight,
  Maximize2
} from 'lucide-react';

// --- DATA ---
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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-mono selection:bg-blue-600 selection:text-white uppercase">
      
      {/* 1. TOP TECHNICAL BAR */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b-2 border-black py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-blue-600" />
          <span className="font-black text-[12px] tracking-tighter italic">BUILTLOGIC_3D // CORE_SYSTEM_v2.6</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-widest">
          <a href="#services" className="hover:bg-black hover:text-white px-2 transition-colors">01_SERVICES</a>
          <a href="#portfolio" className="hover:bg-black hover:text-white px-2 transition-colors">02_PORTFOLIO</a>
          <a href="#contact" className="hover:bg-black hover:text-white px-2 transition-colors">03_CONTACT</a>
        </div>
      </nav>

      {/* 2. HERO SECTION - BLUEPRINT THEME */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden border-b-4 border-blue-600">
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="relative z-10 w-full max-w-6xl px-6">
          <div className="border-l-4 border-blue-600 pl-8">
            <span className="text-blue-500 text-sm font-black tracking-[0.5em] mb-4 block">SPECIFICATION_NO. 3D-2026</span>
            <img src="/logo-main.png" className="w-full max-w-5xl mb-12" alt="BuiltLogic 3D" />
            <h1 className="text-white text-xl md:text-2xl font-light tracking-[0.3em] leading-relaxed max-w-3xl border-t border-white/20 pt-8">
              PRECISION_CONSTRUCTION_MODELING / <br/>
              MEP_COORDINATION / FIELD_INTELLIGENCE
            </h1>
          </div>
          
          <div className="mt-16 flex flex-wrap gap-4">
            <a href="#portfolio" className="bg-blue-600 text-white px-10 py-4 font-black hover:bg-white hover:text-blue-600 transition-all flex items-center gap-4">
              VIEW_ACTIVE_PORTFOLIO <ChevronRight size={16} />
            </a>
            <a href="#contact" className="border-2 border-white text-white px-10 py-4 font-black hover:bg-white hover:text-slate-950 transition-all">
              SECURE_CONSULTATION
            </a>
          </div>
        </div>
      </section>

      {/* 3. MISSION SECTION - DENSE TEXT */}
      <section className="py-24 border-b-2 border-slate-200 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 border-r-2 border-slate-100 pr-8">
            <h2 className="text-4xl font-black italic tracking-tighter leading-none mb-6 text-blue-600">MISSION_CONTROL</h2>
            <p className="text-[10px] font-bold text-slate-400 tracking-widest">EST. 2026 / NEW YORK, NY</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl md:text-3xl font-bold leading-tight mb-8">
              WE BRIDGE THE GAP BETWEEN <span className="text-blue-600 underline">ARCHITECTURAL INTENT</span> AND FLAWLESS FIELD EXECUTION. 
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl lowercase font-sans font-medium">
              In commercial construction, the cost of a mistake in the field is exponential. We build digitally first—integrating systems to identify friction points before they ever reach your job site.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SERVICES - MECHANICAL GRID */}
      <section id="services" className="bg-slate-50 py-24 border-b-2 border-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-end justify-between border-b-2 border-black pb-4">
            <h2 className="text-2xl font-black italic tracking-widest">01_CORE_COMPETENCIES</h2>
            <span className="text-[10px] font-bold opacity-50">DOCUMENT_REF: BL-3D-SVC</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            <ServiceBlock icon={Building2} title="ARCHITECTURAL_3D" desc="1:1 scale modeling of structural systems for total spatial awareness." />
            <ServiceBlock icon={Zap} title="MEPS_INTEGRATION" desc="Proactive clash detection for mechanical, electrical, and plumbing." />
            <ServiceBlock icon={Play} title="VISUAL_SEQUENCING" desc="Animated walkthroughs for complex trade coordination." />
            <ServiceBlock icon={UserCheck} title="WHITE_LABEL_REPORTS" desc="Branded 3D visualizations that elevate your firm's presence." />
            <ServiceBlock icon={Database} title="DIGITAL_TWIN" desc="Navigable manuals for lifecycle facilities management." />
            <ServiceBlock icon={ClipboardCheck} title="RFI_VISUALS" desc="Clear visual evidence for faster approvals and less ambiguity." />
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO - LARGE SPEC CARDS */}
      <section id="portfolio" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-l-8 border-black pl-6">
            <h2 className="text-5xl font-black italic tracking-tighter">FIELD_CASE_STUDIES</h2>
            <p className="text-blue-600 font-bold mt-2 tracking-[0.3em]">ACTIVE_PROJECT_LOG // 001-006</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((p) => (
              <div key={p.id} onClick={() => setSelectedProject(p)} 
                   className="group cursor-pointer border-2 border-black overflow-hidden relative bg-black">
                <img src={p.image} className="w-full h-[400px] object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt={p.title} />
                <div className="absolute top-4 right-4 bg-blue-600 text-white p-2">
                  <Maximize2 size={20} />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                  <span className="bg-blue-600 text-white px-2 py-1 text-[10px] mb-4 inline-block">{p.category}</span>
                  <h4 className="text-white text-2xl font-black italic">{p.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT - THE INQUIRY FORM */}
      <section id="contact" className="bg-slate-950 py-32 border-t-4 border-blue-600 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-white text-5xl font-black italic mb-4">GET_STARTED</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ContactInfo icon={Mail} label="EMAIL" value="team@builtlogic3d.com" link="mailto:team@builtlogic3d.com" />
            <ContactInfo icon={Phone} label="DIRECT" value="(347) 494-1068" link="tel:3474941068" />
            <ContactInfo icon={Youtube} label="STRATEGY" value="YT_CHANNEL" link="https://youtube.com/@BuiltLogic3D" />
          </div>

          <form action="https://formspree.io/f/mkovdyvd" method="POST" className="space-y-4 bg-white p-10 border-r-8 border-b-8 border-blue-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" placeholder="IDENT_NAME" className="w-full bg-slate-100 p-4 border-2 border-slate-200 outline-none focus:border-blue-600 font-bold" required />
              <input name="email" placeholder="CONTACT_EMAIL" className="w-full bg-slate-100 p-4 border-2 border-slate-200 outline-none focus:border-blue-600 font-bold" required />
            </div>
            <textarea name="message" rows={5} placeholder="SCOPE_DESCRIPTION" className="w-full bg-slate-100 p-4 border-2 border-slate-200 outline-none focus:border-blue-600 font-bold" required />
            <button type="submit" className="w-full bg-blue-600 text-white py-6 font-black text-xl hover:bg-black transition-all">
              SUBMIT_PROJECT_DATA
            </button>
          </form>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedProject(null)}>
          <div className="w-full max-w-6xl aspect-video bg-black border-4 border-blue-600" onClick={e => e.stopPropagation()}>
            <iframe src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1`} className="w-full h-full" allowFullScreen title={selectedProject.title} />
          </div>
        </div>
      )}
    </div>
  );
}

// --- SUB-COMPONENTS ---

function ServiceBlock({ icon: Icon, title, desc }: any) {
  return (
    <div className="border border-slate-200 p-12 bg-white hover:bg-blue-600 hover:text-white transition-all group">
      <div className="mb-8 text-blue-600 group-hover:text-white"><Icon size={40} strokeWidth={1} /></div>
      <h3 className="text-xl font-black italic mb-4">{title}</h3>
      <p className="text-[11px] font-bold leading-relaxed tracking-wider opacity-70 group-hover:opacity-100">{desc}</p>
    </div>
  );
}

function ContactInfo({ icon: Icon, label, value, link }: any) {
  return (
    <a href={link} className="block bg-white/5 border-l-4 border-blue-600 p-6 hover:bg-white/10 transition-all">
      <div className="flex items-center gap-4 mb-2">
        <Icon className="text-blue-500" size={18} />
        <span className="text-[10px] text-slate-500 font-black tracking-widest">{label}</span>
      </div>
      <span className="text-white text-sm font-bold">{value}</span>
    </a>
  );
}