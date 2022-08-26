import axios from 'axios'

export async function search_product(value='') {

    const data = await axios.get(`http://35.162.175.220:8000/scraping/${value}/`)

    return data

}


