import { useState } from "react";
import "./App.css";
import FAQ from "./Components/FAQ";
import Landing from "./Components/Landing";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";

function App() {
	return (
		<div className="App bg-primarybg text-primarytext">
			{/* <Landing />
			<FAQ /> */}
			{/* <ContactUs/> */}
			<AboutUs/>
		</div>
	);
}
export default App;
