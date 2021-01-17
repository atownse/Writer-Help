import React, { Component } from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

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
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <h1>Saved Characters</h1>
          <Link to="/character-creator">
            <button>Create New Character</button>
          </Link>
        </div>
        <div>
          { characterCards }
        </div>
      </div>
    )
  }
}

export default Archive
