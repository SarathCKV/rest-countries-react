import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GridItemList.css';
import GridItem from '../GridItem/GridItem';
import Spinner from '../Spinner/Spinner';

const GridItemList = ({ name, region }) => {
  useEffect(() => {
    if (region !== 'Filter by Region') {
      axios
        .get(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((res) => {
          setGridData(res.data);
        });
    } else if (name !== '') {
      axios.get(`https://restcountries.eu/rest/v2/name/${name}`).then((res) => {
        setGridData(res.data);
      });
    } else {
      axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
        setGridData(res.data);
      });
    }
  }, [name, region]);

  const [gridData, setGridData] = useState([]);

  return (
    <div className='grid-item-container'>
      {gridData.length === 0 ? (
        <Spinner />
      ) : (
        gridData.map((country, index) => (
          <GridItem country={country} key={index} />
        ))
      )}
    </div>
  );
};

export default GridItemList;
