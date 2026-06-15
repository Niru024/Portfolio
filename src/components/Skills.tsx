import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "C"]
  },
  {
    title: "AI & ML",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "LangChain", "Ollama", "Scikit-Learn"]
  },
  {
    title: "Analytics",
    skills: ["Power BI", "Tableau", "Excel"]
  },
  {
    title: "Web",
    skills: ["Django", "Django REST Framework", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "SQLite", "MySQL"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
           whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="mb-20 text-center"
        >
          <h2 className="heading-serif text-5xl md:text-7xl mb-6">Core Technologies</h2>
          <p className="text-white/50 tracking-widest uppercase text-sm">Command Center</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="glass-panel glass-panel-hover p-8 flex flex-col h-full transition-colors"
            >
              <h3 className="text-sm tracking-widest uppercase text-white/50 mb-8 border-b border-white/10 pb-4">{category.title}</h3>
              <ul className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-lg font-light text-white/90">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
