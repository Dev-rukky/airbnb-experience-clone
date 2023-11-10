import Star from '../images/Star 1.svg';
// import Image1 from '../images/image 12.png';


function Card() {
    return (
        <div className="card">
            <img src="../images/card-img-1.png" className="card--image"  alt="card-pic"/>
            <div className="card--stats">
                <img src= {Star} className="card--star" alt="card-review" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;