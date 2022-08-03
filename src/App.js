// import './App.css';

// import { Box } from "@mui/material";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/NavBar";
import { Outlet } from "react-router";
// import Home from "./containers/Home";

function App() {
	return (
		<div className="App">
			<ResponsiveAppBar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
