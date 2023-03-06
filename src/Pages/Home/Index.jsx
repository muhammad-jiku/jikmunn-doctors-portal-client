import React from 'react';
import AppointmentDesc from '../../components/Home/AppointmentDesc/AppointmentDesc';
import Banner from '../../components/Home/Banner/Banner';
import Contact from '../../components/Home/Contact/Contact';
import Info from '../../components/Home/Info/Info';
import Services from '../../components/Home/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';

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
