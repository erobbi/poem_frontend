import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import MainContainer from './MainContainer';

const Login = () => {

const [user, setUser] = useState("");

    function handleClick() {
        // fetch('http://localhost:9292/authors', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         name: `${user}`
        //     })
        // })

    }
        

    return (
    <div>
        <h6>
            WELCOME TO FLAT.POEMS
        </h6>
            <div id="login" className="ui form">
                <div className="field">
                    <label>Please enter Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        placeholder="Username" 
                        maxLength="20" 
                        onChange={(e) => setUser(e.target.value)} required/>
                </div>
            <div 
                onClick={handleClick} 
                className="ui submit button"
            >
            <Link to="/poem">
                Submit
            </Link>
            </div>
        </div>
    </div>
        
    );
}

export default Login;