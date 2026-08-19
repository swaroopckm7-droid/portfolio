import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative z-10 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-black bg-[#FACC15] text-black uppercase tracking-widest shadow-sm">
            <Briefcase className="w-4 h-4" />
            <span>WORK EXPERIENCE</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase">
            Internship <span className="bg-black text-white px-2 py-0.5 inline-block">Experience</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Hands-on technical internships in Data Analytics and Python Engineering.
          </p>
        </div>

        {/* Side-by-Side Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="editorial-card p-6 sm:p-8 rounded-3xl border-2 border-slate-900/10 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Timeline */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-md text-xs font-extrabold bg-[#FACC15] text-black uppercase">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl sm:text-2xl font-black text-black">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-sm text-amber-600 font-extrabold mb-4 mt-1">
                  <span>{exp.company}</span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center gap-1 text-xs text-slate-600 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#FACC15] text-black flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        ✓
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Metric Box */}
                <div className="p-3.5 rounded-xl bg-slate-100 border-l-4 border-black flex items-center gap-2.5 mb-6 shadow-sm">
                  <TrendingUp className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-bold text-black">{exp.metrics}</span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-slate-900 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
