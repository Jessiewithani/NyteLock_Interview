import React from 'react';
import '../LogoTypesContainer.css';
import { LogoTypes } from '../LogoTypes';
import LogoCard from '../components/LogoCard';

const LogoTypesContainer = () => {
  const logo = LogoTypes.map(type => {
    <LogoCard 
    key={type.id} 
    icon={type.icon} 
    title={type.title} 
    url={type.url}
    />
  })
  return (
    <section className="logo-types-container">
      {/* In here would be the different logo cards */}
      {logo}
    </section>
  )
}

export default LogoTypesContainer;