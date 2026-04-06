import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Plus, ExternalLink } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Echokart",
    category: "Full Stack Development",
    client: "E-commerce Platform With Dashboard",
    image: "/Assets/Projects/Echokart.jpeg",
    index: "01",
    link: "https://echo-kart.vercel.app/"
  },
  {
    title: "Chatlayer",
    category: "AI/SaaS Development",
    client: "Customizable AI chatbot Builder",
    image: "/Assets/Projects/ChatLayer.jpeg",
    index: "02",
    link: "https://chat-layer.vercel.app/"
  },
  {
    title: "Lumina Vision",
    category: "AI Experience",
    client: "Reimagine Space With AI",
    image: "/Assets/Projects/LuminaVision.jpeg",
    index: "03",
    link: "https://lumina-vision-app.vercel.app/"
  },
  {
    title: "Ghar Ka Swad",
    category: "Web Development",
    client: "Restaurant Website With Table Booking",
    image: "/Assets/Projects/GharKaSwad.jpeg",
    index: "04",
    link: "https://swad-ka-ghar.vercel.app/"
  },
  {
    title: "Ethnic Fusion",
    category: "Web Design & Development",
    client: "Fashion Ecommerce Store",
    image: "/Assets/Projects/EthnicFusion.png",
    index: "05",
    link: "https://ethnic-fusion.vercel.app/"
  },
  {
    title: "Love Loom Lens",
    category: "Web Design & Development",
    client: "Photography Studio Website",
    image: "/Assets/Projects/Loveloomlens.jpeg",
    index: "06",
    link: "https://love-loom-lens.vercel.app/"
  },
  {
    title: "The Heirloom Editorial",
    category: "Web Design & Development",
    client: "Event Planning & Manage. Company",
    image: "/Assets/Projects/EventManage.jpeg",
    index: "07",
    link: "https://event-planning-site.vercel.app/"
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  key?: string | number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 mb-6 md:mb-8 border border-white/5 group-hover:border-brand-primary/20 transition-colors duration-500">
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Hover Overlay Icon */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center text-black scale-50 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_40px_rgba(190,242,100,0.4)]">
              <ArrowUpRight className="w-10 h-10 stroke-[2.5]" />
            </div>
            <span className="text-white font-bold tracking-widest uppercase text-xs translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
              View Case Study
            </span>
          </div>
        </div>

        {/* Index Number */}
        <div className="absolute top-8 left-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white font-display font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.index}
        </div>

        {/* Glass Launch Button */}
        <motion.button
          onClick={handleLinkClick}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 28px rgba(190,242,100,0.45)",
          }}
          whileTap={{ scale: 0.93 }}
          title={`Open ${project.title}`}
          className="absolute top-4 right-4 md:top-5 md:right-5 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
            width: "2.75rem",
            height: "2.75rem",
          }}
        >
          <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
        </motion.button>
      </div>

      {/* Project Info */}
      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-brand-primary transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-[9px] md:text-sm font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-2 md:px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
            {project.category}
          </span>
        </div>
        <p className="text-slate-400 font-medium text-base md:text-lg leading-relaxed">
          {project.client}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="pt-4 pb-16 bg-brand-dark relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-0 right-4 md:right-10 text-[8rem] md:text-[18rem] font-black text-white/[0.04] select-none pointer-events-none leading-none tracking-tighter">
        WORKS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 items-center text-center md:items-start md:text-left"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-8 md:w-12 bg-brand-primary block md:hidden" />
              <div className="h-px w-12 bg-brand-primary hidden md:block" />
              <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Portfolio</span>
              <div className="h-px w-8 md:w-12 bg-brand-primary block md:hidden" />
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[1.1] md:leading-[0.9]">
              My Recent <br />
              <span className="font-serif italic font-medium text-slate-500">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mt-2 md:mt-4 mx-auto md:mx-0">
              Combining innovation, strategy, and design to craft powerful brand experiences that drive real results.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-12 md:gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(190,242,100,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-6 bg-white/5 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] text-white font-bold text-xl md:text-2xl hover:bg-brand-primary hover:text-black transition-all duration-500"
          >
            Explore All Projects
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-primary/20 group-hover:bg-black/10 flex items-center justify-center transition-colors">
              <Plus className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
