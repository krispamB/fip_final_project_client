import axios from 'axios'
import { BASE_URL } from '../constants'

export const listUsers = async () => {
  try {
    const base_url = BASE_URL + '/users'

    const { data } = await axios.get(base_url)

    return data
  } catch (error) {
    console.log(error)
  }
}
