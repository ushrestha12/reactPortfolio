import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>About Me</h1>
        <p>
        I am a full-time student at wake-tech pursing my education in web developer as to pursue career opportunities in the world of technology. In my free time, I love to bake while listening to good music and read books
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      
    </div>
  );
};

export default AboutContent;
