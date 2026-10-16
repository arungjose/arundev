
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './sections/Projects'
import Academics from './sections/Academics'
import About from './sections/About'
import Console from './sections/Console'
import Contact from './sections/Contact'
import './App.css'

export default function App() {
  return (
    <div className="site-frame">
      <Navbar />

      <main>
        <Home />
        <Projects />
        <Academics />
        <About />
        <Console />
        <Contact />
      </main>
    </div>
  )
}
