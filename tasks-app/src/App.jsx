import { Routes, Route } from "react-router-dom"

import { useState } from "react"

import Header from "./components/header/Header"
import NavPanel from "./components/nav-panel/NavPanel"
import MainPanel from "./components/main-panel/MainPanel"
import Footer from "./components/footer/Footer"

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

          <MainPanel />

        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
