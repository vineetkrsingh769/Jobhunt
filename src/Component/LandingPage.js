import React from "react";
import "./landingPage.css";
// import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  // const navigate = useNavigate();
  // const toEcommercePage = () => {
  //   navigate("/ecommerce");
  // };
  return (
    
   <div className="main-container">
   
    <h1 className="pl-title">What we provide</h1>
      
      
      <div className="main">
      <div className="card1">
      <div className="content1">
        <h3>Job Searching</h3>
        <p>
        Explore a range of job openings tailored to your skills and aspirations. Whether you're looking to advance your career, switch industries, or find entry-level opportunities, we've got you covered. Start applying today and unlock your path to success.</p>
      </div>
    </div>
    <div className="card2">
          <div className="content2">
            <h3>Posting New Jobs </h3>
            <p>
            Attract top talent by posting your job openings with us! Our platform connects you with a vast pool of qualified candidates and offers an easy job posting process. Customize your listings to showcase your company’s unique culture and manage postings effortlessly. Start hiring today and find the perfect match for your team!



            </p>
           
          </div>
        </div>

        <div className="card3">
          <div className="content3">
            <h3>Easy Apply</h3>
            <p>
            Simplify your job search with our Easy Apply feature, designed to make your application process quick and hassle-free. With just a few clicks, you can submit your resume and cover letter to multiple job openings, saving you time and effort. No need to fill out lengthy forms—just upload your documents, review your application, and hit submit.
                </p>
            
          </div>
        </div>

      
        
        

      </div>
    </div>
   
  );
};