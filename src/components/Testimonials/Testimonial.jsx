import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Testimonial = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl my-2">
      <div className="card-body font-bold">
        <p>{review?.review}</p>
        <div className="card-actions justify-start my-2">
          <div className="avatar">
            <div className="w-12 lg:w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review?.img} alt={review?.name} />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start font-semibold px-2">
            <h1 className="text-xl">{review?.name}</h1>
            <h1 className="text-xl flex items-center">
              {review?.rating}
              <span>
                <FontAwesomeIcon
                  icon={faStar}
                  // className="text-primary"
                  style={{ color: 'yellow' }}
                  size="xl"
                />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
