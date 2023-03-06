import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmins from '../../customHooks/useAdmins/useAdmins';
import auth from '../../firebase.init';
import LoadingBar from '../Shared/LoadingBar';

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
