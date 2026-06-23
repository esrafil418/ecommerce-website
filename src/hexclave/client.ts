import { HexclaveClientApp } from "@hexclave/react";

const projectId = import.meta.env.VITE_STACK_PROJECT_ID;
const publishableClientKey = import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY;
if (!projectId || !publishableClientKey) {
	throw new Error(
		"Missing Hexclave configuration: VITE_STACK_PROJECT_ID and VITE_STACK_PUBLISHABLE_CLIENT_KEY are required.",
	);
}
export const hexclaveClientApp = new HexclaveClientApp({
	projectId,
	publishableClientKey,
	tokenStore: "cookie",
});
