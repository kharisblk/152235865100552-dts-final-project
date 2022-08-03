import { Box } from "@mui/material";
import React from "react";
import CountrySelect from "../components/AutoComplete";
import Card01 from "../components/Card01";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../authentication/Firebase';


const Home = () => {
    const user = useAuthState(auth);
    console.log(user);
    return (

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: "20px", gap: 2 }}>
            {/* {user ? (
                <CountrySelect />
            ) : (
                "  "
            )} */}
            <CountrySelect />
            <Card01 />
        </Box>
    )
}
export default Home;