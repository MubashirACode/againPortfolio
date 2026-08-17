import { About } from "./components/About"
import { ContactUs } from "./components/ContactUs"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { MyServices } from "./components/MyServices"

import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { StarField } from "./components/Starfield"



function App() {


  return (
    <>
      <StarField />
      <Navbar />
      <Hero />
      <About />
      <MyServices />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />

    </>
  )
}

export default App
