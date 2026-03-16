import React, { useState } from 'react';
import { Search, Bell, Command, Compass, LayoutGrid, Bookmark, Plus, Menu, X, Settings } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'explore', label: 'Explore', icon: LayoutGrid },
    { id: 'dashboard', label: 'Dashboard', icon: Settings },
    { id: 'saved', label: 'Saved', icon: Bookmark },
  ];

  const handlePageChange = (page: Page) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="h-16 border-b border-border-subtle bg-base/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 md:gap-8">
        <div 
          className="flex items-center gap-2 md:gap-3 cursor-pointer"
          onClick={() => handlePageChange('home')}
        >
          <div className="w-7 h-7 md:w-8 md:h-8 bg-accent-primary rounded flex items-center justify-center">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-sm rotate-45" />
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tight text-white">SkillHub</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handlePageChange(link.id as Page)}
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

      <div className="hidden sm:flex flex-1 max-w-md mx-4 md:mx-8 relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent-primary transition-colors">
          <Search size={16} />
        </div>
        <input 
          type="text" 
          placeholder="Search skills..." 
          className="w-full bg-elevated border border-border-subtle rounded-md py-1.5 pl-10 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all"
        />
        <div className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-1 text-[10px] text-text-muted bg-tag-bg px-1 py-0.5 rounded border border-border-subtle">
          <Command size={10} />
          <span>K</span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button 
          onClick={() => handlePageChange('submit')}
          className="hidden sm:flex items-center gap-2 bg-accent-primary text-black px-3 md:px-4 py-1.5 rounded text-sm font-bold hover:brightness-110 transition-all active:scale-95 cursor-pointer"
        >
          <Plus size={16} />
          <span className="hidden lg:inline">Submit</span>
        </button>
        
        <div className="hidden sm:block h-4 w-px bg-border-subtle mx-1 md:mx-2" />

        <button className="p-2 text-text-muted hover:text-white transition-colors relative cursor-pointer">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent-primary rounded-full" />
        </button>
        
        <div className="hidden sm:block w-8 h-8 rounded border border-border-subtle cursor-pointer hover:border-accent-primary transition-colors overflow-hidden">
          <img src="https://i.pravatar.cc/150?u=current_user" alt="User" referrerPolicy="no-referrer" />
        </div>

        <button 
          className="md:hidden p-2 text-text-muted hover:text-white transition-colors cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-base border-b border-border-subtle p-4 flex flex-col gap-2 md:hidden animate-in slide-in-from-top duration-200">
          <div className="sm:hidden relative group mb-2">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent-primary transition-colors">
              <Search size={16} />
            </div>
            <input 
              type="text" 
              placeholder="Search skills..." 
              className="w-full bg-elevated border border-border-subtle rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all"
            />
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handlePageChange(link.id as Page)}
              className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all ${
                currentPage === link.id 
                  ? 'text-accent-primary bg-accent-primary/10' 
                  : 'text-text-muted hover:text-text-primary hover:bg-tag-bg'
              }`}
            >
              <link.icon size={18} />
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handlePageChange('submit')}
            className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-accent-primary bg-accent-primary/10 mt-2"
          >
            <Plus size={18} />
            Submit Skill
          </button>
        </div>
      )}
    </nav>
  );
};
