import Download from "../img/download.png";
import git from "../img/github.png";
import linkedin from "../img/linkedin.png";
import Button from "react-bootstrap/Button";
import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState, useRef, forwardRef } from "react";
import "../css/nav.css";

const Navbar = forwardRef((props, ref) => {
  const { scrollY } = useViewportScroll();
  const [hidden, setHidden] = useState(false);
  const [currentSec, setSection] = useState("home");
  const refs = ref;
  const variants = {
    visible: { opacity: 1, y: 0 },

    hidden: { opacity: 0, y: -25 },
  };
  function update() {
    if (
      scrollY?.current > refs.ref1.current.offsetTop &&
      scrollY?.current < refs.ref2.current.offsetTop
    ) {
      setSection("home");
    }
    if (
      scrollY?.current > refs.ref2.current.offsetTop &&
      refs.ref3.current.offsetParent.offsetTop
    ) {
      setSection("about");
    }
    if (scrollY?.current > refs.ref3.current.offsetParent.offsetTop) {
      setSection("pj");
    }
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
      //console.log("visible");
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
      //console.log(scrollY.current);
    }
  }
  const goToAbout = (id) => {
    //console.log(aboutRef.current.offsetHeight);
    refs.ref2.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goToHome = (id) => {
    refs.ref1.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const goToProject = (id) => {
    refs.ref3.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
    <motion.nav
      className=" row navbar navbar-light bg-light flex-row"
      style={{
        width: "100%",
        zIndex: 4,
        position: "fixed",
        top: 0,
        background: "",
      }}
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      whileHover={"visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1 }}
    >
      <div className="row">
        <Button
          className={`btn-${currentSec === "home" ? "active" : "light"}`}
          onClick={goToHome}
          style={{ width:120 }}
        >
          Home{" "}
        </Button>

        <a onClick={goToAbout} style={{ paddingLeft : 5}}>
          <Button
            className={`btn-${currentSec === "about" ? "active" : "light"}`}
            style={{ width:120 }}
          >
            About{" "}
          </Button>
        </a>
        <div style={{ paddingLeft : 5, width : 50}} >
        <Button
          className={`btn-${currentSec === "pj" ? "active" : "light"} `}
          onClick={goToProject}
          style={{ width:120 }}
          
        >
          Projects{" "}
        </Button>
        </div>
      </div>
      <div>
        <a
          className=" "
          href="https://github.com/anon-L"
          target="_blank"
          rel="noreferrer"
          style={{ paddingRight: 25 }}
        >
          <img src={git} alt="" style={{ width: 50, height: "auto" }}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/anon-laosirilurchakai-1070471b5/"
          target="_blank"
          rel="noreferrer"
          alt=" "
          className=""
          style={{ paddingRight: 25 }}
        >
          <img
            src={linkedin}
            alt=""
            style={{ width: 50, height: "auto" }}
          ></img>
        </a>
        <a
          href="https://drive.google.com/file/d/1ZQbBLyoe5oq480gHV17l8nwLKvVXRqPE/view"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            className="btn  "
            style={{
              width: 155,
              height: "auto",
              fontSize: 25,
              background: "#212529",
              color: "#CED4DA",
            }}
          >
            <img
              src={Download}
              alt=""
              style={{
                width: 25,
                textAlign: "left",
                filter:
                  "invert(95%) sepia(6%) saturate(230%) hue-rotate(168deg) brightness(90%) contrast(90%)",
              }}
            ></img>{" "}
            Resume
          </Button>
        </a>
      </div>
    </motion.nav>
  );
});
export default Navbar;
