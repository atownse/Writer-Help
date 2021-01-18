import axios from "axios"

const api = {
  getRandomPerson: async () => {
    return await axios.get('https://cors-anywhere.herokuapp.com/https://pipl.ir/v1/getPerson')
  }
}

export default api