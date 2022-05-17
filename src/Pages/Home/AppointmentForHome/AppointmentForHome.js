import React from 'react';
import doc from '../../../assets/images/doctor.png';
import Button from '../../Shared/Button/Button';

function AppointmentForHome() {
  return (
    <div className="flex bg-appointment-image bg-cover bg-center bg-no-repeat justify-center items-center my-24">
      <div className="flex-1 hidden lg:block">
        <img src={doc} alt="" className="mt-[-200px]" />
      </div>
      <div className="flex-1 text-white container mx-auto p-6">
        <h1 className="text-primary text-2xl font-bold mb-2">Appointment</h1>
        <h1 className="text-4xl font-bold mb-2">Make an appointment Today</h1>
        <p className="my-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <Button>get started</Button>
      </div>
    </div>
  );
}

export default AppointmentForHome;
