import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const doctorPage = () => {
  const [doctor, setDoctor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // use the useParams hook in React Router to allow us to access dynamic segments in our dynamic route
  const params = useParams();
  // our dynamic segment was called doctorId, so we can access it as follows:
  const doctorId = params.doctorId;

  // now simply use useEffect to fetch the doctor's data

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchDoctorDetails = async () => {
      try {
        // send an HTTP GET request to the get doctors route we defined in our Express REST API
        const response = await fetch(
          `https://vmh.azurewebsites.net/doctors/${doctorId}`,
          {
            signal: fetchSignal
          }
        );
        // parse the response content to JSON and store it into data variable
        const data = await response.json();

        // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
        if (!response.ok) {
          // remember, in our REST API we return an error message in our response that has the key 'error'.
          throw Error(data.error);
        }

        // we now need to set our component state to the doctors we fetched
        setDoctor(data.doctor);

        // after we set the doctors' state, let's set the loading state to false
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchDoctorDetails();

    return () => {
      fetchAbortController.abort();
    };
  }, [doctorId]);

  if (isLoading) {
    return <h1>Please wait while loading doctor details...</h1>;
  }

  if (!doctor) {
    return <h1>Couldn't find doctor...</h1>;
  }

  const btnOnClickHandler = () => {
    navigate(`/doctors/${props.doctor._id}/review`);
  };

  return (
    <div className="flex justify-center items-center w-screen gap-8 flex-wrap">
      <div className="flex flex-col justify-center items-center gap-10 bg-sky-800 text-white py-16 min-w-[500px] rounded-3xl">
        <h1 className="font-bold text-4xl">{doctor.name}</h1>
        <h2 className="font-bold">{doctor.specialization}</h2>
        <h3 className="text-lg font-bold">{doctor.location}</h3> 
        <button
          className="bg-white py-3 px-10 font-bold rounded-xl"
          onClick={btnOnClickHandler}
        >
          Give Review
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 bg-sky-800 text-white py-16 min-w-[500px] rounded-3xl">
        <h3 className="text-lg font-bold">Working Days: {doctor.schedule.workDays}</h3>
        <h3 className="text-lg font-bold">Working Hours: {doctor.schedule.workHours}</h3>
        <p className="text-lg">{doctor.reviews}</p> 
      </div>
    </div>
  );
};

export default doctorPage;
