import { screen, render } from '@testing-library/react'
import "@testing-library/jest-dom"
import Error from "../Error/Error"
import { MemoryRouter } from 'react-router-dom'


describe('Error', () => {
  it('should render the Error page', ()=> {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    )
    const header = screen.getByText('No Ideas Here, Partner')
    expect(header).toBeInTheDocument()
  })
})