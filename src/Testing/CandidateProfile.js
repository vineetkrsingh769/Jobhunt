// /**
//  * The `Blog` component fetches and displays a list of articles from the Dev.to API with error handling
//  * and loading state.
//  * @returns The `Blog` component is being returned. It fetches articles from the Dev.to API, displays
//  * loading message while fetching, handles errors, and renders the articles in a grid format with
//  * title, author, publication date, and a link to read the full article. It also includes a Nav
//  * component at the top and a Footer component at the bottom.
//  */
// // CandidateProfile.js
// import React, { useState } from 'react';
// // import './p.css'; 
// const CandidateProfile = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [cv, setCv] = useState(null);
//     const [error, setError] = useState('');

//     const handleCvChange = (event) => {
//         const file = event.target.files[0];
//         if (file && file.type !== 'application/pdf') {
//             setError('Please upload a valid PDF file.');
//             setCv(null);
//         } else {
//             setError('');
//             setCv(file);
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (!name || !email || !phone || !cv) {
//             alert('Please fill in all fields and upload a CV.');
//             return;
//         }

//         const formData = {
//             name,
//             email,
//             phone,
//             cv: cv.name,
//         };

//         console.log(formData);
//         localStorage.setItem('candidateData', JSON.stringify(formData));
//         alert('Candidate data submitted!');
//     };

//     return (
//         <div className="form-container">
//             <h2>Candidate Profile</h2>
//             <div className="form-group">
//                 <label>Name:</label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//             </div>
//             <div className="form-group">
//                 <label>Email:</label>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             </div>
//             <div className="form-group">
//                 <label>Phone:</label>
//                 <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//             </div>
//             <div className="form-group">
//                 <label>Upload CV (PDF):</label>
//                 <input type="file" accept="application/pdf" onChange={handleCvChange} required />
//                 {error && <span className="error-message">{error}</span>}
//             </div>
//             <button className="submit-button" onClick={handleSubmit}>Submit</button>
//         </div>
//     );
// };

// export default CandidateProfile;
