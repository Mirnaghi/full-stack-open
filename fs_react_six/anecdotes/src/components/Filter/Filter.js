import React from 'react'
import { useDispatch } from 'react-redux';

import { filterAction } from '../../reducers/filterReducer.js';


const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const keyword = event.target.value;
    dispatch(filterAction(keyword));
    console.log(keyword);
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter;
