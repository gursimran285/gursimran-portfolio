import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Service";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
        <Hero />
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
        <Footer/>

    </>
  );
}

export default Home;