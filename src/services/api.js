import axios from "axios"

const api = axios.create({
    baseURL: "https://brapi.dev/api/"
    //  https://brapi.dev/api/quote/{tickers}
});

export default api;

//import axios from "axios";

//const api = axios.create({
//    baseURL: "http://rickandmortyapi.com/api/"
//});

//export default api;

