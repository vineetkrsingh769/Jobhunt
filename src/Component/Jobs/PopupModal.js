import React, { useState } from "react";
import "./PopupModal.css";
import useJobStore from "../../Store/useJobStore";

const PopupModal = () => {
   const{ setPopupVisible } = useJobStore();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleSubmit = () => {
  
    setTimeout(() => {
      alert(file ? `File submitted: ${file.name}` : "Please upload a file before submitting.");
     
    }, 100); // Matches animation duration
    setPopupVisible(false);
  };

  return (
    <div className="p-overlay">
      <div className="p-content">
        <div className="p-header">
          {/**<div className="progress-bar">
            <div className="progress-step"></div>
          </div>*/}
          <button onClick={()=>setPopupVisible(false)} className="exit-button">Exit</button>
        </div>
        <div className="s-content">
          <h2>Add your contact information</h2>
          <form className="con-form">
            <label>
              First name
              <input type="text" placeholder="First name" required />
            </label>
            <label>
              Last name
              <input type="text" placeholder="Last name" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="Email" required />
            </label>
            <h2>Add a CV for the employer</h2>
            <div className="upload-section">
              <label className="file-upload">
                {file ? (
                  <div className="file-preview">
                    <p>{file.name}</p>
                    <span>Uploaded today</span>
                  </div>
                ) : (
                  <p>Click to upload your CV (PDF or DOCX)</p>
                )}
                <input
                  type="file"
                  accept=".pdf, .docx"
                  onChange={handleFileChange}
                  required
                />
              </label>
            </div>
            <button type="button" className="continue-button" onClick={handleSubmit}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
