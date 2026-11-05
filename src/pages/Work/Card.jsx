import { Link } from "react-router-dom"

const Card = ({ cardDetails: { id, image, name, content } }) => {
    const workDetailsPath = `/works/${id}`;

    return (
        <Link to={workDetailsPath} className='card'>
            <img src={image} alt={name} />
            <div className="card-content">
                <h2>{name}</h2>
                <p>{content}</p>
            </div>
        </Link>
    )
}

export default Card