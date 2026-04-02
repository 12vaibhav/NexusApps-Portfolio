import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-5xl w-full flex items-center justify-between backdrop-blur-xl border border-white/10 px-8 rounded-full pointer-events-auto shadow-2xl transition-all duration-500 ${
          scrolled ? "py-1.5 bg-white/5" : "py-3 bg-white/10"
        }`}
      >
        <div 
          onClick={() => window.location.reload()} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full text-white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">NexusApps</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Work", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-primary text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-brand-primary/20"
        >
          Let's Talk
        </motion.button>
      </motion.div>
    </nav>
  );
}
