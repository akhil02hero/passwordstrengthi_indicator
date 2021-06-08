import React from 'react'
import './Passwordform.css';

export default function Card(props) {
    console.log(props.length);


    return (
        <div>
            <h1 className="txt" style={props.style2}>{props.message}</h1>
            <div className="progessbar">
                <div className="progressbg" style={props.style}>
                </div>
            </div>
        </div>
    )
}
