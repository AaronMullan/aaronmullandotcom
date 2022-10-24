/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export default function Card({
  title, text, image, link, linkText, secondaryLink, secondaryLinkText,
}) {
  return (
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
  );
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  secondaryLink: PropTypes.string,
  secondaryLinkText: PropTypes.string,
};
