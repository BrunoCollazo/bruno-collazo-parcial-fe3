/* eslint-disable react/prop-types */
import './ErrorMessage.css';

const ErrorMessage = ({ message }) => (
  message ? (
    <div className="error-message">
      {message}
    </div>
  ) : null
);

export default ErrorMessage;