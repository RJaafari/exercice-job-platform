import React from "react";

const AppliedJobs = ({ appliedJobs }) => {
  return (
    <div>
      <h2>Applied Jobs</h2>
      {appliedJobs.length === 0 ? (
        <p>You have not applied to any jobs yet.</p>
      ) : (
        <ul>
          {appliedJobs.map((job, index) => (
            <li key={index}>{job.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppliedJobs;
