import { useRef, useState } from "react";
import "./Projects.css";
import useCustomHook from "./CustomHook.js";

const Projects = () => {
  const [listProjects] = useState([
    {
      name: "Modern React Portfolio",
      des: "Welcome to my React portfolio! Crafted with stunning design and flawless functionality, this space showcases my skills in building sleek, dynamic web experiences. Dive in and see how I turn ideas into visually captivating, user-centric applications.",
      image: "/images/react-img.png",
      mission: "bacjkendljndsjnfndsnfdsf",
      language: "HTMLCKDKJSBDDS",
    },
    {
      name: "Job Portal Web Application (MERN)",
      des: "Welcome to the ultimate job portal web application, designed to connect talent with opportunity. Seamless, intuitive, and powerful, it’s where job seekers and employers meet for the perfect match. Explore a world of possibilities!",
      image: "/images/jobhunt-img.png",
      mission: "bacjkendljndsjnfndsnfdsf",
      language: "HTMLCKDKJSBDDS",
    },
    {
      name: "Decentralized Voting Application (Blockchain)",
      des: "reflects my skills in creating responsive, user-friendly applications using the MERN stack. With every project, my goal is to craft innovative solutions that tackle real-world challenge",
      image: "/images/v-dapp.png",
      mission: "bacjkendljndsjnfndsnfdsf",
      language: "HTMLCKDKJSBDDS",
    },
    {
      name: "Home Automation System (IOT)",
      des: "reflects my skills in creating responsive, user-friendly applications using the MERN stack. With every project, my goal is to craft innovative solutions that tackle real-world challenge",
      image: "/images/home-auto.png",
      mission: "bacjkendljndsjnfndsnfdsf",
      language: "HTMLCKDKJSBDDS",
    },
  ]);
  // custom hook
  const refTab = useRef(null);
  useCustomHook(refTab);
  return (
    <section className="Projects" ref={refTab}>
      <div className="title">
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          My <span style={{ color: "#e945e3" }}>exciting </span> projects:
        </p>
      </div>
      <div className="pdes">
        <p style={{ color: "#eee5" }}>
          &lt; In this section, each project reflects my skills in creating
          responsive, user-friendly applications using the MERN stack. With
          every project, my goal is to craft innovative solutions that tackle
          real-world challenges and enhance the overall user experience.
          &#47;&gt;
        </p>
      </div>
      <div className="plist">
        {listProjects.map((value, key) => (
          <div key={key} className="pitem">
            <div className="images">
              <img src={value.image} alt="image" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div className="svg">
                  <img src="/icons/goal.svg" width={40} height={40} alt="" />
                </div>
                <div>
                  <h4>Mission</h4>
                  <p>{value.mission}</p>
                </div>
              </div>
              <div className="mission">
                <div>
                  <img
                    src="/icons/world.svg"
                    width={35}
                    height={35}
                    alt=""
                    className="svg"
                  />
                </div>
                <div>
                  <h4>Languages</h4>
                  <p>{value.language}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
