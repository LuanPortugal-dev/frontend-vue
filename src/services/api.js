import axios from 'axios'

export async function search_product(value='') {

    const data = await axios.get(`http://18.237.43.245:8000/scraping/${value}/`)

    return data

}


