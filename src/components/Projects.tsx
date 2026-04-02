import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Nova Pulse",
    category: "Web Design",
    client: "Lumovia Life - Fictional Industry Limited",
    image: "https://picsum.photos/seed/nova/1200/900",
    index: "01"
  },
  {
    title: "Pixel Drift",
    category: "UI/UX Design",
    client: "Ser Wellness - Fictional Industry Limited",
    image: "https://picsum.photos/seed/pixel/1200/900",
    index: "02"
  },
  {
    title: "Hey & Me",
    category: "Brand Identity",
    client: "Art Directed Collection - 2024 Edition",
    image: "https://picsum.photos/seed/hey/1200/900",
    index: "03"
  },
  {
    title: "Screen Mockup",
    category: "Digital Product",
    client: "Showcase Branding - Visual Identity",
    image: "https://picsum.photos/seed/screen/1200/900",
    index: "04"
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
      <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-900 mb-8 border border-white/5 group-hover:border-brand-primary/20 transition-colors duration-500">
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
      </div>

      {/* Project Info */}
      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-brand-primary transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-sm font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
            {project.category}
          </span>
        </div>
        <p className="text-slate-400 font-medium text-lg leading-relaxed">
          {project.client}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="pt-4 pb-16 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-10 text-[12rem] md:text-[18rem] font-black text-white/[0.04] select-none pointer-events-none leading-none tracking-tighter">
        WORKS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-brand-primary" />
              <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-sm">Portfolio</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
              My Recent <br />
              <span className="font-serif italic font-medium text-slate-500">Works</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mt-4">
              Combining innovation, strategy, and design to craft powerful brand experiences that drive real results.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
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
            className="group relative flex items-center gap-6 px-12 py-6 bg-white/5 border border-white/10 rounded-[2rem] text-white font-bold text-2xl hover:bg-brand-primary hover:text-black transition-all duration-500"
          >
            Explore All Projects
            <div className="w-10 h-10 rounded-full bg-brand-primary/20 group-hover:bg-black/10 flex items-center justify-center transition-colors">
              <Plus className="w-6 h-6" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
