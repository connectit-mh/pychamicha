import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = ({}) => {
  return (
    <div className="footer-container">
      <div className="socials flex">
        <Link href="https://www.facebook.com/pages/category/Restaurant/Pycha-Micha-107978534326545/">
          <a id="face" target="_blank">

          </a>
        </Link>
        <Link href="tel:+48-33-852-12-12">
          <a id="call-us">
           
          </a>
        </Link>
        <Link href="https://www.instagram.com/restauracjapycha/">
          <a id="insta" target="_blank">

          </a>
        </Link>
      </div>
      <div class="author flex">
        
        <p> © Designed & Developed by  
          <Link href="https://hracki.pl">
             <a>MH</a>
          </Link>
          </p> 
      </div>
    </div>
  );
};
export default Footer;
