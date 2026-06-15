import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
       <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
           whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="mb-20 text-center"
        >
          <h2 className="heading-serif text-5xl md:text-7xl mb-6">Let's Build Something <br/> Intelligent</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
             initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
             whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
             className="flex flex-col gap-8"
          >
            <a href="mailto:gaikwadniranjan024@gmail.com" className="flex items-center gap-6 group">
              <div className="w-16 h-16 glass-panel rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest mb-1">Email</p>
                <p className="text-xl font-light">gaikwadniranjan024@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+918087143676" className="flex items-center gap-6 group">
              <div className="w-16 h-16 glass-panel rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest mb-1">Phone</p>
                <p className="text-xl font-light">+91 8087143676</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/niranjan-gaikwad-2860a6277" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
              <div className="w-16 h-16 glass-panel rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-xl font-light">Niranjan Gaikwad</p>
              </div>
            </a>

            <a href="https://github.com/Niru024" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
              <div className="w-16 h-16 glass-panel rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-white/50 uppercase tracking-widest mb-1">GitHub</p>
                <p className="text-xl font-light">Niru024</p>
              </div>
            </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
             whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
             className="glass-panel p-8 md:p-12"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Name</label>
                <input type="text" className="bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Email</label>
                <input type="email" className="bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Message</label>
                <textarea rows={4} className="bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-white transition-colors resize-none" />
              </div>
              <button type="submit" className="mt-8 bg-white text-black px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-white/90 transition-colors self-start">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
       </div>
    </section>
  );
}
