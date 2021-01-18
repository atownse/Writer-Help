import { screen, render, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom"
import Archive from "../Archive/Archive"
import { MemoryRouter, Router } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

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
  }),

  it('should route to character creator correctly', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={ history }>
        <Archive characters={[]}/>
      </Router>
    )
    
    const newCharacterBtn = screen.getByText('Create New Character')
    userEvent.click(newCharacterBtn)
    await waitFor(() => expect(history.location.pathname).toBe('/character-creator'))
  }),

  it('should route to home correctly', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={ history }>
        <Archive characters={[]}/>
      </Router>
    )

    const homeBtn = screen.getByText('Home')
    userEvent.click(homeBtn)
    await waitFor(() => expect(history.location.pathname).toBe('/'))
  })
})