import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddJobs = () => {
  const [employeeStatus, setEmployeeStatus] = useState('');
  // console.log(employeeStatus);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    const changeUrl = { ...data, employeeStatus: employeeStatus };
    // console.log(changeUrl);
    const url = `http://localhost:5000/jobs`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(changeUrl),
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Successfully Add A Job');
        reset();
      });
  };
  return (
    <div className=" flex justify-center">
      <div>
        <div className=" w-8/12  bg-slate-100 rounded-lg  p-6 mt-7 mb-20">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            {/*Company Name */}
            {/* <label className="label">
            <span className="label-text font-bold text-lime-700 text-xl">
              Company Name
            </span>
          </label> */}
            <h1 className="pb-5 text-3xl pl-2 font-bold uppercase">
              Post A Job{' '}
            </h1>
            <input
              type="text"
              placeholder="Company Name"
              className="input input-bordered text-xl pt-1 bg-white w-full  hover:shadow-xl  border-b-blue-900"
              {...register('companyName', {
                required: {
                  value: true,
                  message: 'Company Name is Required',
                },
              })}
            />
            <label className="label">
              {errors.companyName?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.companyName?.message}
                </span>
              )}
            </label>
            {/*photo Url */}

            <input
              type="img"
              placeholder="Company Logo Url"
              className="input input-bordered  pt-1 bg-white w-full   text-xl hover:shadow-xl border-b-blue-900"
              {...register('companyLogo', {
                required: {
                  value: true,
                  message: 'Company Logo is Required',
                },
              })}
            />

            <label className="label">
              {errors.companyLogo?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.companyLogo?.message}
                </span>
              )}
            </label>
            {/*job Name */}

            <input
              type="text"
              placeholder="Job Name"
              className="input input-bordered text-xl pt-1 bg-white w-full    hover:shadow-xl border-b-blue-900"
              {...register('jobName', {
                required: {
                  value: true,
                  message: 'Job Name is Required',
                },
              })}
            />
            <label className="label">
              {errors.jobName?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.jobName?.message}
                </span>
              )}
            </label>
            {/*job LOcation */}

            <input
              type="text"
              placeholder="Location"
              className="input input-bordered text-xl pt-1 bg-white w-full    hover:shadow-xl border-b-blue-900"
              {...register('location', {
                required: {
                  value: true,
                  message: 'Location Name is Required',
                },
              })}
            />
            <label className="label">
              {errors.location?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.location?.message}
                </span>
              )}
            </label>

            {/* Experience */}
            <input
              type="number"
              placeholder="Experience Year"
              className="input input-bordered  bg-white w-full    text-xl hover:shadow-xl border-b-blue-900"
              {...register('experience', {
                required: {
                  value: true,
                  message: 'Experience is Required',
                },
              })}
            />
            <label className="label">
              {errors.experience?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.experience?.message}
                </span>
              )}
            </label>
            {/* Vacancy */}
            <input
              type="number"
              placeholder="Vacancy "
              className="input input-bordered  bg-white w-full    text-xl hover:shadow-xl border-b-blue-900"
              {...register('vacancy', {
                required: {
                  value: true,
                  message: 'vacancy is Required',
                },
              })}
            />
            <label className="label">
              {errors.vacancy?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.vacancy?.message}
                </span>
              )}
            </label>
            {/* Job Responsibilities */}
            <textarea
              type="text"
              placeholder="Job Responsibilities "
              className="input input-bordered  bg-white w-full   h-20 text-xl hover:shadow-xl border-b-blue-900"
              {...register('jobResponsibilities', {
                required: {
                  value: true,
                  message: 'Job Responsibilities is Required',
                },
              })}
            />
            <label className="label">
              {errors.jobResponsibilities?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.jobResponsibilities?.message}
                </span>
              )}
            </label>
            {/* Employment Status */}
            <select
              onChange={e => setEmployeeStatus(e.target.value)}
              className="select select-primary w-96   mb-3 text-xl"
            >
              <option disabled selected>
                Employment Status
              </option>

              <option className="text-lg text-blue-900 ">Part Time</option>
              <option className="text-lg text-blue-900 ">Full Time</option>
              <option className="text-lg text-blue-900 ">Remote</option>
            </select>

            {/* Educational Requirements */}
            <textarea
              type="text"
              placeholder="Educational Requirements "
              className="input input-bordered  bg-white w-full   h-20 text-xl hover:shadow-xl border-b-blue-900"
              {...register('educationalRequirements', {
                required: {
                  value: true,
                  message: 'Educational Requirements is Required',
                },
              })}
            />
            <label className="label">
              {errors.educationalRequirements?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.educationalRequirements?.message}
                </span>
              )}
            </label>
            {/* Additional Requirements */}
            <textarea
              type="text"
              placeholder="Additional Requirements "
              className="input input-bordered  bg-white w-full   h-20 text-xl hover:shadow-xl border-b-blue-900"
              {...register('additionalRequirements', {
                required: {
                  value: true,
                  message: 'Additional Requirements is Required',
                },
              })}
            />
            <label className="label">
              {errors.additionalRequirements?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.additionalRequirements?.message}
                </span>
              )}
            </label>
            {/* Salary */}
            <input
              type="number"
              placeholder="Salary "
              className="input input-bordered  bg-white w-full    text-xl hover:shadow-xl border-b-blue-900"
              {...register('salary', {
                required: {
                  value: true,
                  message: 'Salary is Required',
                },
              })}
            />
            <label className="label">
              {errors.salary?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.salary?.message}
                </span>
              )}
            </label>
            {/* email */}
            <input
              type="email"
              placeholder="Email Address "
              className="input input-bordered  bg-white w-full    text-xl hover:shadow-xl border-b-blue-900"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is Required',
                },
              })}
            />
            <label className="label">
              {errors.email?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.email?.message}
                </span>
              )}
            </label>
            {/* Application Deadline */}
            <label className="label">
              <span className="label-text font-bold text-lg">
                Application Deadline
              </span>
            </label>
            <input
              type="date"
              placeholder="Application Deadline"
              className="input input-bordered  bg-white w-full    hover:shadow-xl border-b-blue-900"
              {...register('date', {
                required: {
                  value: true,
                  message: 'Date is Required',
                },
              })}
            />
            <label className="label">
              {errors.date?.type === 'required' && (
                <span className="label-text-alt text-red-500 text-xl">
                  {errors?.date?.message}
                </span>
              )}
            </label>

            {employeeStatus ? (
              <input
                className="btn mt-5 w-full  text-white"
                type="submit"
                value="Submit"
              />
            ) : (
              <input
                className="btn mt-5 w-full text-white"
                disabled
                type="submit"
                value="Submit"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
