import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function Card01() {
    // const theme = useTheme();

    return (
        <>
            <Link to="/detail" style={{ textDecoration: 'none', color: '#fff' }}>
                <Box>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Live From Space
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Mac Miller
                                </Typography>
                            </CardContent>

                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="http://placekitten.com/300"
                            alt="Live from space album cover"
                        />
                    </Card>
                </Box>
            </Link>
        </>
    );
}
