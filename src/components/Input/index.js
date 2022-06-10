import React from 'react';

export function Input(props){

    // console.log(props.theValue)
    return <input type="text" onChange={props.theValue}></input>
}

