import React from 'react';
import Resume from '../../../files/resume.pdf';
import './about-cv.styles.scss';

const AboutCV = () => {
  return (
    <div className="about-btn">
      <a href={Resume} target="_blank" rel="noopener noreferrer">
        Download CV
      </a>
    </div>
  );
};

export default AboutCV;
