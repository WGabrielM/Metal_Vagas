import React from "react";
import "./style/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__copy">
        <p>
          Copyright © 2023 <span>MetalVagas</span>
        </p>
      </div>
      <div className="footer__social">
        <img src="/public/images/Footer/Facebook.png" alt="Facebook" />
        <img src="/public/images/Footer/Twitter.png" alt="Twitter" />
        <img src="/public/images/Footer/Instagram.png" alt="Instagram" />
        <img src="/public/images/Footer/Linkedin.png" alt="Linkedin" />
        <img src="/public/images/Footer/Youtube.png" alt="Youtube" />
      </div>
    </div>
  );
}
