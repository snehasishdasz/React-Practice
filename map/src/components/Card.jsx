import "./Card.css";
import SeriesData from "../api/Seriesdata.json";

const Card = () => {
    return (
        <div className="container">
            {SeriesData.map((data) => (
                <div className="card" key={data.id}>
                    <img src={data.img_url} alt={data.name} className="image" />
                    <div className="content">
                        <h2>{data.name}</h2>
                        <p>
                            <strong>Rating:</strong> {data.rating}
                        </p>
                        <p>{data.description}</p>
                        <p>
                            <strong>Genre:</strong> {data.genre}
                        </p>
                        <p>
                            <strong>Cast:</strong> {data.cast}
                        </p>
                        <a
                            href={data.watch_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button"
                        >
                            Watch Now
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
