import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { personalInfo } = portfolioData;

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactCards = [
    {
      title: 'Email Address',
      value: personalInfo.email,
      icon: <Mail className="w-5 h-5 text-brand-purple" />,
      action: () => handleCopy(personalInfo.email, 'email'),
      copied: copiedField === 'email',
      subText: 'Click to copy email address',
    },
    {
      title: 'Phone / WhatsApp',
      value: `+91 ${personalInfo.phone}`,
      icon: <Phone className="w-5 h-5 text-brand-cyan" />,
      action: () => handleCopy(personalInfo.phone, 'phone'),
      copied: copiedField === 'phone',
      subText: 'Click to copy phone number',
    },
    {
      title: 'GitHub Profile',
      value: personalInfo.github,
      icon: <GithubIcon className="w-5 h-5 text-brand-blue" />,
      action: () => window.open(personalInfo.githubUrl, '_blank'),
      copied: false,
      subText: 'Click to open GitHub repo',
    },
    {
      title: 'Primary Location',
      value: personalInfo.location,
      icon: <MapPin className="w-5 h-5 text-rose-400" />,
      action: () => {},
      copied: false,
      subText: 'Available for remote & hybrid roles',
    },
  ];

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for AI/ML engineering opportunities, data analytics roles, and technical collaboration.
          </p>
        </div>

        {/* Clean Contact Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={card.action}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-brand-cyan/40 transition-all hover:-translate-y-1 cursor-pointer group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-brand-blue/20 transition-colors flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400">{card.title}</h4>
                  <p className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors mt-0.5">
                    {card.value}
                  </p>
                  <span className="text-[11px] text-slate-400 mt-1 block">{card.subText}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl glass-panel text-slate-400 group-hover:text-white shrink-0">
                {card.copied ? (
                  <Check className="w-4.5 h-4.5 text-emerald-400" />
                ) : (
                  <Copy className="w-4.5 h-4.5" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
