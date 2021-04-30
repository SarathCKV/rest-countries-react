import React from 'react';
import { Link } from 'react-router-dom';
import './GridItem.css';

const GridItem = ({ country: { name, region, population, flag, capital } }) => {
  return (
    <div className='grid'>
      <div className='grid-image'>
        <img src={flag} alt={name} />
      </div>
      <div className='grid-body'>
        <Link to={`/name/${name.toLowerCase()}`}>
          <h3>{name}</h3>
        </Link>
        <p>Population: {population.toLocaleString('en-US')}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital === '' ? <b>NA</b> : capital}</p>
      </div>
    </div>
  );
};

export default GridItem;
