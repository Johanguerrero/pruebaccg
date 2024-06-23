import React from 'react';
import SubscribeForm from '../components/SubscribeForm';


const SubscribePage = () => {
  return (
    <div>
      <h1 className="form-header">Suscríbete</h1>
      <div className="container form-container">
        <h2 className="form-description">Recibe contenido exclusivo suscribiéndote a nuestro boletín informativo</h2>
        <SubscribeForm />
      </div>
    </div>
  );
}

export default SubscribePage;