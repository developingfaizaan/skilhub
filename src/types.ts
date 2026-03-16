export interface Skill {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  publishDate: string;
  readTime?: string;
  previewImage: string;
  upvotes: number;
  comments: number;
  isBookmarked: boolean;
  isUpvoted?: boolean;
  installCommand: string;
  promptConfig: string;
  usageExample: string;
  stats: {
    downloads: string;
    stars: string;
    usage: string;
  };
}

export type Page = 'home' | 'explore' | 'detail' | 'submit' | 'dashboard' | 'saved';
