import "./Cards.css";

function Cards({ image, icon, title, description }) {
  return (
    <div className="card">
      {image && (
        <img
          className="card-image"
          src={image}
          alt=""
        />
      )}

      {icon && (
        <span className="card-icon">
          {icon}
        </span>
      )}

      {title && (
        <h3 className="card-title">
          {title}
        </h3>
      )}

      {description && (
        <p className="card-description">
          {description}
        </p>
      )}
    </div>
  );
}

export default Cards;