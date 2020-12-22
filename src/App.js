import { Link, Route, Switch } from 'react-router-dom';
import { Landing, Map, Wishlist } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/"><img src="./img/newsanta_60x60.png" /></Link>
        <div className="nav">
          <Link to="/wishlist">My Wishlist</Link>
          <Link to="/map">SantaTracker</Link>
        </div>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/map" component={Map} />
        </Switch>
      </main>
      <footer>
        <p>SantaTracker &copy; 2020</p>
      </footer>
    </div>
  );
}

export default App;
