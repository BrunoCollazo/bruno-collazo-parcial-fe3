import { useState } from 'react';
import Form from './Form';
import Card from './Card';
import ErrorMessage from './ErrorMessage';
import './App.css';


const App = () => {
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = (data) => {
    const { name, color } = data;
    
    if (name.length < 3 || name.startsWith(' ')) {
      return false;
    }
    
    if (color.length < 6) {
      return false;
    }
    
    return true;
  };

  const handleFormSubmit = (formData) => {
    if (validateForm(formData)) {
      setSubmittedData(formData);
      setError('');
    } else {
      setError('Por favor chequea que la información sea correcta.');
      setSubmittedData(null);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Elige un color</h1>
      
      <Form onSubmit={handleFormSubmit} />
      <ErrorMessage message={error} />
      {submittedData && !error && (
        <Card name={submittedData.name} color={submittedData.color} />
      )}
    </div>
  );
};

export default App;