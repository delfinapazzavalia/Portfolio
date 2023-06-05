
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import '../src/App.css'
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
 <>
 <Navbar />
 <Home />
 <About />
 <Resume />
 <Projects />
 <Skills />
 </>
  );
}

export default App;
