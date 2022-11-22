import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
					<Route path="/" excat element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/products" element={<Products />} />
					<Route path="/SignUp" element={<SignUp />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
