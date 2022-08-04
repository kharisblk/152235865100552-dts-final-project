import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../apis/OpenWeather"

export default function CardWeatherDetail({ city }) {
    // const theme = useTheme();
    // console.log(city);
    // const city = "bandung";
    // const kota = city;
    const [data, setData] = useState({});
    // const [location, setLocation] = useState(loc);

    const WEATHER_URL = `${WEATHER_API_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    // const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=bandung&appid=92be1b944686b352e3faab12256e4b4b&units=metric`

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
        // <Box>
        <Card sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            aligItem: "center",
            width: "500px",
            color: "#fff",
            backgroundColor: "#808080",
            borderRadius: "6px",
            margin: "0 auto 0 auto",
            padding: "0 20px 5px 20px",
            // boxShadow: "10px -2px 20px 2px rgb(0 0 0 / 30%)",
        }}>
            {/* <Box sx={{ display: "flex" }}> */}
            < Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
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
                    // image="/icons/02d.png"
                    image={`/icons/${data.weather ? data.weather[0].icon : null}.png`}
                    alt={data.weather ? data.weather[0].description : null}
                />
            </Box >

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Box>
                    <Typography variant="h1" style={{ fontWeight: 600 }} sx={{ flex: "1 0 auto" }}>
                        {Math.round(data.main ? data.main.temp : null)}°C
                        {/* 24°C */}
                    </Typography>
                </Box>
                <Box >
                    <Typography variant="body1" style={{ fontWeight: 600 }} sx={{
                        flex: "1 0 auto",
                        textDecoration: 'underline'
                    }}>
                        Detail
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography variant="body2" sx={{ flex: "1 0 auto", textAlign: "left", mr: 2 }}>
                            Feels Like
                        </Typography>
                        <Typography variant="body2" sx={{ flex: "1 0 auto", textAlign: "right" }}>
                            {Math.round(data.main ? data.main.feels_like : null)}°C
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography variant="body2" sx={{ flex: "1 0 auto", textAlign: "left", mr: 2 }}>
                            Wind
                        </Typography>
                        <Typography variant="body2" sx={{ flex: "1 0 auto", textAlign: "right" }}>
                            {data.wind ? data.wind.speed : null}  m/s
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space- between" }}>
                        <Typography variant="body2" sx={{ flex: "1 0 auto", textAlign: "left", mr: 2 }}>
                            Humidity
                        </Typography>
                        <Typography variant="body2" sx={{ flex: "1 0 auto", textAlign: "right" }}>
                            {data.main ? data.main.humidity : null} %
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography variant="body2" sx={{ flex: "1 0 auto", textAlign: "left", mr: 2 }}>
                            Pressure
                        </Typography>
                        <Typography variant="body2" sx={{ flex: "1 0 auto", textAlign: "right" }}>
                            {data.main ? data.main.pressure : null} hPa
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Card >
    );
}
