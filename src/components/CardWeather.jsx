import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../apis/OpenWeather"

export default function CardWeather(city) {
	// const theme = useTheme();
	const loc = city.city.city;
	// console.log(loc);
	const [data, setData] = useState({});
	// const [location, setLocation] = useState(loc);

	const WEATHER_URL = `${WEATHER_API_URL}/weather?q=${loc}&appid=${WEATHER_API_KEY}`

	useEffect(() => {
		const fetchDataWeather = async () => {
			try {
				const responseOpenWeather = await axios.get(WEATHER_URL);
				// console.log(responseOpenWeather);
				setData(responseOpenWeather.data);
				// console.log(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchDataWeather();
	}, [WEATHER_URL]);


	return (
		<>
			<Link to="/detail" style={{ textDecoration: 'none', color: '#fff' }} >
				<Card sx={{
					display: "flex",
					flexDirection: "colomn",
					justifyContent: "space-between",
					width: "400px",
					color: "#fff",
					backgroundColor: "#5F9EA0",
					borderRadius: "6px",
					margin: "20px auto 0 auto",
					padding: "0 20px 20px 20px",
					// boxShadow: "10px -2px 20px 2px rgb(0 0 0 / 30%)",
				}}>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<CardContent sx={{ flex: "1 0 auto" }}>
							<Typography component="div" variant="h5">
								{/* {loc} */}
								{data.name}
								{/* Magelang */}
							</Typography>
							<Typography
								variant="subtitle1"
								// color="text.secondary"
								component="div"
							>
								{data.weather ? data.weather[0].description : null}
								{/* Sunny */}
							</Typography>
						</CardContent>
					</Box>
					<CardMedia
						component="img"
						sx={{ maxWidth: 80 }}
						image={`/icons/${data.weather ? data.weather[0].icon : null}.png`}
						// alt="Sunny"
						alt={data.weather ? data.weather[0].main : null}
					/>
				</Card>
			</Link>
		</>
	);
}
