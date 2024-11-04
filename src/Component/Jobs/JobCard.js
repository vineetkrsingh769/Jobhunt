// src/components/JobCard.js
import React, { useState } from 'react';
import "./JobCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faStar, faEllipsisH, faCheck } from '@fortawesome/free-solid-svg-icons';
import PopupModal from './PopupModal';
import useJobStore from '../../Store/useJobStore';

const JobCard = ({ job }) => {
  const { popupVisible, setPopupVisible } = useJobStore();

  const {
    companyLogo = "https://via.placeholder.com/50",
    title = "Untitled Job",
    labels = [],
    location = "Location not specified",
    time = "Time not specified",
    hours = "Hours not specified",
    matchSkills = [],
    salary = "Salary not disclosed",
  } = job;

  return (
    <>
    <div className="job-card">
      <div className="job-card-header">
        <img src={companyLogo} alt={title} className="company-logo" />
        <div className="job-card-actions">
          <FontAwesomeIcon icon={faShareAlt} className="action-icon" />
          <FontAwesomeIcon icon={faStar} className="action-icon" />
          <FontAwesomeIcon icon={faEllipsisH} className="action-icon" />
        </div>
      </div>
      <div className="job-details">
        <div className="labels">
          {job.labels.length > 0 ? (
            job.labels.map((label, index) => (
              <span key={index} className={`label ${label.toLowerCase()}`}>{label}</span>
            ))
          ) : (
            <span className="label">No labels</span>
          )}
        </div>
        <h3>{title}</h3>
        <div className="job-info">
          <span>🌏{location}</span>
          <span>⏰{time}</span>
          <span>🗓️{hours}</span>
        </div>
        <div className="match-info">
          <span className="match-text">You match!</span>
          {matchSkills.length > 0 ? (
            matchSkills.map((skill, index) => (
              <span key={index} className="skill-badge">
                <FontAwesomeIcon icon={faCheck} /> {skill}
              </span>
            ))
          ) : (
            <span className="no-skills">No matching skills listed</span>
          )}
        </div>
      </div>
      <div className="job-card-footer">
        <span className="salary">{salary}</span>
        <button onClick={()=>setPopupVisible(true)} className="view-job-btn">Apply</button>
      </div>
      <div className="expand-details">Expand details ⬇️</div>
    </div>
    {popupVisible && <><PopupModal/></>}
    </>
  );
};

export default JobCard;
