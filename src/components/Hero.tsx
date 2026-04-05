import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight, Star, Plus, Sparkles } from "lucide-react";
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
  const words = ["Premium", "Beautiful", "Custom", "Modern"];
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseDuration = 1000;

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
      className="relative min-h-screen flex items-center pt-24 pb-6 md:pt-48 overflow-hidden bg-brand-dark"
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
        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-8 lg:-mt-20 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-4 -mt-2 md:-mt-6 gap-4 md:gap-6">
              {/* Removed ratings and badges for a cleaner look */}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-4 md:mb-6 text-white"
            >
              Elevate Your <span className="text-brand-primary">Business</span> <br />
              with <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-400">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: "steps(2)" }}
                  className="absolute -right-1 md:-right-2 top-0 bottom-0 w-0.5 md:w-1 bg-brand-primary"
                />
              </span> <br className="md:hidden" /> Websites <br className="hidden md:block" />
              & Web Apps
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-400 mb-8 md:mb-12 max-w-2xl leading-tight font-medium mx-auto lg:mx-0"
            >
              We craft high-performance websites, scalable web applications, and intelligent AI tools that drive growth and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6"
            >
              <motion.a
                href="https://wa.me/8267988955?text=Hi%20Vaibhav,%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20new%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(190,242,100,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-black px-6 md:px-10 py-3.5 md:py-5 rounded-2xl font-black text-base md:text-xl shadow-2xl shadow-brand-primary/30 flex items-center justify-center gap-3 transition-all duration-300"
              >
                Let's Talk <ArrowRight className="w-4 h-4 md:w-6 md:h-6 stroke-[3]" />
              </motion.a>

              <motion.a
                href="#work"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#151515] border border-white/10 text-white px-6 md:px-10 py-3.5 md:py-5 rounded-2xl font-bold text-base md:text-xl flex items-center justify-center gap-3 transition-all duration-300"
              >
                View Our Work <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 stroke-[3]" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side 3D Layered Pop-out */}
          <div className="lg:col-span-4 relative group mt-10 lg:mt-0">
            {/* Background Glows & Shadows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-brand-primary/20 transition-all duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[260px] md:max-w-[400px] mx-auto lg:ml-auto"
            >
              {/* The Main Backdrop Glass Slab */}
              <div className="relative w-full aspect-[4/5] bg-white/5 border border-white/10 rounded-[2.5rem] md:rounded-[4rem] backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Decorative Internal Highlight */}
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br from-brand-primary/10 to-transparent blur-3xl pointer-events-none" />
              </div>

              {/* Floating "Experience" Badge - Refined for mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 p-3 md:p-6 rounded-b-[2.5rem] md:rounded-b-[4rem] bg-[#151515] border-t border-white/20 backdrop-blur-xl z-40 shadow-2xl"
              >
                <div className="flex items-center justify-center gap-3 md:gap-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-primary/20 rounded-lg md:rounded-xl flex items-center justify-center text-brand-primary">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 fill-brand-primary" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-xs md:text-sm font-bold text-white tracking-tight leading-none">I'm Vaibhav,</p>
                    <p className="text-[8px] md:text-[10px] font-medium text-slate-400 uppercase tracking-[0.2em] leading-none whitespace-nowrap">Full Stack Web Developer</p>
                  </div>
                </div>
              </motion.div>

              {/* THE CUTOUT IMAGE: Positioned to POP OUT of the glass frame */}
              <motion.div
                className="absolute inset-x-0 -top-24 bottom-0 z-30 pointer-events-none select-none"
                style={{ y: useTransform(scrollY, [0, 500], [0, -30]) }}
              >
                <motion.img
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1.15 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src="/Assets/Hero_image1.webp"
                  alt="Visionary Expert"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              {/* Explore Badge - Floating elegantly in the top-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -top-12 -right-12 w-32 h-32 z-40 hidden md:block group/badge"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-2xl group-hover/badge:bg-brand-primary/40 transition-colors duration-500" />

                  {/* Rotating Text Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-[#151515] border border-white/10 shadow-2xl"
                  >
                    <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                      <path
                        id="circlePathHero"
                        d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="none"
                      />
                      <text className="text-[7px] font-black fill-brand-primary uppercase tracking-[0.45em]">
                        <textPath xlinkHref="#circlePathHero">
                          Explore Now • Explore Now • Explore Now •
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>

                  {/* Central Icon Button */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative z-10 w-11 h-11 bg-brand-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(190,242,100,0.5)] cursor-pointer transition-all duration-500"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="w-5 h-5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Removed secondary mobile badges/ratings */}
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center"
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
