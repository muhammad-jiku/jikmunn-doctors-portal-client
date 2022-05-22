import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentService from '../AppointmentService/AppointmentService';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';

function SelectAppointment({ date }) {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  // date && format(date,'PP') is used for preventing 'date-fns' error of RangeError: Invalid time value
  // const formattedDate = date && format(date, 'PP');
  const formattedDate = format(date, 'PP');

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(['available', formattedDate], () =>
    fetch(
      `https://jikmunn-doctors-portal.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) return <Spinner />;

  // useEffect(() => {
  //   fetch(`https://jikmunn-doctors-portal.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data))
  //     .catch((err) => console.log(err));
  // }, [formattedDate]);
  return (
    <div className="my-6">
      <h1 className="text-xl text-center text-secondary font-bold">
        Available Services on {formattedDate}
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
          refetch={refetch}
        />
      )}
    </div>
  );
}

export default SelectAppointment;
