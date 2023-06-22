import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';

const Blog = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  console.log(jobs);
  return (
    <div className=" pb-[1000px]">
      <div>
        {jobs.map(job => (
          <Blogs key={job._id} job={job}></Blogs>
        ))}
      </div>
    </div>
  );
};

export default Blog;
