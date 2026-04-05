import { motion } from "motion/react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={containerRef} className="pt-6 pb-10 md:py-24 bg-brand-dark relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-0 left-4 md:left-10 text-[8rem] md:text-[18rem] font-black text-white/[0.04] select-none pointer-events-none leading-none tracking-tighter">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Mobile-only section label above the image card */}
        <div className="flex lg:hidden items-center justify-center gap-4 mb-6">
          <div className="h-px w-8 bg-brand-primary" />
          <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-sm">Our Story</span>
          <div className="h-px w-8 bg-brand-primary" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-4/5 mx-auto lg:w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src="/Assets/About_image.webp"
                  alt="About NexusApps"
                  className="w-full h-full object-cover filter drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                />
              </div>
              
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
              className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:gap-8"
            >
              {/* Desktop-only section label */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="h-px w-12 bg-brand-primary" />
                <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-sm">Our Story</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] md:leading-[0.9] mb-2">
                We are NexusApps. <br />
                <span className="font-serif italic font-medium text-slate-500">Architects</span> of the <br />
                Digital <span className="font-serif italic font-medium text-slate-500">Future</span>.
              </h2>

              <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 max-w-2xl">
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                  Based at the intersection of design and technology, we specialize in building high-end digital products that don't just work—they inspire. Our approach combines technical precision with creative flair.
                </p>
                <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed italic border-brand-primary lg:border-l-4 lg:pl-6 pl-0 border-t-4 lg:border-t-0 pt-4 lg:pt-0 pb-0 lg:py-2">
                  "We believe that every pixel tells a story, and every line of code is a promise of performance."
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-12 mt-1 pt-4 md:mt-6 md:pt-10 border-t border-white/5 w-full">
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
                    className="flex flex-col items-center lg:items-start gap-1 group/stat"
                  >
                    <div className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover/stat:text-brand-primary transition-colors duration-300">{stat.value}</div>
                    <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
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
