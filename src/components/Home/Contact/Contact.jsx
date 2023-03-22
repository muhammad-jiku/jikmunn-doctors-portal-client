import React from 'react';

//   external import
import { toast } from 'react-toastify';

//  internal import
import Button from '../../Shared/Button';

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();

    let email = e?.target?.email?.value;
    let subject = e?.target?.subject?.value;
    let message = e?.target?.message?.value;

    const contact = {
      email,
      subject,
      message,
    };

    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          e.target.reset();
          toast.success('Thanks for contacting us!');
        } else {
          toast.error('Something went wrong');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-appointment-image bg-cover bg-center bg-no-repeat mt-24 py-12">
      <div className="py-6 text-center font-bold capitalize">
        <h1 className="text-xl text-secondary">Contact us</h1>
        <h1 className="text-3xl text-white">Stay Connected with us</h1>
      </div>
      <form
        onSubmit={handleContact}
        className="container mx-auto py-6 flex flex-col justify-center items-center"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered input-primary w-full max-w-xs  mb-2"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="input input-bordered input-primary w-full max-w-xs mb-2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea textarea-primary w-full max-w-xs mb-2"
        ></textarea>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Contact;
