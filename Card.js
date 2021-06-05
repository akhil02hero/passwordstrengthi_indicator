import React from 'react'
import './Passwordform.css';

export default function Card(props) {
    console.log(props.length);


    return (
        <div>
            <div className="progessbar">
                <div className="progressbg" style={props.style}>
                </div>
            </div>
        </div>
    )
}
