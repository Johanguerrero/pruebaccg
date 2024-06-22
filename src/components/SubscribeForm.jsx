import React, { useState } from 'react';
import './SubscribeForm.css';

const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
          Acepto tratammiento de datos
        </label>
      </div>
      <button type="submit">Suscribirme</button>
    </form>
  );
}

export default SubscribeForm;
