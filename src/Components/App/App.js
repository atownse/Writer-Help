import './App.css';
import Home from '../Home/Home'
import CharacterCreator from '../Character-creator/Character-Creator'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <main>
      <Switch>
        <Route path="/character-creator" component={CharacterCreator} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
}

export default App;
