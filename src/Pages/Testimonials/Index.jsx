import {
  faStar,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
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
          // <div className="card border-2 border-purple-700" key={review?._id}>
          //   {/* <SwiperSlide> */}
          //   <div className="card-body font-bold">
          //     <div className="card-actions justify-start">
          //       <div className="avatar">
          //         <div className="w-12 lg:w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          //           <img src={review?.img} alt={review?.displayName} />
          //         </div>
          //       </div>
          //       <div className="flex flex-col items-start justify-start font-semibold px-2">
          //         <h1 className="text-lg">{review?.displayName}</h1>
          //         <h1 className="text-xl flex items-center">
          //           {review?.rating}
          //           <span>
          //             <FontAwesomeIcon
          //               icon={faStar}
          //               // className="text-primary"
          //               style={{ color: 'yellow' }}
          //               size="xl"
          //             />
          //           </span>
          //         </h1>
          //       </div>
          //     </div>
          //     <FontAwesomeIcon
          //       icon={faQuoteLeft}
          //       className="text-primary"
          //       size="xl"
          //     />
          //     <p>{review?.review}</p>
          //     <FontAwesomeIcon
          //       icon={faQuoteRight}
          //       className="text-primary"
          //       size="xl"
          //     />
          //   </div>
          // </div>
        ))}
    </div>
  );
};

export default TestimonialIndex;
