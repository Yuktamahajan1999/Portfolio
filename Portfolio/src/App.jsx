import './App.css'
import Contact from './Contact'
import Education from './Education'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skill'

function App() {


  return (
    <>
      <Navbar />
      <section id="Home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App
