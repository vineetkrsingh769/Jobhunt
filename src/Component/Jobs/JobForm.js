// src/components/JobForm.js
import React, { useState } from "react";
import useJobStore from "../../Store/useJobStore";
import './JobForm.css'; // Import the CSS file

const JobForm = () => {
  const [jobData, setJobData] = useState({
    companyLogo: "",
    title: "",
    labels: "",
    location: "",
    time: "",
    hours: "",
    matchSkills: "",
    salary: "",
  });
  const [errors, setErrors] = useState({});
  const addJob = useJobStore((state) => state.addJob);

  const validateForm = () => {
    const newErrors = {};
    if (!jobData.companyLogo) newErrors.companyLogo = "Company Logo URL is required.";
    if (!jobData.title) newErrors.title = "Job Title is required.";
    if (!jobData.location) newErrors.location = "Location is required.";
    if (!jobData.time) newErrors.time = "Time is required.";
    if (!jobData.hours) newErrors.hours = "Hours are required.";
    if (!jobData.salary) newErrors.salary = "Salary is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop submission if there are errors
    }

    const labelsArray = jobData.labels.split(",").map((label) => label.trim()).filter(Boolean);
    const matchSkillsArray = jobData.matchSkills.split(",").map((skill) => skill.trim()).filter(Boolean);



    const submittedJobData = {
        ...jobData,
        labels: labelsArray,
        matchSkills: matchSkillsArray,
      };
      console.log(JSON.stringify(submittedJobData,null, 2));
      console.log("Job Data Submitted:", submittedJobData); 
      addJob(submittedJobData);
    // Reset form and errors only after successful submission
    setJobData({
      companyLogo: "",
      title: "",
      labels: "",
      location: "",
      time: "",
      hours: "",
      matchSkills: "",
      salary: "",
    });
    setErrors({}); // Clear errors
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <fieldset>
        <legend>Add New Job</legend>
        
        <input
          name="companyLogo"
          placeholder="Company Logo URL"
          value={jobData.companyLogo}
          onChange={handleChange}
        />
        {errors.companyLogo && <span className="error">{errors.companyLogo}</span>}

        <input
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
        />
        {errors.title && <span className="error">{errors.title}</span>}

        <input
          name="labels"
          placeholder="Labels (comma-separated)"
          value={jobData.labels}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
        />
        {errors.location && <span className="error">{errors.location}</span>}

        <input
          name="time"
          placeholder="Time"
          value={jobData.time}
          onChange={handleChange}
        />
        {errors.time && <span className="error">{errors.time}</span>}

        <input
          name="hours"
          placeholder="Hours"
          value={jobData.hours}
          onChange={handleChange}
        />
        {errors.hours && <span className="error">{errors.hours}</span>}

        <input
          name="matchSkills"
          placeholder="Matching Skills (comma-separated)"
          value={jobData.matchSkills}
          onChange={handleChange}
        />

        <input
          name="salary"
          placeholder="Salary"
          value={jobData.salary}
          onChange={handleChange}
        />
        {errors.salary && <span className="error">{errors.salary}</span>}

        <button type="submit">Add Job</button>
      </fieldset>
    </form>
  );
};

export default JobForm;
