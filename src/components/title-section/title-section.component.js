import React from 'react';
import './title-section.styles.scss';

const TitleSection = ({ firstPart, secondPart, description }) => {
  return (
    <div className="section-title">
      <h2>
        {firstPart} <span>{secondPart}</span>
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default TitleSection;
