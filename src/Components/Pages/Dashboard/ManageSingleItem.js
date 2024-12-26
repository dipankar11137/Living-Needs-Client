import React from "react";

const ManageSingleItem = ({ service, handleAdd, handleDelete }) => {
  return (
    <tr className="text-center">
      <td>
        <img className="w-24 h-20 rounded-lg" src={service?.img} alt="" />
      </td>
      <td>{service?.name}</td>
      <td>{service?.service}</td>
      <td>{service?.price} BDT</td>
      <td>{service?.location}</td>
      <td>
        <button onClick={handleAdd} className="btn btn-info font-bold">
          Add Services
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(service?._id)}
          className="btn btn-red-500 font-bold"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageSingleItem;
