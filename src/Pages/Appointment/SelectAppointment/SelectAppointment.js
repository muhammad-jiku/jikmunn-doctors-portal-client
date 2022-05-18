import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentService from '../AppointmentService/AppointmentService';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

function SelectAppointment({ date }) {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="my-6">
      <h1 className="text-xl text-center text-secondary font-bold">
        Available Services on {format(date, 'PP')}
      </h1>
      <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 md:px-12">
        {services?.map((service) => (
          <AppointmentService
            key={service?._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
}

export default SelectAppointment;
