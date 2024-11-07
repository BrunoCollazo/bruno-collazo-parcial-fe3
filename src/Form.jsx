/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    color: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container">
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          value={formData.name}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      
      <div className="input-container">
        <input
          type="text"
          name="color"
          placeholder="Ingresa tu color favorito (formato HEX)"
          value={formData.color}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      
      <button
        type="submit"
        className="form-button"
      >
        ENVIAR
      </button>
    </form>
  );
};

export default Form;