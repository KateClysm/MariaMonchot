import React from "react";
import { IconPresentationProps, IconPresentationCard } from "../../interfaces/IIconPresentation";
import BCard from "../../components/Cards/BCard";
import "./IconPresentations.scss";

const IconPresentationB: React.FC<IconPresentationProps> = ({ cards, title = "MY PRIORITIES" }) => {
  return (
    <div className="m-top-5">
      <h3 className="fixed-border margin-mark">{title}</h3>

      <div className="background-b-cards">
        <div className="b-cards m-top-5 margin-mark">
          {cards.map((card: IconPresentationCard, index: number) => (
            <BCard
              key={index}
              icon={card.icon}
              alt={card.alt}
              label={card.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconPresentationB;