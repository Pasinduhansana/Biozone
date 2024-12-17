import { useState } from "react";
import "./App.css";
import FAQ from "./Components/FAQ";
import Landing from "./Components/Landing";
import ContactUs from "./Components/ContactUs";

function App() {
	return (
		<div className="App bg-primarybg text-primarytext">
			{/* <Landing />
			<FAQ /> */}
			<ContactUs/>
		</div>
	);
}
export default App;
