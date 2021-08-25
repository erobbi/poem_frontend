import React from 'react';
import { useState } from 'react';

const Login = () => {

const [user, setUser] = useState("");

    function handleClick() {
        fetch('http://localhost:9292/authors', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: `${user}`
            })
        })
    }
        

    return (
    <div>
        <h6>
            WELCOME TO *SITE NAME*
        </h6>
            <div id="login" className="ui form">
                <div className="field">
                    <label>Please enter Username</label>
                    <input id="username" type="text" placeholder="Username" maxLength="20" onChange={(e) => setUser(e.target.value)} required/>
                </div>
            <div onClick={handleClick}className="ui submit button">Submit</div>
        </div>
    </div>
        
    );
}

export default Login;
