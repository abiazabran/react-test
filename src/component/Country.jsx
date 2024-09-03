/* eslint-disable react/prop-types */

import { useState } from 'react';

const Country = ({ country, handelVisitedCountries }) => {
  const { name, flags } = country;

  const [state, setstate] = useState(false);
  const handelVisite = () => {
    setstate(!state);
  };

  return (
    <div className=''>
      <div className={`border-2 border-yellow-500 m-10 p-6 capitalize ${state && 'visited'}`}>
        <p className={`${state ? 'text-colour' : 'text-black font-bold'}`}>name : {name.common}</p>
        <img src={flags.png} alt='' />
        <div className='mt-3'>
          <button onClick={() => handelVisitedCountries(country)} className='px-3 py-2 bg-pink-300'>
            visited countrys
          </button>
        </div>
        <button className='px-3 py-2 bg-gray-300 mt-5 ' onClick={handelVisite}>
          {state ? 'visited' : 'going'}
        </button>
        <span className='px-5'>{state ? 'gura felchi' : 'jabo gurte'}</span>
      </div>
    </div>
  );
};

export default Country;
