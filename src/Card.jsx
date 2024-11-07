/* eslint-disable react/prop-types */
import './Card.css';

const Card = ({ name, color }) => (
  <div className="card">
    <h2 className="card-title">Hola {name}!</h2>
    <p>Sabemos que tu color favorito es:</p>
    <div 
      className="color-display"
      style={{ backgroundColor: color }}
    >
      {color}
    </div>
  </div>
);

export default Card;