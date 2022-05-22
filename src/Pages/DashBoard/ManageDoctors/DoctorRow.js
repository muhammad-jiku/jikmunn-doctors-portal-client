import React from 'react';

function DoctorRow({ doctor, idx, setConfirmDelteModal }) {
  const { img, name, email, speciality } = doctor;

  return (
    <tr>
      <th>{idx + 1}</th>
      <th>
        {/* <div className="flex items-center space-x-3"> */}
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={img} alt={name} />
          </div>
          {/* </div> */}
          {/* <div>
            <div className="font-bold">Hart Hagerty</div>
          </div> */}
        </div>
      </th>
      <th>
        {name}
        <br />
        {/* <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span> */}
      </th>
      <th>{email}</th>
      <th>{speciality}</th>
      <th>
        <label
          htmlFor="delete-modal"
          className="btn btn-error text-white font-bold"
          onClick={() => setConfirmDelteModal(doctor)}
        >
          Delete
        </label>
      </th>
    </tr>
  );
}

export default DoctorRow;
