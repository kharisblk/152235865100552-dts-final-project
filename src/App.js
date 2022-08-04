// import './App.css';

import { Box } from "@mui/material";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/NavBar";
import { Outlet } from "react-router";
// import Home from "./containers/Home";

function App() {
	return (
		<div className="App">
			<ResponsiveAppBar />
			<Outlet />
			<Box
				sx={{
					mt: 80,
					buttom: 0,
					left: 0,
					right: 0,
				}}
			>
				<Footer props={("WeatherApp", "Kharis")} />
			</Box>
		</div>
	);
}

export default App;
