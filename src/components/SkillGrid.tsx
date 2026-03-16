import React from 'react';
import { SkillCard } from './SkillCard';
import { Skill } from '../types';

interface SkillGridProps {
  skills: Skill[];
  onSkillClick: (skill: Skill) => void;
  onToggleBookmark: (id: string, e?: React.MouseEvent) => void;
  onToggleUpvote: (id: string, e?: React.MouseEvent) => void;
}

export const SkillGrid: React.FC<SkillGridProps> = ({ 
  skills, 
  onSkillClick,
  onToggleBookmark,
  onToggleUpvote
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div 
          key={skill.id} 
          className="page-enter" 
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <SkillCard 
            skill={skill} 
            onClick={() => onSkillClick(skill)} 
            onToggleBookmark={(e) => onToggleBookmark(skill.id, e)}
            onToggleUpvote={(e) => onToggleUpvote(skill.id, e)}
          />
        </div>
      ))}
    </div>
  );
};
