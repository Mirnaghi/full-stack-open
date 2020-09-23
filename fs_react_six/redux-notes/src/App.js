import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

// create  reducer
const noteReducer = (state = [], action) => {
    switch(action.type){
	case "ADD_NOTE":
	     return state.concat(action.data);
	     break;
        case 'TOGGLE_IMPORTANCE':
	     const id = action.data.id;
             const noteToChange = state.find(n => n.id === id);
             const newNote = {...noteToChange, important: !noteToChange.important};
             return state.map(n => n.id !== id ? n : newNote );
             break;
	default:
	     return state;
	     break; 
   }	
}

// create store 
const store = createStore(noteReducer);


// dispatch action
store.dispatch({
    type: 'ADD_NOTE',
    data: {
	content: 'the app state is in redux store',
        important: true,
        id: 1
    }
})


store.dispatch({
    type: 'ADD_NOTE',
    data: {
        content: 'state changes are made with actions',
        important: false,
        id: 2
    }
})

store.dispatch({
    type: 'TOGGLE_IMPORTANCE',
    data: { id: 2}
})

function App() {
  return(
    <div className="App">
  	<ul>
	  {store.getState().map(note => { return (<li key={note.id}>{note.content} <b>{note.important ? 'important' : ''}</b></li>); })}
	</ul>
    </div>
   );
}

export default App;
