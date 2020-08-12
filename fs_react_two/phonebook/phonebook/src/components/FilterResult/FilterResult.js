import React from 'react';


const FilterResult = ({result}) => {
    if(result.length !== 0){
        return (
            <div>
                {result.map(contact => <p>{contact.name} {contact.number}</p>)}
            </div>    
        );
    }
    return <p></p>;   
}

export default FilterResult;