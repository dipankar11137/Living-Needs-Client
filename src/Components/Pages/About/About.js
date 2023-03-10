import React from "react";
import Footer from "../Share/Footer";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            src="https://www.mondaymorning.in/web_css_js/image/job-not-found.png"
            className="w-24 md:w-32 lg:w-3/5 rounded-lg "
            alt=""
          />
          <div className="ms-32">
            <h1 className="text-5xl font-bold text-rose-800 ">About Us</h1>
            <p className="py-6">
              An employment website is a website that deals specifically with
              employment or careers. Many employment websites are designed to
              allow employers to post job requirements for a position to be
              filled and are commonly known as job boards. Are you the one who
              wants the best employee for your organization? Do you want to
              advertise the vacancies of the job at your company? Solve all your
              problems just by having or creating job portals. In this article,
              we have discussed the importance of job portals, website
              development for job portals, and the best job portals in India.
              The internet is a large place where more than 3 billion people
              make use of it every day – some for personal and some for business
              use. As per the survey, India is the second-highest user of the
              internet. About 26% of the population in India uses the internet.
              There are many various reasons to make use of the internet. India,
              and more.
            </p>
            <button data-theme="autumn" className="btn btn-orange-500">
              See More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
