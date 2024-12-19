import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import Advertisement from "./Components/Advertisement";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Admin/Login";
import PrivateRoute from "./Utils/PrivateRoute";
import Map from "./Components/Map";

function App() {
	return (
		<BrowserRouter>
			<Toaster position="top-center" containerStyle={{ top: 60 }} />

			<div className="App bg-primarybg text-primarytext">
				<Routes>
					<Route path="/" element={
						<>
							<Map />
							<Advertisement />
						</>
					} />

					{/* Admin Routes */}
					<Route path="/admin" element={<Login />} />
					<Route element={<PrivateRoute />} >
						<Route path="/admin/dashboard" element={<Admin />} />
					</Route>

					<Route path="*" element={<><div className="flex justify-center items-center h-screen">
						<h1 className="text-1xl font-thin font-mono">404 - Page Not Found</h1>
					</div></>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
export default App;
