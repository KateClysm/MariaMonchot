import React from "react";
import "./IconPresentations.scss";
import { IconPresentationProps } from "../../interfaces/IIconPresentation";
import ACard from "../../components/Cards/ACard";

const IconPresentationA: React.FC<IconPresentationProps> = ({ cards, title = "WHAT I DO" }) => {
  return (
    <div className="margin-mark m-top-5">
      <h3 className="fixed-border">{title}</h3>
      <div className="a-cards m-top-5">
        {cards.map((card, index) => (
          <ACard
            key={index}
            icon={card.icon}
            alt={card.alt}
            label={card.label}
          />
        ))}
      </div>
    </div>
  );
};

export default IconPresentationA;