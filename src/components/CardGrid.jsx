import React from 'react';
import cardData from '../data/cardData';
import './cardGrid.css';

export default function CardGrid() {
  return (
    <div id="grid">
      {cardData.map(({
        title, text, image, link, linkText, secondaryLink, secondaryLinkText,
      }) => (
        <div className="card">
          <img src={image} alt="" />
          <div className="card-body">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <div className="card-footer">
            <a href={link} target="blank" rel="noopener noreferrer">
              <button type="button" className="button primary-button">
                {linkText || 'site'}
              </button>
            </a>
            {secondaryLink
              ? (
                <a href={link} target="blank" rel="noopener noreferrer">
                  <button type="button" className="button secondary-button">
                    {secondaryLinkText || 'code'}
                  </button>
                </a>
              )
              : null}
          </div>
        </div>
      ))}
    </div>
  );
}
