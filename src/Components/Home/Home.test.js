import { screen, render, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom"
import Home from "../Home/Home"
import { MemoryRouter, Router } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

describe('Home', () => {
  it('should render the buttons and header of the Home page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    const archiveBtn = screen.getByText('View Characters')
    const header = screen.getByText('Howdy, Writer')
    const newCharacterBtn = screen.getByText('Create a Character')

    expect(archiveBtn).toBeInTheDocument()
    expect(header).toBeInTheDocument()
    expect(newCharacterBtn).toBeInTheDocument()
  }),

  it('should route to character creator correctly', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={ history }>
        <Home />
      </Router>
    )
    
    const newCharacterBtn = screen.getByText('Create a Character')
    userEvent.click(newCharacterBtn)
    await waitFor(() => expect(history.location.pathname).toBe('/character-creator'))
  }),

  it('should route to archive correctly', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={ history }>
        <Home />
      </Router>
    )

    const archiveBtn = screen.getByText('View Characters')
    userEvent.click(archiveBtn)
    await waitFor(() => expect(history.location.pathname).toBe('/archive'))
  })
})