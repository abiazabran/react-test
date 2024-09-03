/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useState } from 'react';
import Country from './Country';

const State = () => {
  const [countrys, setCountrys] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);

  const [visitedCountrys, setVisitedCountriys] = useState([]);
  const handelVisitedCountries = (country) => {
    const visiteNewCountry = [...visitedCountrys, country];
    setVisitedCountriys(visiteNewCountry);
  };

  // eslint-disable-next-line react/jsx-key
  return (
    <div className='flex justify-between'>
      <div className=' grid grid-cols-3'>
        {countrys.map((country) => (
          // eslint-disable-next-line react/jsx-key
          <Country handelVisitedCountries={handelVisitedCountries} key={country.cca3} country={country}></Country>
        ))}
      </div>
      <div className='w-[250px] h-auto mt-9 font-bold text-xl border-2 border-red-300 text-center'>
        <span className=' sticky top-0 bg-white'>
          <h1 className='pt-2'>visited country : {visitedCountrys.length} </h1>

          <div className='text-justify p-2'>
            {visitedCountrys.map((vcan) => (
              <li key={vcan.cca3}>{vcan.name.common}</li>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
};

export default State;
