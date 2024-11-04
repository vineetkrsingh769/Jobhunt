import React from 'react';
import './res.css'; // Assuming you have a separate CSS file for styling
import Nav from './Nav';
import Footer from './Footer';

const Resource = () => {
  return (
    <div>
    <Nav/>
    <div className='resmain'>
    <div className="resources">
    <div className="intro">
      <h1>Stay Informed and Inspired</h1>
      <p>Welcome to the QuantumLeap IT Resources hub. Here, you'll find a wealth of information to help you stay up-to-date with the latest trends in the IT industry, gain insights from our success stories, and explore expert opinions through our blog. Whether you're looking to learn, stay informed, or draw inspiration, this is the place to be.</p>
    </div>
    
    <div className="insights">
      <h2>Insights, Tips, and Best Practices</h2>
      <ul>
        <li>As we move through 2024, the IT staffing landscape is evolving rapidly. Key trends include the increasing importance of remote work, the integration of artificial intelligence (AI) in recruitment processes, and a growing focus on diversity and inclusion. These trends are reshaping how companies hire and retain IT talent.</li>
        <li>Building an agile IT team is crucial for staying competitive in today’s fast-paced business environment. Strategies include fostering a culture of continuous learning, embracing agile methodologies, and prioritizing cross-functional collaboration.</li>
        <li>Digital transformation is no longer optional—it’s a necessity for businesses looking to thrive in the digital age. However, the journey is fraught with challenges, including resistance to change, legacy system limitations, and cybersecurity concerns.</li>
      </ul>
      <p>For a deep dive into these trends, contact our team and we will assist you.</p>
    </div>
  </div>
    
</div>
    
    <Footer/>
    </div>
 
    
  );
};

export default Resource;
