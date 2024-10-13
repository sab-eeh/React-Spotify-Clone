import React from "react";
import homelogo from "./Icons/homepage.png";
import SpotifyIcon from "./Icons/SpotifyIcon.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const handleHome = () => {
    navigate("/Home");
  };

  return (
    <>
      <div className="css-navbar px-3 py-2 d-flex justify-content-between">
        <div>
          <img
            onClick={handleHome}
            style={{ cursor: "pointer" }}
            className="spotify-icon"
            src={SpotifyIcon}
            alt=""
          />
        </div>
        <div className="d-flex navbar-middle">
          <div
            onClick={handleHome}
            style={{ cursor: "pointer" }}
            className="d-flex home-div"
          >
            <img src={homelogo} alt="" />
          </div>
          <input
            id="searchbar"
            className="form-control me-2"
            type="search"
            placeholder="What do you want to play?"
            aria-label="Search"
          />
        </div>
        <div className="d-flex nav-buttons">
          <button className="btn signup" onClick={handleSignUp}>
            Sign Up
          </button>
          <button className="btn login" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
