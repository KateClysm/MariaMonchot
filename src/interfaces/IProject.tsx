interface IProject {
  projectType: string;
  name: string;
  image: string;
  description: string;
  githubLink?: string;
  deployLink?: string;
  highlightedTech?: string;
  technologies?: {
    icon: string;
    alt: string;
    label: string;
  }[];
  source?: string;
  featured?: boolean;
  categories: string[];
}

export default IProject;