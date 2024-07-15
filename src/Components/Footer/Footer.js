import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h3>About Us</h3>
        <p>
          At Candel's Home, we create premium aromatic candles designed to
          elevate your living space with delightful fragrances. Our candles are
          handcrafted with the finest ingredients, ensuring a long-lasting and
          enjoyable experience.
        </p>
      </div>
      <div>
        <h3>Contact Us</h3>
        <ul>
          <li>
            <span>Email:</span> support@candelshome.app
          </li>
          <li>
            <span>Phone:</span> +1 (123) 456-7890
          </li>
        </ul>
      </div>
      <div>
        <h3>Follow Us</h3>
        <p>Stay connected with us through social media</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/">
            <FaFacebook size="40" color="white" />
          </a>
          <a href="https://www.twitter.com/">
            <FaTwitterSquare size="40" color="white" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size="40" color="white" />
          </a>
        </div>
      </div>
      <div>
        <h3>Customer Service</h3>
        <ul>
          <a href="https://www.privacypolicies.com/live/07e81a53-fd9a-4c8c-9858-ebeda93be437">
            <li>Privacy Policy</li>
          </a>
          <a href="https://www.termsfeed.com/live/b472208b-9f57-41e1-824a-fbed12092201">
            <li>Terms of Service</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
