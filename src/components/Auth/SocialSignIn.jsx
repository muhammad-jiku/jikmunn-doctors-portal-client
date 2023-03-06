import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../customHooks/useToken/useToken';
import auth from '../../firebase.init';
import LoadingBar from '../Shared/LoadingBar';
import googleLogo from '../../assets/images/google.png';

const SocialSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  let signInError;
  let from = location.state?.from?.pathname || '/';

  const [token] = useToken(googleUser);

  useEffect(() => {
    if (token) {
      // console.log(user || googleUser);
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (googleLoading) {
    return <LoadingBar />;
  }

  if (googleError) {
    signInError = (
      <div>
        <p className="text-red-500 text-sm">{googleError?.message}</p>
      </div>
    );
    return (
      <>
        {' '}
        {signInError}{' '}
        <button className="btn" onClick={() => signInWithGoogle()}>
          Continue with <img src={googleLogo} alt="" className="ml-2" />
        </button>
      </>
    );
  }
};

export default SocialSignIn;
