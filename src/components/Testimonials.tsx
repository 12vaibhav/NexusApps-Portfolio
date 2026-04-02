import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content: "NexusApps transformed our vision into a reality. Their attention to detail and technical expertise is unmatched. Highly recommended!",
    avatar: "https://picsum.photos/seed/ceo/200/200",
  },
  {
    name: "Michael Chen",
    role: "Founder of AI Labs",
    content: "The AI tool they built for us has saved our team hundreds of hours. They are true experts in their field.",
    avatar: "https://picsum.photos/seed/founder/200/200",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    content: "Our new website is not only beautiful but also performs incredibly well. Our conversion rate has doubled since launch.",
    avatar: "https://picsum.photos/seed/director/200/200",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-12 pb-16 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-10 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none leading-none">
        TRUST
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-brand-primary" />
              <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-sm">Testimonials</span>
              <div className="h-px w-12 bg-brand-primary" />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
              What Our <br />
              <span className="font-serif italic font-medium text-slate-500">Clients</span> Say <span className="font-serif italic font-medium text-slate-500">About Us</span>.
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="glass p-12 rounded-[3.5rem] h-full flex flex-col border-white/5 hover:border-brand-primary/20 transition-all duration-500 shadow-2xl">
                <Quote className="absolute top-10 right-10 w-16 h-16 text-brand-primary/5 group-hover:text-brand-primary/10 transition-colors duration-500" />
                
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                  ))}
                </div>

                <p className="text-xl text-slate-300 mb-6 leading-relaxed italic relative z-10">
                  "{t.content}"
                </p>

                <div className="mt-auto flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-16 h-16 rounded-full border-2 border-white/10 shadow-xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg tracking-tight">{t.name}</div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="px-8 py-4 rounded-full bg-white/5 border border-white/10 flex items-center gap-6 backdrop-blur-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-brand-dark"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="text-sm font-bold text-slate-400">
              Trusted by <span className="text-white">500+</span> companies worldwide
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
