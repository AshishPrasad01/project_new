import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>web developer and e-learning developer</h1>
        <Typed
          className="typed-text"
          strings={["This is Ashish", "A Web Developer", "Front End Developer", "E-learning Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts"  className="btn-main-offer">contact me</Link>
      </div>
    </div>
  )
}

export default Header;
