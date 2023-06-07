import React, { useEffect, useState } from 'react';
import ManageBooking from './ManageBooking';

const ManageBookings = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/bookService')
      .then(res => res.json())
      .then(data => setBooking(data));
  }, []);

  const handleDelete = id => {
    // const proceed = window.confirm('Are You Sure ?');
    // if (proceed) {
    //   const url = `http://localhost:5000/allServices/${id}`;
    //   fetch(url, {
    //     method: 'DELETE',
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       const remaining = booking.filter(product => product._id !== id);
    //       setBooking(remaining);
    //       toast.success('Successfully Remove');
    //     });
    // }
  };
  return (
    <div className=" mx-6 mt-5 pb-20">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-center ">
              <th></th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Customer Name</th>
              <th className="text-xl">category</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Address</th>
              <th className="text-xl">Date</th>
              <th className="text-xl">Delivered</th>
            </tr>
          </thead>
          <tbody>
            {booking.map(service => (
              <ManageBooking
                key={service._id}
                service={service}
                handleDelete={handleDelete}
              ></ManageBooking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
