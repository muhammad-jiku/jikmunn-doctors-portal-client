import React from 'react';
import AppointmentForHome from '../AppointmentForHome/AppointmentForHome';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Info from '../Info/Info/Info';
import Services from '../Services/Services/Services';
import TestimonialsForHome from '../TestimonialsForHome/TestimonialsForHome/TestimonialsForHome';

function Home() {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <AppointmentForHome />
      <TestimonialsForHome />
      <ContactForm />
    </div>
  );
}

export default Home;
