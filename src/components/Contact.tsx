import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pt-16 pb-16 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-10 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none leading-none uppercase">
        CONTACT
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Left Column: Content & Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-10"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-brand-primary" />
                <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-sm">Get in Touch</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-2">
                Let's <span className="font-serif italic font-medium text-slate-500">Build</span> <br />
                Something <br />
                <span className="font-serif italic font-medium text-slate-500 text-brand-primary">Remarkable</span>.
              </h2>

              <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                Have a project in mind? We'd love to hear about it. Send us a message and let's start a conversation about your next digital breakthrough.
              </p>

              <div className="grid gap-6 mt-2">
                {[
                  { icon: Mail, label: "Email Us", value: "hello@nexusapps.com" },
                  { icon: Phone, label: "Call Us", value: "+1 (555) 000-0000" },
                  { icon: MapPin, label: "Visit Us", value: "San Francisco, CA" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                    className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/20 transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-lg font-bold text-white tracking-tight">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-10 md:p-16 rounded-[4rem] relative overflow-hidden shadow-2xl border-white/5"
            >
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all text-white font-bold placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all text-white font-bold placeholder:text-slate-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Project Subject</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all text-white font-bold placeholder:text-slate-600"
                    placeholder="Tell us what you're building"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message Details</label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all resize-none text-white font-bold placeholder:text-slate-600"
                    placeholder="Share your vision with us..."
                  />
                </div>
                <button className="group w-full bg-brand-primary text-black py-6 rounded-2xl font-black text-xl shadow-2xl shadow-brand-primary/30 flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500">
                  Send Message 
                  <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <Send className="w-4 h-4" />
                  </div>
                </button>
              </form>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
