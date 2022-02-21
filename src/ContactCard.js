import React from 'react'

function ContactCard(props){
    return(
        <div>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
        </div>
    )
}

export default ContactCard;