import { IconData } from "../interfaces/IIcon";
export interface HomePresentationProps {
  name: string;
  subtitle_1: string;
  subtitle_2: string;
  HomePresentationText: string;
  icons: IconData[];
  subtitleSpanPosition?: "EN" | "ES";
}