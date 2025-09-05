export interface IconPresentationCard {
  icon: string;
  alt: string;
  label: string;
}

export interface IconPresentationProps {
  cards: IconPresentationCard[];
  title?: string;
}