import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Hero: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden z-10 bg-[#F8F9FA]"
    >
      {/* Top Banner Accent (Yellow Editorial Concept) */}
      <div className="absolute top-0 inset-x-0 h-44 bg-[#FACC15] -skew-y-1 origin-top-left -z-0 opacity-95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Giant Graphic Editorial Headline with Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.08] uppercase">
                C SANTHI <br />
                <span className="bg-[#FACC15] text-black px-2 py-0.5 inline-block my-1 shadow-sm">
                  SWAROOP
                </span>
              </h1>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl font-medium border-l-4 border-black pl-4">
              B.Tech AIML student at R.M.D Engineering College with hands-on experience building Machine Learning models, Python data pipelines, and Generative AI solutions.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-black text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#FACC15] hover:text-black shadow-lg transition-all flex items-center gap-2 group border-2 border-black"
              >
                <span>View Selected Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact Details Badges */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3 text-xs text-slate-700">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-bold hover:border-black transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-black" />
                <span>{personalInfo.github}</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-bold hover:border-black transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4 text-amber-600" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-bold hover:border-black transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91 {personalInfo.phone}</span>
              </a>

              <span className="flex items-center gap-1 text-slate-600 font-semibold">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{personalInfo.location}</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait Card with Yellow Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-80 group">
              {/* Yellow Accent Backplate */}
              <div className="absolute -inset-2 rounded-3xl bg-[#FACC15] shadow-xl group-hover:rotate-1 transition-transform duration-500" />

              <div className="relative bg-[#F8F9FA] rounded-3xl p-3 border-2 border-black overflow-hidden shadow-2xl">
                <div className="relative h-[410px] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-md text-white p-3 rounded-xl border border-white/20">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FACC15] block">Student Developer</span>
                    <span className="text-xs font-bold">{personalInfo.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
