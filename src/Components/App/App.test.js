import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"
import App from "../App/App"
import { MemoryRouter } from "react-router-dom"

describe('App', () => {
  it('should route to character creator correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const newCharacterBtn = screen.getByText('Create a Character')
    userEvent.click(newCharacterBtn)
    expect(screen.getByText('Make a Character')).toBeInTheDocument()
  }),

  it('should route to archive correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    
    const archiveBtn = screen.getByText('View Characters')
    userEvent.click(archiveBtn)
    expect(screen.getByText('Saved Characters')).toBeInTheDocument()
  })
})