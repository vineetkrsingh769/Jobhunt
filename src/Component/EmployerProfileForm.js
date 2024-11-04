import React, { useState, useEffect } from "react";
import "./EmployerProfileForm.css";
import JobPostForm from "../Testing/JobPostForm";
import Nav from "./Nav";
import Footer from "./Footer";
import JobForm from "./Jobs/JobForm";

const EmployerProfileForm = () => {
  const [profileCreated, setProfileCreated] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    description: "",
    contactEmail: "",
    phone: "",
    website: "",
    location: "",
    industry: "",
  });
  const [error, setError] = useState("");

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("profileData");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
      setProfileCreated(true);
    }
  }, []);

  // Update localStorage whenever the profile state changes

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for all fields
    const {
      name,
      description,
      contactEmail,
      phone,
      website,
      location,
      industry,
    } = profile;
    if (
      !name.trim() ||
      !description.trim() ||
      !contactEmail.trim() ||
      !phone.trim() ||
      !website.trim() ||
      !location.trim() ||
      !industry.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(contactEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log("Profile created:", profile);
    localStorage.setItem("profileData", JSON.stringify(profile));
    console.log(JSON.stringify(profile, null));
    setError("");
    setProfileCreated(true);
  };

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Nav/>
      {profileCreated ? (
        <>
          <JobForm/>
          <button
            type="button"
            onClick={() => {
              setProfile({
                name: "",
                description: "",
                contactEmail: "",
                phone: "",
                website: "",
                location: "",
                industry: "",
              });
              localStorage.clear();
              setProfileCreated(false);
            }}
          >
            Create a new Profile
          </button>
        </>
      ) : (
        <>
          <div className="profile-form">
            <h2>Create Employer Profile</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                placeholder="Company Name"
              />
              <textarea
                name="description"
                value={profile.description}
                onChange={handleInputChange}
                placeholder="Company Description"
              ></textarea>
              <input
                type="email"
                name="contactEmail"
                value={profile.contactEmail}
                onChange={handleInputChange}
                placeholder="Contact Email"
              />
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
              />
              <input
                type="url"
                name="website"
                value={profile.website}
                onChange={handleInputChange}
                placeholder="Website URL"
              />
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleInputChange}
                placeholder="Location (City, Country)"
              />
              <input
                type="text"
                name="industry"
                value={profile.industry}
                onChange={handleInputChange}
                placeholder="Industry Type (e.g., Tech, Healthcare)"
              />
              <button type="submit">Create Profile</button>
            </form>
          </div>
        </>
      )}
           <Footer></Footer>
    </>
 
  );
};

export default EmployerProfileForm;
