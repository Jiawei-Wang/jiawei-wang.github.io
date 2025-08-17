// ProviderComponent.tsx
import React from "react";
import "./ProviderComponent.css";

// Import images
import meImg from "../images/me.jpg";
import underConstruction from "../images/under-construction.png";

// Import contact icons
import linkedinIcon from "../images/linkedin.png";
import githubIssueIcon from "../images/github.svg";

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
          I'm an enterprise software engineer focused on ML/Data/Backend, and
          this is my GitHub Page. Chica is my rescue dog and pair programmer.
        </div>
      </div>

      {/* Projects */}
      <div className="Section">
        <h2 className="SectionHeader">This website is under construction</h2>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ/"
          target="_blank"
          rel="noopener"
          className="ProjectWrapper"
        >
          <img
            alt="The Deep Sea"
            src={underConstruction}
            className="ProjectThumbnail"
          />
          <div className="ProjectInfo">
            <div className="ProjectTitle">The Foo Bar</div>
            <div className="ProjectDesc">A page that lets you foo the bar</div>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ/"
          target="_blank"
          rel="noopener"
          className="ProjectWrapper"
        >
          <img
            alt="The Deep Sea"
            src={underConstruction}
            className="ProjectThumbnail"
          />
          <div className="ProjectInfo">
            <div className="ProjectTitle">The Foo Bar</div>
            <div className="ProjectDesc">A page that lets you foo the bar</div>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ/"
          target="_blank"
          rel="noopener"
          className="ProjectWrapper"
        >
          <img
            alt="The Deep Sea"
            src={underConstruction}
            className="ProjectThumbnail"
          />
          <div className="ProjectInfo">
            <div className="ProjectTitle">The Foo Bar</div>
            <div className="ProjectDesc">A page that lets you foo the bar</div>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ/"
          target="_blank"
          rel="noopener"
          className="ProjectWrapper"
        >
          <img
            alt="The Deep Sea"
            src={underConstruction}
            className="ProjectThumbnail"
          />
          <div className="ProjectInfo">
            <div className="ProjectTitle">The Foo Bar</div>
            <div className="ProjectDesc">A page that lets you foo the bar</div>
          </div>
        </a>
      </div>

      {/* Contact */}
      <div className="Section">
        <div className="LogoHeader">
          Do you have something in mind? Get in touch!
        </div>
        <div className="GetInTouch">
          <a
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/hire-jiawei-wang/"
            className="ButtonLink linkedin"
          >
            <img
              alt="LinkedIn Icon"
              src={linkedinIcon}
              className="ButtonIcon"
            />{" "}
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/Jiawei-Wang/jiawei-wang.github.io/issues/new"
            className="ButtonLink issue"
          >
            <img
              alt="Issue Icon"
              src={githubIssueIcon}
              className="ButtonIcon"
            />{" "}
            Github Issue
          </a>
        </div>
      </div>
    </div>
  );
};

export default Provider;
