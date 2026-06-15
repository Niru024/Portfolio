import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center gap-16">
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="heading-serif text-5xl md:text-7xl mb-8 leading-tight">
            The Developer <br /> Behind The Mission
          </h2>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 glass-panel p-8 md:p-12"
          style={{ y }}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8">
            I am Niranjan Deepak Gaikwad, a Computer Science student from Pune University. My mission is to build intelligent systems powered by AI, Machine Learning, and Data Analytics.
          </p>
          <p className="text-lg text-white/50 font-light leading-relaxed">
            I enjoy developing AI applications, data-driven dashboards, and full-stack solutions that create measurable impact.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
