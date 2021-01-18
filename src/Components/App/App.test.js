import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"
import App from "../App/App"
import { MemoryRouter, Router } from "react-router-dom"
import { createMemoryHistory } from 'history'
import api from '../../utils/api'
jest.mock('../../utils/api')

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
  }),

  it('should be able to create a new character', async () => {
    const history = createMemoryHistory()
    const randomPerson = {data: {"person":{"education":{"certificate":"Diploma","university":"Stanford University"},"marriage":{"children":3,"married":true,"spouse_name":"Elyse"},"online_info":{"email":"ww6w2g@yahoo.com","ip_address":"65.163.218.7","ipv6_address":"6c0e:6d06:0b43:5044:cd24:5a6d:11a8:e360","password":"Zh4Jj1k8Ua","password_md5":"a4c7c4503402dfa8be104cc4b47a8c5d","user_agent":"Opera/9.80 (Windows NT 6.1; U; Edition Campaign 09; ru) Presto/2.10.229 Version/11.60","username":"i32hef"},"personal":{"age":40,"blood":"AB+","born":null,"born_place":"Venice","cellphone":"+18740120","city":"Tehran","country":"Sweden","eye_color":"Gray","father_name":"Drusy","gender":"Male","height":"1.33","last_name":"Stephens","name":"Jessamine","national_code":"6314306159","religion":"Hindu","system_id":"5bb4aac6-048e-4c01-ae9c-881b00d37800","weight":47},"work":{"country_code":"FR","insurance":false,"position":"Graphist","salary":"$8.100"}}}}
    api.getRandomPerson.mockResolvedValueOnce(randomPerson)
    render(
      <Router history={ history }>
        <App />
      </Router>
    )
    
    const newCharacterBtn = screen.getByText('Create a Character')
    userEvent.click(newCharacterBtn)
    
    const nameInput = screen.getByPlaceholderText('Character Name Here')
    userEvent.type(nameInput, 'Brad')
    const birthplaceBox = await waitFor(() => screen.getByText('Birthplace'))
    userEvent.click(birthplaceBox)
    const submitBtn = await waitFor(() => screen.getByText('Submit'))
    userEvent.click(submitBtn)
    
    const bornPlace = await waitFor(() => screen.getByText('Birthplace: Venice'))
    expect(bornPlace).toBeInTheDocument()
  })
})