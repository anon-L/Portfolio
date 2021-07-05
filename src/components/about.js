import Neuf from "../img/neuf.jpeg";
import { useRef } from "react";
import { useEffect, forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ width: "98.5vw", height: "auto" }}>
      <h1>About
        <div style= {{ height:1080}}></div>
      </h1>
      {/* <img src={} alt="" style={{ maxWidth: "50%", height: "auto" }}></img> */}
    </div>
  );
});

export default About;
