import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ManageSingleItem from "./ManageSingleItem";

const ManageItem = () => {
  const [services, setServices] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/allServices')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [services]);
  const handleAdd = () => {
    navigator('/dashboard');
  };
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/allServices/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = services.filter(product => product._id !== id);
          setServices(remaining);
          toast.success('Successfully Remove');
        });
    }
  };
  return (
    <div className="pb-20 mx-6 mt-5 pb-20">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-center ">
              <th></th>
              <th className="text-xl">Name</th>
              <th className="text-xl">category</th>
              <th className="text-xl">Salary</th>
              <th className="text-xl">Location</th>
              <th className="text-xl">Add </th>
              <th className="text-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <ManageSingleItem
                key={service._id}
                service={service}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
              ></ManageSingleItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
