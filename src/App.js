import React, { useState, useEffect } from 'react';
import './App.css';
import LogoHeading from './components/LogoHeading';
import LogoTypesContainer from './components/LogoTypesContainer';
import LogoDescription from './components/LogoDescription';
import { LogoTypes } from './LogoTypes';


const App = () => {

  const [logo, setLogo] = useState(LogoTypes[0]);
  const [logoEx, setLogoEx] = useState('/images/logo_ex_1.png')
  const [buttonColor, setButtonColor] = useState("")
  const [active, setActive] = useState(() => {
    for (let i = 0; i < LogoTypes.length;i++) {
      // console.log('types', LogoTypes[i].active)
      return LogoTypes[i].active
    }
  })



  const handleCardClick = (id) => {

    // console.log('active', active)
  
    // const activeState = LogoTypes.map(type => {
    //   console.log('type', type.active)
    //   return type.active
    //   // console.log(active)
    // })

    // console.log('func act', activeState)
    for (let i = 0; i < LogoTypes.length; i++) {
      // console.log('active?', active)
      if (id === LogoTypes[i].id) {
        setLogo(LogoTypes[i])
        setLogoEx(`/images/logo_ex_${LogoTypes[i].id}.png`)
        // setActive(LogoTypes[i].active)
        // setActive(!active)
        // if (LogoTypes[i].active === true) {
        //   setButtonColor('white')
        // }        
      }
    }
    // return activeState;
  }


  return (
    <div className="App">
      <div className="logo-services-container">
        <section className="logo-types-container">
          <div className="logo-types-wrapper">
            <LogoHeading />
            <LogoTypesContainer logos={LogoTypes} handleCardClick={(id) => handleCardClick(id)} buttonColor={buttonColor} active={active}/>
          </div>
        </section>
        <section className="logo-description-container">
          <LogoDescription logo={logo} logoEx={logoEx}/>
        </section>
      </div>
    </div>
  );
}

export default App;

// 1. Build the basic HTML layout and add basic CSS for the page based off of a wireframe I created
// 2. Convert the HTML layout to components
// 3. Now that I have my components, I need to create a file with my needed data
// 4. After creating the data, map through the data and make individual logo cards
// 5. After making the cards, I need to connect the descriptions
// 6. 
