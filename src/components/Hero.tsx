import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
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
      className="relative min-h-[88vh] pt-28 pb-16 flex items-center justify-center overflow-hidden z-10"
    >
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Greeting Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold glass-panel text-brand-cyan border border-brand-cyan/30">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                <span>AI & Machine Learning Engineer</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Hi, I'm <br />
                <span className="gradient-text">C Santhi Swaroop</span>
              </h1>
            </div>

            {/* Human Bio Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              B.Tech AIML student at R.M.D Engineering College with hands-on internship experience in Data Analytics and Python development. I build practical Machine Learning models, Generative AI pipelines, and clean data visualizations.
            </p>

            {/* Action CTA Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white font-semibold text-sm shadow-neon-blue hover:scale-105 hover:shadow-neon-purple transition-all flex items-center gap-2 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact Details Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel hover:text-white hover:border-brand-blue/40 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-brand-blue" />
                <span>{personalInfo.github}</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel hover:text-white hover:border-brand-purple/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-purple" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel hover:text-white hover:border-brand-cyan/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                <span>+91 {personalInfo.phone}</span>
              </a>

              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{personalInfo.location}</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Clean Portrait Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-80 group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan opacity-75 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative glass-panel rounded-3xl p-3 border border-white/20 overflow-hidden shadow-2xl">
                <div className="relative h-[420px] w-full rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
