import Star from '../images/Star 1.svg';

function Card(props) {
    let badgeText

    if (props.item.OpenSpot === 0) {
        badgeText = "SOLD OUT"
    }else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
        {badgeText && <div className='card-badge'>{badgeText}</div>}
        <img src={props.item.coverImg} className="card--image" alt='card-pic' />
        <div className="card--stats">
            <img src={Star} className="card--star" alt='rate' />
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.stats.reviewCount}) • </span>
            <span className="gray">{props.item.location}</span>
        </div>
        <p>{props.item.title}</p>
        <p><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
        
    )
}

export default Card;