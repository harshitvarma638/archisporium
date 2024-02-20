import './App.css';
import {React, useState} from "react";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Card from './components/Card';
import Contact from './components/Contact';
import data from './data';
import {BrowserRouter as Router, Route, Switch,Routes} from 'react-router-dom';

const projectData = data;

function HomePage() {
  const [projectType, setProjectType] = useState("Residential");

  const filteredProjects = projectData.filter(project => project.type === projectType);
  return (
    <>
      <Header/>
      <About />
      <div className="projects">
        <div className="project-title">
          <h1>Our Projects</h1>
        </div>
        <div className="project-selection">
          <button onClick={()=> setProjectType("Residential")}>Residential</button>
          <button onClick={() => setProjectType("Commercial")}>Commercial</button>
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
      <About/>
      <Newsletter />
    </>
  );
}

function ProjectPage() {
  const [projectType, setProjectType] = useState("Residential");

  const filteredProjects = projectData.filter(project => project.type === projectType);
  return (
    <>
      <div className="projects">
        <div className="project-title">
          <h1>Our Projects</h1>
        </div>
        <div className="project-selection">
          <button onClick={()=> setProjectType("Residential")}>Residential</button>
          <button onClick={() => setProjectType("Commercial")}>Commercial</button>
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
      <Contact />
      <Newsletter />
    </>
  );
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
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={HomePage()}/>
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
