import React from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  Zap,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-black bg-black text-white uppercase tracking-widest shadow-sm">
            <FolderGit2 className="w-4 h-4 text-[#FACC15]" />
            <span>SELECTED WORKS</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase">
            Featured <span className="bg-[#FACC15] text-black px-2 py-0.5 inline-block">Project</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Python-based data analytics pipeline integrating data cleaning, interactive visualization, and trend prediction.
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-3xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="editorial-card p-6 sm:p-8 rounded-3xl border-2 border-slate-900/10 relative flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#FACC15]" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4 mt-2">
                  <span className="px-3 py-1 rounded-md text-xs font-extrabold bg-[#FACC15] text-black uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">{project.year}</span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-black leading-tight">
                    {project.title}
                  </h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-black text-white hover:bg-[#FACC15] hover:text-black font-extrabold transition-all shrink-0 flex items-center gap-1.5 text-xs uppercase shadow-md"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

                <p className="text-xs font-bold text-amber-600 mb-4 uppercase tracking-wider">{project.subtitle}</p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>

                <div className="p-4 rounded-2xl bg-[#FACC15] border-2 border-black flex items-center justify-between mb-6 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-black font-bold" />
                    <span className="text-xs font-black text-black uppercase">{project.metrics}</span>
                  </div>
                  <span className="text-[10px] font-black text-black uppercase tracking-widest bg-white/60 px-2 py-0.5 rounded">Impact Metric</span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-800 font-medium">
                      <div className="w-4 h-4 rounded-full bg-black text-[#FACC15] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                        ✓
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                  {project.techStack.map((tech, i) => (
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
