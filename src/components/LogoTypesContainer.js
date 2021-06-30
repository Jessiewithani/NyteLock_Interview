import React , {useState} from 'react';
import '../LogoTypesContainer.css';
import { LogoTypes } from '../LogoTypes';
import LogoCard from '../components/LogoCard';

const LogoTypesContainer = () => {

  // const [clicked, setClicked] = useState(false)

  const logoType = LogoTypes.map(type => {
    return <LogoCard 
      key={type.id} 
      icon={type.icon} 
      title={type.title} 
      url={type.url}
      // clicked={clicked}
    />
  })
  return (
    <section className="logo-cards-container">
      {/* In here would be the different logo cards */}
      {logoType}
    </section>
  )
}

export default LogoTypesContainer;