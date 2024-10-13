import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpBar = () => {
  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate("/SignUp");
  };
  return (
    <>
      <div className="bottom-bar d-flex  ">
        <div className="context">
          <h6>Preview of Spotify</h6>
          <p>
            Sign up to get unlimited song and podcasts with occasional ads. No
            credit card neended.
          </p>
        </div>
        <div>
          <button onClick={handleSignUp} className="sign-up-btn">
            Sign up free
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpBar;
