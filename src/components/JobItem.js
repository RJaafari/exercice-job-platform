import React from "react";

const JobItem = ({ job, applyToJob }) => {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <button onClick={() => applyToJob(job)}>Apply</button>
    </div>
  );
};

export default JobItem;
