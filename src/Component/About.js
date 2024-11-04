import "./About.css";
import Award from './Asset/js.jpg';
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate=useNavigate();

  return (
   
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Award}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"><strong>Why Choose Us?</strong></h1>
        <p className="a-sub">
     
        Our platform is designed with your success in mind. Whether you’re a job seeker looking for your next opportunity or an employer aiming to find the perfect candidate, we understand the unique demands of the job market. With a user-friendly interface and powerful features, we make job searching and posting seamless and efficient. </p>
        <h3 className="a-title"><strong> Job Searching Made Easy
        </strong></h3>
        <p className="a-sub">
       
        For job seekers, we offer a comprehensive range of job openings tailored to various skills and experiences. Our intuitive search tools allow you to quickly find positions that align with your career goals. With our Easy Apply feature, you can submit your applications with just a few clicks, saving you time and effort. </p>
        
        <h3 className="a-title"><strong>  Streamlined Job Posting</strong></h3>
        <p className="a-sub">
        Employers can easily post job openings and reach a diverse audience of qualified candidates. Our platform provides customizable listings that showcase your company’s culture, helping you attract top talent. Effortlessly manage your job postings and track applicant responses in real time. </p>
        
        <h3 className="a-title"><strong>  Resume Builder for Success</strong></h3>
        <p className="a-sub">
        Our built-in resume builder empowers job seekers to create professional resumes that stand out to employers. With customizable templates and helpful tips, you can craft a compelling resume that highlights your skills and experiences effectively.</p> 
       
        
       
      </div>
    </div>
  );
};

export default About;