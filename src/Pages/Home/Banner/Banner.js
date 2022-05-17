import React from 'react';
import chair from '../../../assets/images/chair.png';
import Button from '../../Shared/Button/Button';

function Banner() {
  return (
    <div className="hero min-h-screen lg:px-12">
      <div className="bg-banner-image bg-contain bg-no-repeat w-full h-full">
        <div className="bg-base-100 bg-opacity-95 h-full hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt=""
            className="rounded-lg shadow-2xl lg:max-w-sm"
          />
          <div className="lg:px-12">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button>Explore More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
