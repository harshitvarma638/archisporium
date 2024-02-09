import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Card from './components/Card';
import data from './data';


function App() {
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
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      {cards}
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
