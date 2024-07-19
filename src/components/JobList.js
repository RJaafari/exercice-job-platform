import React, { useState } from "react";
import JobItem from "./JobItem";
import AppliedJobs from "./AppliedJobs";

const JobList = () => {
  const [jobs] = useState([
    { id: 1, title: "Frontend Developer", description: "React, Redux" },
    { id: 2, title: "Backend Developer", description: "Node.js, Express" },
    { id: 3, title: "Full Stack Developer", description: "React, Node.js" },
  ]);

  const [appliedJobs, setAppliedJobs] = useState([]);

  const applyToJob = (job) => {
    if (!appliedJobs.includes(job)) {
      setAppliedJobs([...appliedJobs, job]);
    }
  };

  return (
    <div>
      <h1>Job Postings</h1>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} applyToJob={applyToJob} />
      ))}
      <AppliedJobs appliedJobs={appliedJobs} />
    </div>
  );
};

export default JobList;
