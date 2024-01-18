import { Routes, Route } from "react-router-dom"

import { useState } from "react"

import Path from './paths'

import Header from "./components/header/Header"
import NavPanel from "./components/nav-panel/NavPanel"
import MainPanel from "./components/main-panel/MainPanel"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"

function App() {

  const [websiteMode, setWebsiteMode] = useState('dark-mode');

  const lightModeSetter = () => {
    setWebsiteMode('light-mode')
  }

  const darkModeSetter = () => {
    setWebsiteMode('dark-mode')
  }

  return (
    <>
      <div className={websiteMode}>
        <Header websiteMode={websiteMode} lightModeSetter={lightModeSetter} darkModeSetter={darkModeSetter} />

        <main className={'main'}>
          <NavPanel />

          <Routes>
            <Route path={Path.Home} element={<Home />} />

          </Routes>

          {/* <MainPanel /> */}

        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
