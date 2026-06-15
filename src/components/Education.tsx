import { motion } from "motion/react";

export function Education() {
  const subjects = [
    "DSA", "DBMS", "Operating Systems", "Networks", "AI", "Machine Learning", "Data Mining", "Statistics"
  ];

  return (
    <section id="education" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
           whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="mb-20 text-center"
        >
          <h2 className="heading-serif text-5xl md:text-7xl mb-6">Academic Trajectory</h2>
          <p className="text-white/50 tracking-widest uppercase text-sm">Education</p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
           whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="glass-panel p-8 md:p-12 relative border-l-4 border-l-white"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="heading-serif text-3xl md:text-4xl mb-2">Bachelor of Computer Science</h3>
              <p className="text-xl text-white/70 font-light">Pune University</p>
            </div>
            <div className="text-white/40 tracking-widest font-mono">
              2023 — 2026
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-sm tracking-widest uppercase text-white/50 mb-6">Core Subjects</h4>
            <div className="flex flex-wrap gap-3">
              {subjects.map(subject => (
                <span key={subject} className="glass-panel px-4 py-2 text-sm text-white/80 font-light">
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
