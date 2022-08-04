import { Box } from "@mui/material";
import React from "react";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../authentication/Firebase';
import CardWeatherDetail from "../components/CardWeatherDetail";
// import Forecast from "../components/Forecast";
import CountrySelect from "../components/SelectCountry";
// import CitySelect from "../components/CitySelect";
const Detail = () => {
    // const user = useAuthState(auth);
    // console.log(user);
    const city = "Bandung";
    return (

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: "20px", gap: 2 }}>
            {/*<CitySelect /> */}
            <CountrySelect />
            <CardWeatherDetail city={city} />
            {/* <Forecast city={city} /> */}
        </Box>
    )
}
export default Detail;