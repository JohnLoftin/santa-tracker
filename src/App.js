import { Link, Route, Switch } from 'react-router-dom';
import { Landing } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
