import React, { Component } from 'react'
import Card from '../Card/Card'

class Archive extends Component {
  constructor() {
    super()
    this.state = {
      characters: [
        {
          name: "johnny boy",
          birthplace: "the moon",
          residence: "Canada",
          job: "Librarian",
          height: '5\'6',
          eyeColor: 'yellow',
          music: 'ukulele-rock',
          quote: 'to be or not to be, that is the question',
          insult: 'eat a bag of dicks',
          id: 934719837
        },
        {
          name: "not johnny boy",
          birthplace: "Lake Tahoe",
          residence: "Australia",
          height: '7\'2',
          id: 2736419346
        }
      ]
    }
  }

  createCharacterCards(cards) {
    let characters = cards.map(card => {
      return (
        <Card
          id = { card.id }
          name = { card.name }
          job = { card.job }
          residence = { card.residence } 
        />
      )
    })
    return characters
  }

  render() {  
    let characterCards = this.createCharacterCards(this.state.characters)
    return (
      <div>
        <h1>Saved Characters</h1>
        <div>
          { characterCards }
        </div>
      </div>
    )
  }
}

export default Archive
