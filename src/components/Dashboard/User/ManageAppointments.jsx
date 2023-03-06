import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
        },
      })
        .then((res) => {
          console.log('response ', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage?.removeItem('accessToken');
            navigate('/');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setAppointments(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);
  return (
    <div>
      <h1> My Appointments: {appointments?.length} </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Contact</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {/* {console.log(appointments)} */}
            {appointments?.map((a, idx) => (
              <tr key={a?._id}>
                <th>{idx + 1}</th>
                <th>{a?.patientName}</th>
                <th>{a?.patientPhone}</th>
                <th>{a?.treatment}</th>
                <th>{a?.date}</th>
                <th>{a?.patientSlotTime}</th>
                <th>
                  {a?.fee && !a?.paid && (
                    <Link to={`/dashboard/payment/${a?._id}`}>
                      <button className="btn btn-sm btn-success uppercase text-white font-bold">
                        PAY
                      </button>
                    </Link>
                  )}
                  {a?.fee && a?.paid && (
                    <div className="uppercase text-success font-bold">
                      <span className="mr-2">PAid</span>
                      <span className="text-xs text-black">
                        {a?.transactionId}
                      </span>
                    </div>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAppointments;
