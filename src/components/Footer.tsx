import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark pt-16 pb-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center shadow-lg shadow-brand-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <span className="text-black font-display font-black text-2xl">N</span>
                </div>
                <span className="font-display font-bold text-3xl tracking-tighter text-white">NexusApps</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter leading-tight mb-4 max-w-md">
                Building the <span className="font-serif italic font-medium text-slate-500">future</span> of digital <span className="font-serif italic font-medium text-slate-500">experiences</span>.
              </h3>

              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-500 group shadow-xl"
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xs font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Navigation</h4>
              <ul className="space-y-5">
                {["About", "Services", "Work", "Skills", "Testimonials"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="group flex items-center gap-2 text-lg font-bold text-slate-400 hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" />
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
            >
              <h4 className="text-xs font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Company</h4>
              <ul className="space-y-5">
                {["Careers", "Privacy", "Terms", "Cookies", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center gap-2 text-lg font-bold text-slate-400 hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>© 2026 NexusApps</span>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <span className="hidden md:block">Made with Passion in SF</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-xs font-bold text-white uppercase tracking-[0.3em] hover:text-brand-primary transition-colors"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-primary group-hover:-translate-y-1 transition-all">
              <ArrowUpRight className="w-4 h-4 -rotate-45" />
            </div>
          </button>
        </div>

        {/* Large Background Text */}
        <div className="mt-16 overflow-hidden select-none pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] font-black text-white/[0.02] leading-none tracking-tighter text-center"
          >
            NEXUSAPPS
          </motion.h1>
        </div>
      </div>
    </footer>
  );
}
