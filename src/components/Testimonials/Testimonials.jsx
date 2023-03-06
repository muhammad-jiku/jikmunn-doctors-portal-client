import React from 'react';
import { useQuery } from 'react-query';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import LoadingBar from '../Shared/LoadingBar';
import Testimonial from './Testimonial';

const Testimonials = () => {
  // const reviews = [
  //   {
  //     _id: 101,
  //     name: 'Harry Potter',
  //     review:
  //       'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
  //     img: people1,
  //     rating: 4,
  //   },
  //   {
  //     _id: 102,
  //     name: 'Gwen Stacy',
  //     review:
  //       'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
  //     img: people2,
  //     rating: 5,
  //   },
  //   {
  //     _id: 103,
  //     name: 'Marie Jane',
  //     review:
  //       'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
  //     img: people3,
  //     rating: 5,
  //   },
  // ];

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
        {reviews?.slice(-3)?.mapmap((review) => (
          <Testimonial key={review?._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
