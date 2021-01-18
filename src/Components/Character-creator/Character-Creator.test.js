import { screen, render, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom"
import CharacterCreator from "../Character-Creator/Character-Creator"
import { MemoryRouter, Router } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

describe('Character Creator', () => {
  it('should render the Character Creator page correctly', () => {
    render(
      <MemoryRouter>
        <CharacterCreator onCharacterSubmitted={ (name, settings) => this.handleCharacterSubmitted(name, settings) } />
      </MemoryRouter>
    )

    // const homeBtn = screen.getByText('Home')
    const header = screen.getByText('Make a Character')
    const birthplace = screen.getByText('Birthplace')
    expect(header).toBeInTheDocument()
    expect(birthplace).toBeInTheDocument()
  }),

  it('should route to archive correctly', async () => {
    const mockHandleCharacterSubmitted = jest.fn()
    const history = createMemoryHistory()
    render(
      <Router history={ history }>
        <CharacterCreator onCharacterSubmitted={ mockHandleCharacterSubmitted } />
      </Router>
    )
    const nameInput = screen.getByPlaceholderText('Character Name Here')
    userEvent.type(nameInput, 'Samantha')
    const submitBtn = screen.getByText('Submit')
    userEvent.click(submitBtn)
    await waitFor(() => expect(history.location.pathname).toBe('/archive'))
  }),

  it('should not route anywhere if name field is empty', async () => {
    const mockHandleCharacterSubmitted = jest.fn()
    const history = createMemoryHistory()
    render(
      <Router history={ history }>
        <CharacterCreator onCharacterSubmitted={ mockHandleCharacterSubmitted } />
      </Router>
    )
    const nameInput = screen.getByPlaceholderText('Character Name Here')
    userEvent.type(nameInput, '')
    const submitBtn = screen.getByText('Submit')
    userEvent.click(submitBtn)
    await waitFor(() => expect(history.location.pathname).toBe('/'))
  })
})