import React from "react";
import "./A.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faBookmark } from "@fortawesome/free-solid-svg-icons";

const Application = () => {
  return (
    <div className="A-card">
      <div className="A-card-header">
        <img
          src="https://via.placeholder.com/60" // Placeholder for company logo
          alt="Qcentum Technologies"
          className="company-logo"
        />
        <div className="A-header-info">
          <h3>Qcentum Technologies</h3>
          <h2>UI Developer (Fresher)</h2>
          <p>Bengaluru</p>
        </div>
        <div className="A-card-actions">
          <FontAwesomeIcon icon={faEllipsisH} className="action-icon" />
          <FontAwesomeIcon icon={faBookmark} className="action-icon" />
          <button className="apply-btn">Apply on employer site</button>
        </div>
      </div>
      <div className="A-description">
        <h4>A description</h4>
        <h5>Intern Roles & Responsibilities:</h5>
        <ul>
          <li>Design and implement components and features of the web UI using various front-end technologies, languages, and frameworks.</li>
          <li>Prerequisites in HTML, CSS, Bootstrap, WordPress, Javascript, JQuery, Ajax, Angular Js, PHP.</li>
          <li>Basic, and writing cross-browser compatible code.</li>
          <li>Knowledge of latest UI trends.</li>
          <li>Strong understanding of UI, cross-browser compatibility, web standards, accessibility standards.</li>
          <li>Self-learning abilities.</li>
          <li>Highly creative and self-inspired approach.</li>
          <li>Deep understanding of user experience and ability to analyze and test the usability.</li>
          <li>Design websites with responsive design.</li>
          <li>Creating user-centered designs by understanding business requirements, and user feedback.</li>
          <li>Creating user flows, wireframes, prototypes and mockups.</li>
          <li>Translating requirements into style guides, design systems, design patterns and attractive user interfaces.</li>
          <li>Designing UI elements such as input controls, navigational components and informational components.</li>
          <li>Creating original graphic designs (e.g. images, sketches and tables).</li>
          <li>Identifying and troubleshooting UX problems (e.g. responsiveness).</li>
          <li>Collaborating effectively with product, engineering, and management teams.</li>
          <li>Incorporating customer feedback, usage metrics, and usability findings into design in order to enhance user experience.</li>
        </ul>
        <h5>Ideal Candidate</h5>
        <ul>
          <li>Preferred Candidates:</li>
          <li>Graduation: Any Graduate</li>
          <li>Eligibility: Freshers</li>
        </ul>
      </div>
    </div>
  );
};

export default Application;
