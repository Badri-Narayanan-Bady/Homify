import React from 'react';

const Dropdown = ({ services }) => (
  <div className="services-dropdown">
    <button id="services-btn">Services</button>
    <ul id="services-list">
      {services.map((service, index) => (
        <li key={index}>
          <a href={`#${service.slug}`}>{service.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Dropdown;
