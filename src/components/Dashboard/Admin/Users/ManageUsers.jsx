import React from 'react';

//  external import
import { useQuery } from 'react-query';

//  internal imports
import UserTableRow from './UserTableRow';
import LoadingBar from '../../../Shared/LoadingBar';

const ManageUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    fetch('http://localhost:5000/users', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Users : {users?.length} </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Actions</th>
              {/* <th>Favorite Color</th> */}
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users?.map((user, idx) => (
              <UserTableRow
                key={user?._id}
                user={user}
                idx={idx}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
