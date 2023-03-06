import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutPayment = ({ appointment }) => {
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/createpaymentintent`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
      body: JSON.stringify({ fee: appointment?.fee }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      })
      .catch((err) => console.log(err));
  }, [appointment?.fee]);

  const stripe = useStripe();
  const elements = useElements();
  console.log('stripe...', stripe);
  console.log('success...', success);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    // processing payment spinner
    setIsProcessing(true);

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: appointment?.patientName,
            email: appointment?.patient,
          },
        },
      });

    if (error || intentError) {
      console.log('error....', error, intentError);
      setCardError(error?.message || intentError?.message);
      success('');
      setIsProcessing(false);
    } else {
      console.log(paymentMethod, paymentIntent);
      setCardError('');
      setSuccess('Payment is successful');
      setTransactionId(paymentIntent?.id);
      // store payment data on database
      const payment = {
        appointmentId: appointment?._id,
        transactionId: paymentIntent?.id,
      };
      fetch(`http://localhost:5000/booking/${appointment?._id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsProcessing(false);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || success}
          className="btn btn-sm btn-success text-white uppercase font-bold my-4"
        >
          Pay
        </button>
      </form>
      <p className="text-red-500 text-center font-bold">{cardError}</p>
      {success && (
        <div className="text-success text-center font-semibold">
          <p>{success}</p>
          <p>
            Your transaction id is
            <span className="text-orange-500">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutPayment;
