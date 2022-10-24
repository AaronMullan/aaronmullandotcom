import React from 'react';
import cardData from '../data/cardData';
import Card from './Card';
import './cardGrid.css';

export default function CardGrid() {
  return (
    <div id="grid">
      {cardData.map(({
        title, text, image, link, linkText, secondaryLink, secondaryLinkText, i,
      }) => (
        <Card
          key={title + i}
          title={title}
          text={text}
          image={image}
          link={link}
          linkText={linkText}
          secondaryLink={secondaryLink}
          secondaryLinkText={secondaryLinkText}
        />
      ))}
    </div>
  );
}
