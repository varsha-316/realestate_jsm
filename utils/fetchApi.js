import axios from 'axios' ;

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => 
{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '8679bb1f36msh445bb617a320cd8p1c43fejsn86e3e0799d14',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data;
}

