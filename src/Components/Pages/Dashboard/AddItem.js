import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddItem = () => {
  const [user] = useAuthState(auth);
  const [service, setService] = useState('');
  const imageHostKey = '39899c0cdbfbe66a2dbde3818a91832c';

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const image = imageData.data.url;
        const changeUrl = { ...data, service: service, img: image };
        console.log(changeUrl);

        fetch(`http://localhost:5000/allServices`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(changeUrl),
        })
          .then(res => res.json())
          .then(data => {
            toast.success('Successfully Add This ');
            reset();
          });
      });
  };
  return (
    <div className=" pb-20">
      {/* <h2 className="mt-5 ml-10 font-bold text-4xl text-center text-orange-500 uppercase">
        Please Add A Technician
      </h2> */}
      <div className=" p-5 rounded-2xl w-11/12 mt-5 ml-5 ">
        <form
          className=" flex justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-48 pr-20 ">
            <select
              onChange={e => setService(e.target.value)}
              className="select select-primary w-96 max-w-xs text-xl"
            >
              <option disabled selected>
                Select Your Technician
              </option>
              <option className="text-lg text-blue-900 ">
                ComputerTechnician
              </option>
              <option className="text-lg text-blue-900 ">Mechanical</option>
              <option className="text-lg text-blue-900 ">Electrician</option>
              <option className="text-lg text-blue-900 ">Cleaner</option>
              <option className="text-lg text-blue-900 ">
                AmbulanceServices
              </option>
              <option className="text-lg text-blue-900 ">
                VehiclesServices
              </option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Service name"
              className="input input-bordered bg-white lg:w-96 sm:w-full max-w-xs hover:shadow-xl shadow-inner border-blue-900 "
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
            <label className="label">
              {errors.name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.name?.message}
                </span>
              )}
            </label>
            {/* image */}
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Input Image{' '}
              </span>
            </label>
            <input
              type="file"
              className="input input-bordered text-black w-96 pt-2 sm:w-full   hover:shadow-xl shadow-inner"
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is Required',
                },
              })}
            />

            <label className="label">
              {errors.image?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.image?.message}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Contact Number
              </span>
            </label>
            <input
              type="number"
              placeholder="Input Phone number"
              className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner border-blue-900"
              {...register('number', {
                required: {
                  value: true,
                  message: 'Number is Required',
                },
              })}
            />

            <label className="label">
              {errors.number?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.number?.message}
                </span>
              )}
            </label>
            {/* Location */}
            <label className="label">
              <span className="label-text text-xl font-semibold">Location</span>
            </label>
            <input
              type="text"
              placeholder="Services Location"
              className="input input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner border-blue-900"
              {...register('location', {
                required: {
                  value: true,
                  message: 'Location is Required',
                },
              })}
            />
            <label className="label">
              {errors.location?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.location?.message}
                </span>
              )}
            </label>
            {/* Description */}
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Description
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
              className="input input-bordered bg-white w-full max-w-xs h-20 pt-1 hover:shadow-xl shadow-inner border-blue-900"
              {...register('description', {
                required: {
                  value: true,
                  message: 'Description is Required',
                },
              })}
            />
            <label className="label">
              {errors.description?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.description?.message}
                </span>
              )}
            </label>
            {/* Price */}
            <label className="label">
              <span className="label-text text-xl font-semibold">Salary</span>
            </label>
            <input
              type="number"
              placeholder="Salary"
              className="input input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner border-blue-900"
              {...register('price', {
                required: {
                  value: true,
                  message: 'Salary is Required',
                },
              })}
            />
            <label className="label">
              {errors.price?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.price?.message}
                </span>
              )}
            </label>
            {service ? (
              <input
                className="btn mt-5 w-full disable text-white"
                type="submit"
                value="ADD"
              />
            ) : (
              <input
                className="btn mt-5 w-full text-white"
                disabled
                type="submit"
                value="ADD"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
