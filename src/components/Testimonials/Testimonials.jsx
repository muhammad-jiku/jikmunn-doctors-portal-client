import React from 'react';

//  external import
import { useQuery } from 'react-query';

//  internal imports
import Testimonial from './Testimonial';
import LoadingBar from '../Shared/LoadingBar';
import quote from '../../assets/icons/quote.svg';

const Testimonials = () => {
  const { data: reviews, isLoading } = useQuery('reviews', () =>
    fetch('http://localhost:5000/reviews').then((res) => res.json())
  );

  if (isLoading) return <LoadingBar />;
  return (
    <div>
      <div className="flex justify-between">
        <div className="px-6">
          <h1 className="text-primary text-xl capitalize font-bold">
            testimonial
          </h1>
          <h1 className="text-2xl capitalize font-bold">
            What Our Patients Says
          </h1>
        </div>
        <div>
          <img src={quote} alt="" className="w-24 lg:w-48" />
        </div>
      </div>
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 md:px-12">
        {reviews?.slice(-3)?.map((review) => (
          <Testimonial key={review?._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
