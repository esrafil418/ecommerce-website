import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Checkout from "./pages/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";

export default function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
		</div>
	);
}
