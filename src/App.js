import logo from './logo.svg';
import './App.css';
import LogoHeading from './components/LogoHeading';

function App() {
  return (
    <div className="App">
      <h2>APP</h2>
      {/* this is where the header section with the button would be */}
      <section className="logo-services-container">
        <div className="logo-services-wrap">
          <LogoHeading />
          <section className="logo-types-container">
            {/* In here would be the different logo cards */}
          </section>
        </div>
      </section>
      {/* this is where the types of logo styles would be */}
    </div>
  );
}

export default App;
