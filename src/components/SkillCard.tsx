import React from 'react';
import { ArrowBigUp, MessageSquare, Bookmark, MoreHorizontal, Terminal, Zap, Clock } from 'lucide-react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  onClick: () => void;
  onToggleBookmark: (e: React.MouseEvent) => void;
  onToggleUpvote: (e: React.MouseEvent) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ 
  skill, 
  onClick,
  onToggleBookmark,
  onToggleUpvote
}) => {
  return (
    <div 
      onClick={onClick}
      className="developer-card-interactive group flex flex-col h-full"
    >
      {/* macOS Window Header */}
      <div className="bg-tag-bg/50 border-b border-border-subtle px-4 py-2 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[10px] font-mono text-text-muted opacity-50 uppercase tracking-widest">
          skill.sh
        </div>
      </div>

      <div className="p-6 flex flex-col gap-5 flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accent-primary/10 flex items-center justify-center text-accent-primary">
              <Zap size={14} fill="currentColor" />
            </div>
            <span className="text-xs font-mono text-text-muted group-hover:text-accent-primary transition-colors">
              {skill.author.name}
            </span>
          </div>
          <div className="flex gap-1.5">
            {skill.tags.slice(0, 1).map(tag => (
              <span key={tag} className="text-[9px] font-bold bg-tag-bg text-text-muted px-2 py-0.5 rounded border border-border-subtle uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-accent-primary transition-colors">
            {skill.title}
          </h3>
          <p className="text-sm text-text-muted line-clamp-2 leading-relaxed">
            {skill.description}
          </p>
        </div>

        <div className="bg-elevated/50 border border-border-subtle rounded p-3 font-mono text-[11px] text-accent-primary/80 flex items-center gap-2">
          <Terminal size={12} />
          <span className="truncate">{skill.installCommand}</span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
          <div className="flex items-center gap-4">
            <button 
              onClick={onToggleUpvote}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer ${skill.isUpvoted ? 'text-accent-primary' : 'text-text-muted hover:text-white'}`}
            >
              <ArrowBigUp size={16} fill={skill.isUpvoted ? 'currentColor' : 'none'} />
              <span className="text-xs font-bold">{skill.upvotes}</span>
            </button>
            <div className="flex items-center gap-1.5 text-text-muted">
              <MessageSquare size={14} />
              <span className="text-xs">{skill.comments}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={onToggleBookmark}
              className={`p-1.5 rounded transition-colors cursor-pointer ${skill.isBookmarked ? 'text-accent-primary bg-accent-primary/10' : 'text-text-muted hover:bg-tag-bg'}`}
            >
              <Bookmark size={16} fill={skill.isBookmarked ? 'currentColor' : 'none'} />
            </button>
            <button className="p-1.5 text-text-muted hover:bg-tag-bg rounded transition-colors cursor-pointer">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
