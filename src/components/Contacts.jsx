import { useRef, useState } from "react";
import "./Contacts.css";
import useCustomHook from "./CustomHook.js";

const Contacts = () => {
  const [listContacts] = useState([
    {
      title: "Phone Number:",
      value: "+91 7049476491",
    },
    {
      title: "Email:",
      value: "okabhishe88@gmail.com",
    },
    {
      title: "Linkedin:",
      value: "+91 7049476491",
    },
  ]);

  // custom hook
  const refTab = useRef(null);
  useCustomHook(refTab);
  return (
    <section className="Contacts" ref={refTab}>
      <div className="title">
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Let&apos;s&nbsp;<span style={{ color: "#e945e3" }}>connect:</span>
        </p>
      </div>
      <div className="sdes">
        <p style={{ fontSize: "1rem", color: "#eee5" }}>
          &lt; I am a motivated and reliable person who gets things done, no
          matter the situation. I work well in a team, but I can also take
          charge when needed. I handle pressure easily and always meet
          deadlines. I am adaptable and ready to tackle any challenge that comes
          my way. &#47;&gt;
        </p>
      </div>
      <div className="listContacts">
        {listContacts.map((value, key) => {
          return (
            <div key={key} className="item">
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contacts;
