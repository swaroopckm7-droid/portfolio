import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, User, RefreshCw, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Hello! I'm Swaroop's AI Recruiter Assistant. I can answer any questions about Swaroop's AIML degree, Oracle/NPTEL certifications, Data Analytics internship experience, Python projects, or contact details. How can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const presetQuestions = [
    "What are Swaroop's top AI & programming skills?",
    "Tell me about his internships & impact metrics",
    "What projects has Swaroop built?",
    "What certifications does Swaroop hold?",
    "How can I contact Swaroop?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('skill') || q.includes('python') || q.includes('language') || q.includes('code')) {
      return `Swaroop's core technical stack includes:
• Programming Languages: Python (Advanced), C++, Java, C.
• AI, ML & Cloud: Generative AI, Agentic AI, Supervised Machine Learning, Oracle APEX Cloud, LLMs & Prompt Engineering.
• Data Analytics: Data Preprocessing, Feature Engineering, Pandas, NumPy, Data Visualization.
• Languages Spoken: English (Professional), Telugu (Native), Tamil (Professional), German (A1 Basic).`;
    }

    if (q.includes('intern') || q.includes('experience') || q.includes('work') || q.includes('metric')) {
      return `Swaroop has completed two key internships:
1. Data Analytics Intern at Innovation Tech Tree (May 2026 – June 2026): Analyzed real-world datasets in Python, built interactive dashboards, and applied GenAI to automate insight generation (reducing manual reporting by 40%).
2. Python Programming Intern at CodeAlpha (June 2025 – July 2025): Developed Python automation scripts, applied OOP principles, and optimized data structures to reduce execution runtime by 20%.`;
    }

    if (q.includes('project') || q.includes('dashboard') || q.includes('model')) {
      return `Swaroop's featured projects:
1. AI-Powered Data Analytics Dashboard (2026): Built an end-to-end Python analytics pipeline with ML trend prediction & GenAI automated insight summaries (40% time reduction).
2. Machine Learning Classification Engine (2025): Implemented supervised classification models achieving 85%+ accuracy on test datasets with feature engineering and diagnostic evaluation scripts.`;
    }

    if (q.includes('certif') || q.includes('oracle') || q.includes('nptel')) {
      return `Swaroop holds 7+ professional certifications:
• Oracle Generative AI Professional
• Oracle APEX Cloud Developer
• Agentic AI Certified Foundations Associate (Oracle)
• Industry 4.0 and IIoT (NPTEL)
• Soft Skill Development (NPTEL)
• Data Structures using C++ (CodeTantra)
• Master in Software Application (Apollo Education)`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('location')) {
      return `You can reach Swaroop directly:
• Email: ${portfolioData.personalInfo.email}
• Phone: +91 ${portfolioData.personalInfo.phone}
• GitHub: ${portfolioData.personalInfo.githubUrl}
• Location: ${portfolioData.personalInfo.location}
• Education: B.Tech AIML (2024-2028), R.M.D Engineering College.`;
    }

    return `Swaroop C is a B.Tech AIML student (2024-2028) at R.M.D Engineering College with hands-on internship experience in Python programming and Data Analytics. He is certified in Generative AI, Agentic AI, and Oracle Cloud. Feel free to ask about his skills, internships, projects, or contact info!`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMessage: Message = {
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        sender: 'bot',
        text: generateAnswer(text),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-xl glass-panel rounded-3xl border border-brand-cyan/40 shadow-2xl z-10 flex flex-col h-[580px] overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 bg-gradient-to-r from-brand-blue/20 via-brand-purple/20 to-brand-cyan/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan p-[1px] shadow-neon-cyan">
                  <div className="w-full h-full bg-[#0B1120] rounded-[15px] flex items-center justify-center text-brand-cyan">
                    <Bot className="w-5 h-5 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Swaroop AI Assistant
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </h3>
                  <p className="text-[11px] text-slate-300">Recruiter Knowledge Engine</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full glass-panel text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-xl bg-brand-purple/30 border border-brand-purple/50 flex items-center justify-center text-brand-cyan shrink-0 mt-1">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-br-none'
                        : 'glass-panel text-slate-200 border border-white/10 rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className="text-[9px] text-slate-400 block mt-1 text-right font-mono">
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-xl bg-brand-blue/30 border border-brand-blue/50 flex items-center justify-center text-white shrink-0 mt-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 items-center text-xs text-slate-400">
                  <div className="w-7 h-7 rounded-xl bg-brand-purple/30 flex items-center justify-center text-brand-cyan">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <span>Assistant thinking...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Preset Question Chips */}
            <div className="p-2 border-t border-white/10 overflow-x-auto flex gap-2 bg-slate-950/40">
              {presetQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-3 py-1 rounded-full text-[11px] font-medium glass-panel text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan/10 shrink-0 flex items-center gap-1 transition-colors"
                >
                  <span>{q}</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              ))}
            </div>

            {/* Input Box */}
            <div className="p-3 border-t border-white/10 glass-panel flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about Swaroop's skills, internships, projects..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-slate-900/60 border border-white/10 px-4 py-2.5 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-cyan/60"
              />
              <button
                onClick={() => handleSend()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-neon-blue hover:scale-105 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
