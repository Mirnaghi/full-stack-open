import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import './App.css';
import FilterField from '../FilterField/FilterField';
import FilterResult from '../FilterResult/FilterResult';


const App = () => {
    const [contacts, setContacts] = useState([{ name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }]);
    const [newContact, setNewContact] = useState({name: '', number: ''});
    const [filteredContacts, setFilteredContacts] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setContacts(contacts.concat(newContact));
        setNewContact({name: '', number: ''});
        console.log(event.target.value);
    } 

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewContact({name: event.target.value, number: newContact.number});
    }

    const handleNumberChange = (event) => {
        setNewContact({name: newContact.name, number: event.target.value});
    }

    
    const handleFilterChange = (event) => {
        const term = event.target.value;
        let filtered;
        if(term === '' || term === ' '){
            filtered = [];
        } else {
            filtered = contacts.filter(contact => contact.name.includes(term, 0));
        }
        
        console.log(filtered);
        setFilteredContacts(filtered);
        console.log(typeof term);
    }

    return (
        <div className="App">
            <h1>PhoneBook</h1>
            <FilterField handleFilterChange={handleFilterChange}/>
            <FilterResult result={filteredContacts}/>
            <InputField handleNameChange={handleNameChange}
                        handleNumberChange={handleNumberChange}
                        handleSubmit={handleSubmit}/>
            {contacts.map(contact => <p>{contact.name} {contact.number}</p>)}            
            
        </div>
    );
}

export default App;