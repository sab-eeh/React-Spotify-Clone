import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PlayButton from "./Icons/PlayButton.png";
import "./Modal.css";
import MainFooter from "./MainFooter";

function RightSection() {
  const navigate = useNavigate();
  const [showModal, SetShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const OpenModal = (src) => {
    setSelectedImage(src)
    SetShowModal(true);
  };
  const CloseModal = () => {
    setSelectedImage(null)
    SetShowModal(false);

  };
  const images = [
    {
      src: require("../assests/images/image-1.jpeg"),
      title: "Pritam",
      description: "Artist",
    },
    {
      src: require("../assests/images/image-2.jpeg"),
      title: "Atif Aslam",
      description: "Artist",
    },
    {
      src: require("../assests/images/image-3.jpg"),
      title: "Arijit Singh",
      description: "Artist",
    },
    {
      src: require("../assests/images/image-4.jpg"),
      title: "Karan Aujla",
      description: "Artist",
    },
    {
      src: require("../assests/images/image-5.jpeg"),
      title: "Shubh",
      description: "Artist",
    },
    {
      src: require("../assests/images/image-6.jpg"),
      title: "Diljit Dosanjh",
      description: "Artist",
    },
    {
      src: require("../assests/images/image-7.jpeg"),
      title: "Jhol",
      description: "Mannu,Annural Khalid",
    },
    {
      src: require("../assests/images/image-8.jpeg"),
      title: "Jo Tum Mere Ho",
      description: "Anuv Jain",
    },
    {
      src: require("../assests/images/image-9.jpeg"),
      title: "Making Memories",
      description: "Karan Aujla, Ikky",
    },
    {
      src: require("../assests/images/image-10.jpeg"),
      title: "Still Rollin",
      description: "Shubh",
    },
    {
      src: require("../assests/images/image-11.jpeg"),
      title: "ROCKSTAR WITHOUT A G...",
      description: "Umair",
    },
    {
      src: require("../assests/images/image-12.jpeg"),
      title: "Moosetape",
      description: "Sidhu Moose Wala",
    },
    {
      src: require("../assests/images/image-13.jpeg"),
      description: "With Mithoon,Sachin-Jigar,Atif...",
    },
    {
      src: require("../assests/images/image-14.jpeg"),
      description: "With AP Dhillon, Karan Aujla, Sidhu",
    },
    {
      src: require("../assests/images/image-15.jpeg"),
      description: "With Umair, Jokhay, Young Stunners and...",
    },
    {
      src: require("../assests/images/image-16.jpeg"),
      description: "With Karan Aujla, Varinder Brar, Shub...",
    },
    {
      src: require("../assests/images/image-17.jpeg"),
      description: "With Karan Aujla, Shubh, Sidhu Moose",
    },
    {
      src: require("../assests/images/image-18.jpeg"),
      description: "With Abida Parveen, Madhur Sharma ,...",
    },
    {
      src: require("../assests/images/image-19.jpg"),
      description: "Your weekly update of the most played...",
    },
    {
      src: require("../assests/images/image-20.jpg"),
      description: "Your weekly update of the most played...",
    },
    {
      src: require("../assests/images/image-21.jpg"),
      description: "Your daily update of the most played...",
    },
    {
      src: require("../assests/images/image-22.jpg"),
      description: "Your daily update of the most played...",
    },
    {
      src: require("../assests/images/image-23.jpg"),
      description: "Your daily update of the most viral tracks...",
    },
    {
      src: require("../assests/images/image-24.jpg"),
      description: "Your daily update of the most viral tracks...",
    },
    {
      src: require("../assests/images/image-25.jpeg"),
      description: "Kick back to the best new and recent chill...",
    },
    {
      src: require("../assests/images/image-26.jpeg"),
      description: "Sing along and enjoy the drive",
    },
    {
      src: require("../assests/images/image-27.jpeg"),
      description: "The world biggest dance & electronic...",
    },
    {
      src: require("../assests/images/image-28.jpeg"),
      description: "Rock legends & epic songs that continue...",
    },
    {
      src: require("../assests/images/image-29.jpeg"),
      description: "Just lean back and enjoy relaxed beats",
    },
    {
      src: require("../assests/images/image-30.jpeg"),
      description: "The biggest songs of the 2020s. Cover:...",
    },
  ];

  // const headings = [
  //   'Popular artists',
  //   'Popular albums',
  //   'Popular radio',
  //   'Featured Charts',
  //   'Spotify Playlists'
  // ];

  return (
    <>
      {/* RIGHT SECTION */}
      <div
        style={{
          height: "77vh",
          width: "75%",
          backgroundColor: "#121212",
          borderRadius: "8px",
          overflow: "auto",
        }}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-item ${index < 6 ? "first-six" : ""}`}
              onClick={()=>OpenModal(image)}
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              <img src={image.src} alt={image.title} />
              <div className="my-3">
                <h6>{image.title}</h6>
                <p>{image.description}</p>
              </div>
              <div className="play-button-div d-flex">
                <button>
                  <img
                    style={{ width: "22px" }}
                    src={PlayButton}
                    alt="Play button"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <MainFooter/>
      </div>

      {/* MODAL */}
      {showModal && (
        <div>
          {/* <button
            type="button"
            className="btn btn-primary "
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
          >
            Launch demo modal
          </button> */}

          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document" >
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-body d-flex">
                  <div className="modal-left-section">
                    <img src={selectedImage.src} alt="" />
                  </div>
                  <div className="modal-right-section">
                    <h3>Start listening with a free Spotify account</h3>
                    <div className="modal-buttons d-flex">
                      <button
                        onClick={() => {
                          navigate("./SignUp");
                        }}
                        className="sign-up-free-btn"
                      >
                        Sign up free
                      </button>
                      <button className="download-btn">Download app</button>
                    </div>
                    <div className="account-login  d-flex">
                      <p>Already have an account?</p>
                      <a href="">Log in</a>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <p onClick={CloseModal} style={{textAlign : "center" , position : "absolute" , left:"0" , right : "0" , paddingTop : "20px" , cursor : "pointer" }}>Close</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RightSection;


