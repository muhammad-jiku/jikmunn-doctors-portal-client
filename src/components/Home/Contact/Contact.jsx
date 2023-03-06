import React from 'react';

//  internal import
import Button from '../../Shared/Button';

const Contact = () => {
  return (
    <div className="bg-appointment-image bg-cover bg-center bg-no-repeat mt-24 py-12">
      <div className="py-6 text-center font-bold capitalize">
        <h1 className="text-xl text-secondary">Contact us</h1>
        <h1 className="text-3xl text-white">Stay Connected with us</h1>
      </div>
      <form className="container mx-auto py-6 flex flex-col justify-center items-center">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered input-primary w-full max-w-xs  mb-2"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-primary w-full max-w-xs mb-2"
        />
        <textarea
          className="textarea textarea-primary w-full max-w-xs mb-2"
          placeholder="Your Message"
        ></textarea>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Contact;
