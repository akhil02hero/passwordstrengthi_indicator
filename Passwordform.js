import React, { useEffect, useState } from 'react'
import Card from './Card';
import './Passwordform.css';
// import './App.css'
export default function Passwordform() {

    let parameters = {
        count: false,
        letters: false,
        numbers: false,
        special: false
    }

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(0);
    const [message, setMessage] = useState("");
    const [bgcolors, setBgcolors] = useState('')

    useEffect(() => {
        parameters.letters = (/[A-Z]+/.test(password)) ? true : false;
        parameters.numbers = (/[0-9]+/.test(password)) ? true : false;
        parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password)) ? true : false;
        parameters.count = (password.length > 6) ? true : false;
        // console.log(parameters);
        const { count, numbers, letters, special } = parameters;
        const strengthbar = () => {
            if (password.length <= 2) {
                setMessage("")
            }
            if (!count && password.length > 2) {
                setLength(0.5);
                setMessage("Too Low");
            }

            if (count) {
                setLength(1);
                setMessage("Very Low");
                setBgcolors("red");
                // console.log(count, length, message);
            }
            if ((count && numbers) || (count && letters) || (count && special)) {
                setLength(2);
                setMessage("Low");
                setBgcolors("orange");
                // console.log(count, length, message);
            }
            if ((count && numbers && letters) || (count && letters && special) || (count && numbers && special)) {
                setLength(3);
                setMessage("Good");
                setBgcolors("yellow");
                // console.log(count, length, message);
            }
            if (count && numbers && special && letters && password.length >= 12) {
                setLength(4);
                setMessage("Better");
                setBgcolors("green");
                // console.log(count, length, message);
            }
        }

        strengthbar();


    }, [password, length, message]);





    const checkpasswords = (e) => {
        console.log(password);
        setPassword(e.target.value);
    }

    // console.log(length);
    const style = () => ({
        width: `${(length) * 100 / 4}%`,
        height: '100%',
        background: `${bgcolors}`,
        borderRadius: '50px',
    })

    return (
        <div>
            {/* logic comes here */}

            <div className="itstransparent">
                <Card count={parameters.count} length={length} style={style()} />
                <input type="text" name="password" onChange={checkpasswords} placeholder="Password " autoComplete="off" />
                <h1 className="txt">{message}</h1>

            </div>

        </div>
    )
}
