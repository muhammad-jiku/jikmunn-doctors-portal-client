import React from 'react';

//  internal imports
import Service from './Service';
import ServiceText from './ServiceText';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
  const services = [
    {
      _id: 101,
      title: 'Fluoride Treatment',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita quaerat facilis nulla illum sequi quisquam exercitationem consectetur quam natus provident quibusdam ea dignissimos sed id eveniet excepturi mollitia, et nihil dicta qui necessitatibus, repellat soluta quasi. Est quis officia, exercitationem sequi rem beatae iure?',
      img: fluoride,
    },
    {
      _id: 102,
      title: 'Cavity Filling',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita quaerat facilis nulla illum sequi quisquam exercitationem consectetur quam natus provident quibusdam ea dignissimos sed id eveniet excepturi mollitia, et nihil dicta qui necessitatibus, repellat soluta quasi. Est quis officia, exercitationem sequi rem beatae iure?',
      img: cavity,
    },
    {
      _id: 103,
      title: 'Teeth Whitening',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita quaerat facilis nulla illum sequi quisquam exercitationem consectetur quam natus provident quibusdam ea dignissimos sed id eveniet excepturi mollitia, et nihil dicta qui necessitatibus, repellat soluta quasi. Est quis officia, exercitationem sequi rem beatae iure?',
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h1 className="text-primary uppercase font-bold text-2xl">
          Our services
        </h1>
        <h1 className="font-bold text-5xl">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 mx-auto my-16 lg:grid-cols-3 gap-5 px-6 md:px-28">
        {services?.map((service) => (
          <Service key={service?._id} service={service} />
        ))}
      </div>
      <div className="container mx-auto">
        <ServiceText />
      </div>
    </div>
  );
};

export default Services;
