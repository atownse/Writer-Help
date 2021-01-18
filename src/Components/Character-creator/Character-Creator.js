import React, { useState }from 'react'
import './Character-Creator.css'
import { Link } from 'react-router-dom'

export default function CharacterCreator(props) {
  const [name, setName] = useState('')
  const [birthplace, setBirthplace] = useState(false)
  const [residence, setResidence] = useState(false)
  const [job, setJob] = useState(false)
  const [height, setHeight] = useState(false)
  const [eyeColor, setEyeColor] = useState(false)
  // const [music, setMusic] = useState('')
  // const [quote, setQuote] = useState('')
  // const [insult, setInsult] = useState('')

  return (
    <div className="complete-page">
      <h1>Make a Character</h1>
      <form>
        <p>Type Character Name to Submit</p>
        <div className="name-input">
          <input
            type="text"
            name="name"
            placeholder="Character Name Here"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </div>
        <div className="container">
          <div className="character-creation">
            <label htmlFor="birthplace">Birthplace</label>
            <input type="checkbox" name="birthplace" checked={ birthplace } onChange={ (e) => setBirthplace(!birthplace) } />
          </div>
          <div className="character-creation">
            <label htmlFor="residence">Current City</label>
            <input type="checkbox" name="residence" checked={ residence } onChange={ (e) => setResidence(!residence) } />
          </div>
          <div className="character-creation">
            <label htmlFor="job">Job</label>
            <input type="checkbox" name="job" checked={ job } onChange={ (e) => setJob(!job) } />
          </div>
          <div className="character-creation">
            <label htmlFor="height">Height</label>
            <input type="checkbox" name="height" checked={ height } onChange={ (e) => setHeight(!height) } />
          </div>
          <div className="character-creation">
            <label htmlFor="eyeColor">Eye Color</label>
            <input type="checkbox" name="eyeColor" checked={ eyeColor } onChange={ (e) => setEyeColor(!eyeColor) } />
          </div>
          {/* <div>
            <label htmlFor="music">Favorite Music</label>
            <input type="checkbox" name="music" checked={ music } onChange={ (e) => setMusic(!music) } />
          </div>
          <div>
            <label htmlFor="quote">Favorite Quote</label>
            <input type="checkbox" name="quote" checked={ quote } onChange={ (e) => setQuote(!quote) } />
          </div>
          <div>
            <label htmlFor="insult">Favorite Insult</label>
            <input type="checkbox" name="insult" checked={ insult } onChange={ (e) => setInsult(!insult) } />
          </div> */}
        </div>
      </form>
      <Link to={`/archive`}>
        <div className="submit">
          <button disabled={name.length < 1} onClick={ () => {
              const settings = {
                shouldIncludeBirthplace: birthplace,
                shouldIncludeJob: job,
                shouldIncludeResidence: residence,
                shouldIncludeHeight: height,
                shouldIncludeEyeColor: eyeColor
              }
              props.onCharacterSubmitted(name, settings) 
          }}>
            Submit
          </button>
        </div>
      </Link>
    </div>
  )
}
