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
    
    // const homeBtn = screen.getByText('Home')
    // const header = screen.getByText('Saved Characters')
    const newCharacterBtn = screen.getByText('Create a Character')
    userEvent.click(newCharacterBtn)
    expect(screen.getByText('Make a Character')).toBeInTheDocument()

    // expect(homeBtn).toBeInTheDocument()
    // expect(header).toBeInTheDocument()
    // expect(newCharacterBtn).toBeInTheDocument()
  }),

  it('should route to character creator correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    
    // const homeBtn = screen.getByText('Home')
    // const header = screen.getByText('Saved Characters')
    const archiveBtn = screen.getByText('View Characters')
    userEvent.click(archiveBtn)
    expect(screen.getByText('Saved Characters')).toBeInTheDocument()
    // expect(homeBtn).toBeInTheDocument()
    // expect(header).toBeInTheDocument()
    // expect(newCharacterBtn).toBeInTheDocument()
  })
})