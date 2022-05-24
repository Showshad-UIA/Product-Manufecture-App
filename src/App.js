import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Pages/Shared/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";

function App() {
	return (
		<div>
			<NavBar></NavBar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="/login" element={<Login></Login>}></Route>
			</Routes>
		</div>
	);
}

export default App;
