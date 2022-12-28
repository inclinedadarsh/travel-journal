import "../css/Card.css";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="card__img-container">
        <img src={props.imageUrl} alt="#" />
      </div>
      <div className="card__content">
        <div className="card__content__location">
          <span className="card__content__location__name">
            <img
              src={process.env.PUBLIC_URL + "/images/location-marker.png"}
              alt="Location Marker"
            />
            {props.location}
          </span>
          <a
            className="card__content__location__link"
            href={props.googleMapsUrl}
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="card__content__title">{props.title}</h2>
        <p className="card__content__date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card__content__description">{props.description}</p>
      </div>
    </div>
  );
}
