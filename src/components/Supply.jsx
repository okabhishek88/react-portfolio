import { useRef } from "react";
import "./Supply.css";
import useCustomHook from "./CustomHook";

const Supply = () => {
  // custom hook
  const refTab = useRef(null);
  useCustomHook(refTab);
  return (
    <section className="Treasury" ref={refTab}>
      <div className="title">
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <span style={{ color: "#e945e3" }}>Bhalai</span> ki supply:
        </p>
      </div>
      <div className="sucontent">
        <div className="sucard">
          <p>JavaScript 40 Pattern Coding Problems with Solutions!</p>
          <a href="">
            <button className="btndown">Download</button>
          </a>
        </div>
        <div className="sucard">
          <p>JavaScript Complete Notes - A to Z JavaScript Concepts</p>
          <a href="">
            <button className="btndown">Download</button>
          </a>
        </div>
        <div className="sucard">
          <p>JavaScript Complete Guide - A to Z JavaScript Concepts</p>
          <a href="">
            <button className="btndown">Download</button>
          </a>
        </div>
        <div className="sucard">
          <p>JavaScript 40 Pattern coding problems with solutions!</p>
          <a href="">
            <button className="btndown">Download</button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Supply;
