import axios  from "axios";

// con axios nos concetamos a la api (npm install axios)
const api = axios.create({
    baseURL:'https://rickandmortyapi.com/api',
});

export default api;