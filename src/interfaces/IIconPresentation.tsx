export interface IconPresentationCard {
  icon: string;
  plus?: string; 
  alt?: string;
  label: string;
  extraClass?: string;
  variant?: "A" | "B" | "C";
}

export interface IconPresentationProps {
  cards: IconPresentationCard[];
  title?: string;
  extraClass?: string;
  variant?: "A" | "B" | "C";
}