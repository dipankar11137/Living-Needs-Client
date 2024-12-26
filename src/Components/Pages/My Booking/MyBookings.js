import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import MYBooking from './MYBooking';

const MyBookings = () => {
  const [booking, setBooking] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email;
  const navigation = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/allBooking/${email}`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [booking, email]);

  const handlePayment = () => {
    navigation('/payment');
  };
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/bookService/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = booking.filter(product => product._id !== id);
          setBooking(remaining);
          toast.success('Successfully Delivered');
        });
    }
  };

  return (
    <div className=" pb-20 mx-10 h-screen">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full rounded-xl ">
          {/* head */}
          <thead>
            <tr className="text-center ">
              <th></th>
              <th className="text-xl">Service provider</th>
              <th className="text-xl">Customer Name</th>
              <th className="text-xl">category</th>
              <th className="text-xl">Salary</th>
              <th className="text-xl">Address</th>
              <th className="text-xl">Date</th>
              <th className="text-xl">Payment</th>
              <th className="text-xl">Remove</th>
            </tr>
          </thead>
          <tbody>
            {booking.map(service => (
              <MYBooking
                key={service._id}
                service={service}
                handleDelete={handleDelete}
                handlePayment={handlePayment}
              ></MYBooking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
