import './styles/App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';
import Data from './Data';

function App() {
  console.log(Data)

  const cards = Data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <section className='card-list'>
        {cards}
      </section>

    </div>
  );
}

export default App;
