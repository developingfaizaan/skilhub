import React from 'react';
import { 
  BarChart3, Download, Star, Edit3, 
  Trash2, ExternalLink, Search
} from 'lucide-react';
import { MOCK_SKILLS } from '../constants';

export const Dashboard: React.FC = () => {
  return (
    <div className="page-enter flex flex-col gap-8 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            My Skills
          </h1>
          <p className="text-text-muted text-lg">Manage and monitor your published AI agent skills.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search your skills..." 
              className="bg-elevated border border-border-subtle rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary/30"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="developer-card p-8 flex flex-col gap-3">
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Total Installs</span>
          <div className="flex items-end justify-between">
            <span className="text-4xl font-bold text-white">42.6k</span>
            <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold mb-1">
              <BarChart3 size={12} />
              <span>+12%</span>
            </div>
          </div>
        </div>
        <div className="developer-card p-8 flex flex-col gap-3">
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Average Rating</span>
          <div className="flex items-end justify-between">
            <span className="text-4xl font-bold text-white">4.9</span>
            <div className="flex items-center gap-1 text-accent-primary text-xs font-bold mb-1">
              <Star size={12} fill="currentColor" />
              <span>Top 1%</span>
            </div>
          </div>
        </div>
        <div className="developer-card p-8 flex flex-col gap-3">
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Active Users</span>
          <div className="flex items-end justify-between">
            <span className="text-4xl font-bold text-white">12.1k</span>
            <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold mb-1">
              <BarChart3 size={12} />
              <span>+5%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="developer-card overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-tag-bg border-b border-border-subtle">
                <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Skill Name</th>
                <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Installs</th>
                <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Stars</th>
                <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {MOCK_SKILLS.map((skill) => (
                <tr key={skill.id} className="hover:bg-hover-state transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-accent-primary transition-colors">{skill.title}</span>
                      <span className="text-[10px] text-text-muted uppercase tracking-wider font-bold">{skill.tags[0]}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-text-primary">
                      <Download size={14} className="text-text-muted" />
                      <span>{skill.stats.downloads}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-text-primary">
                      <Star size={14} className="text-text-muted" />
                      <span>{skill.stats.stars}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-text-muted">
                    {skill.publishDate}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-text-muted hover:text-white hover:bg-tag-bg rounded-lg transition-all">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-2 text-text-muted hover:text-white hover:bg-tag-bg rounded-lg transition-all">
                        <ExternalLink size={16} />
                      </button>
                      <button className="p-2 text-text-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
