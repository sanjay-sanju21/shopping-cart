import axios from 'axios';
const baseURl = 'https://xebiascart.herokuapp.com/';
const instance = axios.create({ baseURL: baseURl});
export default instance;