import React from 'react';
import { Search, Bell, Settings, Command, Compass, LayoutGrid, Bookmark, Plus } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const navLinks = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'explore', label: 'Explore', icon: LayoutGrid },
    { id: 'dashboard', label: 'Dashboard', icon: Settings },
    { id: 'saved', label: 'Saved', icon: Bookmark },
  ];

  return (
    <nav className="h-16 border-b border-border-subtle bg-base/80 backdrop-blur-md sticky top-0 z-50 px-8 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onPageChange('home')}
        >
          <div className="w-8 h-8 bg-accent-primary rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">SkillHub</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onPageChange(link.id as Page)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                currentPage === link.id 
                  ? 'text-accent-primary bg-accent-primary/10' 
                  : 'text-text-muted hover:text-text-primary hover:bg-tag-bg'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 max-w-md mx-8 relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent-primary transition-colors">
          <Search size={16} />
        </div>
        <input 
          type="text" 
          placeholder="Search skills..." 
          className="w-full bg-elevated border border-border-subtle rounded-md py-1.5 pl-10 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] text-text-muted bg-tag-bg px-1 py-0.5 rounded border border-border-subtle">
          <Command size={10} />
          <span>K</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => onPageChange('submit')}
          className="hidden lg:flex items-center gap-2 bg-accent-primary text-black px-4 py-1.5 rounded text-sm font-bold hover:brightness-110 transition-all active:scale-95 cursor-pointer"
        >
          <Plus size={16} />
          <span>Submit</span>
        </button>
        
        <div className="h-4 w-px bg-border-subtle mx-2" />

        <button className="p-2 text-text-muted hover:text-white transition-colors relative cursor-pointer">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent-primary rounded-full" />
        </button>
        
        <div className="w-8 h-8 rounded border border-border-subtle cursor-pointer hover:border-accent-primary transition-colors overflow-hidden">
          <img src="https://i.pravatar.cc/150?u=current_user" alt="User" referrerPolicy="no-referrer" />
        </div>
      </div>
    </nav>
  );
};
