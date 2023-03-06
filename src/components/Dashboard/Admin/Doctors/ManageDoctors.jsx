import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingBar from '../../../Shared/LoadingBar';
import DeleteModal from '../DeleteModal';
import DoctorTableRow from './DoctorTableRow';

const ManageDoctors = () => {
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

  if (isLoading) return <LoadingBar />;
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
              <DoctorTableRow
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
        <DeleteModal
          refetch={refetch}
          confirmDelteModal={confirmDelteModal}
          setConfirmDelteModal={setConfirmDelteModal}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
