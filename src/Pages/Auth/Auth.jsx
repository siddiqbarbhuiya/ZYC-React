import React from "react";
import Logo from "../../img/logo.png";
import "./Auth.css";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZYC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <LogIn />
    </div>
  );
};

function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }



function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            name="firstname"
            className="infoInput"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            className="infoInput"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            name="username"
            className="infoInput"
            placeholder=" Usernames"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            className="infoInput"
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmpass"
            className="infoInput"
            placeholder="Confirm Password"
          />
        </div>
        <div>
            <span style={{fontSize: '12px'}}>Already have an account. login!</span>
        </div>
        <button className="button infoButton" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Auth;
