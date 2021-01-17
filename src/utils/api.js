import axios from "axios"

const api = {
  getRandomPerson: async () => {
    return await axios.get('https://cors-anywhere.herokuapp.com/https://pipl.ir/v1/getPerson')
  },

  getRandomMusic: () => {
    return axios.get('https://binaryjazz.us/genrenator/')
  },

  getRandomQuote: () => {
    return axios.get('http://api.quotable.io/random')
  },

  getRandomInsult: () => {
    return axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
  },
}

export default api