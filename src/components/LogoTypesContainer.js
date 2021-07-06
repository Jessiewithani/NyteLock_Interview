import React, {useState} from 'react';
import '../LogoTypesContainer.css';
import LogoCard from '../components/LogoCard';


const LogoTypesContainer = ({logos, handleCardClick, buttonColor, active}) => {

  const logoType = logos.map(logo => {
    return <LogoCard 
      key={logo.id} 
      id={logo.id}
      icon={logo.icon} 
      titleFirst={logo.titleFirst} 
      titleLast={logo.titleLast}
      handleCardClick={() => handleCardClick(logo.id)}
      buttonColor={buttonColor}
      active={active}
      
    />
  })
  return (
    <section className="logo-cards-container">
        {logoType}
    </section>
  )
}

export default LogoTypesContainer;