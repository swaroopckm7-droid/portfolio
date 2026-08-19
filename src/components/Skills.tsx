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
    Code2: <Code2 className="w-5 h-5 text-black" />,
    Cpu: <Cpu className="w-5 h-5 text-black" />,
    Terminal: <Terminal className="w-5 h-5 text-black" />,
    Binary: <Binary className="w-5 h-5 text-black" />,
    Sparkles: <Sparkles className="w-5 h-5 text-black" />,
    Bot: <Bot className="w-5 h-5 text-black" />,
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-black" />,
    Cloud: <Cloud className="w-5 h-5 text-black" />,
    MessageSquareCode: <MessageSquareCode className="w-5 h-5 text-black" />,
    Filter: <Filter className="w-5 h-5 text-black" />,
    Boxes: <Boxes className="w-5 h-5 text-black" />,
    Layers: <Layers className="w-5 h-5 text-black" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-black" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-black" />,
    Laptop: <Laptop className="w-5 h-5 text-black" />,
    GitBranch: <GitBranch className="w-5 h-5 text-black" />,
    Network: <Network className="w-5 h-5 text-black" />,
    Table: <Table className="w-5 h-5 text-black" />,
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
    <section id="skills" className="py-24 relative z-10 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-black bg-black text-white uppercase tracking-widest shadow-sm">
            <Cpu className="w-4 h-4 text-[#FACC15]" />
            <span>SKILLS & TECHNOLOGIES</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase">
            Technical <span className="bg-[#FACC15] text-black px-2 py-0.5 inline-block">Skills</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
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
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FACC15] text-black shadow-md border-2 border-black'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 font-bold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, Git)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white text-xs font-bold text-black placeholder-slate-400 border-2 border-slate-200 focus:outline-none focus:border-black transition-colors shadow-sm"
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
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                <div>
                  <h3 className="text-xl font-extrabold text-black uppercase flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FACC15]" />
                    <span>{catGroup.category}</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{catGroup.description}</p>
                </div>
                <span className="text-xs font-mono font-bold text-slate-600 bg-slate-200 px-2.5 py-1 rounded-md">{catGroup.skills.length} skills</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="editorial-card px-5 py-4 rounded-2xl border-2 border-slate-200 hover:border-black transition-all flex items-center gap-3.5"
                  >
                    <div className="p-2.5 rounded-xl bg-[#FACC15] shrink-0 shadow-sm">
                      {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-black" />}
                    </div>

                    <h4 className="text-xs sm:text-sm font-extrabold text-black leading-snug">
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
