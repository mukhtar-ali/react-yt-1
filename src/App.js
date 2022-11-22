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
			<Router basename={window.location.pathname || ""}>
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
