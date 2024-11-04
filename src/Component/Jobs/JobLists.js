// src/components/JobList.js
import React from 'react';
import JobCard from './JobCard';
import useJobStore from '../../Store/useJobStore';


const JobLists = () => {
  const jobs = useJobStore((state) => state.jobs);

  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      ) : (
        <p>No job listings available. Please add a job!</p>
      )}
    </div>
  );
};

export default JobLists;
