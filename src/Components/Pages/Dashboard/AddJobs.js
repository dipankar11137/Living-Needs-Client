import React from "react";
import { useForm } from "react-hook-form";

const AddJobs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div className="flex justify-center ">
      <div className=" w-96 bg-slate-300 rounded-lg shadow-2xl p-10 mt-7">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold text-center">
            {/* {appleProduct?.name} */}
          </h1>
          <label className="label">
            <span className="label-text font-bold text-lime-700 text-2xl"></span>
          </label>
          <textarea
            type="text"
            placeholder="Your Address"
            className="input input-bordered text-xl pt-1 bg-white w-full max-w-xs h-20 hover:shadow-xl"
            {...register("address", {
              required: {
                value: true,
                message: "Address is Required",
              },
            })}
          />
          <label className="label">
            {errors.address?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xl">
                {errors?.address?.message}
              </span>
            )}
          </label>

          {/* number */}
          <input
            type="number"
            placeholder="Phone Number"
            className="input input-bordered  bg-white w-full max-w-xs  hover:shadow-xl"
            {...register("phone", {
              required: {
                value: true,
                message: "Phone is Required",
              },
            })}
          />
          <label className="label">
            {errors.phone?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xl">
                {errors?.phone?.message}
              </span>
            )}
          </label>
          {/* date */}
          <input
            type="date"
            placeholder="Phone Number"
            className="input input-bordered  bg-white w-full max-w-xs  hover:shadow-xl"
            {...register("date", {
              required: {
                value: true,
                message: "Date is Required",
              },
            })}
          />
          <label className="label">
            {errors.date?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xl">
                {errors?.date?.message}
              </span>
            )}
          </label>

          <input
            className="btn  w-full text-white mt-5"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
