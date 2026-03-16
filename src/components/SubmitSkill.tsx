import React, { useState } from 'react';
import { 
  Info, Code2, FileText, Image as ImageIcon, 
  CheckCircle2, ArrowRight, ArrowLeft, Zap, Terminal, Download
} from 'lucide-react';
import { SkillCard } from './SkillCard';

export const SubmitSkill: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    installCommand: '',
    promptConfig: '',
    usageExample: ''
  });

  const previewSkill = {
    id: 'preview',
    title: formData.title || 'New Agent Skill',
    description: formData.description || 'A description of your amazing new AI agent skill.',
    author: {
      name: 'current_user',
      avatar: 'https://i.pravatar.cc/150?u=current_user',
    },
    tags: formData.tags ? formData.tags.split(',').map(t => t.trim()) : ['NEW'],
    publishDate: 'Just now',
    readTime: '1 min read',
    previewImage: 'https://picsum.photos/seed/new/800/450',
    upvotes: 0,
    comments: 0,
    isBookmarked: false,
    isUpvoted: false,
    installCommand: formData.installCommand || 'npx agent install my-skill',
    promptConfig: formData.promptConfig || 'config: ...',
    usageExample: formData.usageExample || 'await agent.use(...)',
    stats: {
      downloads: '0',
      stars: '0',
      usage: '0'
    }
  };

  return (
    <div className="page-enter max-w-4xl mx-auto flex flex-col gap-8 pb-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Submit a new skill
        </h1>
        <p className="text-text-muted">Share your procedural knowledge with the AI agent community.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Sections */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Basic Info */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-accent-primary">
              <Info size={20} />
              <h2 className="text-lg font-bold uppercase tracking-wider">Basic Information</h2>
            </div>
            <div className="flex flex-col gap-6 bg-surface border border-border-subtle rounded-xl p-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white">Skill Title</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Advanced Research Agent" 
                  className="input-field" 
                />
                <span className="text-xs text-text-muted">A clear, concise name for your skill.</span>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white">Description</label>
                <textarea 
                  rows={4} 
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="What does this skill do?" 
                  className="input-field resize-none" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white">Tags</label>
                <input 
                  type="text" 
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="RESEARCH, ACADEMIC, AGENTS" 
                  className="input-field" 
                />
                <span className="text-xs text-text-muted">Comma separated tags.</span>
              </div>
            </div>
          </section>

          {/* Configuration */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-accent-primary">
              <Code2 size={20} />
              <h2 className="text-lg font-bold uppercase tracking-wider">Skill Configuration</h2>
            </div>
            <div className="flex flex-col gap-6 bg-surface border border-border-subtle rounded-xl p-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white">Install Command</label>
                <input 
                  type="text" 
                  value={formData.installCommand}
                  onChange={(e) => setFormData({ ...formData, installCommand: e.target.value })}
                  placeholder="npx agent install my-skill" 
                  className="input-field font-mono" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white">Prompt Configuration (YAML)</label>
                <textarea 
                  rows={8} 
                  value={formData.promptConfig}
                  onChange={(e) => setFormData({ ...formData, promptConfig: e.target.value })}
                  placeholder="system_prompt: ..." 
                  className="input-field font-mono resize-none" 
                />
              </div>
            </div>
          </section>

          {/* Documentation */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-accent-primary">
              <FileText size={20} />
              <h2 className="text-lg font-bold uppercase tracking-wider">Documentation</h2>
            </div>
            <div className="flex flex-col gap-6 bg-surface border border-border-subtle rounded-xl p-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-white">Usage Example (TypeScript)</label>
                <textarea 
                  rows={10} 
                  value={formData.usageExample}
                  onChange={(e) => setFormData({ ...formData, usageExample: e.target.value })}
                  placeholder="const agent = new Agent(); ..." 
                  className="input-field font-mono resize-none" 
                />
              </div>
            </div>
          </section>
        </div>

        {/* Preview Sidebar */}
        <div className="flex flex-col gap-6">
          <div className="sticky top-8 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-accent-primary">
              <ImageIcon size={20} />
              <h2 className="text-lg font-bold uppercase tracking-wider">Live Preview</h2>
            </div>
            <div className="w-full">
              <SkillCard 
                skill={previewSkill as any} 
                onClick={() => {}} 
                onToggleBookmark={() => {}}
                onToggleUpvote={() => {}}
              />
            </div>
            <div className="flex flex-col gap-3 pt-6 border-t border-border-subtle">
              <button 
                onClick={onCancel}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <span>Publish Skill</span>
                <Zap size={18} />
              </button>
              <button 
                onClick={onCancel}
                className="btn-secondary w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
