
import logo from './logo.png';
import logo2 from './logo2.png';
import './App.css';
import TypeWriter from './components/TypeWriter';



function App() {

  const welcomeText = 
  "Welcome, summoner. Your ascension begins.\nLet the Void carry you to the rank you deserve.";

  return (
    <div className="App">
      <header className="navbar">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="nav-right">
          <button className="cart-btn">🛒</button>
          <button className="login-btn">Log in</button>
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
