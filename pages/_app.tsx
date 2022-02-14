import UserContextProvider from "@contexts/userContext";
import type { AppProps } from "next/app";
import "@styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserContextProvider>
			<Component {...pageProps} />
		</UserContextProvider>
	);
}

export default MyApp;
