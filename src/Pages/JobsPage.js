// List.js
import React from 'react';
import JobLists from '../Component/Jobs/JobLists';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';

const JobsPage = () => {
  return (
    <>
      <Nav/>
      <div className='j-page-main'></div>
      <h1>Job Listing</h1>
      <JobLists />
      <Footer/>
     
    </>
  );
}

export default JobsPage;
