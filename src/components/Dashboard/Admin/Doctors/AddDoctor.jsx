import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingBar from '../../../Shared/LoadingBar';

const AddDoctor = () => {
  const imageApiKey = 'aef40ff4201c7cc59195b859727f7286';
  const {
    register,
    formState: { errors },
    handleSubmit,
    // watch,
    reset,
  } = useForm();

  const { data: service, isLoading } = useQuery('service', () =>
    fetch('http://localhost:5000/services').then((res) => res.json())
  );

  // 3 ways to store images
  // 1. in database 2. third party storage (imgbb.com ...etc) [valid for practice project] 3.in my own storage of my server (file system)
  //  to adjust image validation in database there is method known as YUP

  const onSubmit = (data) => {
    const formData = new FormData();
    const image = data?.image[0];
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
    fetch(url, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result?.success) {
          const img = result?.data?.url;
          const doctor = {
            name: data?.displayName,
            email: data?.email,
            speciality: data?.speciality,
            img: img,
          };
          // send doctor's details to database
          console.log("doctor's details ", doctor);
          fetch(`http://localhost:5000/doctor`, {
            method: 'POST',
            headers: {
              authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
              'content-type': 'application/json',
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((doc) => {
              console.log('doctor ', doc);
              if (doc?.insertedId) {
                toast.success('New doctor is added to doctors portal');
                reset();
              } else {
                toast.error('Failed to add new doctor in doctors portal');
              }
            })
            .catch((err) => console.log(err));
        }
        console.log('image address ', result);
      })
      .catch((err) => console.log(err));

    console.log('data ', data);
    // reset();
  };

  if (isLoading) return <LoadingBar />;

  return (
    <div>
      <h1 className="text-2xl font-bold">Add a new Doctor</h1>
      {/* <div className="hero min-h-screen bg-base-200"> */}
      {/* <div className="hero-content"> */}
      <div className="container mx-auto px-4 lg:px-64 card bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* doctors name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-primary font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-primary"
                {...register('displayName', {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Name can not be more than 20 letters',
                  },
                })}
              />
              <p className="text-red-500 font-semibold">
                {errors?.displayName?.type === 'required' && (
                  <span>{errors?.displayName?.message}</span>
                )}
                {errors?.displayName?.type === 'maxLength' && (
                  <span>{errors?.displayName?.message}</span>
                )}
              </p>
            </div>
            {/* doctors email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-primary font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered input-primary"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Invalid Email',
                  },
                })}
              />
              <p className="text-red-500 font-semibold">
                {errors.email?.type === 'required' && (
                  <span>{errors?.email?.message}</span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span>{errors?.email?.message}</span>
                )}
              </p>
            </div>
            {/* doctors speciality */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-primary font-bold">
                  Speciality
                </span>
              </label>
              <select
                className="select select-primary"
                {...register('speciality')}
              >
                {service?.map((s) => (
                  <option key={s?._id} value={s?.title}>
                    {s?.title}
                  </option>
                ))}
              </select>
              {/* <input
                type="text"
                placeholder="Speciality"
                className="input input-bordered input-primary"
                {...register('speciality', {
                  required: {
                    value: true,
                    message: 'Speciality is required',
                  },
                    maxLength: {
                      value: 20,
                      message: 'Name can not be more than 20 letters',
                    },
                })}
              /> */}
              {/* <p className="text-red-500 font-semibold">
                {errors?.speciality?.type === 'required' && (
                  <span>{errors?.speciality?.message}</span>
                )}
                {errors?.displayName?.type === 'maxLength' && (
                      <span>{errors?.displayName?.message}</span>
                    )}
              </p> */}
            </div>
            {/* doctors image */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-primary font-bold">Image</span>
              </label>
              <input
                type="file"
                className="input input-bordered input-primary"
                {...register('image', {
                  required: { value: true, message: 'Image is required' },
                })}
              />
              <p className="text-red-500 font-semibold">
                {errors?.image?.type === 'required' && (
                  <span>{errors?.image?.message}</span>
                )}
              </p>
            </div>
            {/* submit button */}
            <div className="form-control mt-6">
              {/* {signInError} */}
              <input
                type="submit"
                className="btn btn-primary text-white uppercase"
                value="Add Doctor"
              />
              {/* <p className="text-center font-bold">
                    New to Doctors Portal? 
                    <span
                      className="text-primary cursor-pointer"
                      onClick={() => navigate('/signup')}
                    >
                       
                      sign up
                    </span>
                  </p> */}
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default AddDoctor;
