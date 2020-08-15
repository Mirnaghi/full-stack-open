import React, { useState, useEffect} from 'react';
import InputField from '../InputField/InputField';
import './App.css';
import FilterField from '../FilterField/FilterField';
import FilterResult from '../FilterResult/FilterResult';
import axios from 'axios';
import Contact from '../Contact/Contact';


const App = () => {
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState({name: '', number: '', id: ''});
    const [filteredContacts, setFilteredContacts] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // setContacts(contacts.concat(newContact));
        // setNewContact({name: '', number: ''});
        console.log(event.target.value);
        axios
            .post('http://localhost:3001/persons', newContact)
            .then(response => setContacts(contacts.concat(response.data)));

    } 

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewContact({name: event.target.value, number: newContact.number});
    }

    const handleNumberChange = (event) => {
        setNewContact({name: newContact.name, number: event.target.value});
    }

    const deleteContact = contact => {
        // const selectedContact = contacts.find(contact => contact.id === id);
        const id = contact.id;
        if(window.confirm(`Do yoou want to delete ${contact.name}`)){
        axios
            .delete(`http://localhost:3001/persons/${id}`)
            .then(response => {
                console.log("Response of delete: ", response);
                
                setContacts(contacts.filter(contact => contact.id !== id));
            });     
         } // setContacts(contacts.map(contact => contact.id !== id));    
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

    useEffect(()=>{
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setContacts(response.data);
                console.log(response);
           });
    }, [])

    return (
        <div className="App">
            <h1>PhoneBook</h1>
            <FilterField handleFilterChange={handleFilterChange}/>
            <FilterResult result={filteredContacts}/>
            <InputField handleNameChange={handleNameChange}
                        handleNumberChange={handleNumberChange}
                        handleSubmit={handleSubmit}/>
            {contacts.map(contact => {
            console.log("Id of contact",contact.id);
            return <Contact contact={contact} deleteContact={() => deleteContact(contact)}/>;
        
        })}            
            
        </div>
    );
}

export default App;