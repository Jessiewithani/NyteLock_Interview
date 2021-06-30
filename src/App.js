import logo from './logo.svg';
import './App.css';
import LogoHeading from './components/LogoHeading';
import LogoTypesContainer from './components/LogoTypesContainer';
import LogoDescription from './components/LogoDescription';
import { BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="logo-services-container">
          <section className="logo-types-container">
            <div className="logo-types-wrapper">
              <LogoHeading />
              <LogoTypesContainer />
            </div>
          </section>
          <section className="logo-description-container">
            <Route path="/descriptions">
              {/* would i have to map from the data here to create a dynamic route?? */}
              <LogoDescription />
            </Route>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;

// 1. Build the basic HTML layout and add basic CSS for the page based off of a wireframe I created
// 2. Convert the HTML layout to components
// 3. Now that I have my components, I need to create a file with my needed data
// 4. After creating the data, map through the data and make individual logo cards
// 5. After making the cards, I need to now add routes so that when I click ont he card, it leads me to the correct description
// 6. 
