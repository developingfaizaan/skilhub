import React from 'react';
import { 
  ArrowLeft, Download, Share2, 
  Terminal, Info, Code2, 
  ExternalLink, ArrowBigUp, Zap, Copy, Check, Bookmark
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Skill } from '../types';

interface SkillDetailProps {
  skill: Skill;
  onBack: () => void;
  onToggleBookmark: (id: string, e?: React.MouseEvent) => void;
  onToggleUpvote: (id: string, e?: React.MouseEvent) => void;
}

export const SkillDetail: React.FC<SkillDetailProps> = ({ 
  skill, 
  onBack,
  onToggleBookmark,
  onToggleUpvote
}) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="page-enter flex flex-col gap-8 pb-20">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-text-muted hover:text-white transition-colors w-fit"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back to explore</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Main Info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {skill.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold bg-accent-primary/10 text-accent-primary px-2 py-0.5 rounded uppercase tracking-wider border border-accent-primary/20">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">
              {skill.title}
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              {skill.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold">
                <Terminal size={18} className="text-accent-primary" />
                <span>Install command</span>
              </div>
              <button 
                onClick={() => handleCopy(skill.installCommand, 'install')}
                className="p-2 text-text-muted hover:text-white hover:bg-tag-bg rounded-lg transition-all"
              >
                {copied === 'install' ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>
            <div className="bg-elevated border border-border-subtle rounded-xl p-4 flex items-center justify-between group">
              <code className="font-mono text-sm text-accent-primary">{skill.installCommand}</code>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold">
                <Code2 size={18} className="text-accent-primary" />
                <span>Prompt Configuration</span>
              </div>
              <button 
                onClick={() => handleCopy(skill.promptConfig, 'config')}
                className="p-1.5 text-text-muted hover:text-white transition-colors"
              >
                {copied === 'config' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>
            <div className="bg-elevated border border-border-subtle rounded-xl overflow-hidden">
              <div className="bg-tag-bg px-4 py-2 border-b border-border-subtle flex items-center justify-between">
                <span className="text-xs font-mono text-text-muted">skill-config.yaml</span>
              </div>
              <div className="text-sm">
                <SyntaxHighlighter 
                  language="yaml" 
                  style={atomDark}
                  customStyle={{ margin: 0, background: 'transparent', padding: '1rem' }}
                >
                  {skill.promptConfig}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold">
                <Info size={18} className="text-accent-primary" />
                <span>Usage Example</span>
              </div>
              <button 
                onClick={() => handleCopy(skill.usageExample, 'usage')}
                className="p-1.5 text-text-muted hover:text-white transition-colors"
              >
                {copied === 'usage' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>
            <div className="bg-elevated border border-border-subtle rounded-xl overflow-hidden">
              <div className="bg-tag-bg px-4 py-2 border-b border-border-subtle flex items-center justify-between">
                <span className="text-xs font-mono text-text-muted">example.ts</span>
              </div>
              <div className="text-sm">
                <SyntaxHighlighter 
                  language="typescript" 
                  style={atomDark}
                  customStyle={{ margin: 0, background: 'transparent', padding: '1rem' }}
                >
                  {skill.usageExample}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Author */}
        <div className="flex flex-col gap-6">
          <div className="developer-card flex flex-col">
            {/* macOS Window Header */}
            <div className="bg-tag-bg/50 border-b border-border-subtle px-4 py-2 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>
            
            <div className="p-6 flex flex-col gap-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <img 
                    src={skill.author.avatar} 
                    alt={skill.author.name} 
                    className="w-20 h-20 rounded-2xl border-2 border-accent-primary/20 p-1 bg-elevated object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-accent-primary text-black p-1.5 rounded-lg shadow-lg">
                    <Zap size={12} fill="currentColor" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight">{skill.author.name}</span>
                  <span className="text-xs font-mono text-accent-primary uppercase tracking-widest">Verified Architect</span>
                </div>
              </div>
              
              <div className="bg-elevated/50 border border-border-subtle rounded-lg p-4">
                <p className="text-sm text-text-muted leading-relaxed italic">
                  "Building the future of autonomous systems, one procedural skill at a time."
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button className="btn-secondary w-full flex items-center justify-center gap-2 py-2 text-sm">
                  <span>View Profile</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="developer-card flex flex-col">
            {/* macOS Window Header */}
            <div className="bg-tag-bg/50 border-b border-border-subtle px-4 py-2 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>
            <div className="p-6 grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-muted uppercase font-bold tracking-tighter">Installs</span>
                <span className="text-lg font-bold text-white">{skill.stats.downloads}</span>
              </div>
              <div className="flex flex-col gap-1 border-x border-border-subtle">
                <span className="text-[10px] text-text-muted uppercase font-bold tracking-tighter">Stars</span>
                <span className="text-lg font-bold text-white">{skill.stats.stars}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-text-muted uppercase font-bold tracking-tighter">Usage</span>
                <span className="text-lg font-bold text-white">{skill.stats.usage}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="btn-primary w-full flex items-center justify-center gap-2 py-3">
              <Download size={18} />
              <span>Install Skill</span>
            </button>
            <div className="flex gap-3">
              <button 
                onClick={(e) => onToggleUpvote(skill.id, e)}
                className={`btn-secondary flex-1 flex items-center justify-center gap-2 ${skill.isUpvoted ? 'text-accent-primary border-accent-primary/50 bg-accent-primary/5' : ''}`}
              >
                <ArrowBigUp size={18} fill={skill.isUpvoted ? 'currentColor' : 'none'} />
                <span>{skill.isUpvoted ? 'Upvoted' : 'Upvote'}</span>
              </button>
              <button 
                onClick={(e) => onToggleBookmark(skill.id, e)}
                className={`btn-secondary flex-1 flex items-center justify-center gap-2 ${skill.isBookmarked ? 'text-accent-primary border-accent-primary/50 bg-accent-primary/5' : ''}`}
              >
                <Bookmark size={18} fill={skill.isBookmarked ? 'currentColor' : 'none'} />
                <span>{skill.isBookmarked ? 'Saved' : 'Save'}</span>
              </button>
            </div>
            <button className="btn-secondary w-full flex items-center justify-center gap-2">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
