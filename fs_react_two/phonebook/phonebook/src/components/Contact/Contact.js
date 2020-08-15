import React from 'react';

const Contact = ({contact, deleteContact}) => {
    return (
        <div key={contact.id}>
            <p style={{display: "inline"}}>{contact.name} {contact.number}</p><span><button onClick={deleteContact}>delete</button></span>
        </div>
    );
}

export default Contact;