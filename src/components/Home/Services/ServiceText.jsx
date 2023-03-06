import React from 'react';

//  internal imports
import Button from '../../Shared/Button';
import treatment from '../../../assets/images/treatment.png';

const ServiceText = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          alt=""
          className="rounded-lg shadow-2xl lg:max-w-sm"
        />
        <div className="lg:px-12">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>Get started</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceText;
