import { Skill } from './types';

export const MOCK_SKILLS: Skill[] = [
  {
    id: '1',
    title: 'Advanced Research Agent',
    description: 'A procedural knowledge skill that allows agents to perform deep academic research and synthesize findings into structured reports.',
    author: {
      name: 'alex_dev',
      avatar: 'https://i.pravatar.cc/150?u=alex',
    },
    tags: ['RESEARCH'],
    publishDate: 'Mar 12, 2024',
    previewImage: 'https://picsum.photos/seed/research/800/450',
    upvotes: 1240,
    comments: 42,
    isBookmarked: false,
    isUpvoted: false,
    installCommand: 'npx agent install research-agent',
    promptConfig: `system_prompt: "You are a senior researcher..."
tools:
  - web_search
  - pdf_parser
  - citation_generator`,
    usageExample: `const agent = new Agent();
await agent.use('research-agent');
const report = await agent.research('Quantum Computing trends');`,
    stats: {
      downloads: '12.4k',
      stars: '1.2k',
      usage: '85k'
    }
  },
  {
    id: '2',
    title: 'DevOps Automation Suite',
    description: 'Automate CI/CD pipelines, infrastructure provisioning, and monitoring with this comprehensive DevOps skill set.',
    author: {
      name: 'mark_ops',
      avatar: 'https://i.pravatar.cc/150?u=mark',
    },
    tags: ['DEVOPS'],
    publishDate: 'Mar 10, 2024',
    previewImage: 'https://picsum.photos/seed/devops/800/450',
    upvotes: 850,
    comments: 15,
    isBookmarked: true,
    isUpvoted: false,
    installCommand: 'npx agent install devops-suite',
    promptConfig: `config:
  cloud_provider: "aws"
  region: "us-east-1"
  monitoring: "prometheus"`,
    usageExample: `await agent.use('devops-suite');
await agent.deploy('production-cluster');`,
    stats: {
      downloads: '5.2k',
      stars: '840',
      usage: '22k'
    }
  },
  {
    id: '3',
    title: 'Code Refactoring Pro',
    description: 'An AI skill specialized in identifying code smells, suggesting refactors, and improving overall code quality across multiple languages.',
    author: {
      name: 'code_master',
      avatar: 'https://i.pravatar.cc/150?u=master',
    },
    tags: ['CODE'],
    publishDate: 'Mar 08, 2024',
    previewImage: 'https://picsum.photos/seed/code/800/450',
    upvotes: 2100,
    comments: 89,
    isBookmarked: false,
    isUpvoted: true,
    installCommand: 'npx agent install refactor-pro',
    promptConfig: `rules:
  - no_magic_numbers
  - dry_principle
  - solid_principles`,
    usageExample: `await agent.use('refactor-pro');
const betterCode = await agent.refactor(legacyCode);`,
    stats: {
      downloads: '25k',
      stars: '2.1k',
      usage: '150k'
    }
  },
  {
    id: '4',
    title: 'Social Media Strategist',
    description: 'Generate viral content, schedule posts, and analyze engagement metrics with this AI-driven social media skill.',
    author: {
      name: 'marketing_guru',
      avatar: 'https://i.pravatar.cc/150?u=guru',
    },
    tags: ['MARKETING'],
    publishDate: 'Mar 05, 2024',
    previewImage: 'https://picsum.photos/seed/social/800/450',
    upvotes: 560,
    comments: 12,
    isBookmarked: false,
    isUpvoted: false,
    installCommand: 'npx agent install social-strategist',
    promptConfig: `platforms:
  - twitter
  - linkedin
  - instagram`,
    usageExample: `await agent.use('social-strategist');
await agent.generateCampaign('New Product Launch');`,
    stats: {
      downloads: '3.1k',
      stars: '420',
      usage: '15k'
    }
  },
  {
    id: '5',
    title: 'Data Visualizer AI',
    description: 'Transform raw datasets into beautiful, interactive charts and dashboards automatically.',
    author: {
      name: 'data_viz',
      avatar: 'https://i.pravatar.cc/150?u=viz',
    },
    tags: ['DATA'],
    publishDate: 'Mar 03, 2024',
    previewImage: 'https://picsum.photos/seed/data/800/450',
    upvotes: 920,
    comments: 28,
    isBookmarked: false,
    isUpvoted: false,
    installCommand: 'npx agent install data-viz',
    promptConfig: `library: "d3.js"
theme: "dark"
interactive: true`,
    usageExample: `await agent.use('data-viz');
await agent.visualize(csvData);`,
    stats: {
      downloads: '8.4k',
      stars: '920',
      usage: '45k'
    }
  },
  {
    id: '6',
    title: 'Security Auditor',
    description: 'Scan your codebase for vulnerabilities, secrets, and security misconfigurations in real-time.',
    author: {
      name: 'sec_expert',
      avatar: 'https://i.pravatar.cc/150?u=sec',
    },
    tags: ['SECURITY'],
    publishDate: 'Mar 01, 2024',
    previewImage: 'https://picsum.photos/seed/security/800/450',
    upvotes: 1500,
    comments: 56,
    isBookmarked: false,
    isUpvoted: false,
    installCommand: 'npx agent install sec-auditor',
    promptConfig: `scanners:
  - secrets
  - vulnerabilities
  - misconfigurations`,
    usageExample: `await agent.use('sec-auditor');
await agent.scan('.');`,
    stats: {
      downloads: '15k',
      stars: '1.5k',
      usage: '90k'
    }
  },
  {
    id: '7',
    title: 'Content Translator',
    description: 'Translate your documentation and content into 50+ languages while preserving formatting and context.',
    author: {
      name: 'global_dev',
      avatar: 'https://i.pravatar.cc/150?u=global',
    },
    tags: ['LANGUAGE'],
    publishDate: 'Feb 28, 2024',
    previewImage: 'https://picsum.photos/seed/translate/800/450',
    upvotes: 430,
    comments: 8,
    isBookmarked: false,
    isUpvoted: false,
    installCommand: 'npx agent install translator',
    promptConfig: `target_languages: ["es", "fr", "de", "zh"]
preserve_markdown: true`,
    usageExample: `await agent.use('translator');
await agent.translate('docs/', 'es');`,
    stats: {
      downloads: '2.1k',
      stars: '310',
      usage: '8k'
    }
  }
];
