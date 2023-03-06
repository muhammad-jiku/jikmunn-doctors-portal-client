import React from 'react';

//  external imports
import { signOut } from 'firebase/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

//  internal imports
import auth from '../../firebase.init';
import LoadingBar from '../Shared/LoadingBar';
import useAdmins from '../../customHooks/useAdmins/useAdmins';

const RequiredAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admins, adminLoading] = useAdmins(user);

  let location = useLocation();

  if (loading || adminLoading) {
    return <LoadingBar />;
  }

  if (!user || !admins) {
    signOut(auth);
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequiredAdmin;
