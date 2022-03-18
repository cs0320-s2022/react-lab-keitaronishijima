import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';


type tBox ={
    label : string;
    change: (str: string) => void
}


function TextBox(props: tBox) {
return (
    <div>
        <label> {props.label} </label>
        <input type={'text'} onChange={event => props.change(event.target.value)}></input>
    </div>
    );
}

export default TextBox;