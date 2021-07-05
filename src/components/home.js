import greenScreen from "../img/deicut.png";
import cover from "../img/cover.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect, forwardRef } from "react";
import { useInView } from "react-hook-inview";
import Button from "react-bootstrap/Button";

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <motion.div>
        <h1></h1>
      </motion.div>
      <div style={{ position: "relative" }}>
        <img
          src={cover}
          alt=""
          style={{ width: "98.5vw", height: "auto" }}
        ></img>
        <h1
          style={{
            position: "absolute",
            top: "20%",
            left: "2%",
            maxWidth: "42%",
          }}
        >
          {" "}
          Hi, I'm Anon,
          <h5>
            but you can call me AJ. Im an aspiring software engineer currently
            living in Bangkok. blah blah blah blah 
          </h5>
        </h1>
      </div>
    </div>
  );
});
export default Home;
/* const Home = forwardRef ((propRef,propRef2) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={propRef}>
      <motion.div
        animate={controls}
        initial="hidden"
        transition={{ duration:1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        style={{ position: "relative" }}
      >
        <h1> Home</h1>
      </motion.div>
      <img
        src={cover}
        alt=""
        style={{ width: "98.5vw", height: "auto" }}
      ></img>
    </div>
  );
});

export default forwardRef(Home);
 */
