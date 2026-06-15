/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white/20">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 text-center text-white/30 text-xs tracking-widest uppercase border-t border-white/10 mx-6">
        © 2026 Niranjan Deepak Gaikwad. All systems online.
      </footer>
    </div>
  );
}
