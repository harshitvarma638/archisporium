import './App.css';
import {React, useState, useEffect, useLayoutEffect} from "react";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Card from './components/Card';
import Contact from './components/Contact';
import Collage from './components/collage';
import data from './data';
import {BrowserRouter as Router, Route, Switch,Routes} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NewHeader from './components/NewHeader';

const projectData = data;

function HomePage() {
  const [projectType, setProjectType] = useState("Residential");

  const filteredProjects = projectData.filter(project => project.type === projectType);

  const [isSticky, setIsSticky] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        setIsSticky(window.scrollY < 700);
        console.log(setIsSticky);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);
  return (
    <>
      {/* <Header/> */}
      <Navbar homePage={true} isSticky={isSticky}/>
      <NewHeader/>
      <About />
      <Collage/>
      <div className="projects">
        <div className="project-title">
          <h1>Our Projects</h1>
        </div>
        <div className="project-selection">
          <button onClick={() => setProjectType("Residential")} className={`project-btn ${projectType === "Residential" ? "project-active" : "project-nonactive"}`}>Residential</button>
          <button onClick={() => setProjectType("Commercial")} className={`project-btn ${projectType === "Commercial" ? "project-active" : "project-nonactive"}`}>Commercial</button>
        </div>
        <div className="card-container">
          {filteredProjects.map((project,index) => (
            <Card
              key={index}
              coverImg={project.coverImg}
              title={project.title}
              address={project.address}
              images={project.images}
              description={project.description}  
            >
            </Card>
          ))}
        </div>
      </div>
      <Testimonials />
      <Newsletter />
    </>
  );
}

function aboutpage() {
  return (
    <>
      <Navbar homePage={false}/>
      <About/>
      <Testimonials />
    </>
  );
}

function ProjectPage() {
  const [projectType, setProjectType] = useState("Residential");

  const filteredProjects = projectData.filter(project => project.type === projectType);
  return (
    <>
      <Navbar homePage={false}/>
      <div className="projects">
        <div className="project-title">
          <h1>Our Projects</h1>
        </div>
        <div className="project-selection">
          <button onClick={()=> setProjectType("Residential")} className="project-btn">Residential</button>
          <button onClick={() => setProjectType("Commercial")} className="project-btn">Commercial</button>
        </div>
        <div className="card-container">
          {filteredProjects.map((project,index) => (
            <Card
              key={index}
              coverImg={project.coverImg}
              title={project.title}
              address={project.address}
              images={project.images}
              description={project.description}  
            >
            </Card>
          ))}
        </div>
      </div>
      <Newsletter />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Navbar homePage={false}/>
      <Contact />
      <Newsletter />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// const card = data.map((card, index) => {
//   return (
//             <Card
//               key={index}
//               coverImg={card.coverImg}
//               title={card.title}
//               address={card.address}
//               images={card.images}
//               description={card.description}  
//             >
//             </Card>
//   );
// });

function App() {
  
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={aboutpage()}/>
        <Route path="/projects" element={ProjectPage()}/>
        <Route path="/contact" element={ContactPage()}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
