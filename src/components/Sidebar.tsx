import React from 'react';
import { 
  Plus, Home, Compass, Clock, LayoutGrid, 
  Users, Search as SearchIcon, Bookmark, 
  History, MessageSquare, Trophy, Zap
} from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const menuItems = [
    { id: 'home', label: 'For you', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'hub', label: 'Agentic Hub', icon: Zap },
  ];

  const feedsItems = [
    { id: 'feeds', label: 'Feeds', icon: LayoutGrid },
    { id: 'squads', label: 'Squads', icon: Users },
    { id: 'find', label: 'Find Squads', icon: SearchIcon },
  ];

  const savedItems = [
    { id: 'briefings', label: 'Presidential briefings', icon: MessageSquare },
    { id: 'saved', label: 'Quick saves', icon: Bookmark },
    { id: 'later', label: 'Read later', icon: History },
  ];

  const NavItem = ({ id, label, icon: Icon }: any) => {
    const isActive = currentPage === id;
    return (
      <button 
        onClick={() => onPageChange(id as Page)}
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
          isActive 
            ? 'bg-accent-primary/10 text-accent-primary' 
            : 'text-text-muted hover:bg-hover-state hover:text-text-primary'
        }`}
      >
        <Icon size={18} />
        <span>{label}</span>
      </button>
    );
  };

  return (
    <aside className="w-64 border-r border-border-subtle h-[calc(100vh-64px)] overflow-y-auto p-4 flex flex-col gap-6 sticky top-16">
      <button 
        onClick={() => onPageChange('submit')}
        className="w-full bg-accent-primary text-white py-2.5 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg shadow-accent-primary/20 hover:brightness-110 transition-all active:scale-[0.98]"
      >
        <Plus size={20} />
        <span>New skill</span>
      </button>

      <div className="flex flex-col gap-1">
        <span className="px-3 text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Menu</span>
        {menuItems.map(item => <NavItem key={item.id} {...item} />)}
      </div>

      <div className="flex flex-col gap-1">
        <span className="px-3 text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Feeds</span>
        {feedsItems.map(item => <NavItem key={item.id} {...item} />)}
      </div>

      <div className="flex flex-col gap-1">
        <span className="px-3 text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">Saved</span>
        {savedItems.map(item => <NavItem key={item.id} {...item} />)}
      </div>

      <div className="mt-auto pt-6 border-t border-border-subtle flex flex-col gap-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:bg-hover-state hover:text-text-primary transition-all">
          <Trophy size={18} />
          <span>Leaderboard</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:bg-hover-state hover:text-text-primary transition-all">
          <MessageSquare size={18} />
          <span>Discussions</span>
        </button>
      </div>
    </aside>
  );
};
