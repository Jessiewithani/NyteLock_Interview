import React , {useState} from 'react';
import '../LogoTypesContainer.css';
import { LogoTypes } from '../LogoTypes';
import LogoCard from '../components/LogoCard';


const LogoTypesContainer = () => {

  const [logo, setLogo] = useState(false)

  const logoType = LogoTypes.map(type => {
    return <LogoCard 
      key={type.id} 
      icon={type.icon} 
      title={type.title} 
      url={(<Link to={`/descriptions/${type.id}`} />)}
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