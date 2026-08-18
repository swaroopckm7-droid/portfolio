import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Trophy, X, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications, achievements } = portfolioData;
  const [selectedImage, setSelectedImage] = useState<{ title: string; imageUrl: string; issuer: string } | null>(null);

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
            Professional certifications completed across Oracle, NPTEL, and Apollo.
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
              className="glass-panel p-5 rounded-3xl border border-white/10 hover:border-brand-purple/50 transition-all hover:-translate-y-1 group relative flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-white/5 text-slate-300 border border-white/10">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cert.year}</span>
                </div>

                {/* Title & Issuer (Fixed min-height for uniform alignment across 1 and 2 line titles) */}
                <div className="flex items-start gap-3 mb-3 min-h-[48px]">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple p-[1px] shrink-0 mt-0.5">
                    <div className="w-full h-full bg-[#0B1120] rounded-[11px] flex items-center justify-center text-brand-cyan">
                      <ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-purple mt-0.5">{cert.issuer}</p>
                  </div>
                </div>

                {/* Official Certificate Image Preview (Uniform aspect ratio & containment) */}
                {cert.imageUrl && (
                  <div 
                    onClick={() => setSelectedImage({ title: cert.title, imageUrl: cert.imageUrl!, issuer: cert.issuer })}
                    className="relative mt-3 rounded-2xl overflow-hidden border border-white/10 group/img cursor-pointer bg-[#0c1322] aspect-[16/10] flex items-center justify-center p-1.5"
                  >
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain filter contrast-[1.02] group-hover/img:scale-[1.03] transition-transform duration-500 rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-white font-semibold backdrop-blur-[2px] rounded-2xl">
                      <ExternalLink className="w-4 h-4 text-brand-cyan" />
                      <span>View Full Certificate</span>
                    </div>
                  </div>
                )}
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

      {/* High-Res Certificate Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl glass-panel p-4 sm:p-6 rounded-3xl border border-white/20 shadow-2xl z-10 space-y-4"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-xs text-brand-cyan">{selectedImage.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full glass-panel text-slate-400 hover:text-white hover:border-brand-purple/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center max-h-[75vh]">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
