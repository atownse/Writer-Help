import './App.css';
import Home from '../Home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <main>
      <Route exact path="/" component={Home} />
    </main>
  );
}

export default App;
