import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TrendList.css';

const TrendList = () => {
  return (
    <div className='trendlist-container'>
      <h3 className='list-category'>Tendances</h3>
      <Link to='/matchroom/trending/day'><div className='trendlist-day'>Du jour</div></Link>
      <Link to='/matchroom/trending/week'><div className='trendlist-week'>De la semaine</div></Link>
    </div>
  );
};

export default TrendList;
