import "./App.css";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contacts from "./components/Contacts.jsx";
import Navbar from "./components/Navbar.jsx";
import Education from "./components/Education.jsx";
import Supply from "./components/Supply.jsx";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Education />
      <Supply />
      <Contacts />
    </main>
  );
}

export default App;
