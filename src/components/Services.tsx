import { motion } from "motion/react";
import { Globe, Layout, Cpu, Database, BarChart3, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Stunning, responsive websites built with modern frameworks for maximum performance and SEO.",
    icon: Globe,
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
  },
  {
    title: "Web Applications",
    description: "Complex, scalable web apps tailored to your business needs with robust backend systems.",
    icon: Layout,
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-400",
  },
  {
    title: "AI Tools & Agents",
    description: "Custom AI solutions, LLM integrations, and automated agents to streamline your operations.",
    icon: Cpu,
    color: "from-pink-500/20 to-pink-500/5",
    iconColor: "text-pink-400",
  },
  {
    title: "SaaS Product Development",
    description: "End-to-end SaaS development from MVP to full-scale production with subscription management.",
    icon: Database,
    color: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
  },
  {
    title: "Interactive Dashboards",
    description: "Real-time data visualization and analytics platforms to help you make informed decisions.",
    icon: BarChart3,
    color: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-400",
  },
  {
    title: "Rapid MVP Development",
    description: "Get your product to market faster with our streamlined development process for startups.",
    icon: Zap,
    color: "from-brand-primary/20 to-brand-primary/5",
    iconColor: "text-brand-primary",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-8 pb-24 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-10 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none leading-none">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-brand-primary" />
              <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-sm">Our Expertise</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
              Digital <br />
              <span className="font-serif italic font-medium text-slate-500">Solutions</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-md text-xl text-slate-400 leading-relaxed"
          >
            We provide a comprehensive suite of digital services designed to help your business thrive in the modern era.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="glass h-full p-10 rounded-[3rem] transition-all duration-500 hover:shadow-[0_0_50px_rgba(190,242,100,0.05)] border-white/5 hover:border-brand-primary/20 flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
