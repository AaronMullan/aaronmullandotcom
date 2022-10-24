/* eslint-disable max-len */
import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <div id="container">
      <div
        id="hero"
        style={{
        //   display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px',
        }}
      >
        <div>
          <p>

            {' '}
            <span className="hello">Hello, World!  </span>
            I am a Full Stack Software Developer currently focused on the Front End. Most recently I’ve been working in a tech stack of Gatsby / React / GraphQL / Typescript / Theme UI. Professionally I’ve worked with version control via Github, project management using Jira, continuous integration with Travis, and used Agile scrum Methods.
            <br />
            <br />
            Never content with my current knowledge, in addition to the technologies mentioned above I’ve built projects with Python/Django and PHP/Laravel, Bootstrap, Material UI, Styled-Components, and Tailwind, MongoDB, and SQL.  I’ve done testing with Jest and Supertest, and project management using Trello, Notion, and Github Issues.
&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            Previous to coding, I worked as an Audio Engineer. Touring with rock bands gave me an unparalleled appreciation for teamwork, dedication, and creative problem solving. These days I bring the passion for craftsmanship and collaboration that made me successful in that field to software development. I have a relentless curiosity and the ability to communicate with stakeholders to develop a vision and translate that into an inspiring and technically excellent product.
          </p>

        </div>
      </div>
    </div>
  );
}
