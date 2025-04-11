import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import About from "./pages/Home/sections/About/AboutSection"
import Hero from "./pages/Home/sections/Hero/Hero"
import Navbar from "./components/NavBar/NavBar"
import Projects from "./pages/Home/sections/Projects/Projects"
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {

    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </>
    )
  }
  
  export default App
