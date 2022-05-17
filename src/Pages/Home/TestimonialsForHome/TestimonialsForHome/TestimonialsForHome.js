import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import Testimonial from '../Testimonial/Testimonial';

function TestimonialsForHome() {
  const reviews = [
    {
      _id: 101,
      name: 'Harry Potter',
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people1,
      address: 'SAN FRANCISCO',
    },
    {
      _id: 102,
      name: 'Gwen Stacy',
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people2,
      address: 'QUEENS',
    },
    {
      _id: 103,
      name: 'Marie Jane',
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people3,
      address: 'BROOKLYN',
    },
  ];
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
        {reviews?.map((review) => (
          <Testimonial key={review?._id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsForHome;
