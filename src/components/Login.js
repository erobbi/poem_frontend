import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainContainer from "./MainContainer";

const Login = () => {
  const [user, setUser] = useState("");

  function handleClick() {}

  return (
    <div>
      <h6>WELCOME TO PO(tato)EMS</h6>
      <div id="login" className="ui form">
        <div className="field">
          <label>Please enter Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            maxLength="20"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <Link to="/poem">
        <div onClick={handleClick} className="ui submit button">Submit</div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
