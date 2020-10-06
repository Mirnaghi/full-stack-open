import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import anecdotesReducer, { addAnecdote } from './anecdoteReducer.js';
import notificationReducer from './notificationReducer.js'
import filterReducer from './filterReducer.js';

import { addNotification } from './notificationReducer.js';

import { composeWithDevTools } from 'redux-devtools-extension';

import { getAnecdotes } from '../services/anecdoteServices';


// combine reducers
const reducer = combineReducers({
    anecdotes: anecdotesReducer,
    notification: notificationReducer,
    filter: filterReducer
});

// store
export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

// add notification
store.dispatch(addNotification("New test notification"));

// get all anecdotes from server and save to store
// getAnecdotes().then( anecdotes => {
//     anecdotes.forEach(anecdote => {
//         store.dispatch(addAnecdote(anecdote));
//     })
// })