import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4v-JdFJVZ1hl-t5crPi2L4Ujv04CxNEPdftlsBQ7VM0'
    }
});