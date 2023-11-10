import './styles/App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';
import cardImg1 from './images/card-img-1.png';
import cardImg2 from './images/card-img-2.png';
import cardImg3 from './images/card-img-3.png';

function App() {

  
  const imgs = {
    img1: cardImg1,
    img2: cardImg2,
    img3: cardImg3
}

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Card 
        img = {imgs.img1}
        rating = "5.0"
        reviewCount = {6}
        country = "England"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />

      <Card 
        img ={imgs.img2}
        rating = "5.0"
        reviewCount = {6}
        country = "England"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />

      <Card 
        img ={imgs.img3}
        rating = "5.0"
        reviewCount = {6}
        country = "England"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />
    </div>
  );
}

export default App;
