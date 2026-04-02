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
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-10 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none leading-none">
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
              <motion.div style={{ y, scale }} className="absolute inset-0">
                <img
                  src="https://picsum.photos/seed/architect/1200/1500"
                  alt="NexusApps Vision"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/60 via-transparent to-transparent" />
            </div>

            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 glass p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/10 hidden md:block"
            >
              <div className="text-6xl font-bold text-brand-primary mb-2 tracking-tighter">10+</div>
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-6 pt-8 border-t border-white/5">
                {[
                  { label: "Projects", value: "250+" },
                  { label: "Clients", value: "180+" },
                  { label: "Awards", value: "15" },
                  { label: "Lines", value: "2M+" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    className="flex flex-col gap-1"
                  >
                    <div className="text-3xl font-bold text-white tracking-tight">{stat.value}</div>
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
