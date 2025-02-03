import { useRef } from "react";
import "./Home.css";
import useCustomHook from "./CustomHook";

export default function Home() {
  // custom hook
  const refTab = useRef(null);
  useCustomHook(refTab);
  return (
    <section className="Home" ref={refTab}>
      <div className="content">
        <div className="name">
          <p>Hello World! I&apos;m</p>
          <p>
            <span> Abhishek Chauhan</span>
          </p>
        </div>
        <div className="description">
          <p>
            &lt; As a Computer Science Engineer, I love using technology to
            solve real-world problems. With CSE specializations in Blockchain
            Technology, Internet of Things, and Cybersecurity, I deeply enjoy
            exploring ways to make systems safer and smarter. Whether it&apos;s
            creating user-friendly websites, fortifying digital security, or
            optimizing system performance, I am dedicated to finding simple yet
            effective, innovative solutions that truly make a significant and
            positive difference. &#47;&gt;
          </p>
        </div>
        <a href="/resume.pdf" rel="noopener noreferrer">
          <button className="btndown">Download Resume</button>
        </a>
      </div>
      <div className="avatar">
        <div className="cardlogo">
          <img src="/icons/name-logo.svg" alt="logo" />
          <div className="info">
            <p>M.E.R.N Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
