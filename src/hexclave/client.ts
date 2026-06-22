import { HexclaveClientApp } from "@hexclave/react";

export const hexclaveClientApp = new HexclaveClientApp({
	projectId: import.meta.env.VITE_STACK_PROJECT_ID,
	publishableClientKey: import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY,
	tokenStore: "cookie",
});
