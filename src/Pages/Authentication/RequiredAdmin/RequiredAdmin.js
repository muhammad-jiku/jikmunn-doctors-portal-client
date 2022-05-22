import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmins from '../../../customHooks/useAdmins/useAdmins';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';

function RequiredAdmin({ children }) {
  const [user, loading] = useAuthState(auth);
  const [admins, adminLoading] = useAdmins(user);

  let location = useLocation();

  if (loading || adminLoading) {
    return <Spinner />;
  }

  if (!user || !admins) {
    signOut(auth);
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}

export default RequiredAdmin;
