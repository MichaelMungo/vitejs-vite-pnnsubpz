import './index.css';
import { useState } from 'react';
import {
  Menu,
  Building2,
  Ruler,
  ArrowRight,
  Play,
  Zap,
  CheckCircle2,
  Mail,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '3D Visualization',
    category: 'Design Integration',
    image: 'https://i.postimg.cc/JhcrybFb/thumb1.jpg',
    video: 'https://www.youtube.com/embed/YOUR_ID',
    description:
      'Transforming 2D architectural intent into high-fidelity 3D structural builds.',
  },
  {
    id: 2,
    title: 'MEPS Conflict Detection',
    category: 'Preconstruction',
    image: 'https://i.postimg.cc/1tm9D8xN/thumb2.jpg',
    video: 'https://www.youtube.com/embed/YOUR_ID',
    description:
      'Advanced spatial coordination to identify and resolve plumbing and electrical clashes.',
  },
  {
    id: 3,
    title: 'Structural Verification',
    category: 'Coordination',
    image: 'https://i.postimg.cc/pTW2KmNh/thumb3.jpg',
    video: 'https://www.youtube.com/embed/YOUR_ID',
    description:
      'Verifying structural shop drawings against the architectural intent.',
  },
  {
    id: 4,
    title: 'Underground As-Builts',
    category: 'Civil',
    image: 'https://i.postimg.cc/Jnr1jswy/thumb4.jpg',
    video: 'https://www.youtube.com/embed/YOUR_ID',
    description:
      'Precision tracking of invert elevations and utility locations.',
  },
  {
    id: 5,
    title: 'Comprehensive RFIs',
    category: 'Communication',
    image: 'https://i.postimg.cc/MT6W1nkf/thumb5.jpg',
    video: 'https://www.youtube.com/embed/YOUR_ID',
    description:
      'Visualizing complex site issues in 3D to keep the job moving.',
  },
  {
    id: 6,
    title: 'The Full Sequence',
    category: 'Management',
    image: 'https://i.postimg.cc/MT6W1nkV/thumb6.jpg',
    video: 'https://www.youtube.com/embed/YOUR_ID',
    description:
      'A comprehensive "peel-back" showing the full integration of all building systems.',
  },
];

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mb-4">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

const VideoCard = ({ project }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl bg-slate-900 aspect-video w-full border border-white/5 shadow-md"
    >
      {isHovered ? (
        <iframe
          src={`${project.video}?autoplay=1&mute=1&controls=0`}
          className="absolute inset-0 w-full h-full object-cover"
          allow="autoplay"
          frameBorder="0"
        />
      ) : (
        <img
          src={project.image}
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          alt={project.title}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent p-4 flex flex-col justify-end">
        <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1">
          {project.category}
        </span>
        <h4 className="text-white font-bold text-sm">{project.title}</h4>
      </div>
    </div>
  );
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/10">
  {/* 1. NAVIGATION */}
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-blue-400 transition-colors p-1">
              <Menu size={24} />
            </button>
          </div>

          {/* This div now handles all the alignment to the right */}
          <div className="flex items-center gap-8 ml-auto">
            <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <a href="#services" className="hover:text-white transition-all">
                Services
              </a>
              <a href="#portfolio" className="hover:text-white transition-all">
                Portfolio
              </a>
              <a href="#contact" className="hover:text-white transition-all">
                Contact
              </a>
            </div>
            {/* The blue button has been removed from here */}
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-24 pb-16 px-6 group"
      >
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)`,
            backgroundSize: '75px 75px',
            WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
            maskImage: `radial-gradient(circle 185px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
          }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
          <div className="mb-12 flex justify-center items-center">
            {/* IMPROVED LOGO */}
            <img
              src="/logo-main.png"
              alt="BuiltLogic 3D"
              className="relative z-30 w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-[900px] h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)] brightness-150 contrast-150 saturate-125"
            />
          </div>

          <div className="relative z-20">
            <p className="text-blue-400/90 text-sm md:text-xl font-medium mb-10 tracking-wide max-w-2xl mx-auto">
              Precision 3D Construction Models from Architectural and MEP Drawings
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all hover:-translate-y-0.5 shadow-xl shadow-blue-900/40">
                Start Your Project
              </button>
              <button className="bg-white/5 text-white px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-0.5">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Our Services
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-500 max-w-xl mx-auto italic text-sm">
            Comprehensive 3D modeling services that ensure accuracy and clarity across every trade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={Building2}
            title="Architectural 3D"
            desc="Transform 2D floor plans into detailed 3D visualizations."
          />
          <ServiceCard
            icon={Zap}
            title="MEP Integration"
            desc="Modeling of mechanical, electrical, and plumbing systems."
          />
          <ServiceCard
            icon={Ruler}
            title="BIM Coordination"
            desc="Ensuring all disciplines work seamlessly together."
          />
          <ServiceCard
            icon={ArrowRight}
            title="Shop Drawings"
            desc="Precise fabrication-ready drawings and specs."
          />
          <ServiceCard
            icon={CheckCircle2}
            title="As-Built Docs"
            desc="Detailed documentation of existing structures."
          />
          <ServiceCard
            icon={Play}
            title="Visualization"
            desc="Photorealistic renders and walkthroughs."
          />
        </div>
      </section>

      {/* 4. FEATURED PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Portfolio
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-slate-500 max-w-lg mx-auto text-sm italic">
              Precision 3D modeling across various commercial and residential sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <VideoCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="bg-slate-950 py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-start">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px]">
              Get In Touch
            </span>
            <h2 className="text-4xl font-black text-white mt-4 mb-6 leading-tight">
              Let's Build Together
            </h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Ready to visualize your next project in high-fidelity 3D? Reach out for a consultation.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-blue-500">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:contact@builtlogic3d.com"
                  className="text-sm hover:text-blue-400 transition-colors font-medium"
                >
                  contact@builtlogic3d.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-10 rounded-2xl border border-white/5 shadow-2xl">
            <form className="grid grid-cols-2 gap-4">
              <input
                placeholder="Name"
                className="bg-slate-800 rounded-lg p-4 text-white text-sm col-span-1 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                placeholder="Email"
                className="bg-slate-800 rounded-lg p-4 text-white text-sm col-span-1 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Project Details"
                rows={4}
                className="bg-slate-800 rounded-lg p-4 text-white text-sm col-span-2 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button className="col-span-2 bg-blue-600 text-white font-bold py-4 rounded-lg text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-slate-950 py-8 border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[10px] uppercase tracking-widest">
            © 2026 BUILTLOGIC 3D. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}