import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from "@mui/material/Stack";
import GeoDbAPI from '../apis/GeoDb';


export default function CitySelect() {
    const [dataCity, setDataCity] = useState(['Jakarta']);
    useEffect(() => {
        const fetchDataCity = async () => {
            try {
                const responseDariGeoDb = await GeoDbAPI.get("/cities");
                console.log(responseDariGeoDb);
                setDataCity(responseDariGeoDb.data.data);
                // console.log(cities);
            } catch (err) {
                console.log(err);
            }
        };
        fetchDataCity();
    }, []);
    return (
        <Stack>
            <Autocomplete
                id="city-select"
                sx={{ width: 500 }}
            // getOptionLabel={(dataCity) => `${dataCity.city.city}`}
            // options={dataCity.city.city}
            // autoHighlight
            // isOptionEqualToValue={(option, value) => option.city === value.city}
            // noOptionsText=" No Available Data "
            // renderOption={(props, dataCity) => (
            //     <Box component="li" {...props} key={dataCity.city.id} >
            //         {dataCity.city}
            //     </Box>
            // )}
            // renderInput={(params) => <TextField {...params} label="Search City" />}
            //Versi AutoComplete
            // getOptionLabel={(option) => option.label}
            // renderOption={(props, option) => (
            //     <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            //         <img
            //             loading="lazy"
            //             width="20"
            //             src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            //             srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            //             alt=""
            //         />
            //         {option.label} ({option.code}) +{option.phone}
            //     </Box>
            // )}
            // renderInput={(params) => (
            //     <TextField
            //         {...params}
            //         label="Choose a country"
            //         inputProps={{
            //             ...params.inputProps,
            //             autoComplete: 'new-password', // disable autocomplete and autofill
            //         }}
            //     />
            // )}
            />
        </Stack >
    );
}

