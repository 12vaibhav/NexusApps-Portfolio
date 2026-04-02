import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Director, Blue Chip Infotech",
    content: "NexusApps transformed our legacy business into a world-class digital brand. Their attention to Indian market nuances is outstanding.",
    avatar: "https://picsum.photos/seed/arjun/200/200",
  },
  {
    name: "Priyanka Desai",
    role: "Founder, Bloom Fashion Hub",
    content: "Building an AI-driven inventory system was a dream until we met the NexusApps team. They redefined our efficiency in the Mumbai market.",
    avatar: "https://picsum.photos/seed/priyanka/200/200",
  },
  {
    name: "Vikram Singh",
    role: "Head of Digital, Elite Realty",
    content: "The real estate platform developed by NexusApps is not only visually stunning but performs incredibly well in our large NCR projects.",
    avatar: "https://picsum.photos/seed/vikram/200/200",
  },
  {
    name: "Anjali Gupta",
    role: "CXO, NextGen FinTech",
    content: "The UI/UX design is world-class. It is rare to find such high-end quality in the Indian market. Simply brilliant!",
    avatar: "https://picsum.photos/seed/anjali/200/200",
  },
  {
    name: "Rohan Mehta",
    role: "Owner, Mehta Logistics",
    content: "Their AI-first approach helped us automate 70% of our supply chain tasks. It is now the core of our business.",
    avatar: "https://picsum.photos/seed/rohan/200/200",
  },
  {
    name: "Sanya Kapoor",
    role: "Marketing Manager, Aura Brand",
    content: "A truly premium agency that delivers on every promise. Their responsiveness and professionalism are exactly what we needed.",
    avatar: "https://picsum.photos/seed/sanya/200/200",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-12 pb-16 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-10 text-[12rem] md:text-[18rem] font-black text-white/[0.04] select-none pointer-events-none leading-none tracking-tighter">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="glass p-10 rounded-[3rem] h-full flex flex-col border-white/5 hover:border-brand-primary/20 transition-all duration-500 shadow-2xl">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-primary/5 group-hover:text-brand-primary/10 transition-colors duration-500" />
                
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                  ))}
                </div>

                <p className="text-lg text-slate-300 mb-5 leading-relaxed italic relative z-10">
                  "{t.content}"
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-14 h-14 rounded-full border-2 border-white/10 shadow-xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base tracking-tight">{t.name}</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
