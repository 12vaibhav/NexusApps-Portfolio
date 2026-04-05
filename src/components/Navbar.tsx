import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, Github, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-3 left-0 right-0 md:top-6 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`max-w-5xl w-full flex items-center justify-between backdrop-blur-xl border border-white/10 px-4 md:px-8 rounded-full pointer-events-auto shadow-2xl transition-all duration-500 ${scrolled ? "py-1 md:py-1 bg-white/5" : "py-2 md:py-2 bg-white/10"
          }`}
      >
        <div
          onClick={() => window.location.reload()}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full glass border border-white/10 shadow-xl group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300 overflow-hidden">
            <img
              src="/Assets/Logo.jpeg"
              alt="NexusApps Logo"
              className="w-full h-full object-cover filter brightness-110 contrast-110"
            />
          </div>
          <span className="font-display font-bold text-lg md:text-2xl tracking-tighter text-white">NexusApps</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.filter(l => ["Work", "Services", "About", "Contact"].includes(l.name)).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <motion.a
            href="https://wa.me/8267988955?text=Hi%20Vaibhav,%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20new%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 md:gap-4 md:py-1.5 md:pl-5 md:pr-1.5 md:bg-white/5 md:border md:border-white/10 rounded-full md:hover:bg-white/10 transition-all duration-300 pointer-events-auto group md:shadow-xl"
          >
            <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.2em] hidden sm:block">Let's Talk</span>
            <div className="w-9 h-9 md:w-9 md:h-9 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/20 group-hover:rotate-12 transition-transform duration-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </div>
          </motion.a>

          {/* Hamburger Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 lg:hidden text-white/70 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-dark/98 backdrop-blur-2xl z-[60] flex flex-col p-6 md:p-8 pointer-events-auto lg:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 shadow-xl overflow-hidden">
                  <img src="/Assets/Logo.jpeg" alt="Logo" className="w-full h-full object-cover filter brightness-110 contrast-110" />
                </div>
                <span className="font-display font-bold text-xl tracking-tighter text-white">NexusApps</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white tracking-tighter hover:text-brand-primary transition-all flex items-center justify-between group py-2"
                >
                  <span className="relative overflow-hidden">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-primary group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" />
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/5 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Drop Us a Line</span>
                <a href="mailto:vaibhavdhiman227@gmail.com" className="text-xl font-bold text-white hover:text-brand-primary transition-colors flex items-center gap-2">
                  vaibhavdhiman227@gmail.com
                  <ArrowUpRight className="w-4 h-4 text-brand-primary" />
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Let's Connect</span>
                <div className="flex gap-4">
                  {[Mail, Github, Instagram].map((Icon, i) => (
                    <a key={i} href="mailto:vaibhavdhiman227@gmail.com" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 border border-white/10 hover:border-brand-primary/50 hover:text-brand-primary transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between opacity-50">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">© 2026 NexusApps</span>
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
