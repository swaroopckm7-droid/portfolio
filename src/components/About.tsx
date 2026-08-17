import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold glass-panel text-brand-cyan border border-brand-cyan/30">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Education Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-brand-purple/40 transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-brand-purple/20 text-brand-purple flex items-center justify-center border border-brand-purple/30">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">{edu.degree}</h3>
                
                <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-4">
                  <Building2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
