import React from 'react'
import './Character-Creator.css'
import { Link } from 'react-router-dom'

export default function CharacterCreator() {
  return (
    <div className="complete-page">
      <h1>Make a Character</h1>
      <form>
        <div className="name-input">
          <input
            type="text"
            name="name"
            placeholder="Character Name Here"
            // value={this.state.name}
            // onChange={(e) => {this.handleChange}}
          />
        </div>
        <div className="container">
          <div className="character-creation">
            <h2>Options</h2>
            <label for="birthplace">Birthplace</label>
            <label for="residence">Current City</label>
            <label for="job">Job</label>
            <label for="height">Height</label>
            <label for="eye-color">Eye Color</label>
            <label for="music">Favorite Music Genre</label>
            <label for="quote">Favorite Quote</label>
            <label for="insult">Favorite Insult</label>
          </div>
          <div></div>
          <div className="character-creation" id="yes">
            <h2>Yes</h2>
            <input type="radio" id="birthplace" name="birthplace" />
            <input type="radio" id="residence" name="residence" />
            <input type="radio" id="job" name="job" />
            <input type="radio" id="height" name="height" />
            <input type="radio" id="eye-color" name="eye-color" />
            <input type="radio" id="music" name="music" />
            <input type="radio" id="quote" name="quote" />
            <input type="radio" id="insult" name="insult" />
          </div>
          <div className="character-creation" id="no">
            <h2>No</h2>
            <input type="radio" id="birthplace" name="birthplace" />
            <input type="radio" id="residence" name="residence" />
            <input type="radio" id="job" name="job" />
            <input type="radio" id="height" name="height" />
            <input type="radio" id="eye-color" name="eye-color" />
            <input type="radio" id="music" name="music" />
            <input type="radio" id="quote" name="quote" />
            <input type="radio" id="insult" name="insult" />
        </div>
        </div>
      </form>
      <Link to="/archive">
        <div className="submit">
          <button>Submit</button>
        </div>
      </Link>
    </div>
  )
}
