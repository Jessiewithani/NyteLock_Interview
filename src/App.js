import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>APP</h2>
      {/* this is where the header section with the button would be */}
      <section className="logo-services-container">
        <div className="logo-services-wrap">
          <section className="logo-header-container">
            <div className="heading-container">
              <h6 className="sub-logo-heading"><span>How do I know which logo is right for me?</span></h6>
              <h2 className="main-logo-heading">Differnt Types of Logo Styles</h2>
            </div>
            <div className="contact-btn-container">
              <button>Contact Us</button>
            </div>
          </section>
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
