import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer_line">
      <div className="Footer">
        <div className="footer_info">
          <p >Privacy Policy l</p>
          <p >Terms of Use l</p>
          <p >Contact</p>
          <div>© 2018 MMreQ, all rights reserved.</div>
        </div>

        <div className="social">
            <ul>
              <li className="twitter">
                <a href="http://twitter.com">Twitter</a>
              </li>
              <li className="facebook">
                <a href="http://www.facebook.com">Facebook</a>
              </li>
              <li className="rss">
                <a href="http://www.facebook.com">Subscribe via RSS</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

      