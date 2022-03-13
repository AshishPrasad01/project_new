import React from "react";
import profilepic from "../me.jpg";



const AboutMe = () => {
  return (
    <div id="about" className=" " >
      <div className="row header-wr">
        
        <div className="col-lg-6 col-xm-12 ">
          <div className="photo-wrap py-5  mb-5 ">
          
            <img className="profile-img "photo-wrapone  src={profilepic} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p className="text-white centertext">
          
         I am a developer who loves the Web-development and want to be a part of a great organization.
          
         I’m a self-motivated person and a team player. I look forward to new challenges.
          </p>

          <button className= "btn btn-warning">
          <a  href ="AshishResume.pdf">Resume</a>
          </button>
        
        </div>
      </div>
    </div>
  )
}

export default AboutMe
