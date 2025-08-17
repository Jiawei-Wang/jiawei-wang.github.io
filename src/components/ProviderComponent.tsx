// ProviderComponent.tsx
import React from 'react';
import './ProviderComponent.css';

// Import images
import meImg from '../images/me.jpg';
// import deepSeaImg from '../images/the-deep-sea.png';

// Import contact icons
import twitterIcon from '../images/twitter.svg';
import mailIcon from '../images/mail.svg';

const Provider: React.FC = () => {
  return (
    <div className="pages">
      {/* Header */}
      <div className="Header">
        <div className="HeaderImageWrapper">
          <img alt="Image of Neal" src={meImg} className="HeaderImage" />
        </div>
        <h1 className="HeaderTitle">Hi, I'm Jiawei!</h1>
        <div className="Tagline">
          I'm an enterprise software engineer with focus on ML/Data/Backend, and this is my Github Page. Chica is my rescue dog and pair programmer.
        </div>
      </div>

      {/* Projects */}
      <div className="Section">
        <h2 className="SectionHeader">Some things I made</h2>

        {/* example */}
        {/* <a href="https://neal.fun/deep-sea/" target="_blank" rel="noopener" className="ProjectWrapper">
          <img alt="The Deep Sea" src={deepSeaImg} className="ProjectThumbnail" />
          <div className="ProjectInfo">
            <div className="ProjectTitle">The Deep Sea</div>
            <div className="ProjectDesc">A page that lets you scroll down the ocean</div>
          </div>
        </a> */}
      </div>

      {/* Contact */}
      <div className="Section">
        <div className="LogoHeader">Do you have something in mind? Get in touch!</div>
        <div className="GetInTouch">
          <a target="_blank" rel="noopener" href="https://twitter.com/nealagarwal" className="ButtonLink twitter">
            <img alt="Twitter Icon" src={twitterIcon} className="ButtonIcon" /> Twitter
          </a>
          <a target="_blank" rel="noopener" href="mailto:hi@neal.fun" className="ButtonLink email">
            <img alt="Email Icon" src={mailIcon} className="ButtonIcon" /> Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Provider;
