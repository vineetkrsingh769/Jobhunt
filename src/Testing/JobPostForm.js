// // JobPostForm.js
// import React, { useState } from "react";
// import useJobStore from "../Store/useJobStore";
// import "./JobPostForm.css"; // Import the CSS file

// const JobPostForm = () => {
//   const [job, setJob] = useState({
//     title: "",
//     company: "",
//     description: "",
//     imageUrl: "",
//   });
//   const [error, setError] = useState("");
//   const addJob = useJobStore((state) => state.addJob);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation
//     if (
//       !job.title.trim() ||
//       !job.company.trim() ||
//       !job.description.trim() ||
//       !job.imageUrl.trim()
//     ) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     addJob(job); // Add job to Zustand store
//     setJob({ title: "", company: "", description: "", imageUrl: "" }); // Clear form
//     setError("");
//     alert("Job post created ");
//   };

//   return (
//     <div className="job-post-form">
//       <h2>Post a Job</h2>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={job.title}
//           onChange={(e) => setJob({ ...job, title: e.target.value })}
//           placeholder="Job Title"
//         />
//         <input
//           type="text"
//           value={job.company}
//           onChange={(e) => setJob({ ...job, company: e.target.value })}
//           placeholder="Company"
//         />
//         <textarea
//           value={job.description}
//           onChange={(e) => setJob({ ...job, description: e.target.value })}
//           placeholder="Job Description"
//         ></textarea>
//         <input
//           type="text"
//           value={job.imageUrl}
//           onChange={(e) => setJob({ ...job, imageUrl: e.target.value })}
//           placeholder="Image URL"
//         />
//         <button type="submit">Post Job</button>
//       </form>
//     </div>
//   );
// };

// export default JobPostForm;
