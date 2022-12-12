import { useState, useEffect } from 'react';

import insertDoctor from '../components/doctors/insertDoctor';

const insertDoctorPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      try {
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchProducts();

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <insertDoctor />
    </div>
  );
};

export default insertDoctorPage;
