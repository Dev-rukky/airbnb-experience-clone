import Star from '../images/Star 1.svg';

function Card(props) {
    return (
        <div className="card">
        <img src={props.img} className="card--image" alt='card-pic' />
        <div className="card--stats">
            <img src={Star} className="card--star" alt='rate' />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
        
    )
}

export default Card;