import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../../assets/icons/clock.svg';
import Marker from '../../../assets/icons/marker.svg';
import Phone from '../../../assets/icons/phone.svg';

const Info = () => {
  return (
    <div className="grid grid-cols-1 px-6 lg:grid-cols-3 gap-4">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={Clock}
      />
      <InfoCard
        cardTitle="Visit our location"
        bgClass="bg-accent"
        img={Marker}
      />
      <InfoCard
        cardTitle="Contact us now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={Phone}
      />
    </div>
  );
};

export default Info;
