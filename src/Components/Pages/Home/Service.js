import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  return (
    <Link data-aos="fade-up" data-aos-duration="2000" to={`/${service?.link}`}>
      <div className="card w- bg-base-100 text-black shadow-2xl    hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            src={service?.img}
            alt=""
            style={{ height: '200px', width: '200px' }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{service?.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Service;
