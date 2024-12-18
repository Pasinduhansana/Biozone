import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import FAQ from "./Components/FAQ";
import Advertisement from "./Components/Advertisement";
import Admin from "./Pages/Admin/Admin";
import Landing from "./Components/Landing";
import Login from "./Pages/Admin/Login";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";

function App() {
	return (
		// <BrowserRouter>
		// 	<Toaster position="top-center" containerStyle={{ top: 60 }} />

		// 	<div className="App bg-primarybg text-primarytext">
		// 		<Routes>
		// 			<Route path="/" element={<Advertisement />} />

		// 			{/* Admin Routes */}
		// 			<Route path="/admin" element={<Login />} />
		// 			<Route path="/admin/dashboard" element={<Admin />} />
		// 		</Routes>
		// 	</div>

		// </BrowserRouter>
	 <AboutUs/>
	)}
export default App;
