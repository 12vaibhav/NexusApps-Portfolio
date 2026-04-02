import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, Star, Plus, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["DIGITAL", "MODERN", "FUTURE", "UNIQUE"];
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseDuration = 2000;

  useEffect(() => {
    const currentWord = words[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-64 pb-12 overflow-hidden bg-brand-dark"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Glows */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" 
        />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
      
      {/* Decorative Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 w-2 h-2 bg-brand-primary rounded-full blur-sm"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-20 w-3 h-3 bg-white rounded-full blur-sm"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 lg:-mt-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 -mt-12 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              >
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">Premium Digital Solutions</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-5 group cursor-default"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className={`w-5 h-5 ${i < 5 ? 'fill-brand-primary text-brand-primary' : 'text-slate-700'} group-hover:scale-110 transition-transform`} />
                    </motion.div>
                  ))}
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-slate-800 to-transparent" />
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">1.5M+ Clients</span>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[7.5rem] font-bold leading-[0.85] tracking-tighter mb-6 text-white"
            >
              ELEVATE <br />
              YOUR <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-400">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: "steps(2)" }}
                  className="absolute -right-2 top-0 bottom-0 w-1 bg-brand-primary"
                />
              </span> <br />
              PRESENCE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl leading-tight font-medium"
            >
              We craft high-performance websites, scalable web applications, and intelligent AI tools that drive growth and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(190, 242, 100, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="relative group bg-brand-primary text-black px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Start a Project <ArrowUpRight className="w-6 h-6 stroke-[3]" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                whileTap={{ scale: 0.98 }}
                className="glass-dark border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 transition-all duration-300"
              >
                View Our Work <ArrowUpRight className="w-6 h-6 stroke-[3]" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side Testimonial Card */}
          <div className="lg:col-span-4 relative lg:-mt-24">
            {/* Card Glow Effect */}
            <div className="absolute -inset-4 bg-brand-primary/20 rounded-[3rem] blur-3xl opacity-50 animate-pulse pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-w-[360px] ml-auto group"
            >
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="aspect-[4/3] relative bg-brand-dark overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src="https://picsum.photos/seed/nexus-client/800/1000"
                    alt="Client"
                    className="w-full h-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                <div className="p-8">
                  <p className="text-xl text-slate-900 font-bold leading-tight mb-4 italic">
                    "NexusApps helped us achieve growth we didn't think was possible"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-black text-base uppercase tracking-wider">Sarah Mitchell</span>
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">CEO, TechFlow</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Explore Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-12 -left-12 w-44 h-44 z-20 hidden md:block group/badge"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-2xl group-hover/badge:bg-brand-primary/40 transition-colors duration-500" />
                
                {/* Rotating Text Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full glass-dark border border-white/10 shadow-2xl"
                >
                  <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                      fill="none"
                    />
                    <text className="text-[9px] font-black fill-brand-primary uppercase tracking-[0.45em]">
                      <textPath xlinkHref="#circlePath">
                        Explore Now • Explore Now • Explore Now •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Central Icon Button */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative z-10 w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(190,242,100,0.5)] cursor-pointer group-hover/badge:shadow-[0_0_50px_rgba(190,242,100,0.7)] transition-all duration-500"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="w-8 h-8">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  
                  {/* Internal Pulse Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-black/20 animate-ping pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-0 right-0 flex items-center justify-center"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative">
          <motion.div 
            animate={{ rotate: 45 }}
            whileHover={{ rotate: 135, scale: 1.2 }}
            className="absolute left-1/2 -translate-x-1/2 -top-4 w-8 h-8 bg-brand-dark border border-white/10 rounded-full flex items-center justify-center cursor-pointer transition-all"
          >
            <Plus className="w-5 h-5 text-brand-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
