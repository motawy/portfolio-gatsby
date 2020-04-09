import React from 'react';
import './about-media.styles.scss'

const AboutMedia = ({title, value}) => {
  return (
    <div className="section-about-media">
      <label>{title}:</label>
      <p>{value}</p>
    </div>
  );
};

export default AboutMedia;
