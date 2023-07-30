import React, { useEffect, useState } from 'react';
import Footer from '../Share/Footer';
import Blogs from './Blogs';

const Blog = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, [jobs]);

  console.log(jobs);
  return (
    <div>
      <div className=" pb-[400px]">
        <div>
          {jobs.map(job => (
            <Blogs key={job._id} job={job}></Blogs>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
