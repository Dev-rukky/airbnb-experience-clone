import bannerImg from '../images/photo-grid.png';


function Banner() {
    return (
        <section className='hero-container'>
            <div className='banner-text'> 
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                <button>Get Started</button>
            </div>
            <div className="banner-img">
                <img src={bannerImg} alt='airbnb exp'/>
            </div>
        </section>
    )
}

export default Banner;