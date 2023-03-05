import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

function Payment() {
  const { id } = useParams();
  const { data: appointment, isLoading } = useQuery([' appointment', id], () =>
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  const stripePromise = loadStripe(
    'pk_test_51L1xjlI8Pcw7BJpaH2G1kmAnTfqfWl01yTQD7H6bSR58kx6Kr2tRqFebFTTO0bjtllQOr4lpbuRYSpgg3feAKZzR00Vo9XH4J0'
  );

  if (isLoading) return <Spinner />;
  return (
    <div className="hero min-h-screen bg-base-100">
      {/* {console.log(appointment)} */}
      <div className="hero-content flex-col">
        <div className="card w-full max-w-sm bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{appointment?.treatment}</h2>
            <p>
              Dear{' '}
              <span className="text-primary font-bold uppercase">
                {appointment?.patientName}
              </span>{' '}
              , Your appointment is set on {appointment?.date} at{' '}
              {appointment?.patientSlotTime}.{' '}
            </p>
            <p>
              Please pay BDT{' '}
              <span className="text-orange-500 font-semibold">
                {' '}
                {appointment?.fee}
              </span>{' '}
              only to continue your appointment to the doctor.
            </p>
          </div>
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm appointment={appointment} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

// todo for payment
// 1. installing react stripe npm install--save @stripe/react-stripe-js @stripe/stripe - js
// 2. creating stripe account
// 3. getting stripe publishing key
// 4. create elements wrapper using publishable key
// 5. create checkout form by using useElements, useStripe, CardElement
// 6. get card element info or credit card info
// 7. getting credit card info error
// 8. displaying card error info
// 9. npm install --save stripe (installing in server side)
// 10. getting secret key in server side
// 11. store client secret on the client side
