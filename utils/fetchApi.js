import axios from "axios";


export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
        headers: {
            'x-RapidAPI-Key': '3f9134396fmsh9dabd38b59c9144p119fcajsn7a13d84bb9ff',
            'x-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}
