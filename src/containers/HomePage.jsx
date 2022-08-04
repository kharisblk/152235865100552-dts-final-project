import React from "react";
import { useEffect, useState } from "react";
import GeoDbAPI from "../apis/GeoDb";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardWeather from "../components/CardWeather";
// import Detail from "./Detail";
const HomePage = () => {
	const [cities, setCities] = useState([]);
	useEffect(() => {
		const fetchDataCity = async () => {
			try {
				const responseDariGeoDb = await GeoDbAPI.get("/cities");
				// console.log(responseDariGeoDb);
				setCities(responseDariGeoDb.data.data);
				// console.log(cities);
			} catch (err) {
				console.log(err);
			}
		};
		fetchDataCity();
	}, []);
	return (
		<Box>
			<Typography variant="h4" align="center">Indonesian's Weather App </Typography>
			{cities.map((city) => {
				return <CardWeather city={city} />
			})}
			{/*<Detail /> */}
		</Box>

	)
};

export default HomePage;
