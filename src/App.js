import './App.css';
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

function HomePage() {
  return (
    <>
      <Header/>
      <About />
      {cards}
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
  return (
    <>
      {cards}
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

const cards = data.map((card, index) => {
  return (
    <Card
      key={index}
      coverImg={card.coverImg}
      title={card.title}
      address={card.address}
      images={card.images}
      description={card.description}  
    >
    </Card>
  );
});

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
