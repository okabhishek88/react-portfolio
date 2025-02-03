import { useRef } from "react";
import "./Education.css";
import useCustomHook from "./CustomHook.js";

const Education = () => {
  // custom hook
  const refTab = useRef();
  useCustomHook(refTab);
  return (
    <section className="Education" ref={refTab}>
      <div className="title">
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          My <span style={{ color: "#e945e3" }}>education</span> background:
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
      <div>
        <ul className="timeline">
          <li className="timeline-event">
            <div className="timeline-event-copy">
              <div className="titleyear">
                <img src="/icons/arrowed.svg" alt="" width={20} height={20} />
                <p className="timeline-event-thumbnail">
                  {" "}
                  July 2017 - July 2020
                </p>
              </div>
              <div className="cgap">
                <h3>Diploma in Mechanical Engineering</h3>
                <p>Score: 75%, CPI - 8.36, Division: First (Honors)</p>
                <p>
                  {" "}
                  College: Shri Shankaracharya Technical Campus, Bhilai,
                  Chhattisgarh
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-event">
            <div className="timeline-event-copy">
              <div className="titleyear gap">
                <img src="/icons/arrowed.svg" alt="" width={20} height={20} />
                <p className="timeline-event-thumbnail">
                  July 2021 - July 2024
                </p>
              </div>
              <div className="cgap">
                <h3>BTECH - Computer Science and Engineering</h3>
                <p>Score: 77%, CPI - 8.48, Division: First (Honors)</p>
                <p>
                  Specialization - Blockchain Technology, Internet of Things &
                  Cybersecurity
                </p>
                <p>
                  College: Shri Shankaracharya Technical Campus, Bhilai,
                  Chhattisgarh
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
