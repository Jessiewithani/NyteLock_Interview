import React from 'react';
import '../LogoTypesContainer.css';
import LogoCard from '../components/LogoCard';


const LogoTypesContainer = ({logos}) => {

  const logoType = logos.map(logo => {
    return <LogoCard 
      key={logo.id} 
      icon={logo.icon} 
      title={logo.title} 
      url={logo.url}
      // clicked={clicked}
    />
  })
  return (
    <section className="logo-cards-container">
        {logoType}
    </section>
  )
}

export default LogoTypesContainer;