import { Box } from "@mui/material";
import React from "react";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../authentication/Firebase';
// import CardWeatherDetail from "../components/CardWeatherDetail";
import CitySelect from "../components/CitySelect";


const Home = () => {
    // const user = useAuthState(auth);
    // console.log(user);
    // const city = "Jakarta";
    return (

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: "20px", gap: 2 }}>
            <CitySelect />
            {/* <CardWeatherDetail city={city} /> */}
        </Box>
    )
}
export default Home;