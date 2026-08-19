import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Trophy, X, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications, achievements } = portfolioData;
  const [selectedImage, setSelectedImage] = useState<{ title: string; imageUrl: string; issuer: string } | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-black bg-[#FACC15] text-black uppercase tracking-widest shadow-sm">
            <Award className="w-4 h-4" />
            <span>CREDENTIALS & HONORS</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase">
            Certifications & <span className="bg-black text-white px-2 py-0.5 inline-block">Achievements</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
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
              className="editorial-card p-5 rounded-3xl border-2 border-slate-900/10 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold bg-[#FACC15] text-black uppercase">
                    {cert.category}
                  </span>
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">{cert.year}</span>
                </div>

                {/* Title & Issuer */}
                <div className="flex items-start gap-3 mb-3 min-h-[48px]">
                  <div className="w-9 h-9 rounded-xl bg-black text-[#FACC15] flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-black leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-extrabold text-amber-600 mt-0.5">{cert.issuer}</p>
                  </div>
                </div>

                {/* Official Certificate Image Preview */}
                {cert.imageUrl && (
                  <div 
                    onClick={() => setSelectedImage({ title: cert.title, imageUrl: cert.imageUrl!, issuer: cert.issuer })}
                    className="relative mt-3 rounded-2xl overflow-hidden border border-slate-300 group/img cursor-pointer bg-slate-950 aspect-[16/10] flex items-center justify-center p-1.5 shadow-sm"
                  >
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain filter contrast-[1.02] group-hover/img:scale-[1.03] transition-transform duration-500 rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-[#FACC15] font-black uppercase tracking-wider backdrop-blur-[2px] rounded-2xl">
                      <ExternalLink className="w-4 h-4 text-[#FACC15]" />
                      <span>View Certificate</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="editorial-card p-8 sm:p-10 rounded-3xl border-2 border-slate-900/10 bg-slate-50 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FACC15] text-black flex items-center justify-center font-black shadow-md border-2 border-black">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-black uppercase">Extracurriculars & Coding Practice</h3>
              <p className="text-xs text-slate-600 font-medium">Coding practice, platform problem-solving, and continuous learning</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-sm"
              >
                <div className="w-4 h-4 rounded-full bg-black text-[#FACC15] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                  ✓
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{item}</p>
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
              className="relative w-full max-w-4xl bg-white p-4 sm:p-6 rounded-3xl border-2 border-black shadow-2xl z-10 space-y-4"
            >
              <div className="flex items-center justify-between gap-4 border-b-2 border-slate-200 pb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-black uppercase">{selectedImage.title}</h3>
                  <p className="text-xs font-bold text-amber-600">{selectedImage.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-[#FACC15] hover:text-black font-bold transition-colors border border-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-950 flex items-center justify-center max-h-[75vh]">
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
