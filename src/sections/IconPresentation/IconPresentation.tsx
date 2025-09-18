import React from "react";

//Estilos
import "./IconPresentations.scss";
import { useRevealUp } from "../../animations/RevealUp";

//Componentes
import Card from "../../components/Card/Card";

//Interfaces
import { IconPresentationProps, IconPresentationCard } from "../../interfaces/IIconPresentation";



const IconPresentation: React.FC<IconPresentationProps> = ({ cards, title, extraClass, variant = "A"}) => {

  useRevealUp();
  let cardType = "";
  if (variant === "A") cardType = "a-card";
  if (variant === "B") cardType = "b-card";
  if (variant === "C") cardType = "c-card";

  return (
    <div>
      <h3 className="section-title fixed-border margin-mark revealUp">{title}</h3>

      <div className={`${"bg-"+cardType+"s"} m-top-5 hover-underline` }>
        <div className={`${cardType+"s"} margin-mark revealUp` }>
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