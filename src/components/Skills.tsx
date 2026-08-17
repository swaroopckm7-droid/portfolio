import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Terminal,
  Binary,
  Sparkles,
  Bot,
  BrainCircuit,
  Cloud,
  MessageSquareCode,
  Filter,
  Boxes,
  Layers,
  Lightbulb,
  BarChart3,
  Laptop,
  GitBranch,
  Network,
  Table,
  Search,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-brand-blue" />,
    Cpu: <Cpu className="w-5 h-5 text-brand-purple" />,
    Terminal: <Terminal className="w-5 h-5 text-brand-cyan" />,
    Binary: <Binary className="w-5 h-5 text-emerald-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    Bot: <Bot className="w-5 h-5 text-brand-cyan" />,
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-brand-purple" />,
    Cloud: <Cloud className="w-5 h-5 text-brand-blue" />,
    MessageSquareCode: <MessageSquareCode className="w-5 h-5 text-pink-400" />,
    Filter: <Filter className="w-5 h-5 text-indigo-400" />,
    Boxes: <Boxes className="w-5 h-5 text-brand-cyan" />,
    Layers: <Layers className="w-5 h-5 text-brand-purple" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-yellow-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-emerald-400" />,
    Laptop: <Laptop className="w-5 h-5 text-brand-blue" />,
    GitBranch: <GitBranch className="w-5 h-5 text-rose-400" />,
    Network: <Network className="w-5 h-5 text-cyan-400" />,
    Table: <Table className="w-5 h-5 text-teal-400" />,
  };

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = skillCategories
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          (activeCategory === 'All' || cat.category === activeCategory) &&
          s.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold glass-panel text-brand-purple border border-brand-purple/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>SKILLS & TECHNOLOGIES</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Core programming languages, development tools, and data analytics libraries I work with.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-neon-blue'
                    : 'glass-panel text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, Git)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl glass-panel text-xs text-white placeholder-slate-500 border border-white/10 focus:outline-none focus:border-brand-blue/60 transition-colors"
            />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((catGroup, catIdx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                    <span>{catGroup.category}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{catGroup.description}</p>
                </div>
                <span className="text-xs font-mono text-slate-500">{catGroup.skills.length} skills</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-panel px-5 py-4 rounded-2xl border border-white/10 hover:border-brand-blue/40 transition-all hover:-translate-y-1 group relative flex items-center gap-3.5"
                  >
                    <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-brand-blue/20 transition-colors shrink-0">
                      {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-brand-blue" />}
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
