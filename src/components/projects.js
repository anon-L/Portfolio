import Cards from "./cards";
import Chat from "../img/chat.png";
import Neuf from "../img/neuf.jpeg";
import { useEffect, forwardRef } from "react";
const Projects = forwardRef((props, ref) => (
  <div ref={ref}   id="project " style={{ width: "98.5vw", height: "auto" }}>
    <h1  ></h1>
    <div 
    
      className="row"
      style={{
        
        background: "#E9ECEF",
        borderRadius: 0,
        height: 1080
      }}
    >
      
        <div className="row d-flex justify-content-center " style={{}}>
          <Cards
            cardTitle="Chat Box"
            src={Chat}
            cardText="Created a chat box using react. The website
                          allows you to log in with your google account
                          and start chatting. Each message sent is then
                          uploaded to Firestore. The website rendered
                          every message by fetching all the messages and
                          sorting it by the time it was sent."
            btnText="Open Chatbox"
            link="https://secret-chat-box.web.app/"
          ></Cards>
        {/*   <Cards
            cardTitle="Neuf"
            src={Neuf}
            cardText="This is my girlfriend, she is the prettiest person in the word. Her name is Neuf and I love her soooooo much.
                          This open her instragram"
            btnText="Instragram"
            link="https://www.instagram.com/neufii/"
          ></Cards> */}
          <Cards cardTitle="placeholder "></Cards>
          <Cards></Cards>
          <Cards></Cards>
          
        
      </div>
    </div>
  </div>
));

export default Projects;
