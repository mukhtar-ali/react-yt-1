import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
	return (
		<>
			<Router basename={"/react-yt-1"}>
				<Navbar />
				<Routes>
					<Route
						path={`${process.env.PUBLIC_URL}/`}
						excat
						element={<Home />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/services`}
						element={<Services />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/products`}
						element={<Products />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/SignUp`}
						element={<SignUp />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
