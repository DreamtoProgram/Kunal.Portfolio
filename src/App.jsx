import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PullCord } from './components/PullCord';
import { CertificateModal } from './components/CertificateModal';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  // Theme state: defaults to light mode ('light'), switches with the pull cord
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('kunal_theme');
    return saved ? saved : 'light';
  });

  const isDark = theme === 'dark';

  // Sync dark class on root document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('kunal_theme', next);
      return next;
    });
  };

  const [activeSection, setActiveSection] = useState('home');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCertificate(null);
        setSelectedProject(null);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Intersection Observer for scroll spying
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'hackathons', 'certifications', 'education', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-450 ${
        isDark ? 'bg-[#09090b] text-white' : 'bg-white text-slate-800'
      } selection:bg-blue-600 selection:text-white relative`}
    >
      {/* Interactive Pull Cord Light Switch hanging from top right */}
      <PullCord isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Sticky Navigation Bar */}
      <Navbar
        isDark={isDark}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero isDark={isDark} onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me Section */}
        <About isDark={isDark} />

        {/* 3. Skills Section */}
        <Skills isDark={isDark} />

        {/* 4. Projects Section */}
        <Projects isDark={isDark} onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Hackathons & Events Section */}
        <Hackathons isDark={isDark} onSelectCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* 6. Certifications Section */}
        <Certifications isDark={isDark} onSelectCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* 7. Education Section */}
        <Education isDark={isDark} />

        {/* 8. Contact Section */}
        <Contact isDark={isDark} />
      </main>

      {/* 8. Footer */}
      <Footer isDark={isDark} />

      {/* Interactive Modals */}
      {selectedCertificate && (
        <CertificateModal
          isDark={isDark}
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}

      {selectedProject && (
        <ProjectModal
          isDark={isDark}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {isResumeOpen && (
        <ResumeModal
          isDark={isDark}
          onClose={() => setIsResumeOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
