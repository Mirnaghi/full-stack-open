import React from 'react';
import { useEffect } from 'react';
import Anecdotes from '../Anecdotes/Anecdotes'
import InputField from '../InputField/InputField';
import Notification from '../Notification/Notification';
import Filter from '../Filter/Filter.js';

import { useDispatch, useSelector } from 'react-redux';

import { addAnecdote } from '../../reducers/anecdoteReducer';
import { getAnecdotes } from '../../services/anecdoteServices';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAnecdote);
  }, [dispatch]);


  return (
    <div className="App">
      <Notification />
      <Filter />
      <InputField />
      <Anecdotes />
    </div>
  );
}

export default App;
