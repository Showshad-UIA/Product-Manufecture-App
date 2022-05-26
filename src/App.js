import "./App.css";
import NavBar from "./Pages/Shared/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Blog from "./Pages/Blog/Blog";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Order from "./Pages/Order/Order";
import Footer from "./Pages/Shared/Footer/Footer";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
	return (
		<div>
			<NavBar></NavBar>

			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="about" element={<About />}></Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
				<Route path="/blog" element={<Blog></Blog>}></Route>
				<Route path="/order" element={<Order></Order>}></Route>
				<Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
				<Route path="/" element={<SignUp></SignUp>}></Route>

				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
