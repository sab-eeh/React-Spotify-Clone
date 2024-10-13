import React from 'react'
import SpotifyIcon from "../components/Icons/SpotifyIcon.png";
import Google from "../components/Icons/Google.png";
import Facebook from "../components/Icons/Facebook.png";
import Apple from "../components/Icons/Apple.png";
import "../components/SignUp.css";

const SignUp = () => {
  return (
    <>
    <div className='signup-container d-flex justify-content-center px-5 py-4'>
      <div>
        <img className='Spotify-icon' src={SpotifyIcon} alt="" />
      </div>
      <h2>Sign up to <br /> start listening</h2>
      <form action="">
        <div className='signup-form d-flex'>
          <div className='signup-email d-flex'>
            <label htmlFor="Email">Email address</label>
            <input type="email" id='email' name='email' placeholder='name@domain.com' />
          </div>
          <button>Next</button>
        </div>
      </form>
      <div className='d-flex hr-div'>
        <hr />
        <p>or</p>
        <hr />
      </div>
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
        <hr className='separate' />
        <div className='login-div d-flex'>
          <p>Already have an account?</p>
          <a href="">Log in here</a>
        </div>
        <div  className='footer-div'>
        <p>
          This site is protected by reCAPTCHA and the Google
          <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>  
          apply.
        </p>
        </div>
    </div>

    </>
  )
}

export default SignUp
