import React from "react";
import { IconPresentationProps, IconPresentationCard } from "../../interfaces/IIconPresentation";
import "./IconPresentations.scss";
import Card from "../../components/Card/Card";

const IconPresentation: React.FC<IconPresentationProps> = ({ cards, title, extraClass, variant = "A"}) => {

  let cardType = "";
  if (variant === "A") cardType = "a-card";
  if (variant === "B") cardType = "b-card";
  if (variant === "C") cardType = "c-card";

  if (variant === "A") {
    return (
      <div className="margin-mark">
        <h3 className="fixed-border">{title}</h3>
        <div className="a-cards m-top-5">
          {cards.map((card: IconPresentationCard, index: number) => (
            <Card
              key={index}
              icon={card.icon}
              alt={card.alt}
              label={card.label}
              extraClass={extraClass}
              variant={variant}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="fixed-border margin-mark">{title}</h3>

      <div className={`${"bg-"+cardType+"s"} m-top-5 hover-underline` }>
        <div className="b-cards  margin-mark">
          {cards.map((card: IconPresentationCard, index: number) => (
            <Card
              key={index}
              icon={card.icon}
              plus={card.plus}
              alt={card.alt}
              label={card.label}
              extraClass={extraClass}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconPresentation;