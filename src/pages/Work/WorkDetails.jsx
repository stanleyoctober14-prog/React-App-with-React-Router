import { Link, useNavigate, useParams } from "react-router-dom";
import { workDetails } from "../../data/workDetails";

const WorkDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const details = workDetails.find(item => {
        return item.id == id;
    })

    if (!details) {
        return <div> Page not found</div>
    }

    const { name, image, content } = details;
    function handleGoBack() {
        navigate(-1)
    }

    return (
        <main className="work-details-wrapper">
            <button onClick={handleGoBack}>Go back to my works</button>
            <div className="work-details">

                <h1>{name}</h1>
                <img src={image} alt={name} />
                <p>{content}</p>
            </div>

        </main>
    )
}

export default WorkDetails