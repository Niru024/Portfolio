import { motion } from "motion/react";

export function Hero() {
  const headline = "Beyond Code, Building the Future with AI".split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Cinematic dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 max-w-4xl mx-auto leading-tight heading-serif">
          {headline.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 1.2,
                delay: index * 0.1,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Computer Science student specializing in Artificial Intelligence, Data Analytics, Machine Learning, Generative AI, and Full Stack Development. Passionate about transforming ideas into intelligent products that solve real-world problems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-white/90 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="glass-panel text-white px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-white/10 transition-colors">
            Download Resume
          </a>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-24 w-full"
        >
          {[
            { value: "3+", label: "Projects Built" },
            { value: "5+", label: "AI & Data Technologies" },
            { value: "2nd", label: "Place Hackathon Winner" },
            { value: "2026", label: "Graduation Year" },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-6 flex flex-col items-center justify-center text-center">
              <div className="heading-serif text-4xl md:text-5xl mb-2">{stat.value}</div>
              <div className="text-xs tracking-widest uppercase text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="mt-24 pt-12 border-t border-white/10 w-full"
        >
           <p className="text-xs tracking-widest uppercase text-white/40 mb-8 text-center">Core Technologies Core</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
              {['Python', 'Django', 'Power BI', 'LangChain', 'Ollama'].map((partner, i) => (
                <span key={i} className="text-xl md:text-2xl font-light tracking-widest uppercase">{partner}</span>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
