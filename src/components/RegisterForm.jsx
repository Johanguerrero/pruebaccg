import React, { useState } from 'react';
import './RegisterForm.css';
import '../index.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    terms: false,
  });
  const [confirmationMessage, setConfirmationMessage] = useState(''); 
  
  // Función para manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Expresiones regulares para validar el email y el número de celular
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    // Validaciones de los campos email y phone
    if (!emailPattern.test(formData.email)) {
      alert('Por favor ingrese un correo válido.');
      return;
    }

    if (!phonePattern.test(formData.phone)) {
      alert('Ingrese un número de celular con 10 dígitos.');
      return;
    }

    // Simular un registro exitoso después de 500ms
    setTimeout(() => {
      setConfirmationMessage('¡Registro exitoso!');
      // Limpiar el formulario después del registro exitoso
      setFormData({
        name: '',
        phone: '',
        email: '',
        terms: false,
      });
    }, 500);
  };

  return (
    <div>
      {/* Formulario de registro */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Celular:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
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
        <button type="submit">Registrarme</button>
      </form>
      {/* Mensaje de confirmación que se muestra después del registro exitoso */}
      {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
    </div>
  );
}

export default RegisterForm;
