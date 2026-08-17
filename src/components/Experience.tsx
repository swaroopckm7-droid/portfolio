import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold glass-panel text-brand-purple border border-brand-purple/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
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
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-brand-purple/40 transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Timeline */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-purple/10 text-brand-purple border border-brand-purple/30">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-purple transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-sm text-brand-cyan font-semibold mb-4 mt-1">
                  <span>{exp.company}</span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-normal">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Metric Box */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-brand-purple/15 to-brand-blue/15 border border-brand-purple/30 flex items-center gap-2.5 mb-6">
                  <TrendingUp className="w-4 h-4 text-brand-purple shrink-0" />
                  <span className="text-xs font-semibold text-white">{exp.metrics}</span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
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
