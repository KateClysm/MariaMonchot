import React from "react";

interface AboutPresentationProps {
  text: string;
}

const AboutPresentation: React.FC<AboutPresentationProps> = () => {
  return (
    <div className="presentation margin-mark">
      <h2>ABOUT</h2>
      {/* <p>{text}</p> */}
    </div>
  );
};

export default AboutPresentation;