import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
        <footer>
      <div className="footer-row">
        <section>
          <h4>OUR STORE</h4>
          <p>Address: 500 Terry Francois</p>
          <p>Street San Francisco, CA 94158</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@mysite.com</p>
        </section>
        <section>
          <h4>OPENING HOURS</h4>
          <p>Mon - Fri: 7am - 10pm</p>
          <p>​​Saturday: 8am - 10pm</p>
          <p>Sunday: 8am - 11pm</p>
        </section>
        <section>
          <h4>HELP</h4>
          <ul className="footer-nav">
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="./faq">FAQ</a></li>
          </ul>
        </section>
      </div>
      <div className="subscription-box">
        <h4>Subscribe</h4>
        <form>
          <label>
            Enter your email here *
            <br />
            <input type="email" name="email" />
          </label>
          <button type="submit" className="button">Subscribe Now</button>
        </form>
      </div>
      <div className="social-container">
        <a href="https://www.facebook.com/wix" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://pinterest.com/wixcom/" target="_blank">
            <FontAwesomeIcon icon={faPinterestP} />
        </a>
        <a href="https://instagram.com/wix" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3161.592424773046!2d-0.1296286682753022!3d51.500461174252536!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1638631095901!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%)' }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
      <p className="footer-text">
        © 2023 Created by Berkeli H for educational purposes, inspired by 
        <a href="https://www.wix.com/website-template/view/html/1995" target="_blank"> Wix.com template</a>
      </p>
    </footer>
  );
};

export default Footer;
