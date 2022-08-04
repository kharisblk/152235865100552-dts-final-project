import * as React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
// import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Forecast() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const city = "Magelang";
    const [data, setData] = useState({});
    // const [location, setLocation] = useState(loc);

    // const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=92be1b944686b352e3faab12256e4b4b&units=metric`
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=92be1b944686b352e3faab12256e4b4b&units=metric`


    useEffect(() => {
        const fetchDataForecast = async () => {
            try {
                const responseForecast = await axios.get(WEATHER_URL);
                // console.log(responseForecast);
                setData(responseForecast.data);
                // console.log(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchDataForecast();
    }, []);

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    return (
        <div>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
                {data.list.splice(0, 7).map((item, idx) => (
                    < Accordion key={idx} expanded={expanded === 'panel2'
                    } onChange={handleChange('panel2')} >
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <div sx={{
                                height: "40px",
                                margin: "5px",
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: "14px",
                                padding: "5px 20px",
                            }}>
                                <CardMedia
                                    component="img"
                                    sx={{ maxWidth: 40 }}
                                    // image="/icons/01d.png"
                                    image={`icons/${item.weather[0].icon}.png`}
                                    alt="Sunny"
                                // alt={data.weather ? data.weather[0].main : null}
                                />
                                <Typography style={{ fontWeight: 600 }} sx={{ flex: "1 1", ml: "15px" }}>
                                    {/* Monday */}
                                    {forecastDays[idx]}
                                </Typography>
                                <Typography style={{ fontWeight: 600 }} sx={{ flex: "1 1", mr: "15px", textAlign: "right" }}>
                                    {/* Sunny */}
                                    {item.weather[0].description}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {/* 18°C / 24°C */}
                                    {Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C
                                </Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div sx={{
                                gridRowGap: "0",
                                gridColumnGap: "15px",
                                webkitColumnGap: "15px",
                                columnGap: "15px",
                                display: "grid",
                                flex: "1 1",
                                gridTemplateColumns: "auto auto",
                                padding: "5px 15px",
                                rowGap: "0",
                            }}>
                                <div sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "space-between",
                                }}>
                                    <Typography sx={{ color: "#757575" }}> Fell Like : </Typography>
                                    <Typography sx={{ color: "#212121" }}> {item.main.feels_like}°C</Typography>
                                </div>

                                <div sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "space-between",
                                }}>
                                    <Typography sx={{ color: "#757575" }}> Humidity : </Typography>
                                    <Typography sx={{ color: "#212121" }}> {item.main.humidity}</Typography>
                                </div>
                                <div sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "space-between",
                                }}>
                                    <Typography sx={{ color: "#757575" }}> Pressure :</Typography>
                                    <Typography sx={{ color: "#212121" }}> {item.main.pressure}</Typography>
                                </div>
                                <div sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "space-between",
                                }}>
                                    <Typography sx={{ color: "#757575" }}> Wind Speed: </Typography>
                                    <Typography sx={{ color: "#212121" }}> {item.wind.speed} m/s</Typography>
                                </div>
                                <div sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "space-between",
                                }}>
                                    <Typography sx={{ color: "#757575" }}> Cloud : </Typography>
                                    <Typography sx={{ color: "#212121" }}> {item.clouds.all}%</Typography>
                                </div>
                                <div sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    height: "30px",
                                    justifyContent: "space-between",
                                }}>
                                    <Typography sx={{ color: "#757575" }}> Sea Level : </Typography>
                                    <Typography sx={{ color: "#212121" }}> {item.main.sea_level}m</Typography>
                                </div>

                            </div>
                        </AccordionDetails>
                    </Accordion >
                ))}
            </Accordion>
        </div >
    );
}
