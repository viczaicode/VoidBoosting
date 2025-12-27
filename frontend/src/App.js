
import logo from './logo.png';
import logo2 from './logo2.png';
import './App.css';
import TypeWriter from './components/TypeWriter';
import Services from "./components/Services";
import { ServiceProvider } from "./contexts/ServiceContext";


function App() {

  const welcomeText = 
  "Welcome, summoner. Your ascension begins.\nLet the Void carry you to the rank you deserve.";

  return (
    <div className="App">
      <header className="navbar">
        <div className="header-container">
          <div className="logo">
            <a href="index.php">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
          </div>

          <nav className="nav-center">
            <ul>
              <li><a href="Homepage.php">Homepage</a></li>
              <li><a href="index.php">Services</a></li>
              <li><a href="AboutUs.php">About us</a></li>
              <li><a href="Support.php">Support</a></li>
            </ul>
          </nav>

          <div className="nav-right">
            <button className="btn btn-trustpilot">
              <i className="fa-solid fa-star"></i> Trustpilot
            </button>
            <button className="btn btn-cart">
              <i className="fa-solid fa-shopping-cart"></i> Cart
              <span className="cart-count">0</span>
            </button>
            <button className="btn btn-login">
              <i className="fa-solid fa-user"></i> Log in
            </button>
          </div>
        </div>
    </header>

      <div className="udvozlo"> 

        <img src={logo2} className="App-logo2" alt="logo" />

        <p className="typing-text">
          <span className="intro-bold">
          <TypeWriter text={welcomeText.split("\n")[0]}/>
          </span>
          <br/><br/>
          <TypeWriter text={welcomeText.split("\n")[1]}/>
        </p>

      </div>

      <div className="container">

          <ServiceProvider>

            <Services />

          </ServiceProvider>

      </div>


      <footer>

        <img src={logo} className="App-logo" alt="logo" />

        <div className="footer-right">
          <button className="cart-btn">🛒</button>
          <button className="login-btn">Log in</button>
        </div>

      </footer>

    </div>
  );
}

export default App;
