import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="container form-container">
      <h1 className="form-header">Haz tu Registro</h1>
      <h2 className="form-description">Regístrate y únete a nuestra comunidad hoy mismo</h2>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
