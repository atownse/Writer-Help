import React, { Component } from 'react'
import Card from '../Card/Card'

class Archive extends Component {

  createCharacterCards(cards) {
    let characters = cards.map(card => {
      return (
        <Card
          key={ card.id }
          id={ card.id }
          name={ card.name }
          job={ card.job }
          birthplace={ card.birthplace }
          residence={ card.residence }
          height={ card.height } 
          eyeColor={ card.eyeColor } 
          music={ card.music } 
          quote={ card.quote } 
          insult={ card.insult } 
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
          <button>Home</button>
          <h1>Saved Characters</h1>
          <button>Create New Character</button>
        </div>
        <div>
          { characterCards }
        </div>
      </div>
    )
  }
}

export default Archive
