import React from 'react';

export function Item(props){
    return <li style = {{fontFamily: `${props.font}`}}>{props.theText}</li>
}