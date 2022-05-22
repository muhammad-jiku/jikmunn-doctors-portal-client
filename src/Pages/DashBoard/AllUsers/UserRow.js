import React from 'react';
import { toast } from 'react-toastify';

function UserRow({ user, idx, refetch }) {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://jikmunn-doctors-portal.herokuapp.com/user/admin/${email}`, {
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
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{email}</td>
      <td>
        {role === 'admin' ? (
          <button className="btn font-bold uppercase text-white" disabled>
            Admin
          </button>
        ) : (
          <button
            className="btn font-bold uppercase text-white"
            onClick={makeAdmin}
          >
            Make Admin
          </button>
        )}
        <button className="btn font-bold uppercase text-white ml-2">
          Remove Admin
        </button>
      </td>
      {/* <td>Blue</td> */}
    </tr>
  );
}

export default UserRow;
