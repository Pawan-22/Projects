import "./ServiceCard.css";

const ServiceCard = ({ name, description, price, onDelete, onEdit }) => {
  return (
    <div className="card-container">
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">₹{price}</p>
      </div>
      <div className="button-group">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ServiceCard;
