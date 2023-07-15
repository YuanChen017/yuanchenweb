import React from "react";
import self from "../images/self.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import Progress from "react-circle-progress-bar";
import "./about.css";
const About = () => {
  const info = [
    ["Name", "Yuan Chen"],
    ["Addrees", "Camelback rd, Pleasant Hill, CA"],
    ["Study", "University of Califorina,San Diego"],
    ["Degree", "Bacholar of Science"],
    ["Mail", "yuanc710@gmail.com"],
    ["Phone", "+1 8587332669"],
  ];
  return (
    <div className="aboutpage m-auto">
      <div className="selfimg">
        <img src={self} alt="failed to load" />
      </div>
      <div className="about">
        <div className="aboutme">
          <h2
            style={{
              fontFamily: `Cambria, Cochin, Georgia, Times, "Times New Roman", serif`,
              fontWeight: "bold",
            }}
          >
            ABOUT ME
          </h2>
          <div className="aboutsection">
            <div id="about">
              Hello there! My name is Yuan Chen. I am a front-end and node.Js
              developer, and I'm very passionate and dedicated to my work.
              <br />
              <br /> With 2-3 years experience as a professional a front end
              developer, I have acquired the skills and knowledge necessary to
              make your project a success.
            </div>
            <div className="info">
              {info.map((item) => {
                return (
                  <div className="infoabout">
                    <strong>{item[0]}</strong>: {item[1]}
                  </div>
                );
              })}
            </div>
          </div>
          <br />
          <br />
          <div className="programAndlang">
            <div className="program">
              <h2>Programming</h2>
              <p>HTML & CSS</p>
              <ProgressBar completed={80} bgColor="#8C8D8D" height="12px" />
              <p>Javascript</p>
              <ProgressBar completed={90} bgColor="#8C8D8D" height="12px" />
              <p>React & Node</p>
              <ProgressBar completed={75} bgColor="#8C8D8D" height="12px" />
              <p>Rest Api & GraphQL</p>
              <ProgressBar completed={70} bgColor="#8C8D8D" height="12px" />
            </div>
            <div className="langs">
              <h2>Language</h2>
              <div className="circlebar">
                <Progress
                  progress={90}
                  background="#8C8D8D"
                  subtitle="Chinese"
                />
                <Progress
                  progress={80}
                  background="#8C8D8D"
                  subtitle="English"
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="educationandExperience">
            <div className="edu">
              <h2>Education</h2>
              <div>
                2019 - 2021 <span> UC San Diego</span> Bacholar Degree
              </div>
              <div>
                2019 - 2016 <span> Diablo Vally College</span> Assiocate Degree
              </div>
            </div>
            <div className="expe">
              <h2>Experience</h2>
              <div>
                2021 - Until now <span>Chuwa American</span> Software Engineer
              </div>
              <div>
                June 2022 - Sept 2022 <span>PayPal</span> Full StacK Developer
              </div>
              <div>
                2020 - 2021 <span> ViVi Bubble Tea</span> Business Data Analyst
                Intern
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="quota">
            <h2>Favorite Quote</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              “For better than never is late; never to succeed would be too long
              a period.”
              <p> - - Geoffrey Chaucer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
