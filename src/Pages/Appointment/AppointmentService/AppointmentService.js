import React from 'react';

function AppointmentService({ service, setTreatment }) {
  const { slots, title } = service;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary text-xl font-bold">{title}</h2>
        <p>
          {slots?.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No more booking today</span>
          )}
        </p>
        <p>
          {slots?.length} {slots?.length > 1 ? ' spaces are' : ' space is'}{' '}
          available now{' '}
        </p>
        <div className="card-actions">
          {/* <button className=""></button> */}
          <label
            htmlFor="booking-modal"
            className="btn btn-primary modal-button text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary"
            disabled={slots?.length === 0}
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
}

export default AppointmentService;
