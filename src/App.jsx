import { useState } from "react";
import "./App.css";
import FAQ from "./Components/FAQ";
import Landing from "./Components/Landing";

function App() {
	return (
		<div className="App bg-primarybg text-primarytext">
			<Landing />
			<FAQ />
		</div>
	);
}
export default App;
