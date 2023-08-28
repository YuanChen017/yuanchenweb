import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        Copyright <span>&#169;</span> 2023
      </div>
      <div className="sociallogo">
        <a
          href="https://www.facebook.com/profile.php?id=100022477892976&mibextid=LQQJ4d"
          without
          rel="noreferrer"
          target="_blank"
          className="fa fa-facebook"
        >
          {" "}
        </a>
        <a
          href="https://instagram.com/yuanc710?igshid=OGQ5ZDc2ODk2ZA=="
          without
          rel="noreferrer"
          target="_blank"
          className="fa fa-instagram"
        >
          {" "}
        </a>
        <a
          href="https://www.linkedin.com/in/yuan-chen-5862a4254/"
          without
          rel="noreferrer"
          target="_blank"
          class="fa fa-linkedin"
        >
          {" "}
        </a>
      </div>
    </div>
  );
};
export default Footer;
