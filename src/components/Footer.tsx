import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark pt-10 md:pt-16 pb-3 md:pb-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-24 mb-8 md:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full glass border border-white/10 shadow-2xl overflow-hidden group-hover:border-brand-primary/30 group-hover:bg-white/5 group-hover:scale-105 transition-all duration-500">
                  <img
                    src="/Assets/Logo.webp"
                    alt="NexusApps Logo"
                    className="w-full h-full object-cover filter brightness-110"
                  />
                </div>
                <span className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-white">NexusApps</span>
              </div>

              <h3 className="text-xl md:text-4xl font-bold text-white tracking-tighter leading-tight mb-6 max-w-sm mx-auto lg:mx-0 mt-4 md:mt-6">
                Building the <span className="font-serif italic font-medium text-slate-400">future</span> of digital <span className="font-serif italic font-medium text-slate-400">experiences</span>.
              </h3>

              <div className="flex gap-3 justify-center lg:justify-start mb-6 lg:mb-0 relative z-50">
                {[
                  { icon: Mail, href: "mailto:vaibhavdhiman227@gmail.com" },
                  { icon: Github, href: "https://github.com/12vaibhav?tab=repositories" },
                  { icon: Instagram, href: "https://www.instagram.com/webdev_vaibhav?igsh=MXY5ZnY5a3gyNGMxcg==" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative z-50 w-10 h-10 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-500 group shadow-xl"
                  >
                    <social.icon className="w-4 h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-x-6 gap-y-12 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h4 className="inline-flex items-center text-[10px] md:text-xs font-bold text-brand-primary uppercase tracking-[0.3em] mb-4 md:mb-6">
                <div className="w-[22px] lg:hidden" />
                Navigation
              </h4>
              <ul className="space-y-4 md:space-y-5">
                {["About", "Services", "Work", "Skills", "Testimonials"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="group flex items-center justify-center lg:justify-start gap-2 text-sm md:text-lg font-bold text-slate-400 hover:text-white transition-colors text-center uppercase">
                      <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h4 className="inline-flex items-center text-[10px] md:text-xs font-bold text-brand-primary uppercase tracking-[0.3em] mb-4 md:mb-6">
                <div className="w-[22px] lg:hidden" />
                Company
              </h4>
              <ul className="space-y-4 md:space-y-5">
                {["Careers", "Privacy", "Terms", "Cookies", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center justify-center lg:justify-start gap-2 text-sm md:text-lg font-bold text-slate-400 hover:text-white transition-colors text-center uppercase">
                      <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-8 text-[9px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] md:tracking-widest">
            <span>© 2026 NexusApps</span>
            <div className="h-px w-8 bg-white/10 md:h-4 md:w-px block" />
            <span>Made with Passion in India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex flex-col md:flex-row items-center gap-3 md:gap-4 text-[9px] md:text-xs font-black text-brand-primary lg:text-white uppercase tracking-[0.25em] hover:text-brand-primary transition-colors"
          >
            <span className="hidden md:inline">Back to Top</span>
            <div className="w-10 h-10 md:w-10 md:h-10 rounded-full border border-brand-primary/20 bg-brand-primary/5 lg:bg-transparent lg:border-white/10 flex items-center justify-center group-hover:border-brand-primary group-hover:-translate-y-1 transition-all">
              <ArrowUpRight className="w-4 h-4 -rotate-45" />
            </div>
            <span className="md:hidden">Scroll to Top</span>
          </button>
        </div>

        {/* Large Background Text */}
        <div className="mt-4 md:mt-8 overflow-hidden select-none pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[15vw] font-black text-white/[0.04] leading-none tracking-tighter text-center uppercase"
          >
            NEXUSAPPS
          </motion.h1>
        </div>
      </div>
    </footer>
  );
}
