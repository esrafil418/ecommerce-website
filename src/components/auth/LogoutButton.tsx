import { useHexclaveApp } from "@hexclave/react";
import { useState } from "react";

export default function LogoutButton() {
	const app = useHexclaveApp();
	const [isLoggingOut, setIsLoggingOut] = useState(false);

	const handleLogout = async () => {
		setIsLoggingOut(true);
		try {
			await app.signOut();
			window.location.href = "/";
		} catch (error) {
			console.error("Logout error:", error);
			alert("Failed to logout. Please try again.");
		} finally {
			setIsLoggingOut(false);
		}
	};

	return (
		<button
			type="button"
			onClick={handleLogout}
			disabled={isLoggingOut}
			className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
		>
			{isLoggingOut ? "Logging out..." : "Logout"}
		</button>
	);
}
