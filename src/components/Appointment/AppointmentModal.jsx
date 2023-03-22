import React from 'react';

//  external imports
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';

//  internal import
import auth from '../../firebase.init';

const AppointmentModal = ({ date, treatment, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);

  const { _id, title, availableSlots, price } = treatment;
  // date && format(date,'PP') is used for preventing 'date-fns' error of RangeError: Invalid time value
  // const formattedDate = date && format(date, 'PP');
  const formattedDate = format(date, 'PP');

  const handleBooking = (e) => {
    e.preventDefault();

    const slot = e?.target?.slot?.value;
    const displayName = e?.target?.displayName?.value;
    // const price = e?.target?.price?.value;
    const phone = e?.target?.phone?.value;
    const email = e?.target?.email?.value;
    console.log(_id, title, slot, displayName, price, phone, email);
    console.log(formattedDate);

    const appointmentBooking = {
      treatmentId: _id,
      treatment: title,
      fee: price,
      date: formattedDate,
      patientSlotTime: slot,
      patientName: displayName,
      patientPhone: phone,
      patient: email,
    };

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(appointmentBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success(
            'You just set an appointment for ' +
              title +
              ' at ' +
              slot +
              ' on ' +
              formattedDate
          );
        } else {
          toast.error(
            'You already set an appointment for ' +
              title +
              ' at ' +
              data?.appointmentBooking?.patientSlotTime +
              ' on ' +
              data?.appointmentBooking?.date
          );
        }
        refetch();
        // closing modal
        setTreatment(null);
      })
      .catch((err) => console.log(err));
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
              value={formattedDate}
              readOnly
              required
              disabled
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <select
              name="slot"
              className="select select-primary w-full max-w-xs"
            >
              {availableSlots?.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="displayName"
              value={user?.displayName}
              readOnly
              required
              disabled
              className="input input-bordered input-primary w-full max-w-xs mb-2"
            />
            <input
              type="text"
              name="price"
              value={`BDT ${price} only`}
              readOnly
              required
              disabled
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
              value={user?.email}
              readOnly
              required
              disabled
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
};

export default AppointmentModal;
