import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
  const { availableSlots, title, price } = service;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary text-xl font-bold">{title}</h2>
        <p>
          {availableSlots?.length ? (
            <span>{availableSlots[0]}</span>
          ) : (
            <span className="text-red-500">No more booking today</span>
          )}
        </p>
        <p>
          {availableSlots?.length}
          {availableSlots?.length > 1 ? ' spaces are' : ' space is'} available
          now
        </p>
        <p>
          <small>Fee: BDT {price} only</small>
        </p>
        <div className="card-actions">
          {/* <button className=""></button> */}
          <label
            htmlFor="booking-modal"
            className="btn btn-primary modal-button text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary"
            disabled={availableSlots?.length === 0}
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
