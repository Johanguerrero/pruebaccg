import React, { useState } from 'react';
import './SubscribeForm.css';

const SubscribeForm = () => {
  // Estado para almacenar los datos del formulario y el mensaje de confirmación
  const [formData, setFormData] = useState({
    email: '',
    terms: false
  });
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Actualiza el estado dependiendo del tipo de campo (input o checkbox)
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Expresión regular para validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación del campo de correo electrónico
    if (!emailPattern.test(formData.email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return; // Sale de la función handleSubmit si el email no es válido
    }

    // Simula un registro exitoso después de 500ms y reinicia el formulario
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
      {/* Formulario de suscripción */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          {/* Campo de entrada para el correo electrónico */}
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>
            {/* Checkbox para aceptar los términos */}
            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
            Acepto tratamiento de datos
          </label>
        </div>
        {/* Botón para enviar el formulario */}
        <button type="submit">Suscribirme</button>
      </form>
      {/* Mensaje de confirmación visible después del registro */}
      {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
    </div>
  );
}

export default SubscribeForm;
