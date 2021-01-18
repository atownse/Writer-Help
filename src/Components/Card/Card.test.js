import { screen, render } from '@testing-library/react'
import "@testing-library/jest-dom"
import Card from "../Card/Card"

describe('Card', () => {
  it('should render a card', ()=> {
    render(
    <Card 
      key={ Math.floor(Math.random() * 1000) }
      id={ 33333333 }
      name={ 'Brosifski' }
      job={ 'Lion Tamer' }
      birthplace={ 'the moon' }
      residence={ 'Mars' }
      height={ '1.78' } 
      eyeColor={ 'yellow' } 
    />
    )
    const name = screen.getByText('Brosifski')
    expect(name).toBeInTheDocument()
  })
})