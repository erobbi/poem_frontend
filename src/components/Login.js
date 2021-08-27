import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainContainer from "./MainContainer";
import potato from "../images/potato.png";

const Login = () => {
  const [user, setUser] = useState("");

  function handleClick() {}

  return (
    <div>
      <h6>Welcome To PO(tato)EMS</h6>
      <img src={potato} alt="Potato"></img>
      <div id="login" className="ui form">
        <div className="field">
          <h1>Please enter Username</h1>
          <input
            id="username"
            type="text"
            placeholder="Username"
            maxLength="20"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <Link to="/poem">
          <div onClick={handleClick} className="ui submit button">
            Submit Name
          </div>
        </Link>
        <Link to="/poem">
          <div onClick={handleClick} className="ui submit button">
            Proceed as Anonymous
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
