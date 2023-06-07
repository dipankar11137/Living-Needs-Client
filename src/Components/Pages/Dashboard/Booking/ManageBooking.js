import React from 'react';

const ManageBooking = ({ service, handleDelete }) => {
  // console.log(service);
  return (
    <tr className="text-center">
      <td>
        <img className="w-36 rounded-lg" src={service?.img} alt="" />
      </td>
      <td>{service?.name}</td>
      <td>{service?.customerName}</td>
      <td>{service?.service}</td>
      <td>{service?.price}</td>
      <td>{service?.address}</td>
      <td>{service?.date}</td>

      <td>
        <button
          onClick={() => handleDelete(service?._id)}
          className="btn btn-red-500 font-bold"
        >
          Delivered
        </button>
      </td>
    </tr>
  );
};

export default ManageBooking;
