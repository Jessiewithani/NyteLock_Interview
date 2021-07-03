import React from 'react';
import '../LogoTypesContainer.css';
import LogoCard from '../components/LogoCard';


const LogoTypesContainer = ({logos, handleLogoClick}) => {

  const logoType = logos.map(logo => {
    return <LogoCard 
      key={logo.id} 
      id={logo.id}
      icon={logo.icon} 
      titleFirst={logo.titleFirst} 
      titleLast={logo.titleLast}
      handleLogoClick={() => handleLogoClick(logo.id)}
    />
  })
  return (
    <section className="logo-cards-container">
        {logoType}
    </section>
  )
}

export default LogoTypesContainer;