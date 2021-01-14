import './App.css';
import Home from '../Home/Home'
import CharacterCreator from '../Character-creator/Character-Creator'
import Archive from '../Archive/Archive'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <main>
      <Switch>
        <Route path="/character-creator" component={ CharacterCreator } />
        <Route path="/archive" component={ Archive } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </main>
  );
}

export default App;
