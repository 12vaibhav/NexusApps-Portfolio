import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-0 left-10 text-[12rem] md:text-[18rem] font-black text-white/[0.04] select-none pointer-events-none leading-none tracking-tighter">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <img
                  src="/Assets/About_image.webp"
                  alt="About NexusApps"
                  className="w-full h-full object-cover filter drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                />
              </motion.div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/60 via-transparent to-transparent" />
            </div>

            {/* Decorative Background Glow for Image */}
            <div className="absolute -inset-10 bg-brand-primary/5 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />

            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 bg-[#151515] p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 hidden md:block"
            >
              <div className="text-6xl font-bold text-brand-primary mb-2 tracking-tighter">2+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] leading-tight">
                Years of <br /> Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-brand-primary" />
                <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-sm">Our Story</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-2">
                We are NexusApps. <br />
                <span className="font-serif italic font-medium text-slate-500">Architects</span> of the <br />
                Digital <span className="font-serif italic font-medium text-slate-500">Future</span>.
              </h2>

              <div className="flex flex-col gap-6 max-w-2xl">
                <p className="text-xl text-slate-400 leading-relaxed">
                  Based at the intersection of design and technology, we specialize in building high-end digital products that don't just work—they inspire. Our approach combines technical precision with creative flair.
                </p>
                <p className="text-xl text-slate-300 font-medium leading-relaxed italic border-l-4 border-brand-primary pl-6 py-2">
                  "We believe that every pixel tells a story, and every line of code is a promise of performance."
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6 pt-10 border-t border-white/5">
                {[
                  { label: "Delivered", value: "10+ Premium Projects" },
                  { label: "Strategy", value: "AI-First Development" },
                  { label: "Reliability", value: "100% On-Time Delivery" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    className="flex flex-col gap-1 group/stat"
                  >
                    <div className="text-2xl font-bold text-white tracking-tight group-hover/stat:text-brand-primary transition-colors duration-300">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
