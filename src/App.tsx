import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { SkillGrid } from './components/SkillGrid';
import { SkillDetail } from './components/SkillDetail';
import { SubmitSkill } from './components/SubmitSkill';
import { Dashboard } from './components/Dashboard';
import { MOCK_SKILLS } from './constants';
import { Skill, Page } from './types';
import { Compass, Filter, ChevronDown, Terminal, Zap, Code, Globe, Cpu } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [skills, setSkills] = useState<Skill[]>(MOCK_SKILLS);
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

  const selectedSkill = useMemo(() => 
    skills.find(s => s.id === selectedSkillId) || null
  , [skills, selectedSkillId]);

  const filteredSkills = useMemo(() => {
    let currentSkills = skills;
    if (currentPage === 'saved') {
      currentSkills = currentSkills.filter(s => s.isBookmarked);
    }
    return currentSkills;
  }, [currentPage, skills]);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkillId(skill.id);
    setCurrentPage('detail');
  };

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSkills(prev => prev.map(s => 
      s.id === id ? { ...s, isBookmarked: !s.isBookmarked } : s
    ));
  };

  const handleToggleUpvote = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSkills(prev => prev.map(s => 
      s.id === id ? { 
        ...s, 
        isUpvoted: !s.isUpvoted,
        upvotes: s.isUpvoted ? s.upvotes - 1 : s.upvotes + 1
      } : s
    ));
  };

  const renderContent = () => {
    if (currentPage === 'detail' && selectedSkill) {
      return (
        <SkillDetail 
          skill={selectedSkill} 
          onBack={() => setCurrentPage('explore')} 
          onToggleBookmark={handleToggleBookmark}
          onToggleUpvote={handleToggleUpvote}
        />
      );
    }

    if (currentPage === 'submit') {
      return <SubmitSkill onCancel={() => setCurrentPage('home')} />;
    }

    if (currentPage === 'dashboard') {
      return <Dashboard />;
    }

    return (
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Unique Hero Section */}
        {currentPage === 'home' && (
          <div className="page-enter relative py-8 md:py-12 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 grid-rows-4 gap-4 opacity-[0.03] pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-accent-primary rounded" />
              ))}
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center gap-6 md:gap-8">
              <div className="flex items-center gap-3 bg-accent-primary/5 border border-accent-primary/20 px-3 md:px-4 py-1.5 rounded-full">
                <Zap size={14} className="text-accent-primary" fill="currentColor" />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-accent-primary">New: Research Agent v2.4</span>
              </div>
 
              <div className="flex flex-col gap-4 max-w-4xl px-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight md:leading-none">
                  The Registry for <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent-primary to-accent-secondary">
                    Agentic Intelligence
                  </span>
                </h1>
                <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                  A high-performance registry for procedural agent skills.
                  Install, configure, and scale autonomous capabilities in seconds.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
                <button 
                  onClick={() => setCurrentPage('explore')}
                  className="btn-primary flex items-center gap-2 w-full sm:w-auto sm:px-8 justify-center"
                >
                  <Terminal size={18} />
                  <span>Browse Registry</span>
                </button>
                <button 
                  onClick={() => setCurrentPage('submit')}
                  className="btn-secondary w-full sm:w-auto sm:px-8"
                >
                  Publish Skill
                </button>
              </div>
 
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-4 md:mt-8 w-full max-w-3xl px-4">
                {[
                  { label: 'Total Skills', val: '1,240', icon: Code },
                  { label: 'Active Agents', val: '85k', icon: Cpu },
                  { label: 'Global Nodes', val: '12', icon: Globe },
                  { label: 'Uptime', val: '99.9%', icon: Zap },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-1 bg-surface/30 p-3 rounded-lg border border-border-subtle md:bg-transparent md:border-0 md:p-0">
                    <div className="text-text-muted mb-1"><stat.icon size={16} /></div>
                    <span className="text-lg md:text-xl font-bold text-white">{stat.val}</span>
                    <span className="text-[9px] md:text-[10px] font-bold text-text-muted uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
 
        {/* Filters & Search Header */}
        {(currentPage === 'explore' || currentPage === 'saved' || currentPage === 'home') && (
          <div className="flex flex-col gap-6 md:gap-8 max-w-7xl mx-auto w-full px-4 md:px-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-subtle pb-6 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0">
                  <Compass size={20} />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-white">
                    {currentPage === 'home' ? 'Featured Registry' : currentPage === 'saved' ? 'Saved Capabilities' : 'Global Registry'}
                  </h2>
                  <span className="text-xs text-text-muted">Showing latest procedural skills</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="btn-secondary flex-1 sm:flex-none flex items-center justify-center gap-2 py-1.5 text-xs">
                  <Filter size={14} />
                  <span>Filter</span>
                </button>
                <button className="btn-secondary flex-1 sm:flex-none flex items-center justify-center gap-2 py-1.5 text-xs">
                  <span className="whitespace-nowrap">Sort: Popular</span>
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>
 
            {/* Category Tags */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {['All Capabilities', 'Reasoning', 'Tools', 'DevOps', 'Refactoring', 'Research', 'Automation', 'Marketing'].map((cat, i) => (
                <button 
                  key={cat}
                  className={`px-4 py-1.5 rounded text-[11px] font-bold whitespace-nowrap border transition-all cursor-pointer ${
                    i === 0 
                      ? 'bg-accent-primary border-accent-primary text-black' 
                      : 'bg-tag-bg border-border-subtle text-text-muted hover:border-text-muted'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <SkillGrid 
              skills={filteredSkills} 
              onSkillClick={handleSkillClick} 
              onToggleBookmark={handleToggleBookmark}
              onToggleUpvote={handleToggleUpvote}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-base flex flex-col">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 px-4 md:px-8 py-8 md:py-12 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}
