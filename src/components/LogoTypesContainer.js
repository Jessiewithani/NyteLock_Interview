import React, {useState} from 'react';
import '../LogoTypesContainer.css';
import LogoCard from '../components/LogoCard';


const LogoTypesContainer = ({activeLogo, logos, handleCardClick}) => {

  const logoType = logos.map(logo => {
    return <LogoCard 
      key={logo.id} 
      id={logo.id}
      icon={logo.icon} 
      titleFirst={logo.titleFirst} 
      titleLast={logo.titleLast}
      handleCardClick={() => handleCardClick(logo.id)}
      active={activeLogo.id === logo.id}
    />
  })
  return (
    <section className="logo-cards-container">
        {logoType}
    </section>
  )
};

export default LogoTypesContainer;