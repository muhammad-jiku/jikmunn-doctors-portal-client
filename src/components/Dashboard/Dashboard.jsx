import React from 'react';

//  external imports
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

//  internal imports
import auth from '../../firebase.init';
import useAdmins from '../../customHooks/useAdmins/useAdmins';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admins] = useAdmins(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h1 className="text-3xl text-primary uppercase font-bold">dashboard</h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {/* <label htmlFor="my-drawer-2"></label> */}
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/addreview">Add Review</Link>
          </li>
          {admins && (
            <>
              <li>
                <Link to="/dashboard/allusers">Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addDoctor">Add Doctor</Link>
              </li>
              <li>
                <Link to="/dashboard/doctors">Manage Doctors</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
