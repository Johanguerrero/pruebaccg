import React, { useState } from 'react';
import './SubscribeForm.css';

const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    terms: false
  });
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setTimeout(() => {
      setConfirmationMessage('¡Registro exitoso!');
      setFormData({
        email: '',
        terms: false
      });
    }, 500);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>
            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
            Acepto tratamiento de datos
          </label>
        </div>
        <button type="submit">Suscribirme</button>
      </form>
      {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
    </div>
  );
}

export default SubscribeForm;
