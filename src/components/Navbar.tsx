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
              src="Assets/Logo.webp"
              alt="NexusApps Logo"
              className="w-full h-full object-cover"
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
            <div className="w-9 h-9 md:w-9 md:h-9 rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 group-hover:rotate-12 transition-transform duration-500 overflow-hidden" style={{ background: "transparent" }}>
              {/* Official WhatsApp Brand Logo */}
              <svg viewBox="0 0 175.216 175.552" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 md:w-9 md:h-9">
                <defs>
                  <linearGradient id="wa-grad-b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#57d163"/>
                    <stop offset="1" stopColor="#23b33a"/>
                  </linearGradient>
                  <linearGradient id="wa-grad-a" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#25d366"/>
                    <stop offset="1" stopColor="#25d366"/>
                  </linearGradient>
                </defs>
                {/* Outer bubble */}
                <path d="M87.184 25c-33.733 0-61.166 27.4-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.513 31.126 8.513h.023c33.707 0 61.14-27.4 61.153-61.13a60.75 60.75 0 0 0-17.895-43.251A60.75 60.75 0 0 0 87.184 25z" fill="url(#wa-grad-a)"/>
                {/* Inner shadow bubble */}
                <path d="M87.184 32.225c-29.755 0-53.96 24.179-53.97 53.895a53.68 53.68 0 0 0 8.233 28.609l1.282 2.036-5.445 19.885 20.405-5.353 1.967 1.167a53.8 53.8 0 0 0 27.433 7.51h.02c29.738 0 53.942-24.179 53.953-53.895a53.53 53.53 0 0 0-15.771-38.11 53.53 53.53 0 0 0-38.107-15.744z" fill="url(#wa-grad-b)"/>
                {/* Phone icon */}
                <path d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.669-13.645z" fill="#fff" fillRule="evenodd"/>
              </svg>
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
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-4 left-4 right-4 bg-brand-dark/98 backdrop-blur-2xl z-[60] flex flex-col p-5 rounded-3xl border border-white/10 shadow-2xl pointer-events-auto lg:hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 flex items-center justify-center rounded-full glass border border-white/10 shadow-xl overflow-hidden">
                  <img src="Assets/Logo.webp" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-display font-bold text-base tracking-tighter text-white">NexusApps</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-white tracking-tight hover:text-brand-primary transition-all flex items-center justify-between group py-2 px-3 rounded-xl hover:bg-white/5"
                >
                  <span className="relative overflow-hidden">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-primary group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" />
                </motion.a>
              ))}
            </nav>

            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                {[
                  { Icon: Mail, href: "mailto:vaibhavdhiman227@gmail.com", target: undefined },
                  { Icon: Github, href: "https://github.com/12vaibhav?tab=repositories", target: "_blank" },
                  { Icon: Instagram, href: "https://www.instagram.com/webdev_vaibhav?igsh=MXY5ZnY5a3gyNGMxcg==", target: "_blank" },
                ].map(({ Icon, href, target }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={target}
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 border border-white/10 hover:border-brand-primary/50 hover:text-brand-primary transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
              <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">© 2026 NexusApps</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
