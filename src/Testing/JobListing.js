

// // import React, { useState } from 'react';
// // import './job.css';

// // const JobListing = ({ jobs }) => {
// //   const [selectedJob, setSelectedJob] = useState(null);

// //   const handleCardClick = (job) => {
// //     setSelectedJob(job);
// //   };

// //   const handleClosePopup = () => {
// //     setSelectedJob(null);
// //   };

// //   return (
// //     <div className="job-listing">
// //       {jobs.map((job, index) => (
// //         <div
// //           key={index}
// //           className="job-card"
// //           onClick={() => handleCardClick(job)}
// //         >
// //           <img
// //             src={job.imageUrl}
// //             alt={`${job.title} at ${job.company}`}
// //             className="job-image"
// //           />
// //           <div className="job-details">
// //             <h2 className="job-title">{job.title}</h2>
// //             <h3 className="job-company">{job.company}</h3>
// //             <p className="job-description">{job.description}</p>
// //           </div>
// //         </div>
// //       ))}

// //       {selectedJob && (
// //         <div className="popup-overlay">
// //           <div className="popup-content">
// //             <button className="close-button" onClick={handleClosePopup}>X</button>
// //             <img
// //               src={selectedJob.imageUrl}
// //               alt={`${selectedJob.title} at ${selectedJob.company}`}
// //               className="popup-image"
// //             />
// //             <div className="popup-details">
// //               <h2 className="popup-title">{selectedJob.title}</h2>
// //               <h3 className="popup-company">{selectedJob.company}</h3>
// //               <p className="popup-description">{selectedJob.description}</p>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default JobListing;
// // JobListing.js
// // JobListing.js

// import React, { useState } from 'react';
// import useJobStore from '../Store/useJobStore';
// import './job.css';
// import { useNavigate } from 'react-router-dom';

// // Default job listings
// const defaultJobs = [
//   {
//     title: 'Frontend Developer',
//     company: 'Tech Company',
//     description: 'We are looking for a skilled frontend developer...',
//     imageUrl: 'https://storage.googleapis.com/ureify-strapi-assets/Job_Search_for_Front_End_Developer_b8b113ec25/Job_Search_for_Front_End_Developer_b8b113ec25.jpg'
//   },
//   {
//     title: 'Backend Developer',
//     company: 'Tech Startup',
//     description: 'Join our team as a backend developer...',
//     imageUrl:  'https://storage.googleapis.com/ureify-strapi-assets/Job_Search_for_Front_End_Developer_b8b113ec25/Job_Search_for_Front_End_Developer_b8b113ec25.jpg'
//   },
//   {
//     title: 'UI/UX Designer',
//     company: 'Tech Startup',
//     description: 'We need a UI/UX designer to improve our user experience...',
//     imageUrl: 'https://storage.googleapis.com/ureify-strapi-assets/Job_Search_for_Front_End_Developer_b8b113ec25/Job_Search_for_Front_End_Developer_b8b113ec25.jpg'
//   },
//   {
//     title: 'DevOps Engineer',
//     company: 'Tech Startup',
//     description: 'Seeking a DevOps engineer to manage our cloud infrastructure...',
//     imageUrl: 'https://storage.googleapis.com/ureify-strapi-assets/Job_Search_for_Front_End_Developer_b8b113ec25/Job_Search_for_Front_End_Developer_b8b113ec25.jpg'
//   },
//   {
//     title: 'Data Scientist',
//     company: 'Analytics Corp',
//     description: 'Looking for a data scientist to analyze complex data sets...',
//     imageUrl:  'https://storage.googleapis.com/ureify-strapi-assets/Job_Search_for_Front_End_Developer_b8b113ec25/Job_Search_for_Front_End_Developer_b8b113ec25.jpg'
//   },
//   {
//     title: 'Product Manager',
//     company: 'Innovative Solutions',
//     description: 'We are searching for a product manager to lead our projects...',
//     imageUrl:  'https://storage.googleapis.com/ureify-strapi-assets/Job_Search_for_Front_End_Developer_b8b113ec25/Job_Search_for_Front_End_Developer_b8b113ec25.jpg'
//   },
// ];

// const JobListing = () => {
//   const navigate=useNavigate();
//   const jobs = useJobStore((state) => state.jobs);
//   const [selectedJob, setSelectedJob] = useState(null);

//   const handleCardClick = (job) => {
//     setSelectedJob(job);
//   };

//   const handleClosePopup = () => {
//     setSelectedJob(null);
//   };

//   // Use default jobs if the store is empty
//   const displayJobs = [...defaultJobs, ...jobs];

//   return (
//     <div className="j-listing">
     
//       {displayJobs.length === 0 && <p>No job listings available. Post a job to get started!</p>}
      
//       {displayJobs.map((job, index) => (
//         <div
//           key={index}
//           className="j-card"
//           onClick={() => handleCardClick(job)}
//         >
//           <img
//             src={job.imageUrl}
//             alt={`${job.title} at ${job.company}`}
//             className="j-image"
//           />
//           <div className="j-details">
//             <h2 className="j-title">{job.title}</h2>
//             <h3 className="j-company">{job.company}</h3>
//             <p className="j-description">{job.description}</p>
//           </div>
//         </div>
//       ))}

//       {selectedJob && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <button className="close-button" onClick={handleClosePopup}>X</button>
//             <img
//               src={selectedJob.imageUrl}
//               alt={`${selectedJob.title} at ${selectedJob.company}`}
//               className="popup-image"
//             />
//             <div className="popup-details">
//               <h2 className="popup-title">{selectedJob.title}</h2>
//               <h3 className="popup-company">{selectedJob.company}</h3>
//               <p className="popup-description">{selectedJob.description}</p>
//             </div>
//             <div className='btn-apply'><button onClick={()=>{alert("Application sent");setSelectedJob(false);}}>Apply</button></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobListing;

