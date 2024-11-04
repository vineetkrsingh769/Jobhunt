// // import React from "react";
// // import "./JobCard.css";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faShareAlt, faStar, faEllipsisH, faCheck } from "@fortawesome/free-solid-svg-icons";

// // const JobCard = () => {
// //   return (
// //     <div className="job-card">
// //       <div className="job-card-header">
// //         <img src="https://logo.clearbit.com/twitter.com" alt="Twitter" className="company-logo" />
// //         <div className="job-card-actions">
// //           <FontAwesomeIcon icon={faShareAlt} className="action-icon" />
// //           <FontAwesomeIcon icon={faStar} className="action-icon" />
// //           <FontAwesomeIcon icon={faEllipsisH} className="action-icon" />
// //         </div>
// //       </div>
// //       <div className="job-details">
// //         <div className="labels">
// //           <span className="label grant">Grant</span>
// //           <span className="label new">New</span>
// //         </div>
// //         <h3>Senior Business Systems Analyst</h3>
// //         <div className="job-info">
// //           <span>🌍 Work from anywhere</span>
// //           <span>⏰ Work anytime</span>
// //           <span>🗓 40 hrs/week</span>
// //         </div>
// //         <div className="match-info">
// //           <span className="match-text">You match!</span>
// //           <span className="skill-badge"><FontAwesomeIcon icon={faCheck} /> JavaScript</span>
// //           <span className="skill-badge"><FontAwesomeIcon icon={faCheck} /> Java</span>
// //           <span className="skill-badge"><FontAwesomeIcon icon={faCheck} /> HTML</span>
// //         </div>
// //       </div>
// //       <div className="job-card-footer">
// //         <span className="salary">$90K</span>
// //         <button className="view-job-btn">View job</button>
// //       </div>
// //       <div className="expand-details">Expand details ⬇️</div>
// //     </div>
// //   );
// // };

// // // export default JobCard;
// // import React from 'react';
// // import "./JobCard.css";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faShareAlt, faStar, faEllipsisH, faCheck } from '@fortawesome/free-solid-svg-icons';

// // const JobCard = ({ job }) => {
// //   const {
// //     companyLogo = "https://via.placeholder.com/50", // Default placeholder logo if missing
// //     title = "Untitled Job",
// //     labels = [],
// //     location = "Location not specified",
// //     time = "Time not specified",
// //     hours = "Hours not specified",
// //     matchSkills = [],
// //     salary = "Salary not disclosed",
// //   } = job || {}; // Destructure with default values

// //   return (
// //     <div className="job-card">
// //       <div className="job-card-header">
// //         <img src={companyLogo} alt={title} className="company-logo" />
// //         <div className="job-card-actions">
// //           <FontAwesomeIcon icon={faShareAlt} className="action-icon" />
// //           <FontAwesomeIcon icon={faStar} className="action-icon" />
// //           <FontAwesomeIcon icon={faEllipsisH} className="action-icon" />
// //         </div>
// //       </div>
// //       <div className="job-details">
// //         <div className="labels">
// //           {labels.length > 0 ? (
// //             labels.map((label, index) => (
// //               <span key={index} className={`label ${label.toLowerCase()}`}>{label}</span>
// //             ))
// //           ) : (
// //             <span className="label">No labels</span> // Fallback if no labels
// //           )}
// //         </div>
// //         <h3>{title}</h3>
// //         <div className="job-info">
// //           <span>{location}</span>
// //           <span>{time}</span>
// //           <span>{hours}</span>
// //         </div>
// //         <div className="match-info">
// //           <span className="match-text">You match!</span>
// //           {matchSkills.length > 0 ? (
// //             matchSkills.map((skill, index) => (
// //               <span key={index} className="skill-badge">
// //                 <FontAwesomeIcon icon={faCheck} /> {skill}
// //               </span>
// //             ))
// //           ) : (
// //             <span className="no-skills">No matching skills listed</span> // Fallback if no skills
// //           )}
// //         </div>
// //       </div>
// //       <div className="job-card-footer">
// //         <span className="salary">{salary}</span>
// //         <button className="view-job-btn">View job</button>
// //       </div>
// //       <div className="expand-details">Expand details ⬇️</div>
// //     </div>
// //   );
// // };

// // const JobList = ({ jobs }) => {
// //   if (!jobs || jobs.length === 0) {
// //     return <p>No job postings available.</p>; // Handle empty jobData array
// //   }

// //   return (
// //     <div className="job-list">
// //       {jobs.map((job) => (
// //         <JobCard key={job.id || Math.random()} job={job} />
// //       ))}
// //     </div>
// //   );
// // };

// // // Sample job data array (can be replaced with actual data)
// // const jobData = [
// //   {
// //     id: 1,
// //     companyLogo: "https://logo.clearbit.com/twitter.com",
// //     title: "Senior Business Systems Analyst",
// //     labels: ["Grant", "New"],
// //     location: "🌍 Work from anywhere",
// //     time: "⏰ Work anytime",
// //     hours: "🗓 40 hrs/week",
// //     matchSkills: ["JavaScript", "Java", "HTML"],
// //     salary: "$90K",
// //   },
// //   {
// //     id: 2,
// //     companyLogo: "https://logo.clearbit.com/google.com",
// //     title: "Frontend Developer",
// //     labels: ["New"],
// //     location: "🌍 Remote",
// //     time: "⏰ Flexible hours",
// //     hours: "🗓 40 hrs/week",
// //     matchSkills: ["React", "CSS", "HTML"],
// //     salary: "$100K",
// //   },
// //   // Additional job posts can be added here
// // ];

// // export default function App() {
// //   return (
// //     <div>
// //       <JobList jobs={jobData} />
// //     </div>
// //   );
// // }
// // src/components/JobCard.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShareAlt, faStar, faEllipsisH, faCheck } from '@fortawesome/free-solid-svg-icons';

// const JobCard = ({ job }) => {
//   const {
//     companyLogo = "https://via.placeholder.com/50",
//     title = "Untitled Job",
//     labels = [],
//     location = "Location not specified",
//     time = "Time not specified",
//     hours = "Hours not specified",
//     matchSkills = [],
//     salary = "Salary not disclosed",
//   } = job;

//   return (
//     <div className="job-card">
//       <div className="job-card-header">
//         <img src={companyLogo} alt={title} className="company-logo" />
//         <div className="job-card-actions">
//           <FontAwesomeIcon icon={faShareAlt} className="action-icon" />
//           <FontAwesomeIcon icon={faStar} className="action-icon" />
//           <FontAwesomeIcon icon={faEllipsisH} className="action-icon" />
//         </div>
//       </div>
//       <div className="job-details">
//         <div className="labels">
//           {labels.length > 0 ? (
//             labels.map((label, index) => (
//               <span key={index} className={`label ${label.toLowerCase()}`}>{label}</span>
//             ))
//           ) : (
//             <span className="label">No labels</span>
//           )}
//         </div>
//         <h3>{title}</h3>
//         <div className="job-info">
//           <span>{location}</span>
//           <span>{time}</span>
//           <span>{hours}</span>
//         </div>
//         <div className="match-info">
//           <span className="match-text">You match!</span>
//           {matchSkills.length > 0 ? (
//             matchSkills.map((skill, index) => (
//               <span key={index} className="skill-badge">
//                 <FontAwesomeIcon icon={faCheck} /> {skill}
//               </span>
//             ))
//           ) : (
//             <span className="no-skills">No matching skills listed</span>
//           )}
//         </div>
//       </div>
//       <div className="job-card-footer">
//         <span className="salary">{salary}</span>
//         <button className="view-job-btn">View job</button>
//       </div>
//       <div className="expand-details">Expand details ⬇️</div>
//     </div>
//   );
// };

// export default JobCard;
