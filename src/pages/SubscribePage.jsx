import React from 'react';
import SubscribeForm from '../components/SubscribeForm';


const SubscribePage = () => {
  return (
    <div className="container form-container">
      <h1 className="form-header">Suscríbete</h1>
      <h2 className="form-description">Recibe contenido exclusivo suscribiéndote a nuestro boletín informativo</h2>
      <SubscribeForm />
    </div>
  );
}


export default SubscribePage;
