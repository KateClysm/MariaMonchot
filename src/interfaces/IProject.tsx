import { IconData } from "./IIcon";

export default interface IProject {
  projectType: string;
  name: string;
  date: string;
  image: string;
  description: string;
  githubLink?: string;
  deployLink?: string;
  highlightedTech?: string;
  technologies: IconData[];
  source?: string;
  featured?: boolean;
  categories: string[];
}