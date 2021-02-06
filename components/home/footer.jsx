import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = ({}) => {
  return (
    <div className="footer-container">
      <div className="socials flex">
        <Link href="https://www.facebook.com/pages/category/Restaurant/Pycha-Micha-107978534326545/">
          <a target="_blank">
            <div id="face"></div>
            <Image
              src="/images/social-svg/facebook.svg"
              alt="facebook"
              height="100px"
              width="100px"
            />
          </a>
        </Link>
        <Link href="tel:+48-33-852-12-12">
          <a>
            <div id="call-us"></div>
            <Image
              src="/images/social-svg/phonecall.svg"
              alt="Call-us"
              height="100px"
              width="100px"
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/restauracjapycha/">
          <a target="_blank">
            <div id="insta"></div>
            <Image
              src="/images/social-svg/instagram.svg"
              alt="instagram"
              height="100px"
              width="100px"
            />
          </a>
        </Link>
      </div>
      <div class="author flex">
        <p>
          {" "}
          © Designed & Developed by
          <Link href="https://hracki.pl">
            <a>MH</a>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Footer;
