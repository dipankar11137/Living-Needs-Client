import React from "react";

const ComputerTechnician = ({ computer }) => {
  console.log(computer);
  return (
    <div>
      <div className="card bg-base-100 w-11/12 text-black shadow-2xl hover:bg-red-100  hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            src={computer?.img}
            alt=""
            style={{ height: "300px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{computer?.name}</h2>
          <p>{computer?.location}</p>
          <h2 className="mt-2">
            Salary : <span className="font-bold">${computer.price}</span> / Per
            Day
          </h2>
          <p>{computer.description}</p>
        </div>
        <button className="btn font-bold">book now</button>
      </div>
    </div>
  );
};

export default ComputerTechnician;
