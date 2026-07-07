import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Troubles from './components/sections/Troubles'
import Divorce from './components/sections/Divorce'
import WhatWeDo from './components/sections/WhatWeDo'
import Professionals from './components/sections/Professionals'
import Nationwide from './components/sections/Nationwide'
import Flow from './components/sections/Flow'
import Contact from './components/sections/Contact'
import Company from './components/sections/Company'
import About from './components/sections/About'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Troubles />
        <Divorce />
        <WhatWeDo />
        <Professionals />
        <Nationwide />
        <Flow />
        <Contact />
        <Company />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
