// src/App.tsx
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import {
	HexclaveHandler,
	HexclaveProvider,
	HexclaveTheme,
} from "@hexclave/react";
import { hexclaveClientApp } from "./hexclave/client";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Checkout from "./pages/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";

function HandlerRoutes() {
	return (
		<HexclaveHandler
			app={hexclaveClientApp}
			location={window.location.pathname}
			fullPage
		/>
	);
}

export default function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<HexclaveProvider app={hexclaveClientApp}>
					<HexclaveTheme>
						<div className="min-h-screen flex flex-col">
							<Navbar />
							<Routes>
								<Route path="/handler/*" element={<HandlerRoutes />} />
								<Route path="/" element={<Home />} />
								<Route path="/auth" element={<Auth />} />
								<Route path="/checkout" element={<Checkout />} />
							</Routes>
						</div>
					</HexclaveTheme>
				</HexclaveProvider>
			</BrowserRouter>
		</Suspense>
	);
}
