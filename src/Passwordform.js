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
    const [bgcolors, setBgcolors] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        parameters.letters = (/[A-Z]+/.test(password)) ? true : false;
        parameters.numbers = (/[0-9]+/.test(password)) ? true : false;
        parameters.special = (/[!\\"$%&/()=?@~`\\.\\';:+=^*_-]+/.test(password)) ? true : false;
        parameters.count = (password.length > 4) ? true : false;
        // console.log(parameters);
        const { count, numbers, letters, special } = parameters;
        const strengthbar = () => {
            if (password.length <= 2) {
                setMessage("")
                setLength(0);
            }
            if (!count && password.length > 2) {
                setLength(0.5);
                setMessage("Too weak");
                setBgcolors("red");

            }

            if (count) {
                setLength(1);
                setMessage("Weak");
                setBgcolors("#DA3434");
                // console.log(count, length, message);
            }
            if ((count && numbers) || (count && letters) || (count && special)) {
                setLength(2);
                setMessage("Average");
                setBgcolors("orange");
                // console.log(count, length, message);
            }
            if ((count && numbers && letters) || (count && letters && special) || (count && numbers && special)) {
                setLength(3);
                setMessage("Strong");
                setBgcolors("blue");
                // console.log(count, length, message);
            }
            if (count && numbers && special && letters && password.length >= 12) {
                setLength(4);
                setMessage("Excellent");
                setBgcolors("green");
                // console.log(count, length, message);
            }
        }

        strengthbar();


    }, [password, length, message]);




    const visible = () => {
        setShow(!show);
    }

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

    const style2 = () => ({
        fontSize: '10px',
        position: 'absolute',
        color: `${bgcolors}`,
        top: '23px',
        fontWeight: '900',
        right: '35 %',
    })

    return (
        <div>
            {/* logic comes here */}

            <div className="itstransparent">
                <span className="txtclr">Password</span><span className="starclr">*</span>
                <Card count={parameters.count} message={message} length={length} style={style()} style2={style2()} />
                <input type={show ? "text" : "password"} name="password" onChange={checkpasswords} placeholder="Password " autoComplete="off" />
                <i className={show ? "fa fa-eye" : "fa fa-eye-slash"} onClick={visible} aria-hidden="true"></i>


                <div>
                    <p className="para">Minimum of 6 characters,with upper and lower case and a number,or a symbol</p>
                </div>

            </div>

        </div>
    )
}
