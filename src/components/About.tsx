import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="about" className="py-20 relative z-10 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-black bg-[#FACC15] text-black uppercase tracking-widest shadow-sm">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC BACKGROUND</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase">
            Education
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
              className="editorial-card p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between border-2 border-slate-900/10"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#FACC15]" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4 mt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold text-white bg-black">
                    <Calendar className="w-3.5 h-3.5 text-[#FACC15]" />
                    <span>{edu.period}</span>
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FACC15] text-black flex items-center justify-center font-bold shadow-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-black mb-2 leading-snug">{edu.degree}</h3>
                
                <div className="flex items-center gap-2 text-slate-900 text-sm font-bold mb-4">
                  <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
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
