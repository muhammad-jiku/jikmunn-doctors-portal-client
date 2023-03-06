import React from 'react';

//  internal imports
import Info from '../../components/Home/Info/Info';
import Banner from '../../components/Home/Banner/Banner';
import Contact from '../../components/Home/Contact/Contact';
import Services from '../../components/Home/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import AppointmentDesc from '../../components/Home/AppointmentDesc/AppointmentDesc';

const HomeIndex = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <AppointmentDesc />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomeIndex;
