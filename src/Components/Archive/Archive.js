import React, { Component } from 'react'
import './Archive.css'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Archive extends Component {

  createCharacterCards(cards) {
    let characters = cards.map(card => {
      return (
        <Card
          key={ Math.floor(Math.random() * 1000) }
          id={ card.id }
          name={ card.name }
          job={ card.job }
          birthplace={ card.birthplace }
          residence={ card.residence }
          height={ card.height } 
          eyeColor={ card.eyeColor } 
        />
      )
    })
    return characters
  }

  render() {  
    // console.log('props characters', this.props.characters)
    // console.log('state characters', this.state.characters)
    let characterCards = this.createCharacterCards(this.props.characters)
    return (
      <div>
        <div className="header center">
          <h1>Saved Characters</h1>
        </div>
        <div className="archive-header">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/character-creator">
            <button>Create New Character</button>
          </Link>
        </div>
        <div className="character-container">
          { characterCards }
        </div>
      </div>
    )
  }
}

export default Archive

Archive.propTypes = {
  characters: PropTypes.array
}