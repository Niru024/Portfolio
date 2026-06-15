import { motion } from "motion/react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "AI Grocery Agent",
    description: "An AI-powered grocery assistant using LangChain and Ollama that queries SQLite databases and minimizes hallucinations through database-grounded responses.",
    status: "Currently Building",
    tech: ["LangChain", "Ollama", "SQLite", "Python"]
  },
  {
    title: "Urban Air Quality Monitoring System",
    description: "Real-time air quality platform using Django, APIs, and Machine Learning to predict AQI and monitor pollutants.",
    link: "#",
    tech: ["Django", "Machine Learning", "APIs", "Python"]
  },
  {
    title: "MediFinder",
    description: "Medicine availability platform enabling users to search inventory across medical stores with full admin dashboard functionality.",
    link: "#",
    tech: ["React", "Node.js", "MongoDB"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
           whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="mb-20 text-center"
        >
          <h2 className="heading-serif text-5xl md:text-7xl mb-6">Mission Logs</h2>
          <p className="text-white/50 tracking-widest uppercase text-sm">Project Showcase</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="glass-panel glass-panel-hover p-8 md:p-10 flex flex-col group transition-colors"
            >
              {project.status && (
                <div className="text-[10px] tracking-widest uppercase text-white/40 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  {project.status}
                </div>
              )}
              
              <h3 className="heading-serif text-3xl mb-4 group-hover:text-white/80 transition-colors">{project.title}</h3>
              <p className="font-light text-white/60 mb-8 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-xs border border-white/10 px-3 py-1 rounded-full text-white/50">
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a href={project.link} className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors border-t border-white/10 pt-6">
                  <Github className="w-4 h-4" /> View Source
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
