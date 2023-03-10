import React from "react";
import { useNavigate } from "react-router-dom";

const Technician = ({ service }) => {
  const navigator = useNavigate();
  const handleBook = (id) => {
    navigator(`/bookService/${id}`);
  };
  return (
    <div>
      <div className="card bg-base-100 w-11/12 text-black shadow-2xl hover:bg-red-100  hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            src={service?.img}
            alt=""
            style={{ height: "300px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{service?.name}</h2>
          <p>{service?.location}</p>
          <h2 className="mt-2">
            Salary : <span className="font-bold">${service.price}</span> / Per
            Day
          </h2>
          <p>{service.description}</p>
        </div>
        <button
          onClick={() => handleBook(service._id)}
          className="btn font-bold"
        >
          book now{" "}
        </button>
      </div>
    </div>
  );
};

export default Technician;
