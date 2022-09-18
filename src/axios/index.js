import axios from "axios";
import config from "../congif";


export default axios.create({
	baseURL: config.API_URL,
});