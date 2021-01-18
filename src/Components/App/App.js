import './App.css';
import React, { Component } from 'react'
import Home from '../Home/Home'
import CharacterCreator from '../Character-Creator/Character-Creator'
import Archive from '../Archive/Archive'
import Error from '../Error/Error'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import api from '../../utils/api'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      error: ''
    }
  }

  handleCharacterSubmitted(name, settings) {
    // console.log('handling submit', name, birthplace)
  // check data to see what api we need to call
  
  // call apis, get response
    api.getRandomPerson()
      .then(response => {
        console.log(response)
        // when response is gotten, call setCharacters, then route to archive
        const person = response.data.person
        const newCharacter = {
          name: name,
          birthplace: settings.shouldIncludeBirthplace && person.personal.born_place,
          job: settings.shouldIncludeJob && person.work.position,
          residence: settings.shouldIncludeResidence && person.personal.city,
          height: settings.shouldIncludeHeight && person.personal.height,
          eyeColor: settings.shouldIncludeEyeColor && person.personal.eye_color
        }
        console.log('new charachter', newCharacter)
        this.setState({ characters: [...this.state.characters, newCharacter] })
      })
      .catch((err) => this.setState({error: err.message}))
  }
  
  render() {
    console.log('characters are', this.state.characters)
    return (
      <main>
        <Switch>
          {this.state.error && <Route component={ Error } />}
          <Route path="/character-creator">
            <CharacterCreator onCharacterSubmitted={ (name, settings) => this.handleCharacterSubmitted(name, settings) } />
          </Route>
          <Route path="/archive">
            <Archive characters={ this.state.characters } />
          </Route>
          <Route exact path="/" component={ Home } />
        </Switch>
      </main>
    );
  }
}

export default App;
