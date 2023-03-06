import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';
import DoctorRow from './DoctorRow';

function ManageDoctors() {
  const [confirmDelteModal, setConfirmDelteModal] = useState(null);

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery('doctors', () =>
    fetch('http://localhost:5000/doctors', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return <Spinner />;
  return (
    <div>
      <h1 className="text-xl uppercase font-bold">
        Doctors: {doctors?.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>email</th>
              <th>Speciality</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {doctors?.map((doctor, idx) => (
              <DoctorRow
                key={doctor?._id}
                doctor={doctor}
                idx={idx}
                setConfirmDelteModal={setConfirmDelteModal}
              />
            ))}
          </tbody>
        </table>
      </div>
      {confirmDelteModal && (
        <DeleteConfirmModal
          refetch={refetch}
          confirmDelteModal={confirmDelteModal}
          setConfirmDelteModal={setConfirmDelteModal}
        />
      )}
    </div>
  );
}

export default ManageDoctors;
