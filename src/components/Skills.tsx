import { motion } from "motion/react";

const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "Node.js / Express", level: 85, category: "Backend" },
  { name: "Tailwind CSS", level: 98, category: "Styling" },
  { name: "Python / AI", level: 80, category: "Intelligence" },
  { name: "PostgreSQL / MongoDB", level: 88, category: "Database" },
  { name: "AWS / Google Cloud", level: 82, category: "Cloud" },
  { name: "UI/UX Design", level: 92, category: "Design" },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Tailwind", "Framer Motion", "PostgreSQL", "MongoDB", "Docker", "AWS", "Vercel", "OpenAI", "LangChain"
];

export default function Skills() {
  return (
    <section id="skills" className="pt-12 pb-16 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-4 md:left-10 text-[10rem] md:text-[20rem] font-black text-white/[0.02] select-none pointer-events-none leading-none">
        SKILLS
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-start">
          {/* Left Column: Title & Tech Stack */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 md:gap-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-primary block lg:hidden" />
                <div className="h-px w-8 md:w-12 bg-brand-primary hidden lg:block" />
                <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Expertise</span>
                <div className="h-px w-8 bg-brand-primary block lg:hidden" />
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] md:leading-[0.9] mb-1 md:mb-2">
                Mastering the <br />
                <span className="font-serif italic font-medium text-slate-500">Digital</span> <br />
                Craft <span className="font-serif italic font-medium text-slate-500">& Stack</span>.
              </h2>

              <p className="text-base md:text-xl text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We leverage the latest technologies to build high-performance digital solutions. Our tech stack is carefully selected for scalability and security.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3 mt-1 md:mt-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-2.5 md:px-5 py-1 md:py-2.5 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-sm font-bold text-slate-300 hover:bg-brand-primary hover:text-white transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills Progress */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-10 mt-8 lg:mt-0">
            {skills.map((skill, i) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-0.5">{skill.category}</span>
                      <span className="text-base md:text-xl font-bold text-white tracking-tight">{skill.name}</span>
                    </div>
                    <span className="text-lg md:text-2xl font-black text-white/20 group-hover:text-brand-primary transition-colors duration-500">{skill.level}%</span>
                  </div>
                  
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-linear-to-r from-brand-primary to-brand-secondary rounded-full relative z-10"
                    />
                    <div className="absolute inset-0 bg-white/5 opacity-20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
