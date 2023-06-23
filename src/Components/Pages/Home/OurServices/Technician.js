import React, { useEffect, useState } from 'react';
import { BiDownArrowCircle, BiUpArrowCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import AddReview from './Review/AddReview';
import ShowReview from './Review/ShowReview';

const Technician = ({ service }) => {
  const [arrow, setArrow] = useState(false);
  const [review, setReview] = useState(false);
  const navigator = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/review/${service?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // setArrow(false);
        setReviews(data);
      });
  }, [reviews, service?.email]);

  const handleBook = id => {
    navigator(`/bookService/${id}`);
  };

  return (
    <div>
      <div className="card bg-base-100 w-11/12 text-black shadow-2xl   hover:shadow-inner">
        <figure>
          <img
            className="w-full pic-style"
            src={service?.img}
            alt=""
            style={{ height: '300px' }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{service?.name}</h2>
          <p>{service?.location}</p>
          <h2 className="mt-2">
            Salary : <span className="font-bold">{service?.price} BDT</span> /
            Per Day
          </h2>
          <p>{service.description}</p>
          <p>Phone Number : {service?.number}</p>
        </div>
        <div className="mb-2 p-2 flex justify-between">
          <div>
            {review ? (
              <button
                onClick={() => setReview(false)}
                className="btn font-bold btn-secondary text-white"
              >
                minimize Review{' '}
              </button>
            ) : (
              <button
                onClick={() => setReview(true)}
                className="btn font-bold btn-primary text-white"
              >
                Add Review{' '}
              </button>
            )}
            <button
              onClick={() => handleBook(service._id)}
              className="btn font-bold ml-20 text-white"
            >
              book now{' '}
            </button>
          </div>
          {arrow ? (
            <button onClick={() => setArrow(false)}>
              <BiUpArrowCircle className="text-4xl font-bold mr-4 text-primary" />
            </button>
          ) : (
            <button onClick={() => setArrow(true)}>
              <BiDownArrowCircle className="text-4xl font-bold mr-4 text-primary" />
            </button>
          )}
        </div>
        {/* add review */}
        <div>
          {review ? (
            <div>
              <AddReview email={service?.email} setReview={setReview} />
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* show review */}
        <div>
          {arrow ? (
            <div>
              {reviews.map(review => (
                <ShowReview key={review._id} review={review}></ShowReview>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* review */}
    </div>
  );
};

export default Technician;
