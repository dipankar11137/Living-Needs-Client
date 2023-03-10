import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  //   const name = user?.displayName;
  //   const img = user?.photoURL;

  let img;
  let name;
  if (user?.photoURL == null) {
    img =
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png";
  } else {
    img = user?.photoURL;
  }
  if (user?.displayName == null) {
    name = "Abbus";
  } else {
    name = user?.displayName;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const updateData = { ...data, email, name, img };
    // console.log(updateData);
    const url = `http://localhost:5000/addReview`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Successfully Add Review");
        reset();
      });
  };
  return (
    <div className="flex justify-center ">
      <div className=" w-96 bg-slate-300 rounded-lg shadow-2xl p-10 mt-7">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold text-center">
            {/* {appleProduct?.name} */}
          </h1>
          <label className="label">
            <span className="label-text font-bold text-lime-700 text-2xl">
              Add a Review
            </span>
          </label>
          <textarea
            type="text"
            placeholder="Your Review"
            className="input input-bordered bg-white w-full max-w-xs h-32"
            {...register("review", {
              required: {
                value: true,
                message: "Review is Required",
              },
            })}
          />
          <label className="label">
            {errors.review?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xl">
                {errors?.review?.message}
              </span>
            )}
          </label>
          <input
            className="btn  w-full text-white"
            type="submit"
            value="Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
