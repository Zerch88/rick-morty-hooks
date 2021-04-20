import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';
import MyApp from './components/MyApp';
import MyAppHooks from './components/MyAppHooks';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link className= 'link' to="/rick-morty-class">Rick & Morty con Ciclo de Vida</Link>
      </li>
      <li>
        <Link className= "link" to="/rick-morty-hooks">Rick & Morty con Hooks</Link>
      </li>
    </ul>
  </nav>
  );

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/"><h1 className="link">Selecciona una Opción</h1></Route>
        <Route exact path="/rick-morty-class" component={MyApp}/>
        <Route exact path="/rick-morty-hooks" component={MyAppHooks}/>
        <Redirect push to="/"/>
      </Switch>
    </Router>

    
  );
}

export default App;