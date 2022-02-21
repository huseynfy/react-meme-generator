import React from 'react'
import './App.css'

function Tweet({name,message}){
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <h5>{message}</h5>
            <h6>Retweet</h6>
        </div>
    );
}

export default Tweet;