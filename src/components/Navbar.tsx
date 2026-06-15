import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
    >
      <a href="#home" className="text-2xl font-bold tracking-tighter heading-serif">
        N
      </a>

      <div className="hidden md:flex items-center gap-8 glass-panel px-8 py-3 rounded-full">
        {['Home', 'About', 'Projects', 'Skills', 'Certifications'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>

      <a href="#contact" className="glass-panel px-6 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
        Hire Me
      </a>
    </motion.nav>
  );
}
