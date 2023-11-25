import React from 'react';
import './transaction.css';
const Section = () => {

    return (
      <section>
        <h3> Mis transacciones</h3>
        <ul>
            <li>Tienda: Estilos</li>
            <li>Producto: Calzados</li>
            <li>Precio: 299.90</li>
        </ul>
        <ul>
            <li>Tienda: Estilos</li>
            <li>Producto: Pantalones</li>
            <li>Precio: 39.90</li>
        </ul>
      </section>
    );
};

export default (Section);