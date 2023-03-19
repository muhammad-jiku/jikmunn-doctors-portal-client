import React from 'react';

//  external import
import { toast } from 'react-toastify';

const UserTableRow = ({ user, idx, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error('Failed to make an admin');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          refetch();
          toast.success(`${email} successfully included as admin`);
        }
      })
      .catch((err) => console.log(err));
  };

  const removeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error('Failed to remove as an admin');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          refetch();
          toast.success(`${email} successfully excluded as admin`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{email}</td>
      <td>
        {role === 'admin' ? (
          <>
            <button className="btn font-bold uppercase text-white" disabled>
              Admin
            </button>
            <button
              className="btn font-bold uppercase text-white ml-2"
              onClick={removeAdmin}
            >
              Remove Admin
            </button>
          </>
        ) : (
          <button
            className="btn font-bold uppercase text-white"
            onClick={makeAdmin}
          >
            Make Admin
          </button>
        )}
      </td>
      {/* <td>Blue</td> */}
    </tr>
  );
};

export default UserTableRow;
