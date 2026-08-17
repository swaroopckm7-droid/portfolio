import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications, achievements } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold glass-panel text-brand-purple border border-brand-purple/30">
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS & ACHIEVEMENTS</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional certifications completed across Oracle, NPTEL, CodeTantra, and Apollo.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-brand-purple/50 transition-all hover:-translate-y-1 group relative flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-white/5 text-slate-300 border border-white/10">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cert.year}</span>
                </div>

                {/* Title & Issuer */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple p-[1px] shrink-0">
                    <div className="w-full h-full bg-[#0B1120] rounded-[15px] flex items-center justify-center text-brand-cyan">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-purple mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Extracurriculars & Coding Practice</h3>
              <p className="text-xs text-slate-400">Coding practice, platform problem-solving, and continuous learning</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-2xl border border-white/5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
