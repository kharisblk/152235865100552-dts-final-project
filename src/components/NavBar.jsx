import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../authentication/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const pages = ['Home', 'Detail', 'Contact Us'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/signin");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar alt="User" src="/images/weather.webp" href="/home" width="300px" sx={{ display: { xs: 'none', md: 'flex' }, mr: 4 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography href={`/${page}`.replace(/ /g, '').toLowerCase()} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Avatar alt="User" src="/images/weather.webp" href="/home" width="300px" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                href={`/${page}`.replace(/ /g, '').toLowerCase()}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>


                    <Box sx={{ flexGrow: "1 1", mr: 3 }}>
                        <Search sx={{ maxWidth: "300px", borderRadius: 5 }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                    </Box>
                    <Box>
                        {loading ? (
                            <Typography
                                padding="0.5"
                                borderRadius="5px"
                                fontSize="1rem"
                            >
                                Loading user ...
                            </Typography>
                        ) : error ? (
                            <Typography
                                padding="0.5"
                                borderRadius="5px"
                            >
                                error
                            </Typography>
                        ) : user ? (
                            <Box sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                mr: 3,
                                gap: 2
                            }}>
                                <Box>
                                    <Typography color="inherit" sx={{ mr: 2 }}>{user?.email}</Typography>
                                </Box>
                                <Box sx={{ flexGrow: 0 }}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="User" src="/images/Av04.jpg" />
                                    </IconButton>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {/* {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))} */}
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center" onClick={onLogout}>Logout</Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>

                            </Box>
                        ) : (
                            <Box sx={{
                                display: "flex",
                                flexDirection: "row",
                                mr: 3,
                                gap: 2
                            }}>
                                <Typography>
                                    <Button
                                        sx={{
                                            color: "white",
                                            bgcolor: "#bf0000",
                                            width: "100px",
                                            borderRadius: "20px",
                                            dropShadow: "10px 10px 20px 20px rgb(0 0 0 / 20%)",

                                        }}
                                        onClick={() => {
                                            navigate("/signin");
                                        }}
                                    >
                                        Sign In
                                    </Button>
                                </Typography>
                            </Box>
                        )}

                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    );
};
export default ResponsiveAppBar;
