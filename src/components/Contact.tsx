import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin, ArrowRight, Loader2, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | string>("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Replace with your actual EmailJS credentials
    emailjs.sendForm('service_6bq1iwr', 'template_h9toilf', form.current, 'rJeoDupP7rk6XpYgI')
      .then(() => {
        setSubmitStatus("success");
        form.current?.reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }, (error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus(error?.text || error?.message || "Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="pt-10 pb-16 md:py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-4 md:left-10 text-[8rem] md:text-[18rem] font-black text-white/[0.04] select-none pointer-events-none leading-none tracking-tighter uppercase">
        CONTACT
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-20 items-start">
          {/* Left Column: Content & Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:gap-10"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 md:w-12 bg-brand-primary block lg:hidden" />
                <div className="h-px w-12 bg-brand-primary hidden lg:block" />
                <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Get in Touch</span>
                <div className="h-px w-8 md:w-12 bg-brand-primary block lg:hidden" />
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] md:leading-[0.9] mb-2">
                Let's <span className="font-serif italic font-medium text-slate-500">Build</span> <br />
                Something <br />
                <span className="font-serif italic font-medium text-slate-500 text-brand-primary">Remarkable</span>.
              </h2>

              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Have a project in mind? We'd love to hear about it. Send us a message and let's start a conversation about your next digital breakthrough.
              </p>

              <div className="grid gap-4 md:gap-6 mt-2 w-full max-w-md mx-auto lg:mx-0">
                {[
                  { icon: Mail, label: "Email Us", value: "vaibhavdhiman227@gmail.com" },
                  {
                    icon: () => (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                    label: "Chat with Us",
                    value: "+91 8267988955"
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                    className="group flex items-center lg:items-start text-left gap-4 md:gap-6 p-4 md:p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/20 transition-all duration-500"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary/10 rounded-2xl flex-shrink-0 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all duration-500">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-sm md:text-lg font-bold text-white tracking-tight">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-5 md:p-16 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden shadow-2xl border-white/5"
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      name="from_name"
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 md:px-8 py-3.5 md:py-5 focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all text-white font-bold placeholder:text-slate-600 text-sm md:text-base"
                      placeholder="Rahul Sharma"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-0.5">Email Address</label>
                    <input
                      name="from_email"
                      type="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 md:px-8 py-3.5 md:py-5 focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all text-white font-bold placeholder:text-slate-600 text-sm md:text-base"
                      placeholder="Rahulsharma@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-0.5">Project Subject</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 md:px-8 py-3.5 md:py-5 focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all text-white font-bold placeholder:text-slate-600 text-sm md:text-base"
                    placeholder="Tell us what you're building"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-0.5">Message Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 md:px-8 py-3.5 md:py-5 focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all resize-none text-white font-bold placeholder:text-slate-600 text-sm md:text-base"
                    placeholder="Share your vision with us..."
                  />
                </div>

                {submitStatus !== "idle" && submitStatus !== "success" && (
                  <p className="text-red-400 text-sm font-medium text-center">{submitStatus}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className="group w-full bg-brand-primary text-black py-3.5 md:py-6 rounded-xl md:rounded-2xl font-black text-base md:text-xl shadow-2xl shadow-brand-primary/30 flex items-center justify-center gap-3 md:gap-4 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all duration-500"
                >
                  {isSubmitting ? "Sending..." : submitStatus === "success" ? "Message Sent!" : "Send Message"}

                  <div className="w-6 h-6 md:w-8 md:h-8 bg-black/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    {isSubmitting ? (
                      <Loader2 className="w-3.5 h-3.5 md:w-4 md:h-4 animate-spin" />
                    ) : submitStatus === "success" ? (
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-700" />
                    ) : (
                      <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    )}
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
