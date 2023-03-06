import React from 'react';

//  external import
import { useQuery } from 'react-query';

//  internal imports
import LoadingBar from '../../components/Shared/LoadingBar';
import Testimonial from '../../components/Testimonials/Testimonial';

const TestimonialIndex = () => {
  const { data: reviews, isLoading } = useQuery('reviews', () =>
    fetch('http://localhost:5000/reviews').then((res) => res.json())
  );

  if (isLoading) return <LoadingBar />;

  return (
    <div className="container mx-auto my-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
      {reviews
        ?.slice(0)
        ?.reverse()
        ?.map((review) => (
          <Testimonial key={review?._id} review={review} />
        ))}
    </div>
  );
};

export default TestimonialIndex;
