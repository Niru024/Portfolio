import { motion } from "motion/react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations",
    type: "Certification",
    details: ["AI", "ML", "Deep Learning", "Generative AI", "LLMs"]
  },
  {
    title: "Vibecoding with Agentic AI",
    type: "Buildathon",
    details: []
  },
  {
    title: "PVG Hackathon",
    type: "Runner-Up",
    details: []
  },
  {
    title: "IMCC Hackathon",
    type: "Participant",
    details: []
  },
  {
    title: "Data Analytics Certification",
    type: "NIIT",
    details: []
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
           whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="mb-20 text-center"
        >
          <h2 className="heading-serif text-5xl md:text-7xl mb-6">Milestones</h2>
          <p className="text-white/50 tracking-widest uppercase text-sm">Certifications & Events</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
               className="glass-panel glass-panel-hover p-8 transition-colors flex flex-col"
            >
              <div className="text-xs tracking-widest uppercase text-white/40 mb-6">{cert.type}</div>
              <h3 className="heading-serif text-2xl md:text-3xl mb-8 flex-grow">{cert.title}</h3>
              
              {cert.details.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cert.details.map(d => (
                    <span key={d} className="text-xs text-white/50">
                      {d} {d !== cert.details[cert.details.length - 1] && '•'}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
