import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchApi = async () => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        const processedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return processedData;
        // console.log(response)
    } catch (e) {
        
    }
} 