import React from 'react'
import './RightFooter.css'

const MainFooter = () => {
  return (
    <div>
         <footer className="right-footer">
      <div className="right-footer-container">
        {/* Company Section */}
        <section className="right-footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/record">For the Record</a></li>
          </ul>
        </section>

        {/* Communities Section */}
        <section className="right-footer-section">
          <h4>Communities</h4>
          <ul>
            <li><a href="/artists">For Artists</a></li>
            <li><a href="/developers">Developers</a></li>
            <li><a href="/advertising">Advertising</a></li>
            <li><a href="/investors">Investors</a></li>
            <li><a href="/vendors">Vendors</a></li>
          </ul>
        </section>

        {/* Useful Links Section */}
        <section className="right-footer-section">
          <h4>Useful links</h4>
          <ul>
            <li><a href="/support">Support</a></li>
            <li><a href="/mobile-app">Free Mobile App</a></li>
          </ul>
        </section>

        {/* Spotify Plans Section */}
        <section className="right-footer-section">
          <h4>Spotify Plans</h4>
          <ul>
            <li><a href="/premium-individual">Premium Individual</a></li>
            <li><a href="/premium-duo">Premium Duo</a></li>
            <li><a href="/premium-family">Premium Family</a></li>
            <li><a href="/premium-student">Premium Student</a></li>
            <li><a href="/spotify-free">Spotify Free</a></li>
          </ul>
        </section>
          {/* Social Icons */}
      <div className="right-footer-social">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      </div>
      <hr />
      {/* Footer Bottom */}
      <div className="right-footer-bottom">
        <p>&copy; 2024 Spotify AB</p>
      </div>
    </footer>
      
    </div>
  )
}

export default MainFooter

