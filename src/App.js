import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Projects from "./components/projects";
import { useEffect, useState, useRef } from "react";
import Chat from "./img/chat.png";
import { Waypoint } from "react-waypoint";
import Cards from "./components/cards";
import Navbar from "./components/navbar";
import About from "./components/about";
import Button from "react-bootstrap/Button";
import { motion, useViewportScroll } from "framer-motion";

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const { scrollY } = useViewportScroll();
  const goToAbout = (id) => {
    //console.log(aboutRef.current.offsetHeight);
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goToHome = (id) => {
    homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goToProject = (id) => {
    projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      //console.log(projectsRef);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      //console.log(homeRef.current.offsetTop);
      //console.log(aboutRef.current.offsetTop);
      //console.log(projectsRef.current.offsetTop);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });
  return (
    <div style={{ background: "white" }}>
      <div className="container-fluid  ">
        <Navbar
          ref={{
            ref1: homeRef,
            ref2: aboutRef,
            ref3: projectsRef,
          }}
        >
          {" "}
        </Navbar>
        <div id="home" className="row " style={{ paddingTop: 60 }}>
          <div className="col" style={{ background: "" }}>
            <div className="row " style={{ paddingLeft: 5 }}>
              <Home ref={homeRef}> </Home>
            </div>

            <div id="about" className="row  " style={{ paddingLeft: 5 }}>
              <About ref={aboutRef}> </About>
            </div>
            <div
              id="project"
              className="row d-flex"
              style={{ paddingLeft: 5, paddingRight: 5, paddingBottom: 5 }}
            >
              <div className="col">
                <Projects ref={projectsRef}></Projects>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
