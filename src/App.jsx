
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './sections/Projects'
import ProjectDetail from './sections/ProjectDetail'
import Academics from './sections/Academics'
import About from './sections/About'
import Console from './sections/Console'
import Contact from './sections/Contact'

import './App.css'

function PortfolioLayout() {
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

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />

        <Route
          path="/projects/:slug"
          element={
            <div className="site-frame">
              <ProjectDetail />
            </div>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
