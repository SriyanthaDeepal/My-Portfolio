export type Project = {
  name: string;
  category: string;
  description: string;
  contribution: string;
  tags: string[];
  link: string;
  linkText: string;
  featured?: boolean;
};

export const experience = [
  {
    dates: 'JUN 2026 — PRESENT',
    role: 'Associate DevOps & SRE Intern',
    organization: 'Pearson Lanka',
    description: 'Supporting application teams with CI/CD troubleshooting, AWS CloudFormation deployments, Docker image optimisation and Bash automation for repeatable builds.',
    tags: ['AWS', 'CloudFormation', 'Docker', 'CI/CD', 'Bash'],
  },
  {
    dates: 'SEP 2025 — MAR 2026',
    role: 'Ethical and Responsible AI Engineer Intern',
    organization: 'Ethiksa',
    description: 'Worked on AI model design, evaluation and refinement, vector embeddings and similarity-search workflows, data preprocessing and responsible AI principles.',
    tags: ['Responsible AI', 'Python', 'LLMs', 'Vector search', 'Model evaluation'],
  },
];

export const projects: Project[] = [
  {
    name: 'Multi-Sensor Terrain Classification',
    category: 'RESEARCH / COMPUTER VISION',
    description: 'Seeing the terrain through more than one sensor.',
    contribution: 'Developed a system combining camera imagery with 1D LiDAR data, using CNN and SVM models for day-and-night terrain classification. The research resulted in a first-author Springer Nature publication.',
    tags: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'CNN + SVM'],
    link: 'https://github.com/SriyanthaDeepal/Camera_and_LiDAR-Data-Fusion-for-Terrain-Classification',
    linkText: 'View research code',
    featured: true,
  },
  {
    name: 'Ethozai — Responsible AI Platform',
    category: 'INDUSTRY / GENERATIVE AI',
    description: 'Helping teams examine AI projects through a responsible AI lens.',
    contribution: 'Designed an LLM-based document analysis workflow using retrieval-augmented generation, embeddings and similarity search with Supabase and the Gemini API.',
    tags: ['LLM', 'RAG', 'Supabase', 'Gemini API', 'Python'],
    link: 'https://www.ethozai.com/',
    linkText: 'Visit project',
    featured: true,
  },
  {
    name: 'Thripitaka Quest',
    category: 'INTERNSHIP / LLM APPLICATION',
    description: 'Retrieval-grounded questions and answers for Tripitaka learning.',
    contribution: 'Built a LangChain RAG pipeline and Flask REST APIs, and integrated the application with a responsive React frontend.',
    tags: ['LangChain', 'RAG', 'Flask', 'React', 'Python'],
    link: 'https://github.com/SriyanthaDeepal/ThripitakaQuest_Elearning.lk',
    linkText: 'View source',
    featured: true,
  },
  {
    name: 'JourneyAid',
    category: 'UNIVERSITY / MOBILE APPLICATION',
    description: 'An Android travel companion for routes and nearby attractions.',
    contribution: 'Led the team, shaped the application architecture, implemented core Java logic and designed wireframes and prototypes with Figma.',
    tags: ['Java', 'Android', 'Google Maps', 'Figma'],
    link: 'https://github.com/SriyanthaDeepal/JourneyAid',
    linkText: 'View source',
  },
];

export const skillGroups = [
  { name: 'AI / ML', skills: ['Computer vision', 'CNN', 'SVM', 'Sensor fusion', 'TensorFlow', 'Keras', 'scikit-learn', 'NumPy', 'Pandas'] },
  { name: 'LLM Engineering', skills: ['LangChain', 'RAG', 'Vector embeddings', 'Similarity search', 'Gemini API', 'Responsible AI'] },
  { name: 'Software', skills: ['Python', 'Java', 'React', 'Flask', 'REST APIs', '.NET', 'PostgreSQL'] },
  { name: 'DevOps / Cloud', skills: ['AWS', 'CloudFormation', 'Docker', 'CI/CD', 'Git', 'GitLab', 'Bash'] },
];
