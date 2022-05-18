import { format } from 'date-fns';
import React from 'react';

function AppointmentModal({ date, treatment, setTreatment }) {
  const { _id, title, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();

    const slot = e?.target?.slot?.value;
    const name = e?.target?.name?.value;
    const phone = e?.target?.phone?.value;
    const email = e?.target?.email?.value;
    console.log(_id, title, slot, name, phone, email);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl text-center text-secondary">
            {title}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-2 justify-items-center my-4"
          >
            <input
              type="text"
              value={format(date, 'PP')}
              readOnly
              required
              disabled
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <select
              name="slot"
              className="select select-primary w-full max-w-xs"
            >
              {slots?.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-accent text-white p-4 w-full max-w-xs mb-2 uppercase font-bold"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;
