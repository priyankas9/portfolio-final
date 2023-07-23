import Contact from "../contact/Contact";
import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";
import Service from "../service/Service";
import Skills from "../Skills";
const Home = () => {
    return(
        <>
       <Navbar/>
       <Hero/>
       <Skills/>
       <Service/>
       <Contact/>
        </>
    )
}
export default Home;