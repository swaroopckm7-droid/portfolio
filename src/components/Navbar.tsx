import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { downloadOfficialResumePDF } from '../utils/generatePDF';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Education', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    downloadOfficialResumePDF();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
            : 'py-5 bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo: Yellow Pill + Dark Text */}
          <a
            href="#hero"
            className="flex items-center gap-2 group"
          >
            <span className="bg-[#FACC15] text-black font-extrabold px-2.5 py-1 rounded-md text-xs uppercase tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              Santhi Swaroop
            </span>
            <span className="text-slate-900 font-bold text-sm tracking-tight group-hover:text-amber-600 transition-colors">
              Portfolio
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isActive ? 'text-black' : 'text-slate-600 hover:text-black'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#FACC15] rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadResume}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-white hover:bg-[#FACC15] hover:text-black font-bold text-xs shadow-md transition-all cursor-pointer group"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume (PDF)</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[70px] z-40 p-4 md:hidden"
          >
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xl space-y-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                      activeSection === link.id
                        ? 'bg-[#FACC15] text-black'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleDownloadResume();
                  }}
                  className="w-full py-3 rounded-xl bg-black text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
