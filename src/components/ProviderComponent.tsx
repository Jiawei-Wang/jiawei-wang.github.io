// ProviderComponent.tsx
import React from 'react';
import './ProviderComponent.css';

// Import images
import meImg from '../images/me.jpg';
import deepSeaImg from '../images/the-deep-sea.png';
import sizeOfSpaceImg from '../images/the-size-of-space.png';
import spendImg from '../images/spend-bill-gates-money.png';
import justForFunImg from '../images/just-for-fun.png';
import everySecondImg from '../images/every-second.png';

// Import logos
import fastCompanyLogo from '../images/fast-company.svg';
import nytLogo from '../images/new-york-times.svg';
import nextWebLogo from '../images/the-next-web.svg';
import businessInsiderLogo from '../images/business-insider.svg';

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

        <a href="https://neal.fun/deep-sea/" target="_blank" rel="noopener" className="ProjectWrapper">
          <img alt="The Deep Sea" src={deepSeaImg} className="ProjectThumbnail" />
          <div className="ProjectInfo">
            <div className="ProjectTitle">The Deep Sea</div>
            <div className="ProjectDesc">A page that lets you scroll down the ocean</div>
          </div>
        </a>

        <a href="https://neal.fun/size-of-space/" target="_blank" rel="noopener" className="ProjectWrapper">
          <img alt="The Size of Space" src={sizeOfSpaceImg} className="ProjectThumbnail" />
          <div className="ProjectInfo">
            <div className="ProjectTitle">The Size of Space</div>
            <div className="ProjectDesc">A 3D visualization of the scale of the cosmos</div>
          </div>
        </a>

        <a href="https://neal.fun/spend/" target="_blank" rel="noopener" className="ProjectWrapper">
          <img alt="Spend Bill Gates' Money" src={spendImg} className="ProjectThumbnail" />
          <div className="ProjectInfo">
            <div className="ProjectTitle">Spend Bill Gates' Money</div>
            <div className="ProjectDesc">A billionaire simulator</div>
          </div>
        </a>

        <a href="https://justforfun.io/" target="_blank" rel="noopener" className="ProjectWrapper">
          <img alt="Just For Fun" src={justForFunImg} className="ProjectThumbnail" />
          <div className="ProjectInfo">
            <div className="ProjectTitle">Just For Fun</div>
            <div className="ProjectDesc">A curated list of creative coding projects</div>
          </div>
        </a>

        <a href="https://everysecond.io/" target="_blank" rel="noopener" className="ProjectWrapper">
          <img alt="Every Second" src={everySecondImg} className="ProjectThumbnail" />
          <div className="ProjectInfo">
            <div className="ProjectTitle">Every Second</div>
            <div className="ProjectDesc">Visualizing things that happen every second</div>
          </div>
        </a>
      </div>

      {/* Logos */}
      <div className="Section">
        <div className="LogoHeader">My projects have been mentioned in:</div>
        <div className="Logos">
          <img alt="Fast Company Logo" src={fastCompanyLogo} className="LogoImage" />
          <img alt="New York Times Logo" src={nytLogo} className="LogoImage" />
          <img alt="The Next Web Logo" src={nextWebLogo} className="LogoImage" />
          <img alt="Business Insider Logo" src={businessInsiderLogo} className="LogoImage" />
        </div>
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
