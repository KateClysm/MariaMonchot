import React from "react";
interface AboutPresentationProps {
  text: string;
}
const HomePresentation: React.FC<AboutPresentationProps> = ({ text })=> {
  return (
    <div className="presentation margin-mark">
      <h1>MARIA MONCHOT</h1>
      <h3 className="fixed-border">
        ALL ABOUT <span>DATA</span>
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default HomePresentation;