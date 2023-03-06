import React, { useEffect } from 'react';
import googleLogo from '../../../assets/images/google.png';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import Spinner from '../../Shared/Spinner/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../../customHooks/useToken/useToken';

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  let signInError;
  let from = location.state?.from?.pathname || '/';

  const [token] = useToken(user || googleUser);

  useEffect(() => {
    if (token) {
      // console.log(user || googleUser);
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  const onSubmit = async (data) => {
    console.log(data);
    await signInWithEmailAndPassword(data?.email, data?.password);
  };

  const handlePasswordReset = async () => {
    const email = watch('email');
    console.log(email);
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success('Reset email message is sent');
      return;
    } else {
      toast.error('Insert your email address please!');
      return;
    }
  };

  if (loading || googleLoading || sending) {
    return <Spinner />;
  }

  if (error || googleError || resetError) {
    signInError = (
      <div>
        <p className="text-red-500 text-sm">
          {error?.message || googleError?.message || resetError?.message}
        </p>
      </div>
    );
  }

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary uppercase">
            Sign in now!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-primary font-bold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered input-primary"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is required',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Invalid Email',
                    },
                  })}
                />
                <p className="text-red-500 font-semibold">
                  {errors.email?.type === 'required' && (
                    <span>{errors?.email?.message}</span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span>{errors?.email?.message}</span>
                  )}
                </p>
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-primary font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered input-primary"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Password must be at least six letters',
                    },
                  })}
                />
                <p className="text-red-500 font-semibold">
                  {errors.password?.type === 'required' && (
                    <span>{errors?.password?.message}</span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span>{errors?.password?.message}</span>
                  )}
                </p>
                <p className="font-bold">
                  {/* <a href="#" className="label-text-alt link link-hover"> */}
                  Forget password?
                  <span
                    className="text-primary cursor-pointer"
                    onClick={handlePasswordReset}
                  >
                    Reset Password
                  </span>
                  {/* </a> */}
                </p>
              </div>

              <div className="form-control mt-6">
                {signInError}
                <input
                  type="submit"
                  className="btn btn-primary text-white uppercase"
                  value="Sign In"
                />
                <p className="text-center font-bold">
                  {/* <a href="#" className="label-text-alt link link-hover"> */}
                  New to Doctors Portal?
                  <span
                    className="text-primary cursor-pointer"
                    onClick={() => navigate('/signup')}
                  >
                    sign up
                  </span>
                  {/* </a> */}
                </p>
              </div>
            </form>
            {/* <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div> */}
            <div className="divider font-bold">or</div>
            <div className="form-control mb-4">
              <button className="btn" onClick={() => signInWithGoogle()}>
                Continue with <img src={googleLogo} alt="" className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
