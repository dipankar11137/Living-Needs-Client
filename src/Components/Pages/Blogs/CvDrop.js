import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CvDrop = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = data => {
    reset();
    toast.success('Cv sent Successfully');

    // if (file) {
    //   const formData = new FormData();
    //   formData.append('pdfFile', file);

    //   fetch('/api/upload-pdf', {
    //     method: 'POST',
    //     body: formData,
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }
  };
  return (
    <div>
      <h1 className="ml-2 text-2xl font-extrabold text-blue-500">
        If you are interested
      </h1>
      <form className="flex gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label">
            <span className="label-text text-xl font-bold ">
              Submit Your CV
            </span>
          </label>
          <input
            type="file"
            placeholder="Services Location"
            className="input input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner pt-2"
            {...register('cv', {
              required: {
                value: true,
                message: 'CV is Required',
              },
            })}
          />
          <label className="label">
            {errors.cv?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors?.cv?.message}
              </span>
            )}
          </label>
        </div>
        <button className="btn mt-10" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CvDrop;
