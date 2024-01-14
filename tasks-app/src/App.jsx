import { useState } from "react"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"

function App() {

  const [websiteMode, setWebsiteMode] = useState('light-mode');

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

        <Main />

        <Footer />
      </div>
    </>
  )
}

export default App
