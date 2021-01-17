import { screen, render } from '@testing-library/react'
import "@testing-library/jest-dom"
import Archive from "../Archive/Archive"
import { MemoryRouter, Link } from "react-router-dom"

describe('Archive', () => {
  it('should render the buttons and header of the archive page', () => {
    render(
      <MemoryRouter>
        <Archive characters={[]} />
      </MemoryRouter>
    )
    
    const homeBtn = screen.getByText('Home')
    const header = screen.getByText('Saved Characters')
    const newCharacterBtn = screen.getByText('Create New Character')

    expect(homeBtn).toBeInTheDocument()
    expect(header).toBeInTheDocument()
    expect(newCharacterBtn).toBeInTheDocument()
  })
})