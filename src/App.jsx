import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Team from "./components/pages/team";
import Gallery from "./components/pages/gallery";
import About from "./components/pages/about";
import Client from "./components/pages/clients";
import Service from "./components/pages/service";
import Contact from "./components/pages/contact";
import Testimonial from "./components/pages/testimonial";
import './index.css'
import ParticlesComponent from  "./components/Particles";

function App() {


  return (
      <div className="App">
        <ParticlesComponent id="particles"/>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Gallery />
        <Client />
        <Testimonial />
        <Team />
        <Contact />
        <Footer />
      </div>

  );
}

export default App;












