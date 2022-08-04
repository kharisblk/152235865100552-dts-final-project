import React, { useState } from "react";
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import CardWeatherDetail from "../components/CardWeatherDetail";
// import Forecast from "../components/Forecast";
// import CountrySelect from "../components/SelectCountry";
// import CitySelect from "../components/CitySelect";
const Detail = () => {
    // const user = useAuthState(auth);
    // const [data, setData] = useState({})
    const [location, setLocation] = useState("Bandung");
    // console.log(user);


    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            setLocation('')
        }
    }

    return (

        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: "20px",
            gap: 2,
        }}>
            {/*<CitySelect /> */}
            <TextField
                id="outlined-basic"
                label="Type City"
                variant="outlined"
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter Location'
                type="text"
                backgroundColor="#F0F0F0"
            />
            {/* <CountrySelect /> */}
            <CardWeatherDetail city={location} />
            {/* <Forecast city={city} /> */}
        </Box>
    )
}
export default Detail;