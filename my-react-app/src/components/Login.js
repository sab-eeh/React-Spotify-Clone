import React from "react";
import "../components/Login.css";
import SpotifyIcon from "../components/Icons/SpotifyIcon.png";
import Google from "../components/Icons/Google.png";
import Facebook from "../components/Icons/Facebook.png";
import Apple from "../components/Icons/Apple.png";

const Login = () => {
  return (
    <>
      <div className="main-container d-flex justify-content-center px-5 py-4">
        <div className="login-container d-flex justify-content-center py-4">
          <div>
            <img className="Spotify-icon" src={SpotifyIcon} alt="" />
          </div>
          <h2>Log in to Spotify</h2>
          <div className="d-flex buttons py-4">
            <button>
              <div className="d-flex">
                <img style={{ width: "30px" }} src={Google} alt="" />
                <p>Continue with Google</p>{" "}
              </div>
            </button>
            <button>
              <div className="d-flex">
                <img style={{ width: "37px" }} src={Facebook} alt="" />
                <p>Continue with Facebook</p>{" "}
              </div>
            </button>
            <button>
              <div className="d-flex">
                <img
                  style={{ width: "26px", paddingBottom: "5px" }}
                  src={Apple}
                  alt=""
                />{" "}
                <p>Continue with Apple</p>{" "}
              </div>
            </button>
          </div>
          <hr />
          <form className="d-flex" action="">
            <div className="form-fields d-flex ">
              <div className="email-field ">
                <label htmlFor="Email or username">Email or username</label> <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email or username"
                />
              </div>
              <div>
                <label htmlFor="Password">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login-btn">
              <button>Log In</button>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot your password?</a>
            </div>
          </form>
          <div className="d-flex sign-up">
            <div>
              <p>Don't have an account?</p>
            </div>
            <div>
              <a href="#">Sign up for Spotify</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <p>
          This site is protected by reCAPTCHA and the Google
          <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>
          apply.
        </p>
      </div>
    </>
  );
};

export default Login;
