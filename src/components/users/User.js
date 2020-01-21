import React, { Component } from 'react';

// This is where you set props and add whichever html and props values 
const User = (props) => {
    let age = props.age ? props.age : 'NA';

    // return child components if props is not null
    if (props.children) {
        return ( <div>{props.children} | Age: {age} </div>)
    }
    else {
        return <div>Invalid Entry. No chidlren values</div>
    }
}

// Arrow function User = (props) is the same as User = function (props) {}

export default User;