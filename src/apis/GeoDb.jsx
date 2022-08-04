//versi dts
import axios from "axios";

const GeoDbAPI = axios.create({
	baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
	headers: {
		"X-RapidAPI-Key": "9c5ca593bdmsh34c33ef5d35bd58p142d78jsnc7709a6f6ea7",
		"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
	},
	params: {
		countryIds: "ID",
		minPopulation: 2000000,
	},
});

export default GeoDbAPI;
//versi tutorial
// export const GeoDbAPI = {
// 	method: "GET",
// 	headers: {
// 		"X-RapidAPI-Key": "9c5ca593bdmsh34c33ef5d35bd58p142d78jsnc7709a6f6ea7",
// 		"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
// 	},
// };
// export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
// export const WEATHER_API_KEY = ""; // enter your key from openweather API
